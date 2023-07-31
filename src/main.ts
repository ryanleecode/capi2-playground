import { WellKnownChain } from "@substrate/connect"
import { createClient } from "@unstoppablejs/client"
import { ScProvider } from "@unstoppablejs/sc-provider"
import { Subject } from "rxjs"
import { SystemStorageEntries } from "./translation"

export const polkadotProvider = ScProvider(WellKnownChain.polkadot)

const { chainHead } = createClient(polkadotProvider)

const finalizedBlockHashSubject = new Subject<string>()

const chainHeadFollower = chainHead(true, (event) => {
  switch (event.event) {
    case "finalized":
      for (const finalizedBlockHash of event.finalizedBlockHashes) {
        finalizedBlockHashSubject.next(finalizedBlockHash)
      }
      break
    default:
      break
  }
})

finalizedBlockHashSubject.subscribe(async (blockHash) => {
  const eventsStorageKey = SystemStorageEntries.Events.enc()
  const { values } = await chainHeadFollower.storage(
    blockHash,
    { value: [eventsStorageKey] },
    null,
  )

  console.log(SystemStorageEntries.Events.dec(values[eventsStorageKey]))
})
