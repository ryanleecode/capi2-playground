import { WellKnownChain } from "@substrate/connect"
import { createClient } from "@unstoppablejs/client"
import { ScProvider } from "@unstoppablejs/sc-provider"
import { fromHex } from "@unstoppablejs/utils"
import * as fs from "node:fs/promises"
import { Subject } from "rxjs"
import { _void, compact, Decoder, Enum, Struct, u32, u8, Vector } from "scale-ts"
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

  /*   console.log(values[eventsStorageKey].slice(0, 10)) */
})
