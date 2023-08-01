import { WellKnownChain } from "@substrate/connect"
import { createClient } from "@unstoppablejs/client"
import { ScProvider } from "@unstoppablejs/sc-provider"
import { Subject } from "rxjs"
import { type CodecType } from "scale-ts"
import {
  cFrame_systemPhase,
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

  const extrinsics = await chainHeadFollower.body(blockHash)

  const { values } = await chainHeadFollower.storage(
    blockHash,
    { value: [eventsStorageKey] },
    null,
  )

  const transferEvents = SystemStorageEvents
    .dec(values[eventsStorageKey])
    .map(({ event, phase }) => {
      if (
        isApplyExtrinsicPhase(phase)
        && isBalancePalletEvent(event)
        && isBalanceTransferEvent(event.value)
      ) {
        return { event: event.value.value, extrinsic: extrinsics[phase.value] }
      }
    })
    .filter(isDefined)

  console.log("transferEvents", transferEvents)
})

function isDefined<T>(val: T | undefined | null): val is T {
  return val !== undefined && val !== null
}

function isApplyExtrinsicPhase(
  systemPhase: CodecType<typeof cFrame_systemPhase>,
): systemPhase is CodecType<typeof cFrame_systemPhase> & { tag: "ApplyExtrinsic" } {
  return systemPhase.tag === "ApplyExtrinsic"
}

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
