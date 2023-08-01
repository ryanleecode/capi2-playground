import {
  Blake2128Concat,
  Codec,
  compactBn,
  compactNumber,
  Identity,
  lazy,
  Storage,
  Twox64Concat,
} from "@unstoppablejs/substrate-bindings"
import {
  _void,
  bool,
  Bytes,
  Enum,
  str,
  Struct,
  Tuple,
  u128,
  u16,
  u32,
  u64,
  u8,
  Vector,
} from "scale-ts"

const cFrame_systemPhase = Enum({
  ApplyExtrinsic: u32,
  Finalization: _void,
  Initialization: _void,
})

const cSp_weightsWeight_v2Weight = Struct({
  ref_time: compactBn,
  proof_size: compactBn,
})

const cFrame_supportDispatchDispatchClass = Enum({
  Normal: _void,
  Operational: _void,
  Mandatory: _void,
})

const cFrame_supportDispatchPays = Enum({ Yes: _void, No: _void })

const cFrame_supportDispatchDispatchInfo = Struct({
  weight: cSp_weightsWeight_v2Weight,
  class: cFrame_supportDispatchDispatchClass,
  pays_fee: cFrame_supportDispatchPays,
})

const cdc17 = Bytes(4)

const cSp_runtimeModuleError = Struct({ index: u8, error: cdc17 })

const cSp_runtimeTokenError = Enum({
  FundsUnavailable: _void,
  OnlyProvider: _void,
  BelowMinimum: _void,
  CannotCreate: _void,
  UnknownAsset: _void,
  Frozen: _void,
  Unsupported: _void,
  CannotCreateHold: _void,
  NotExpendable: _void,
  Blocked: _void,
})

const cSp_arithmeticArithmeticError = Enum({
  Underflow: _void,
  Overflow: _void,
  DivisionByZero: _void,
})

const cSp_runtimeTransactionalError = Enum({
  LimitReached: _void,
  NoLayer: _void,
})

const cSp_runtimeDispatchError = Enum({
  Other: _void,
  CannotLookup: _void,
  BadOrigin: _void,
  Module: cSp_runtimeModuleError,
  ConsumerRemaining: _void,
  NoProviders: _void,
  TooManyConsumers: _void,
  Token: cSp_runtimeTokenError,
  Arithmetic: cSp_arithmeticArithmeticError,
  Transactional: cSp_runtimeTransactionalError,
  Exhausted: _void,
  Corruption: _void,
  Unavailable: _void,
  RootNotAllowed: _void,
})

const cFrame_systemPalletEventExtrinsicFailed = Struct({
  dispatch_error: cSp_runtimeDispatchError,
  dispatch_info: cFrame_supportDispatchDispatchInfo,
})

const cdc1 = Bytes(32)

const cFrame_systemPalletEventRemarked = Struct({ sender: cdc1, hash: cdc1 })

const cFrame_systemPalletEvent = Enum({
  ExtrinsicSuccess: cFrame_supportDispatchDispatchInfo,
  ExtrinsicFailed: cFrame_systemPalletEventExtrinsicFailed,
  CodeUpdated: _void,
  NewAccount: cdc1,
  KilledAccount: cdc1,
  Remarked: cFrame_systemPalletEventRemarked,
})

const cPallet_schedulerPalletEventScheduled = Struct({ when: u32, index: u32 })

const cPallet_schedulerPalletEventCanceled = Struct({ when: u32, index: u32 })

const cdc31 = Tuple(u32, u32)

const cOption = Enum({ None: _void, Some: cdc1 })

const cResult = Enum({ Ok: _void, Err: cSp_runtimeDispatchError })

const cPallet_schedulerPalletEventDispatched = Struct({
  task: cdc31,
  id: cOption,
  result: cResult,
})

const cPallet_schedulerPalletEventCallUnavailable = Struct({
  task: cdc31,
  id: cOption,
})

const cPallet_schedulerPalletEventPeriodicFailed = Struct({
  task: cdc31,
  id: cOption,
})

const cPallet_schedulerPalletEventPermanentlyOverweight = Struct({
  task: cdc31,
  id: cOption,
})

const cPallet_schedulerPalletEvent = Enum({
  Scheduled: cPallet_schedulerPalletEventScheduled,
  Canceled: cPallet_schedulerPalletEventCanceled,
  Dispatched: cPallet_schedulerPalletEventDispatched,
  CallUnavailable: cPallet_schedulerPalletEventCallUnavailable,
  PeriodicFailed: cPallet_schedulerPalletEventPeriodicFailed,
  PermanentlyOverweight: cPallet_schedulerPalletEventPermanentlyOverweight,
})

const cPallet_preimagePalletEvent = Enum({
  Noted: cdc1,
  Requested: cdc1,
  Cleared: cdc1,
})

const cPallet_indicesPalletEventIndexAssigned = Struct({
  who: cdc1,
  index: u32,
})

const cPallet_indicesPalletEventIndexFrozen = Struct({ index: u32, who: cdc1 })

const cPallet_indicesPalletEvent = Enum({
  IndexAssigned: cPallet_indicesPalletEventIndexAssigned,
  IndexFreed: u32,
  IndexFrozen: cPallet_indicesPalletEventIndexFrozen,
})

const cPallet_balancesPalletEventEndowed = Struct({
  account: cdc1,
  free_balance: u128,
})

const cPallet_balancesPalletEventDustLost = Struct({
  account: cdc1,
  amount: u128,
})

const cPallet_balancesPalletEventTransfer = Struct({
  from: cdc1,
  to: cdc1,
  amount: u128,
})

const cPallet_balancesPalletEventBalanceSet = Struct({ who: cdc1, free: u128 })

const cPallet_balancesPalletEventReserved = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventUnreserved = Struct({
  who: cdc1,
  amount: u128,
})

const cFrame_supportTraitsTokensMiscBalanceStatus = Enum({
  Free: _void,
  Reserved: _void,
})

const cPallet_balancesPalletEventReserveRepatriated = Struct({
  from: cdc1,
  to: cdc1,
  amount: u128,
  destination_status: cFrame_supportTraitsTokensMiscBalanceStatus,
})

const cPallet_balancesPalletEventDeposit = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventWithdraw = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventSlashed = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventMinted = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventBurned = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventSuspended = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventRestored = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventLocked = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventUnlocked = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventFrozen = Struct({ who: cdc1, amount: u128 })

const cPallet_balancesPalletEventThawed = Struct({ who: cdc1, amount: u128 })

export const cPallet_balancesPalletEvent = Enum({
  Endowed: cPallet_balancesPalletEventEndowed,
  DustLost: cPallet_balancesPalletEventDustLost,
  Transfer: cPallet_balancesPalletEventTransfer,
  BalanceSet: cPallet_balancesPalletEventBalanceSet,
  Reserved: cPallet_balancesPalletEventReserved,
  Unreserved: cPallet_balancesPalletEventUnreserved,
  ReserveRepatriated: cPallet_balancesPalletEventReserveRepatriated,
  Deposit: cPallet_balancesPalletEventDeposit,
  Withdraw: cPallet_balancesPalletEventWithdraw,
  Slashed: cPallet_balancesPalletEventSlashed,
  Minted: cPallet_balancesPalletEventMinted,
  Burned: cPallet_balancesPalletEventBurned,
  Suspended: cPallet_balancesPalletEventSuspended,
  Restored: cPallet_balancesPalletEventRestored,
  Upgraded: cdc1,
  Issued: u128,
  Rescinded: u128,
  Locked: cPallet_balancesPalletEventLocked,
  Unlocked: cPallet_balancesPalletEventUnlocked,
  Frozen: cPallet_balancesPalletEventFrozen,
  Thawed: cPallet_balancesPalletEventThawed,
})

const cPallet_transaction_paymentPalletEventTransactionFeePaid = Struct({
  who: cdc1,
  actual_fee: u128,
  tip: u128,
})

const cPallet_transaction_paymentPalletEvent = Enum({
  TransactionFeePaid: cPallet_transaction_paymentPalletEventTransactionFeePaid,
})

const cPallet_stakingPalletPalletEventEraPaid = Struct({
  era_index: u32,
  validator_payout: u128,
  remainder: u128,
})

const cPallet_stakingPalletPalletEventRewarded = Struct({
  stash: cdc1,
  amount: u128,
})

const cPallet_stakingPalletPalletEventSlashed = Struct({
  staker: cdc1,
  amount: u128,
})

const cPallet_stakingPalletPalletEventSlashReported = Struct({
  validator: cdc1,
  fraction: u32,
  slash_era: u32,
})

const cPallet_stakingPalletPalletEventBonded = Struct({
  stash: cdc1,
  amount: u128,
})

const cPallet_stakingPalletPalletEventUnbonded = Struct({
  stash: cdc1,
  amount: u128,
})

const cPallet_stakingPalletPalletEventWithdrawn = Struct({
  stash: cdc1,
  amount: u128,
})

const cPallet_stakingPalletPalletEventKicked = Struct({
  nominator: cdc1,
  stash: cdc1,
})

const cPallet_stakingPalletPalletEventPayoutStarted = Struct({
  era_index: u32,
  validator_stash: cdc1,
})

const cPallet_stakingValidatorPrefs = Struct({
  commission: compactNumber,
  blocked: bool,
})

const cPallet_stakingPalletPalletEventValidatorPrefsSet = Struct({
  stash: cdc1,
  prefs: cPallet_stakingValidatorPrefs,
})

const cPallet_stakingForcing = Enum({
  NotForcing: _void,
  ForceNew: _void,
  ForceNone: _void,
  ForceAlways: _void,
})

const cPallet_stakingPalletPalletEvent = Enum({
  EraPaid: cPallet_stakingPalletPalletEventEraPaid,
  Rewarded: cPallet_stakingPalletPalletEventRewarded,
  Slashed: cPallet_stakingPalletPalletEventSlashed,
  SlashReported: cPallet_stakingPalletPalletEventSlashReported,
  OldSlashingReportDiscarded: u32,
  StakersElected: _void,
  Bonded: cPallet_stakingPalletPalletEventBonded,
  Unbonded: cPallet_stakingPalletPalletEventUnbonded,
  Withdrawn: cPallet_stakingPalletPalletEventWithdrawn,
  Kicked: cPallet_stakingPalletPalletEventKicked,
  StakingElectionFailed: _void,
  Chilled: cdc1,
  PayoutStarted: cPallet_stakingPalletPalletEventPayoutStarted,
  ValidatorPrefsSet: cPallet_stakingPalletPalletEventValidatorPrefsSet,
  ForceEra: cPallet_stakingForcing,
})

const cdc47 = Bytes(16)

const _bytesSeq = Bytes()

const cPallet_offencesPalletEventOffence = Struct({
  kind: cdc47,
  timeslot: _bytesSeq,
})

const cPallet_offencesPalletEvent = Enum({
  Offence: cPallet_offencesPalletEventOffence,
})

const cPallet_sessionPalletEvent = Enum({ NewSession: u32 })

const cdc51 = Tuple(cdc1, u64)

const cdc50 = Vector(cdc51)

const cPallet_grandpaPalletEvent = Enum({
  NewAuthorities: cdc50,
  Paused: _void,
  Resumed: _void,
})

const cPallet_stakingIndividualExposure = Struct({
  who: cdc1,
  value: compactBn,
})

const cdc61 = Vector(cPallet_stakingIndividualExposure)

const cPallet_stakingExposure = Struct({
  total: compactBn,
  own: compactBn,
  others: cdc61,
})

const cdc58 = Tuple(cdc1, cPallet_stakingExposure)

const cdc57 = Vector(cdc58)

const cPallet_im_onlinePalletEvent = Enum({
  HeartbeatReceived: cdc1,
  AllGood: _void,
  SomeOffline: cdc57,
})

const cPallet_democracyPalletEventProposed = Struct({
  proposal_index: u32,
  deposit: u128,
})

const cPallet_democracyPalletEventTabled = Struct({
  proposal_index: u32,
  deposit: u128,
})

const cPallet_democracyVote_thresholdVoteThreshold = Enum({
  SuperMajorityApprove: _void,
  SuperMajorityAgainst: _void,
  SimpleMajority: _void,
})

const cPallet_democracyPalletEventStarted = Struct({
  ref_index: u32,
  threshold: cPallet_democracyVote_thresholdVoteThreshold,
})

const cPallet_democracyPalletEventDelegated = Struct({
  who: cdc1,
  target: cdc1,
})

const cPallet_democracyPalletEventVetoed = Struct({
  who: cdc1,
  proposal_hash: cdc1,
  until: u32,
})

const cPallet_democracyVoteAccountVoteStandard = Struct({
  vote: u8,
  balance: u128,
})

const cPallet_democracyVoteAccountVoteSplit = Struct({ aye: u128, nay: u128 })

const cPallet_democracyVoteAccountVote = Enum({
  Standard: cPallet_democracyVoteAccountVoteStandard,
  Split: cPallet_democracyVoteAccountVoteSplit,
})

const cPallet_democracyPalletEventVoted = Struct({
  voter: cdc1,
  ref_index: u32,
  vote: cPallet_democracyVoteAccountVote,
})

const cPallet_democracyPalletEventSeconded = Struct({
  seconder: cdc1,
  prop_index: u32,
})

const cPallet_democracyTypesMetadataOwner = Enum({
  External: _void,
  Proposal: u32,
  Referendum: u32,
})

const cPallet_democracyPalletEventMetadataSet = Struct({
  owner: cPallet_democracyTypesMetadataOwner,
  hash: cdc1,
})

const cPallet_democracyPalletEventMetadataCleared = Struct({
  owner: cPallet_democracyTypesMetadataOwner,
  hash: cdc1,
})

const cPallet_democracyPalletEventMetadataTransferred = Struct({
  prev_owner: cPallet_democracyTypesMetadataOwner,
  owner: cPallet_democracyTypesMetadataOwner,
  hash: cdc1,
})

const cPallet_democracyPalletEvent = Enum({
  Proposed: cPallet_democracyPalletEventProposed,
  Tabled: cPallet_democracyPalletEventTabled,
  ExternalTabled: _void,
  Started: cPallet_democracyPalletEventStarted,
  Passed: u32,
  NotPassed: u32,
  Cancelled: u32,
  Delegated: cPallet_democracyPalletEventDelegated,
  Undelegated: cdc1,
  Vetoed: cPallet_democracyPalletEventVetoed,
  Blacklisted: cdc1,
  Voted: cPallet_democracyPalletEventVoted,
  Seconded: cPallet_democracyPalletEventSeconded,
  ProposalCanceled: u32,
  MetadataSet: cPallet_democracyPalletEventMetadataSet,
  MetadataCleared: cPallet_democracyPalletEventMetadataCleared,
  MetadataTransferred: cPallet_democracyPalletEventMetadataTransferred,
})

const cPallet_collectivePalletEventProposed = Struct({
  account: cdc1,
  proposal_index: u32,
  proposal_hash: cdc1,
  threshold: u32,
})

const cPallet_collectivePalletEventVoted = Struct({
  account: cdc1,
  proposal_hash: cdc1,
  voted: bool,
  yes: u32,
  no: u32,
})

const cPallet_collectivePalletEventExecuted = Struct({
  proposal_hash: cdc1,
  result: cResult,
})

const cPallet_collectivePalletEventMemberExecuted = Struct({
  proposal_hash: cdc1,
  result: cResult,
})

const cPallet_collectivePalletEventClosed = Struct({
  proposal_hash: cdc1,
  yes: u32,
  no: u32,
})

const cPallet_collectivePalletEvent = Enum({
  Proposed: cPallet_collectivePalletEventProposed,
  Voted: cPallet_collectivePalletEventVoted,
  Approved: cdc1,
  Disapproved: cdc1,
  Executed: cPallet_collectivePalletEventExecuted,
  MemberExecuted: cPallet_collectivePalletEventMemberExecuted,
  Closed: cPallet_collectivePalletEventClosed,
})

const cdc72 = Tuple(cdc1, u128)

const cdc71 = Vector(cdc72)

const cPallet_elections_phragmenPalletEventCandidateSlashed = Struct({
  candidate: cdc1,
  amount: u128,
})

const cPallet_elections_phragmenPalletEventSeatHolderSlashed = Struct({
  seat_holder: cdc1,
  amount: u128,
})

const cPallet_elections_phragmenPalletEvent = Enum({
  NewTerm: cdc71,
  EmptyTerm: _void,
  ElectionError: _void,
  MemberKicked: cdc1,
  Renounced: cdc1,
  CandidateSlashed: cPallet_elections_phragmenPalletEventCandidateSlashed,
  SeatHolderSlashed: cPallet_elections_phragmenPalletEventSeatHolderSlashed,
})

const cPallet_membershipPalletEvent = Enum({
  MemberAdded: _void,
  MemberRemoved: _void,
  MembersSwapped: _void,
  MembersReset: _void,
  KeyChanged: _void,
  Dummy: _void,
})

const cPallet_treasuryPalletEventAwarded = Struct({
  proposal_index: u32,
  award: u128,
  account: cdc1,
})

const cPallet_treasuryPalletEventRejected = Struct({
  proposal_index: u32,
  slashed: u128,
})

const cPallet_treasuryPalletEventSpendApproved = Struct({
  proposal_index: u32,
  amount: u128,
  beneficiary: cdc1,
})

const cPallet_treasuryPalletEventUpdatedInactive = Struct({
  reactivated: u128,
  deactivated: u128,
})

const cPallet_treasuryPalletEvent = Enum({
  Proposed: u32,
  Spending: u128,
  Awarded: cPallet_treasuryPalletEventAwarded,
  Rejected: cPallet_treasuryPalletEventRejected,
  Burnt: u128,
  Rollover: u128,
  Deposit: u128,
  SpendApproved: cPallet_treasuryPalletEventSpendApproved,
  UpdatedInactive: cPallet_treasuryPalletEventUpdatedInactive,
})

const cPallet_conviction_votingPalletEventDelegated = Tuple(cdc1, cdc1)

const cPallet_conviction_votingPalletEvent = Enum({
  Delegated: cPallet_conviction_votingPalletEventDelegated,
  Undelegated: cdc1,
})

const cFrame_supportTraitsPreimagesBoundedLookup = Struct({
  hash: cdc1,
  len: u32,
})

const cFrame_supportTraitsPreimagesBounded = Enum({
  Legacy: cdc1,
  Inline: _bytesSeq,
  Lookup: cFrame_supportTraitsPreimagesBoundedLookup,
})

const cPallet_referendaPalletEventSubmitted = Struct({
  index: u32,
  track: u16,
  proposal: cFrame_supportTraitsPreimagesBounded,
})

const cPallet_referendaPalletEventDecisionDepositPlaced = Struct({
  index: u32,
  who: cdc1,
  amount: u128,
})

const cPallet_referendaPalletEventDecisionDepositRefunded = Struct({
  index: u32,
  who: cdc1,
  amount: u128,
})

const cPallet_referendaPalletEventDepositSlashed = Struct({
  who: cdc1,
  amount: u128,
})

const cPallet_conviction_votingTypesTally = Struct({
  ayes: u128,
  nays: u128,
  support: u128,
})

const cPallet_referendaPalletEventDecisionStarted = Struct({
  index: u32,
  track: u16,
  proposal: cFrame_supportTraitsPreimagesBounded,
  tally: cPallet_conviction_votingTypesTally,
})

const cPallet_referendaPalletEventConfirmed = Struct({
  index: u32,
  tally: cPallet_conviction_votingTypesTally,
})

const cPallet_referendaPalletEventRejected = Struct({
  index: u32,
  tally: cPallet_conviction_votingTypesTally,
})

const cPallet_referendaPalletEventTimedOut = Struct({
  index: u32,
  tally: cPallet_conviction_votingTypesTally,
})

const cPallet_referendaPalletEventCancelled = Struct({
  index: u32,
  tally: cPallet_conviction_votingTypesTally,
})

const cPallet_referendaPalletEventKilled = Struct({
  index: u32,
  tally: cPallet_conviction_votingTypesTally,
})

const cPallet_referendaPalletEventSubmissionDepositRefunded = Struct({
  index: u32,
  who: cdc1,
  amount: u128,
})

const cPallet_referendaPalletEventMetadataSet = Struct({
  index: u32,
  hash: cdc1,
})

const cPallet_referendaPalletEventMetadataCleared = Struct({
  index: u32,
  hash: cdc1,
})

const cPallet_referendaPalletEvent = Enum({
  Submitted: cPallet_referendaPalletEventSubmitted,
  DecisionDepositPlaced: cPallet_referendaPalletEventDecisionDepositPlaced,
  DecisionDepositRefunded: cPallet_referendaPalletEventDecisionDepositRefunded,
  DepositSlashed: cPallet_referendaPalletEventDepositSlashed,
  DecisionStarted: cPallet_referendaPalletEventDecisionStarted,
  ConfirmStarted: u32,
  ConfirmAborted: u32,
  Confirmed: cPallet_referendaPalletEventConfirmed,
  Approved: u32,
  Rejected: cPallet_referendaPalletEventRejected,
  TimedOut: cPallet_referendaPalletEventTimedOut,
  Cancelled: cPallet_referendaPalletEventCancelled,
  Killed: cPallet_referendaPalletEventKilled,
  SubmissionDepositRefunded: cPallet_referendaPalletEventSubmissionDepositRefunded,
  MetadataSet: cPallet_referendaPalletEventMetadataSet,
  MetadataCleared: cPallet_referendaPalletEventMetadataCleared,
})

const cPallet_whitelistPalletEventWhitelistedCallDispatched = Struct({
  call_hash: cdc1,
  result: cResult,
})

const cPallet_whitelistPalletEvent = Enum({
  CallWhitelisted: cdc1,
  WhitelistedCallRemoved: cdc1,
  WhitelistedCallDispatched: cPallet_whitelistPalletEventWhitelistedCallDispatched,
})

const cdc102 = Bytes(20)

const cPolkadot_runtime_commonClaimsPalletEventClaimed = Struct({
  who: cdc1,
  ethereum_address: cdc102,
  amount: u128,
})

const cPolkadot_runtime_commonClaimsPalletEvent = Enum({
  Claimed: cPolkadot_runtime_commonClaimsPalletEventClaimed,
})

const cPallet_vestingPalletEventVestingUpdated = Struct({
  account: cdc1,
  unvested: u128,
})

const cPallet_vestingPalletEvent = Enum({
  VestingUpdated: cPallet_vestingPalletEventVestingUpdated,
  VestingCompleted: cdc1,
})

const cPallet_utilityPalletEventBatchInterrupted = Struct({
  index: u32,
  error: cSp_runtimeDispatchError,
})

const cPallet_utilityPalletEvent = Enum({
  BatchInterrupted: cPallet_utilityPalletEventBatchInterrupted,
  BatchCompleted: _void,
  BatchCompletedWithErrors: _void,
  ItemCompleted: _void,
  ItemFailed: cSp_runtimeDispatchError,
  DispatchedAs: cResult,
})

const cPallet_identityPalletEventIdentityCleared = Struct({
  who: cdc1,
  deposit: u128,
})

const cPallet_identityPalletEventIdentityKilled = Struct({
  who: cdc1,
  deposit: u128,
})

const cPallet_identityPalletEventJudgementRequested = Struct({
  who: cdc1,
  registrar_index: u32,
})

const cPallet_identityPalletEventJudgementUnrequested = Struct({
  who: cdc1,
  registrar_index: u32,
})

const cPallet_identityPalletEventJudgementGiven = Struct({
  target: cdc1,
  registrar_index: u32,
})

const cPallet_identityPalletEventSubIdentityAdded = Struct({
  sub: cdc1,
  main: cdc1,
  deposit: u128,
})

const cPallet_identityPalletEventSubIdentityRemoved = Struct({
  sub: cdc1,
  main: cdc1,
  deposit: u128,
})

const cPallet_identityPalletEventSubIdentityRevoked = Struct({
  sub: cdc1,
  main: cdc1,
  deposit: u128,
})

const cPallet_identityPalletEvent = Enum({
  IdentitySet: cdc1,
  IdentityCleared: cPallet_identityPalletEventIdentityCleared,
  IdentityKilled: cPallet_identityPalletEventIdentityKilled,
  JudgementRequested: cPallet_identityPalletEventJudgementRequested,
  JudgementUnrequested: cPallet_identityPalletEventJudgementUnrequested,
  JudgementGiven: cPallet_identityPalletEventJudgementGiven,
  RegistrarAdded: u32,
  SubIdentityAdded: cPallet_identityPalletEventSubIdentityAdded,
  SubIdentityRemoved: cPallet_identityPalletEventSubIdentityRemoved,
  SubIdentityRevoked: cPallet_identityPalletEventSubIdentityRevoked,
})

const cPolkadot_runtimeProxyType = Enum(
  {
    Any: _void,
    NonTransfer: _void,
    Governance: _void,
    Staking: _void,
    IdentityJudgement: _void,
    CancelProxy: _void,
    Auction: _void,
    NominationPools: _void,
  },
  [0, 1, 2, 3, 5, 6, 7, 8],
)

const cPallet_proxyPalletEventPureCreated = Struct({
  pure: cdc1,
  who: cdc1,
  proxy_type: cPolkadot_runtimeProxyType,
  disambiguation_index: u16,
})

const cPallet_proxyPalletEventAnnounced = Struct({
  real: cdc1,
  proxy: cdc1,
  call_hash: cdc1,
})

const cPallet_proxyPalletEventProxyAdded = Struct({
  delegator: cdc1,
  delegatee: cdc1,
  proxy_type: cPolkadot_runtimeProxyType,
  delay: u32,
})

const cPallet_proxyPalletEventProxyRemoved = Struct({
  delegator: cdc1,
  delegatee: cdc1,
  proxy_type: cPolkadot_runtimeProxyType,
  delay: u32,
})

const cPallet_proxyPalletEvent = Enum({
  ProxyExecuted: cResult,
  PureCreated: cPallet_proxyPalletEventPureCreated,
  Announced: cPallet_proxyPalletEventAnnounced,
  ProxyAdded: cPallet_proxyPalletEventProxyAdded,
  ProxyRemoved: cPallet_proxyPalletEventProxyRemoved,
})

const cPallet_multisigPalletEventNewMultisig = Struct({
  approving: cdc1,
  multisig: cdc1,
  call_hash: cdc1,
})

const cPallet_multisigTimepoint = Struct({ height: u32, index: u32 })

const cPallet_multisigPalletEventMultisigApproval = Struct({
  approving: cdc1,
  timepoint: cPallet_multisigTimepoint,
  multisig: cdc1,
  call_hash: cdc1,
})

const cPallet_multisigPalletEventMultisigExecuted = Struct({
  approving: cdc1,
  timepoint: cPallet_multisigTimepoint,
  multisig: cdc1,
  call_hash: cdc1,
  result: cResult,
})

const cPallet_multisigPalletEventMultisigCancelled = Struct({
  cancelling: cdc1,
  timepoint: cPallet_multisigTimepoint,
  multisig: cdc1,
  call_hash: cdc1,
})

const cPallet_multisigPalletEvent = Enum({
  NewMultisig: cPallet_multisigPalletEventNewMultisig,
  MultisigApproval: cPallet_multisigPalletEventMultisigApproval,
  MultisigExecuted: cPallet_multisigPalletEventMultisigExecuted,
  MultisigCancelled: cPallet_multisigPalletEventMultisigCancelled,
})

const cPallet_bountiesPalletEventBountyRejected = Struct({
  index: u32,
  bond: u128,
})

const cPallet_bountiesPalletEventBountyAwarded = Struct({
  index: u32,
  beneficiary: cdc1,
})

const cPallet_bountiesPalletEventBountyClaimed = Struct({
  index: u32,
  payout: u128,
  beneficiary: cdc1,
})

const cPallet_bountiesPalletEvent = Enum({
  BountyProposed: u32,
  BountyRejected: cPallet_bountiesPalletEventBountyRejected,
  BountyBecameActive: u32,
  BountyAwarded: cPallet_bountiesPalletEventBountyAwarded,
  BountyClaimed: cPallet_bountiesPalletEventBountyClaimed,
  BountyCanceled: u32,
  BountyExtended: u32,
})

const cPallet_child_bountiesPalletEventAdded = Struct({
  index: u32,
  child_index: u32,
})

const cPallet_child_bountiesPalletEventAwarded = Struct({
  index: u32,
  child_index: u32,
  beneficiary: cdc1,
})

const cPallet_child_bountiesPalletEventClaimed = Struct({
  index: u32,
  child_index: u32,
  payout: u128,
  beneficiary: cdc1,
})

const cPallet_child_bountiesPalletEventCanceled = Struct({
  index: u32,
  child_index: u32,
})

const cPallet_child_bountiesPalletEvent = Enum({
  Added: cPallet_child_bountiesPalletEventAdded,
  Awarded: cPallet_child_bountiesPalletEventAwarded,
  Claimed: cPallet_child_bountiesPalletEventClaimed,
  Canceled: cPallet_child_bountiesPalletEventCanceled,
})

const cPallet_tipsPalletEventTipClosed = Struct({
  tip_hash: cdc1,
  who: cdc1,
  payout: u128,
})

const cPallet_tipsPalletEventTipSlashed = Struct({
  tip_hash: cdc1,
  finder: cdc1,
  deposit: u128,
})

const cPallet_tipsPalletEvent = Enum({
  NewTip: cdc1,
  TipClosing: cdc1,
  TipClosed: cPallet_tipsPalletEventTipClosed,
  TipRetracted: cdc1,
  TipSlashed: cPallet_tipsPalletEventTipSlashed,
})

const cPallet_election_provider_multi_phaseElectionCompute = Enum({
  OnChain: _void,
  Signed: _void,
  Unsigned: _void,
  Fallback: _void,
  Emergency: _void,
})

const cPallet_election_provider_multi_phasePalletEventSolutionStored = Struct({
  compute: cPallet_election_provider_multi_phaseElectionCompute,
  origin: cOption,
  prev_ejected: bool,
})

const cSp_npos_electionsElectionScore = Struct({
  minimal_stake: u128,
  sum_stake: u128,
  sum_stake_squared: u128,
})

const cPallet_election_provider_multi_phasePalletEventElectionFinalized = Struct({
  compute: cPallet_election_provider_multi_phaseElectionCompute,
  score: cSp_npos_electionsElectionScore,
})

const cPallet_election_provider_multi_phasePalletEventRewarded = Struct({
  account: cdc1,
  value: u128,
})

const cPallet_election_provider_multi_phasePalletEventSlashed = Struct({
  account: cdc1,
  value: u128,
})

const cdc458 = Tuple(bool, u32)

const cPallet_election_provider_multi_phasePhase = Enum({
  Off: _void,
  Signed: _void,
  Unsigned: cdc458,
  Emergency: _void,
})

const cPallet_election_provider_multi_phasePalletEventPhaseTransitioned = Struct({
  from: cPallet_election_provider_multi_phasePhase,
  to: cPallet_election_provider_multi_phasePhase,
  round: u32,
})

const cPallet_election_provider_multi_phasePalletEvent = Enum({
  SolutionStored: cPallet_election_provider_multi_phasePalletEventSolutionStored,
  ElectionFinalized: cPallet_election_provider_multi_phasePalletEventElectionFinalized,
  ElectionFailed: _void,
  Rewarded: cPallet_election_provider_multi_phasePalletEventRewarded,
  Slashed: cPallet_election_provider_multi_phasePalletEventSlashed,
  PhaseTransitioned: cPallet_election_provider_multi_phasePalletEventPhaseTransitioned,
})

const cPallet_bags_listPalletEventRebagged = Struct({
  who: cdc1,
  from: u64,
  to: u64,
})

const cPallet_bags_listPalletEventScoreUpdated = Struct({
  who: cdc1,
  new_score: u64,
})

const cPallet_bags_listPalletEvent = Enum({
  Rebagged: cPallet_bags_listPalletEventRebagged,
  ScoreUpdated: cPallet_bags_listPalletEventScoreUpdated,
})

const cPallet_nomination_poolsPalletEventCreated = Struct({
  depositor: cdc1,
  pool_id: u32,
})

const cPallet_nomination_poolsPalletEventBonded = Struct({
  member: cdc1,
  pool_id: u32,
  bonded: u128,
  joined: bool,
})

const cPallet_nomination_poolsPalletEventPaidOut = Struct({
  member: cdc1,
  pool_id: u32,
  payout: u128,
})

const cPallet_nomination_poolsPalletEventUnbonded = Struct({
  member: cdc1,
  pool_id: u32,
  balance: u128,
  points: u128,
  era: u32,
})

const cPallet_nomination_poolsPalletEventWithdrawn = Struct({
  member: cdc1,
  pool_id: u32,
  balance: u128,
  points: u128,
})

const cPallet_nomination_poolsPoolState = Enum({
  Open: _void,
  Blocked: _void,
  Destroying: _void,
})

const cPallet_nomination_poolsPalletEventStateChanged = Struct({
  pool_id: u32,
  new_state: cPallet_nomination_poolsPoolState,
})

const cPallet_nomination_poolsPalletEventMemberRemoved = Struct({
  pool_id: u32,
  member: cdc1,
})

const cPallet_nomination_poolsPalletEventRolesUpdated = Struct({
  root: cOption,
  bouncer: cOption,
  nominator: cOption,
})

const cPallet_nomination_poolsPalletEventPoolSlashed = Struct({
  pool_id: u32,
  balance: u128,
})

const cPallet_nomination_poolsPalletEventUnbondingPoolSlashed = Struct({
  pool_id: u32,
  era: u32,
  balance: u128,
})

const cPallet_nomination_poolsPalletEventPoolCommissionUpdated = Struct({
  pool_id: u32,
  current: cOption,
})

const cPallet_nomination_poolsPalletEventPoolMaxCommissionUpdated = Struct({
  pool_id: u32,
  max_commission: u32,
})

const cPallet_nomination_poolsCommissionChangeRate = Struct({
  max_increase: u32,
  min_delay: u32,
})

const cPallet_nomination_poolsPalletEventPoolCommissionChangeRateUpdated = Struct({
  pool_id: u32,
  change_rate: cPallet_nomination_poolsCommissionChangeRate,
})

const cPallet_nomination_poolsPalletEventPoolCommissionClaimed = Struct({
  pool_id: u32,
  commission: u128,
})

const cPallet_nomination_poolsPalletEvent = Enum({
  Created: cPallet_nomination_poolsPalletEventCreated,
  Bonded: cPallet_nomination_poolsPalletEventBonded,
  PaidOut: cPallet_nomination_poolsPalletEventPaidOut,
  Unbonded: cPallet_nomination_poolsPalletEventUnbonded,
  Withdrawn: cPallet_nomination_poolsPalletEventWithdrawn,
  Destroyed: u32,
  StateChanged: cPallet_nomination_poolsPalletEventStateChanged,
  MemberRemoved: cPallet_nomination_poolsPalletEventMemberRemoved,
  RolesUpdated: cPallet_nomination_poolsPalletEventRolesUpdated,
  PoolSlashed: cPallet_nomination_poolsPalletEventPoolSlashed,
  UnbondingPoolSlashed: cPallet_nomination_poolsPalletEventUnbondingPoolSlashed,
  PoolCommissionUpdated: cPallet_nomination_poolsPalletEventPoolCommissionUpdated,
  PoolMaxCommissionUpdated: cPallet_nomination_poolsPalletEventPoolMaxCommissionUpdated,
  PoolCommissionChangeRateUpdated:
    cPallet_nomination_poolsPalletEventPoolCommissionChangeRateUpdated,
  PoolCommissionClaimed: cPallet_nomination_poolsPalletEventPoolCommissionClaimed,
})

const cPallet_fast_unstakePalletEventUnstaked = Struct({
  stash: cdc1,
  result: cResult,
})

const cPallet_fast_unstakePalletEventSlashed = Struct({
  stash: cdc1,
  amount: u128,
})

const cdc109 = Vector(u32)

const cPallet_fast_unstakePalletEvent = Enum({
  Unstaked: cPallet_fast_unstakePalletEventUnstaked,
  Slashed: cPallet_fast_unstakePalletEventSlashed,
  InternalError: _void,
  BatchChecked: cdc109,
  BatchFinished: u32,
})

const cdc126 = Bytes(64)

const cPolkadot_primitivesV4CandidateDescriptor = Struct({
  para_id: u32,
  relay_parent: cdc1,
  collator: cdc1,
  persisted_validation_data_hash: cdc1,
  pov_hash: cdc1,
  erasure_root: cdc1,
  signature: cdc126,
  para_head: cdc1,
  validation_code_hash: cdc1,
})

const cPolkadot_primitivesV4CandidateReceipt = Struct({
  descriptor: cPolkadot_primitivesV4CandidateDescriptor,
  commitments_hash: cdc1,
})

const cPolkadot_runtime_parachainsInclusionPalletEventCandidateBacked = Tuple(
  cPolkadot_primitivesV4CandidateReceipt,
  _bytesSeq,
  u32,
  u32,
)

const cPolkadot_runtime_parachainsInclusionPalletEventCandidateIncluded = Tuple(
  cPolkadot_primitivesV4CandidateReceipt,
  _bytesSeq,
  u32,
  u32,
)

const cPolkadot_runtime_parachainsInclusionPalletEventCandidateTimedOut = Tuple(
  cPolkadot_primitivesV4CandidateReceipt,
  _bytesSeq,
  u32,
)

const cPolkadot_runtime_parachainsInclusionPalletEventUpwardMessagesReceived = Struct({
  from: u32,
  count: u32,
})

const cPolkadot_runtime_parachainsInclusionPalletEvent = Enum({
  CandidateBacked: cPolkadot_runtime_parachainsInclusionPalletEventCandidateBacked,
  CandidateIncluded: cPolkadot_runtime_parachainsInclusionPalletEventCandidateIncluded,
  CandidateTimedOut: cPolkadot_runtime_parachainsInclusionPalletEventCandidateTimedOut,
  UpwardMessagesReceived: cPolkadot_runtime_parachainsInclusionPalletEventUpwardMessagesReceived,
})

const cPolkadot_runtime_parachainsParasPalletEventActionQueued = Tuple(u32, u32)

const cPolkadot_runtime_parachainsParasPalletEventPvfCheckStarted = Tuple(
  cdc1,
  u32,
)

const cPolkadot_runtime_parachainsParasPalletEventPvfCheckAccepted = Tuple(
  cdc1,
  u32,
)

const cPolkadot_runtime_parachainsParasPalletEventPvfCheckRejected = Tuple(
  cdc1,
  u32,
)

const cPolkadot_runtime_parachainsParasPalletEvent = Enum({
  CurrentCodeUpdated: u32,
  CurrentHeadUpdated: u32,
  CodeUpgradeScheduled: u32,
  NewHeadNoted: u32,
  ActionQueued: cPolkadot_runtime_parachainsParasPalletEventActionQueued,
  PvfCheckStarted: cPolkadot_runtime_parachainsParasPalletEventPvfCheckStarted,
  PvfCheckAccepted: cPolkadot_runtime_parachainsParasPalletEventPvfCheckAccepted,
  PvfCheckRejected: cPolkadot_runtime_parachainsParasPalletEventPvfCheckRejected,
})

const cPolkadot_runtime_parachainsHrmpPalletEventOpenChannelRequested = Tuple(
  u32,
  u32,
  u32,
  u32,
)

const cPolkadot_parachainPrimitivesHrmpChannelId = Struct({
  sender: u32,
  recipient: u32,
})

const cPolkadot_runtime_parachainsHrmpPalletEventOpenChannelCanceled = Tuple(
  u32,
  cPolkadot_parachainPrimitivesHrmpChannelId,
)

const cPolkadot_runtime_parachainsHrmpPalletEventOpenChannelAccepted = Tuple(
  u32,
  u32,
)

const cPolkadot_runtime_parachainsHrmpPalletEventChannelClosed = Tuple(
  u32,
  cPolkadot_parachainPrimitivesHrmpChannelId,
)

const cPolkadot_runtime_parachainsHrmpPalletEventHrmpChannelForceOpened = Tuple(
  u32,
  u32,
  u32,
  u32,
)

const cPolkadot_runtime_parachainsHrmpPalletEvent = Enum({
  OpenChannelRequested: cPolkadot_runtime_parachainsHrmpPalletEventOpenChannelRequested,
  OpenChannelCanceled: cPolkadot_runtime_parachainsHrmpPalletEventOpenChannelCanceled,
  OpenChannelAccepted: cPolkadot_runtime_parachainsHrmpPalletEventOpenChannelAccepted,
  ChannelClosed: cPolkadot_runtime_parachainsHrmpPalletEventChannelClosed,
  HrmpChannelForceOpened: cPolkadot_runtime_parachainsHrmpPalletEventHrmpChannelForceOpened,
})

const cPolkadot_runtime_parachainsDisputesDisputeLocation = Enum({
  Local: _void,
  Remote: _void,
})

const cPolkadot_runtime_parachainsDisputesPalletEventDisputeInitiated = Tuple(
  cdc1,
  cPolkadot_runtime_parachainsDisputesDisputeLocation,
)

const cPolkadot_runtime_parachainsDisputesDisputeResult = Enum({
  Valid: _void,
  Invalid: _void,
})

const cPolkadot_runtime_parachainsDisputesPalletEventDisputeConcluded = Tuple(
  cdc1,
  cPolkadot_runtime_parachainsDisputesDisputeResult,
)

const cPolkadot_runtime_parachainsDisputesPalletEvent = Enum({
  DisputeInitiated: cPolkadot_runtime_parachainsDisputesPalletEventDisputeInitiated,
  DisputeConcluded: cPolkadot_runtime_parachainsDisputesPalletEventDisputeConcluded,
  Revert: u32,
})

const cPolkadot_runtime_commonParas_registrarPalletEventRegistered = Struct({
  para_id: u32,
  manager: cdc1,
})

const cPolkadot_runtime_commonParas_registrarPalletEventReserved = Struct({
  para_id: u32,
  who: cdc1,
})

const cPolkadot_runtime_commonParas_registrarPalletEventSwapped = Struct({
  para_id: u32,
  other_id: u32,
})

const cPolkadot_runtime_commonParas_registrarPalletEvent = Enum({
  Registered: cPolkadot_runtime_commonParas_registrarPalletEventRegistered,
  Deregistered: u32,
  Reserved: cPolkadot_runtime_commonParas_registrarPalletEventReserved,
  Swapped: cPolkadot_runtime_commonParas_registrarPalletEventSwapped,
})

const cPolkadot_runtime_commonSlotsPalletEventLeased = Struct({
  para_id: u32,
  leaser: cdc1,
  period_begin: u32,
  period_count: u32,
  extra_reserved: u128,
  total_amount: u128,
})

const cPolkadot_runtime_commonSlotsPalletEvent = Enum({
  NewLeasePeriod: u32,
  Leased: cPolkadot_runtime_commonSlotsPalletEventLeased,
})

const cPolkadot_runtime_commonAuctionsPalletEventAuctionStarted = Struct({
  auction_index: u32,
  lease_period: u32,
  ending: u32,
})

const cPolkadot_runtime_commonAuctionsPalletEventReserved = Struct({
  bidder: cdc1,
  extra_reserved: u128,
  total_amount: u128,
})

const cPolkadot_runtime_commonAuctionsPalletEventUnreserved = Struct({
  bidder: cdc1,
  amount: u128,
})

const cPolkadot_runtime_commonAuctionsPalletEventReserveConfiscated = Struct({
  para_id: u32,
  leaser: cdc1,
  amount: u128,
})

const cPolkadot_runtime_commonAuctionsPalletEventBidAccepted = Struct({
  bidder: cdc1,
  para_id: u32,
  amount: u128,
  first_slot: u32,
  last_slot: u32,
})

const cPolkadot_runtime_commonAuctionsPalletEventWinningOffset = Struct({
  auction_index: u32,
  block_number: u32,
})

const cPolkadot_runtime_commonAuctionsPalletEvent = Enum({
  AuctionStarted: cPolkadot_runtime_commonAuctionsPalletEventAuctionStarted,
  AuctionClosed: u32,
  Reserved: cPolkadot_runtime_commonAuctionsPalletEventReserved,
  Unreserved: cPolkadot_runtime_commonAuctionsPalletEventUnreserved,
  ReserveConfiscated: cPolkadot_runtime_commonAuctionsPalletEventReserveConfiscated,
  BidAccepted: cPolkadot_runtime_commonAuctionsPalletEventBidAccepted,
  WinningOffset: cPolkadot_runtime_commonAuctionsPalletEventWinningOffset,
})

const cPolkadot_runtime_commonCrowdloanPalletEventContributed = Struct({
  who: cdc1,
  fund_index: u32,
  amount: u128,
})

const cPolkadot_runtime_commonCrowdloanPalletEventWithdrew = Struct({
  who: cdc1,
  fund_index: u32,
  amount: u128,
})

const cPolkadot_runtime_commonCrowdloanPalletEventHandleBidResult = Struct({
  para_id: u32,
  result: cResult,
})

const cPolkadot_runtime_commonCrowdloanPalletEventMemoUpdated = Struct({
  who: cdc1,
  para_id: u32,
  memo: _bytesSeq,
})

const cPolkadot_runtime_commonCrowdloanPalletEvent = Enum({
  Created: u32,
  Contributed: cPolkadot_runtime_commonCrowdloanPalletEventContributed,
  Withdrew: cPolkadot_runtime_commonCrowdloanPalletEventWithdrew,
  PartiallyRefunded: u32,
  AllRefunded: u32,
  Dissolved: u32,
  HandleBidResult: cPolkadot_runtime_commonCrowdloanPalletEventHandleBidResult,
  Edited: u32,
  MemoUpdated: cPolkadot_runtime_commonCrowdloanPalletEventMemoUpdated,
  AddedToNewRaise: u32,
})

const cXcmV3TraitsError = Enum({
  Overflow: _void,
  Unimplemented: _void,
  UntrustedReserveLocation: _void,
  UntrustedTeleportLocation: _void,
  LocationFull: _void,
  LocationNotInvertible: _void,
  BadOrigin: _void,
  InvalidLocation: _void,
  AssetNotFound: _void,
  FailedToTransactAsset: _void,
  NotWithdrawable: _void,
  LocationCannotHold: _void,
  ExceedsMaxMessageSize: _void,
  DestinationUnsupported: _void,
  Transport: _void,
  Unroutable: _void,
  UnknownClaim: _void,
  FailedToDecode: _void,
  MaxWeightInvalid: _void,
  NotHoldingFees: _void,
  TooExpensive: _void,
  Trap: u64,
  ExpectationFalse: _void,
  PalletNotFound: _void,
  NameMismatch: _void,
  VersionIncompatible: _void,
  HoldingWouldOverflow: _void,
  ExportError: _void,
  ReanchorFailed: _void,
  NoDeal: _void,
  FeesNotMet: _void,
  LockError: _void,
  NoPermission: _void,
  Unanchored: _void,
  NotDepositable: _void,
  UnhandledXcmVersion: _void,
  WeightLimitReached: cSp_weightsWeight_v2Weight,
  Barrier: _void,
  WeightNotComputable: _void,
  ExceedsStackLimit: _void,
})

const cXcmV3TraitsOutcomeIncomplete = Tuple(
  cSp_weightsWeight_v2Weight,
  cXcmV3TraitsError,
)

const cXcmV3TraitsOutcome = Enum({
  Complete: cSp_weightsWeight_v2Weight,
  Incomplete: cXcmV3TraitsOutcomeIncomplete,
  Error: cXcmV3TraitsError,
})

const cXcmV3JunctionJunctionAccountId32 = Struct({ network: cOption, id: cdc1 })

const cXcmV3JunctionJunctionAccountIndex64 = Struct({
  network: cOption,
  index: compactBn,
})

const cXcmV3JunctionJunctionAccountKey20 = Struct({
  network: cOption,
  key: cdc102,
})

const cXcmV3JunctionJunctionGeneralKey = Struct({ length: u8, data: cdc1 })

const cXcmV3JunctionBodyId = Enum({
  Unit: _void,
  Moniker: cdc17,
  Index: compactNumber,
  Executive: _void,
  Technical: _void,
  Legislative: _void,
  Judicial: _void,
  Defense: _void,
  Administration: _void,
  Treasury: _void,
})

const cXcmV3JunctionBodyPartFraction = Struct({
  nom: compactNumber,
  denom: compactNumber,
})

const cXcmV3JunctionBodyPartAtLeastProportion = Struct({
  nom: compactNumber,
  denom: compactNumber,
})

const cXcmV3JunctionBodyPartMoreThanProportion = Struct({
  nom: compactNumber,
  denom: compactNumber,
})

const cXcmV3JunctionBodyPart = Enum({
  Voice: _void,
  Members: compactNumber,
  Fraction: cXcmV3JunctionBodyPartFraction,
  AtLeastProportion: cXcmV3JunctionBodyPartAtLeastProportion,
  MoreThanProportion: cXcmV3JunctionBodyPartMoreThanProportion,
})

const cXcmV3JunctionJunctionPlurality = Struct({
  id: cXcmV3JunctionBodyId,
  part: cXcmV3JunctionBodyPart,
})

const cXcmV3JunctionNetworkIdByFork = Struct({
  block_number: u64,
  block_hash: cdc1,
})

const cXcmV3JunctionNetworkId = Enum({
  ByGenesis: cdc1,
  ByFork: cXcmV3JunctionNetworkIdByFork,
  Polkadot: _void,
  Kusama: _void,
  Westend: _void,
  Rococo: _void,
  Wococo: _void,
  Ethereum: compactBn,
  BitcoinCore: _void,
  BitcoinCash: _void,
})

const cXcmV3JunctionJunction = Enum({
  Parachain: compactNumber,
  AccountId32: cXcmV3JunctionJunctionAccountId32,
  AccountIndex64: cXcmV3JunctionJunctionAccountIndex64,
  AccountKey20: cXcmV3JunctionJunctionAccountKey20,
  PalletInstance: u8,
  GeneralIndex: compactBn,
  GeneralKey: cXcmV3JunctionJunctionGeneralKey,
  OnlyChild: _void,
  Plurality: cXcmV3JunctionJunctionPlurality,
  GlobalConsensus: cXcmV3JunctionNetworkId,
})

const cXcmV3JunctionsJunctionsX2 = Tuple(
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
)

const cXcmV3JunctionsJunctionsX3 = Tuple(
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
)

const cXcmV3JunctionsJunctionsX4 = Tuple(
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
)

const cXcmV3JunctionsJunctionsX5 = Tuple(
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
)

const cXcmV3JunctionsJunctionsX6 = Tuple(
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
)

const cXcmV3JunctionsJunctionsX7 = Tuple(
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
)

const cXcmV3JunctionsJunctionsX8 = Tuple(
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
  cXcmV3JunctionJunction,
)

const cXcmV3JunctionsJunctions = Enum({
  Here: _void,
  X1: cXcmV3JunctionJunction,
  X2: cXcmV3JunctionsJunctionsX2,
  X3: cXcmV3JunctionsJunctionsX3,
  X4: cXcmV3JunctionsJunctionsX4,
  X5: cXcmV3JunctionsJunctionsX5,
  X6: cXcmV3JunctionsJunctionsX6,
  X7: cXcmV3JunctionsJunctionsX7,
  X8: cXcmV3JunctionsJunctionsX8,
})

const cXcmV3MultilocationMultiLocation = Struct({
  parents: u8,
  interior: cXcmV3JunctionsJunctions,
})

const cXcmV3MultiassetAssetId = Enum({
  Concrete: cXcmV3MultilocationMultiLocation,
  Abstract: cdc1,
})

const cdc198 = Bytes(8)

const cXcmV3MultiassetAssetInstance = Enum({
  Undefined: _void,
  Index: compactBn,
  Array4: cdc17,
  Array8: cdc198,
  Array16: cdc47,
  Array32: cdc1,
})

const cXcmV3MultiassetFungibility = Enum({
  Fungible: compactBn,
  NonFungible: cXcmV3MultiassetAssetInstance,
})

const cXcmV3MultiassetMultiAsset = Struct({
  id: cXcmV3MultiassetAssetId,
  fun: cXcmV3MultiassetFungibility,
})

const cdc406 = Vector(cXcmV3MultiassetMultiAsset)

const cXcmV3PalletInfo = Struct({
  index: compactNumber,
  name: _bytesSeq,
  module_name: _bytesSeq,
  major: compactNumber,
  minor: compactNumber,
  patch: compactNumber,
})

const cdc418 = Vector(cXcmV3PalletInfo)

const cXcmV3MaybeErrorCode = Enum({
  Success: _void,
  Error: _bytesSeq,
  TruncatedError: _bytesSeq,
})

const cXcmV3Response = Enum({
  Null: _void,
  Assets: cdc406,
  ExecutionResult: cOption,
  Version: u32,
  PalletsInfo: cdc418,
  DispatchResult: cXcmV3MaybeErrorCode,
})

const cXcmV3InstructionQueryResponse = Struct({
  query_id: compactBn,
  response: cXcmV3Response,
  max_weight: cSp_weightsWeight_v2Weight,
  querier: cOption,
})

const cXcmV3InstructionTransferAsset = Struct({
  assets: cdc406,
  beneficiary: cXcmV3MultilocationMultiLocation,
})

const circularCXcmV3Instruction: Codec<
  () => typeof cXcmV3Instruction extends Codec<infer V> ? V : unknown
> = lazy(() => cXcmV3Instruction)

const cXcmV3InstructionTransferReserveAsset = Struct({
  assets: cdc406,
  dest: cXcmV3MultilocationMultiLocation,
  xcm: circularCXcmV3Instruction,
})

const cXcmV2OriginKind = Enum({
  Native: _void,
  SovereignAccount: _void,
  Superuser: _void,
  Xcm: _void,
})

const cXcmV3InstructionTransact = Struct({
  origin_kind: cXcmV2OriginKind,
  require_weight_at_most: cSp_weightsWeight_v2Weight,
  call: _bytesSeq,
})

const cXcmV3InstructionHrmpNewChannelOpenRequest = Struct({
  sender: compactNumber,
  max_message_size: compactNumber,
  max_capacity: compactNumber,
})

const cXcmV3InstructionHrmpChannelClosing = Struct({
  initiator: compactNumber,
  sender: compactNumber,
  recipient: compactNumber,
})

const cXcmV3QueryResponseInfo = Struct({
  destination: cXcmV3MultilocationMultiLocation,
  query_id: compactBn,
  max_weight: cSp_weightsWeight_v2Weight,
})

const cXcmV3MultiassetWildFungibility = Enum({
  Fungible: _void,
  NonFungible: _void,
})

const cXcmV3MultiassetWildMultiAssetAllOf = Struct({
  id: cXcmV3MultiassetAssetId,
  fun: cXcmV3MultiassetWildFungibility,
})

const cXcmV3MultiassetWildMultiAssetAllOfCounted = Struct({
  id: cXcmV3MultiassetAssetId,
  fun: cXcmV3MultiassetWildFungibility,
  count: compactNumber,
})

const cXcmV3MultiassetWildMultiAsset = Enum({
  All: _void,
  AllOf: cXcmV3MultiassetWildMultiAssetAllOf,
  AllCounted: compactNumber,
  AllOfCounted: cXcmV3MultiassetWildMultiAssetAllOfCounted,
})

const cXcmV3MultiassetMultiAssetFilter = Enum({
  Definite: cdc406,
  Wild: cXcmV3MultiassetWildMultiAsset,
})

const cXcmV3InstructionDepositAsset = Struct({
  assets: cXcmV3MultiassetMultiAssetFilter,
  beneficiary: cXcmV3MultilocationMultiLocation,
})

const cXcmV3InstructionDepositReserveAsset = Struct({
  assets: cXcmV3MultiassetMultiAssetFilter,
  dest: cXcmV3MultilocationMultiLocation,
  xcm: circularCXcmV3Instruction,
})

const cXcmV3InstructionExchangeAsset = Struct({
  give: cXcmV3MultiassetMultiAssetFilter,
  want: cdc406,
  maximal: bool,
})

const cXcmV3InstructionInitiateReserveWithdraw = Struct({
  assets: cXcmV3MultiassetMultiAssetFilter,
  reserve: cXcmV3MultilocationMultiLocation,
  xcm: circularCXcmV3Instruction,
})

const cXcmV3InstructionInitiateTeleport = Struct({
  assets: cXcmV3MultiassetMultiAssetFilter,
  dest: cXcmV3MultilocationMultiLocation,
  xcm: circularCXcmV3Instruction,
})

const cXcmV3InstructionReportHolding = Struct({
  response_info: cXcmV3QueryResponseInfo,
  assets: cXcmV3MultiassetMultiAssetFilter,
})

const cXcmV3WeightLimit = Enum({
  Unlimited: _void,
  Limited: cSp_weightsWeight_v2Weight,
})

const cXcmV3InstructionBuyExecution = Struct({
  fees: cXcmV3MultiassetMultiAsset,
  weight_limit: cXcmV3WeightLimit,
})

const cXcmV3InstructionClaimAsset = Struct({
  assets: cdc406,
  ticket: cXcmV3MultilocationMultiLocation,
})

const cXcmV3InstructionSubscribeVersion = Struct({
  query_id: compactBn,
  max_response_weight: cSp_weightsWeight_v2Weight,
})

const cXcmV3InstructionQueryPallet = Struct({
  module_name: _bytesSeq,
  response_info: cXcmV3QueryResponseInfo,
})

const cXcmV3InstructionExpectPallet = Struct({
  index: compactNumber,
  name: _bytesSeq,
  module_name: _bytesSeq,
  crate_major: compactNumber,
  min_crate_minor: compactNumber,
})

const cXcmV3InstructionExportMessage = Struct({
  network: cXcmV3JunctionNetworkId,
  destination: cXcmV3JunctionsJunctions,
  xcm: circularCXcmV3Instruction,
})

const cXcmV3InstructionLockAsset = Struct({
  asset: cXcmV3MultiassetMultiAsset,
  unlocker: cXcmV3MultilocationMultiLocation,
})

const cXcmV3InstructionUnlockAsset = Struct({
  asset: cXcmV3MultiassetMultiAsset,
  target: cXcmV3MultilocationMultiLocation,
})

const cXcmV3InstructionNoteUnlockable = Struct({
  asset: cXcmV3MultiassetMultiAsset,
  owner: cXcmV3MultilocationMultiLocation,
})

const cXcmV3InstructionRequestUnlock = Struct({
  asset: cXcmV3MultiassetMultiAsset,
  locker: cXcmV3MultilocationMultiLocation,
})

const cXcmV3InstructionUnpaidExecution = Struct({
  weight_limit: cXcmV3WeightLimit,
  check_origin: cOption,
})

const cXcmV3Instruction = Enum({
  WithdrawAsset: cdc406,
  ReserveAssetDeposited: cdc406,
  ReceiveTeleportedAsset: cdc406,
  QueryResponse: cXcmV3InstructionQueryResponse,
  TransferAsset: cXcmV3InstructionTransferAsset,
  TransferReserveAsset: cXcmV3InstructionTransferReserveAsset,
  Transact: cXcmV3InstructionTransact,
  HrmpNewChannelOpenRequest: cXcmV3InstructionHrmpNewChannelOpenRequest,
  HrmpChannelAccepted: compactNumber,
  HrmpChannelClosing: cXcmV3InstructionHrmpChannelClosing,
  ClearOrigin: _void,
  DescendOrigin: cXcmV3JunctionsJunctions,
  ReportError: cXcmV3QueryResponseInfo,
  DepositAsset: cXcmV3InstructionDepositAsset,
  DepositReserveAsset: cXcmV3InstructionDepositReserveAsset,
  ExchangeAsset: cXcmV3InstructionExchangeAsset,
  InitiateReserveWithdraw: cXcmV3InstructionInitiateReserveWithdraw,
  InitiateTeleport: cXcmV3InstructionInitiateTeleport,
  ReportHolding: cXcmV3InstructionReportHolding,
  BuyExecution: cXcmV3InstructionBuyExecution,
  RefundSurplus: _void,
  SetErrorHandler: circularCXcmV3Instruction,
  SetAppendix: circularCXcmV3Instruction,
  ClearError: _void,
  ClaimAsset: cXcmV3InstructionClaimAsset,
  Trap: compactBn,
  SubscribeVersion: cXcmV3InstructionSubscribeVersion,
  UnsubscribeVersion: _void,
  BurnAsset: cdc406,
  ExpectAsset: cdc406,
  ExpectOrigin: cOption,
  ExpectError: cOption,
  ExpectTransactStatus: cXcmV3MaybeErrorCode,
  QueryPallet: cXcmV3InstructionQueryPallet,
  ExpectPallet: cXcmV3InstructionExpectPallet,
  ReportTransactStatus: cXcmV3QueryResponseInfo,
  ClearTransactStatus: _void,
  UniversalOrigin: cXcmV3JunctionJunction,
  ExportMessage: cXcmV3InstructionExportMessage,
  LockAsset: cXcmV3InstructionLockAsset,
  UnlockAsset: cXcmV3InstructionUnlockAsset,
  NoteUnlockable: cXcmV3InstructionNoteUnlockable,
  RequestUnlock: cXcmV3InstructionRequestUnlock,
  SetFeesMode: bool,
  SetTopic: cdc1,
  ClearTopic: _void,
  AliasOrigin: cXcmV3MultilocationMultiLocation,
  UnpaidExecution: cXcmV3InstructionUnpaidExecution,
})

const cdc403 = Vector(cXcmV3Instruction)

const cPallet_xcmPalletEventSent = Tuple(
  cXcmV3MultilocationMultiLocation,
  cXcmV3MultilocationMultiLocation,
  cdc403,
)

const cPallet_xcmPalletEventUnexpectedResponse = Tuple(
  cXcmV3MultilocationMultiLocation,
  u64,
)

const cPallet_xcmPalletEventResponseReady = Tuple(u64, cXcmV3Response)

const cPallet_xcmPalletEventNotified = Tuple(u64, u8, u8)

const cPallet_xcmPalletEventNotifyOverweight = Tuple(
  u64,
  u8,
  u8,
  cSp_weightsWeight_v2Weight,
  cSp_weightsWeight_v2Weight,
)

const cPallet_xcmPalletEventNotifyDispatchError = Tuple(u64, u8, u8)

const cPallet_xcmPalletEventNotifyDecodeFailed = Tuple(u64, u8, u8)

const cPallet_xcmPalletEventInvalidResponder = Tuple(
  cXcmV3MultilocationMultiLocation,
  u64,
  cOption,
)

const cPallet_xcmPalletEventInvalidResponderVersion = Tuple(
  cXcmV3MultilocationMultiLocation,
  u64,
)

const cXcmV2NetworkId = Enum({
  Any: _void,
  Named: _bytesSeq,
  Polkadot: _void,
  Kusama: _void,
})

const cXcmV2JunctionJunctionAccountId32 = Struct({
  network: cXcmV2NetworkId,
  id: cdc1,
})

const cXcmV2JunctionJunctionAccountIndex64 = Struct({
  network: cXcmV2NetworkId,
  index: compactBn,
})

const cXcmV2JunctionJunctionAccountKey20 = Struct({
  network: cXcmV2NetworkId,
  key: cdc102,
})

const cXcmV2BodyId = Enum({
  Unit: _void,
  Named: _bytesSeq,
  Index: compactNumber,
  Executive: _void,
  Technical: _void,
  Legislative: _void,
  Judicial: _void,
  Defense: _void,
  Administration: _void,
  Treasury: _void,
})

const cXcmV2BodyPartFraction = Struct({
  nom: compactNumber,
  denom: compactNumber,
})

const cXcmV2BodyPartAtLeastProportion = Struct({
  nom: compactNumber,
  denom: compactNumber,
})

const cXcmV2BodyPartMoreThanProportion = Struct({
  nom: compactNumber,
  denom: compactNumber,
})

const cXcmV2BodyPart = Enum({
  Voice: _void,
  Members: compactNumber,
  Fraction: cXcmV2BodyPartFraction,
  AtLeastProportion: cXcmV2BodyPartAtLeastProportion,
  MoreThanProportion: cXcmV2BodyPartMoreThanProportion,
})

const cXcmV2JunctionJunctionPlurality = Struct({
  id: cXcmV2BodyId,
  part: cXcmV2BodyPart,
})

const cXcmV2JunctionJunction = Enum({
  Parachain: compactNumber,
  AccountId32: cXcmV2JunctionJunctionAccountId32,
  AccountIndex64: cXcmV2JunctionJunctionAccountIndex64,
  AccountKey20: cXcmV2JunctionJunctionAccountKey20,
  PalletInstance: u8,
  GeneralIndex: compactBn,
  GeneralKey: _bytesSeq,
  OnlyChild: _void,
  Plurality: cXcmV2JunctionJunctionPlurality,
})

const cXcmV2MultilocationJunctionsX2 = Tuple(
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
)

const cXcmV2MultilocationJunctionsX3 = Tuple(
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
)

const cXcmV2MultilocationJunctionsX4 = Tuple(
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
)

const cXcmV2MultilocationJunctionsX5 = Tuple(
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
)

const cXcmV2MultilocationJunctionsX6 = Tuple(
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
)

const cXcmV2MultilocationJunctionsX7 = Tuple(
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
)

const cXcmV2MultilocationJunctionsX8 = Tuple(
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
  cXcmV2JunctionJunction,
)

const cXcmV2MultilocationJunctions = Enum({
  Here: _void,
  X1: cXcmV2JunctionJunction,
  X2: cXcmV2MultilocationJunctionsX2,
  X3: cXcmV2MultilocationJunctionsX3,
  X4: cXcmV2MultilocationJunctionsX4,
  X5: cXcmV2MultilocationJunctionsX5,
  X6: cXcmV2MultilocationJunctionsX6,
  X7: cXcmV2MultilocationJunctionsX7,
  X8: cXcmV2MultilocationJunctionsX8,
})

const cXcmV2MultilocationMultiLocation = Struct({
  parents: u8,
  interior: cXcmV2MultilocationJunctions,
})

const cXcmV2MultiassetAssetId = Enum({
  Concrete: cXcmV2MultilocationMultiLocation,
  Abstract: _bytesSeq,
})

const cXcmV2MultiassetAssetInstance = Enum({
  Undefined: _void,
  Index: compactBn,
  Array4: cdc17,
  Array8: cdc198,
  Array16: cdc47,
  Array32: cdc1,
  Blob: _bytesSeq,
})

const cXcmV2MultiassetFungibility = Enum({
  Fungible: compactBn,
  NonFungible: cXcmV2MultiassetAssetInstance,
})

const cXcmV2MultiassetMultiAsset = Struct({
  id: cXcmV2MultiassetAssetId,
  fun: cXcmV2MultiassetFungibility,
})

const cdc387 = Vector(cXcmV2MultiassetMultiAsset)

const cXcmVersionedMultiAssets = Enum({ V2: cdc387, V3: cdc406 }, [1, 3])

const cPallet_xcmPalletEventAssetsTrapped = Tuple(
  cdc1,
  cXcmV3MultilocationMultiLocation,
  cXcmVersionedMultiAssets,
)

const cPallet_xcmPalletEventVersionChangeNotified = Tuple(
  cXcmV3MultilocationMultiLocation,
  u32,
  cdc406,
)

const cPallet_xcmPalletEventSupportedVersionChanged = Tuple(
  cXcmV3MultilocationMultiLocation,
  u32,
)

const cPallet_xcmPalletEventNotifyTargetSendFail = Tuple(
  cXcmV3MultilocationMultiLocation,
  u64,
  cXcmV3TraitsError,
)

const cXcmVersionedMultiLocation = Enum(
  {
    V2: cXcmV2MultilocationMultiLocation,
    V3: cXcmV3MultilocationMultiLocation,
  },
  [1, 3],
)

const cPallet_xcmPalletEventNotifyTargetMigrationFail = Tuple(
  cXcmVersionedMultiLocation,
  u64,
)

const cPallet_xcmPalletEventInvalidQuerierVersion = Tuple(
  cXcmV3MultilocationMultiLocation,
  u64,
)

const cPallet_xcmPalletEventInvalidQuerier = Tuple(
  cXcmV3MultilocationMultiLocation,
  u64,
  cXcmV3MultilocationMultiLocation,
  cOption,
)

const cPallet_xcmPalletEventVersionNotifyStarted = Tuple(
  cXcmV3MultilocationMultiLocation,
  cdc406,
)

const cPallet_xcmPalletEventVersionNotifyRequested = Tuple(
  cXcmV3MultilocationMultiLocation,
  cdc406,
)

const cPallet_xcmPalletEventVersionNotifyUnrequested = Tuple(
  cXcmV3MultilocationMultiLocation,
  cdc406,
)

const cPallet_xcmPalletEventFeesPaid = Tuple(
  cXcmV3MultilocationMultiLocation,
  cdc406,
)

const cPallet_xcmPalletEventAssetsClaimed = Tuple(
  cdc1,
  cXcmV3MultilocationMultiLocation,
  cXcmVersionedMultiAssets,
)

const cPallet_xcmPalletEvent = Enum({
  Attempted: cXcmV3TraitsOutcome,
  Sent: cPallet_xcmPalletEventSent,
  UnexpectedResponse: cPallet_xcmPalletEventUnexpectedResponse,
  ResponseReady: cPallet_xcmPalletEventResponseReady,
  Notified: cPallet_xcmPalletEventNotified,
  NotifyOverweight: cPallet_xcmPalletEventNotifyOverweight,
  NotifyDispatchError: cPallet_xcmPalletEventNotifyDispatchError,
  NotifyDecodeFailed: cPallet_xcmPalletEventNotifyDecodeFailed,
  InvalidResponder: cPallet_xcmPalletEventInvalidResponder,
  InvalidResponderVersion: cPallet_xcmPalletEventInvalidResponderVersion,
  ResponseTaken: u64,
  AssetsTrapped: cPallet_xcmPalletEventAssetsTrapped,
  VersionChangeNotified: cPallet_xcmPalletEventVersionChangeNotified,
  SupportedVersionChanged: cPallet_xcmPalletEventSupportedVersionChanged,
  NotifyTargetSendFail: cPallet_xcmPalletEventNotifyTargetSendFail,
  NotifyTargetMigrationFail: cPallet_xcmPalletEventNotifyTargetMigrationFail,
  InvalidQuerierVersion: cPallet_xcmPalletEventInvalidQuerierVersion,
  InvalidQuerier: cPallet_xcmPalletEventInvalidQuerier,
  VersionNotifyStarted: cPallet_xcmPalletEventVersionNotifyStarted,
  VersionNotifyRequested: cPallet_xcmPalletEventVersionNotifyRequested,
  VersionNotifyUnrequested: cPallet_xcmPalletEventVersionNotifyUnrequested,
  FeesPaid: cPallet_xcmPalletEventFeesPaid,
  AssetsClaimed: cPallet_xcmPalletEventAssetsClaimed,
})

const cPolkadot_runtime_parachainsInclusionUmpQueueId = Enum({ Para: u32 })

const cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin = Enum({
  Ump: cPolkadot_runtime_parachainsInclusionUmpQueueId,
})

const cFrame_supportTraitsMessagesProcessMessageError = Enum({
  BadFormat: _void,
  Corrupt: _void,
  Unsupported: _void,
  Overweight: cSp_weightsWeight_v2Weight,
  Yield: _void,
})

const cPallet_message_queuePalletEventProcessingFailed = Struct({
  id: cdc1,
  origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
  error: cFrame_supportTraitsMessagesProcessMessageError,
})

const cPallet_message_queuePalletEventProcessed = Struct({
  id: cdc1,
  origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
  weight_used: cSp_weightsWeight_v2Weight,
  success: bool,
})

const cPallet_message_queuePalletEventOverweightEnqueued = Struct({
  id: cdc1,
  origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
  page_index: u32,
  message_index: u32,
})

const cPallet_message_queuePalletEventPageReaped = Struct({
  origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
  index: u32,
})

const cPallet_message_queuePalletEvent = Enum({
  ProcessingFailed: cPallet_message_queuePalletEventProcessingFailed,
  Processed: cPallet_message_queuePalletEventProcessed,
  OverweightEnqueued: cPallet_message_queuePalletEventOverweightEnqueued,
  PageReaped: cPallet_message_queuePalletEventPageReaped,
})

export const cPolkadot_runtimeRuntimeEvent = Enum(
  {
    System: cFrame_systemPalletEvent,
    Scheduler: cPallet_schedulerPalletEvent,
    Preimage: cPallet_preimagePalletEvent,
    Indices: cPallet_indicesPalletEvent,
    Balances: cPallet_balancesPalletEvent,
    TransactionPayment: cPallet_transaction_paymentPalletEvent,
    Staking: cPallet_stakingPalletPalletEvent,
    Offences: cPallet_offencesPalletEvent,
    Session: cPallet_sessionPalletEvent,
    Grandpa: cPallet_grandpaPalletEvent,
    ImOnline: cPallet_im_onlinePalletEvent,
    Democracy: cPallet_democracyPalletEvent,
    Council: cPallet_collectivePalletEvent,
    TechnicalCommittee: cPallet_collectivePalletEvent,
    PhragmenElection: cPallet_elections_phragmenPalletEvent,
    TechnicalMembership: cPallet_membershipPalletEvent,
    Treasury: cPallet_treasuryPalletEvent,
    ConvictionVoting: cPallet_conviction_votingPalletEvent,
    Referenda: cPallet_referendaPalletEvent,
    Whitelist: cPallet_whitelistPalletEvent,
    Claims: cPolkadot_runtime_commonClaimsPalletEvent,
    Vesting: cPallet_vestingPalletEvent,
    Utility: cPallet_utilityPalletEvent,
    Identity: cPallet_identityPalletEvent,
    Proxy: cPallet_proxyPalletEvent,
    Multisig: cPallet_multisigPalletEvent,
    Bounties: cPallet_bountiesPalletEvent,
    ChildBounties: cPallet_child_bountiesPalletEvent,
    Tips: cPallet_tipsPalletEvent,
    ElectionProviderMultiPhase: cPallet_election_provider_multi_phasePalletEvent,
    VoterList: cPallet_bags_listPalletEvent,
    NominationPools: cPallet_nomination_poolsPalletEvent,
    FastUnstake: cPallet_fast_unstakePalletEvent,
    ParaInclusion: cPolkadot_runtime_parachainsInclusionPalletEvent,
    Paras: cPolkadot_runtime_parachainsParasPalletEvent,
    Hrmp: cPolkadot_runtime_parachainsHrmpPalletEvent,
    ParasDisputes: cPolkadot_runtime_parachainsDisputesPalletEvent,
    Registrar: cPolkadot_runtime_commonParas_registrarPalletEvent,
    Slots: cPolkadot_runtime_commonSlotsPalletEvent,
    Auctions: cPolkadot_runtime_commonAuctionsPalletEvent,
    Crowdloan: cPolkadot_runtime_commonCrowdloanPalletEvent,
    XcmPallet: cPallet_xcmPalletEvent,
    MessageQueue: cPallet_message_queuePalletEvent,
  },
  [
    0,
    1,
    10,
    4,
    5,
    32,
    7,
    8,
    9,
    11,
    12,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    23,
    24,
    25,
    26,
    28,
    29,
    30,
    34,
    38,
    35,
    36,
    37,
    39,
    40,
    53,
    56,
    60,
    62,
    70,
    71,
    72,
    73,
    99,
    100,
  ],
)

const cdc480 = Vector(cdc1)

const cFrame_systemEventRecord = Struct({
  phase: cFrame_systemPhase,
  event: cPolkadot_runtimeRuntimeEvent,
  topics: cdc480,
})

const cdc18 = Vector(cFrame_systemEventRecord)

const SystemStorage = Storage("System")

export const SystemStorageEvents = SystemStorage("Events", cdc18[1])
