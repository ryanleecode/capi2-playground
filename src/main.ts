import { WellKnownChain } from "@substrate/connect"
import { createClient } from "@unstoppablejs/client"
import { ScProvider } from "@unstoppablejs/sc-provider"
import { Subject } from "rxjs"
import { type CodecType } from "scale-ts"
import {
  cPallet_balancesPalletEvent,
  cPolkadot_runtimeRuntimeEvent,
  SystemStorageEvents,
} from "./translation"

export const polkadotProvider = ScProvider(WellKnownChain.polkadot)

const { chainHead } = createClient(polkadotProvider)

const finalizedBlockHashSubject = new Subject<string>()

const chainHeadFollower = chainHead(true, (event) => {
  switch (event.event) {
    case "finalized":
      finalizedBlockHashSubject.next(
        event.finalizedBlockHashes[event.finalizedBlockHashes.length - 1],
      )
      break
    default:
      break
  }
})

finalizedBlockHashSubject.subscribe(async (blockHash) => {
  const eventsStorageKey = SystemStorageEvents.enc()
  const { values } = await chainHeadFollower.storage(
    blockHash,
    { value: [eventsStorageKey] },
    null,
  )

  const transferEvents = SystemStorageEvents
    .dec(values[eventsStorageKey])
    .map(({ event }) => event)
    .filter(isBalancePalletEvent)
    .map((event) => event.value)
    .filter(isBalanceTransferEvent)

  console.log("transferEvents", transferEvents)
})

function isBalancePalletEvent(
  runtimeEvent: CodecType<typeof cPolkadot_runtimeRuntimeEvent>,
): runtimeEvent is CodecType<typeof cPolkadot_runtimeRuntimeEvent> & { tag: "Balances" } {
  return runtimeEvent.tag === "Balances"
}

function isBalanceTransferEvent(
  runtimeEvent: CodecType<typeof cPallet_balancesPalletEvent>,
): runtimeEvent is CodecType<typeof cPallet_balancesPalletEvent> & { tag: "Transfer" } {
  return runtimeEvent.tag === "Transfer"
}
