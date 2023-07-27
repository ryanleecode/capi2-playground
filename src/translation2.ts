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

const cPallet_balancesAccountData = Struct({
  free: u128,
  reserved: u128,
  misc_frozen: u128,
  fee_frozen: u128,
})

const cFrame_systemAccountInfo = Struct({
  nonce: u32,
  consumers: u32,
  providers: u32,
  sufficients: u32,
  data: cPallet_balancesAccountData,
})

const cdc1 = Bytes(32)

const cSp_weightsWeight_v2Weight = Struct({
  ref_time: compactBn,
  proof_size: compactBn,
})

const cFrame_supportDispatchPerDispatchClass = Struct({
  normal: cSp_weightsWeight_v2Weight,
  operational: cSp_weightsWeight_v2Weight,
  mandatory: cSp_weightsWeight_v2Weight,
})

const cdc12 = Bytes()

const cdc16 = Bytes(4)

const cSp_runtimeGenericDigestDigestItem = Enum({
  PreRuntime: Tuple(cdc16, cdc12),
  Consensus: Tuple(cdc16, cdc12),
  Seal: Tuple(cdc16, cdc12),
  Other: cdc12,
  RuntimeEnvironmentUpdated: _void,
})

const cdc14 = Vector(cSp_runtimeGenericDigestDigestItem)

const cFrame_systemPhase = Enum({
  ApplyExtrinsic: u32,
  Finalization: _void,
  Initialization: _void,
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

const cSp_runtimeModuleError = Struct({ index: u8, error: cdc16 })

const cSp_runtimeTokenError = Enum({
  NoFunds: _void,
  WouldDie: _void,
  BelowMinimum: _void,
  CannotCreate: _void,
  UnknownAsset: _void,
  Frozen: _void,
  Unsupported: _void,
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
})

const cFrame_systemPalletEvent = Enum({
  ExtrinsicSuccess: cFrame_supportDispatchDispatchInfo,
  ExtrinsicFailed: Struct({
    dispatch_error: cSp_runtimeDispatchError,
    dispatch_info: cFrame_supportDispatchDispatchInfo,
  }),
  CodeUpdated: _void,
  NewAccount: cdc1,
  KilledAccount: cdc1,
  Remarked: Struct({ sender: cdc1, hash: cdc1 }),
})

const cdc30 = Tuple(u32, u32)

const cOption = Enum({ None: _void, Some: cdc1 })

const cResult = Enum({ Ok: _void, Err: cSp_runtimeDispatchError })

const cPallet_schedulerPalletEvent = Enum({
  Scheduled: Struct({ when: u32, index: u32 }),
  Canceled: Struct({ when: u32, index: u32 }),
  Dispatched: Struct({ task: cdc30, id: cOption, result: cResult }),
  CallUnavailable: Struct({ task: cdc30, id: cOption }),
  PeriodicFailed: Struct({ task: cdc30, id: cOption }),
  PermanentlyOverweight: Struct({ task: cdc30, id: cOption }),
})

const cPallet_preimagePalletEvent = Enum({
  Noted: cdc1,
  Requested: cdc1,
  Cleared: cdc1,
})

const cPallet_indicesPalletEvent = Enum({
  IndexAssigned: Struct({ who: cdc1, index: u32 }),
  IndexFreed: u32,
  IndexFrozen: Struct({ index: u32, who: cdc1 }),
})

const cFrame_supportTraitsTokensMiscBalanceStatus = Enum({
  Free: _void,
  Reserved: _void,
})

const cPallet_balancesPalletEvent = Enum({
  Endowed: Struct({ account: cdc1, free_balance: u128 }),
  DustLost: Struct({ account: cdc1, amount: u128 }),
  Transfer: Struct({ from: cdc1, to: cdc1, amount: u128 }),
  BalanceSet: Struct({ who: cdc1, free: u128, reserved: u128 }),
  Reserved: Struct({ who: cdc1, amount: u128 }),
  Unreserved: Struct({ who: cdc1, amount: u128 }),
  ReserveRepatriated: Struct({
    from: cdc1,
    to: cdc1,
    amount: u128,
    destination_status: cFrame_supportTraitsTokensMiscBalanceStatus,
  }),
  Deposit: Struct({ who: cdc1, amount: u128 }),
  Withdraw: Struct({ who: cdc1, amount: u128 }),
  Slashed: Struct({ who: cdc1, amount: u128 }),
})

const cPallet_transaction_paymentPalletEvent = Enum({
  TransactionFeePaid: Struct({ who: cdc1, actual_fee: u128, tip: u128 }),
})

const cPallet_stakingValidatorPrefs = Struct({
  commission: compactNumber,
  blocked: bool,
})

const cPallet_stakingForcing = Enum({
  NotForcing: _void,
  ForceNew: _void,
  ForceNone: _void,
  ForceAlways: _void,
})

const cPallet_stakingPalletPalletEvent = Enum({
  EraPaid: Struct({ era_index: u32, validator_payout: u128, remainder: u128 }),
  Rewarded: Struct({ stash: cdc1, amount: u128 }),
  Slashed: Struct({ staker: cdc1, amount: u128 }),
  SlashReported: Struct({ validator: cdc1, fraction: u32, slash_era: u32 }),
  OldSlashingReportDiscarded: u32,
  StakersElected: _void,
  Bonded: Struct({ stash: cdc1, amount: u128 }),
  Unbonded: Struct({ stash: cdc1, amount: u128 }),
  Withdrawn: Struct({ stash: cdc1, amount: u128 }),
  Kicked: Struct({ nominator: cdc1, stash: cdc1 }),
  StakingElectionFailed: _void,
  Chilled: cdc1,
  PayoutStarted: Struct({ era_index: u32, validator_stash: cdc1 }),
  ValidatorPrefsSet: Struct({
    stash: cdc1,
    prefs: cPallet_stakingValidatorPrefs,
  }),
  ForceEra: cPallet_stakingForcing,
})

const cdc46 = Bytes(16)

const cPallet_offencesPalletEvent = Enum({
  Offence: Struct({ kind: cdc46, timeslot: cdc12 }),
})

const cPallet_sessionPalletEvent = Enum({ NewSession: u32 })

const cdc50 = Tuple(cdc1, u64)

const cdc49 = Vector(cdc50)

const cPallet_grandpaPalletEvent = Enum({
  NewAuthorities: cdc49,
  Paused: _void,
  Resumed: _void,
})

const cPallet_stakingIndividualExposure = Struct({
  who: cdc1,
  value: compactBn,
})

const cdc60 = Vector(cPallet_stakingIndividualExposure)

const cPallet_stakingExposure = Struct({
  total: compactBn,
  own: compactBn,
  others: cdc60,
})

const cdc57 = Tuple(cdc1, cPallet_stakingExposure)

const cdc56 = Vector(cdc57)

const cPallet_im_onlinePalletEvent = Enum({
  HeartbeatReceived: cdc1,
  AllGood: _void,
  SomeOffline: cdc56,
})

const cPallet_democracyVote_thresholdVoteThreshold = Enum({
  SuperMajorityApprove: _void,
  SuperMajorityAgainst: _void,
  SimpleMajority: _void,
})

const cPallet_democracyVoteAccountVote = Enum({
  Standard: Struct({ vote: u8, balance: u128 }),
  Split: Struct({ aye: u128, nay: u128 }),
})

const cPallet_democracyPalletEvent = Enum({
  Proposed: Struct({ proposal_index: u32, deposit: u128 }),
  Tabled: Struct({ proposal_index: u32, deposit: u128 }),
  ExternalTabled: _void,
  Started: Struct({
    ref_index: u32,
    threshold: cPallet_democracyVote_thresholdVoteThreshold,
  }),
  Passed: u32,
  NotPassed: u32,
  Cancelled: u32,
  Delegated: Struct({ who: cdc1, target: cdc1 }),
  Undelegated: cdc1,
  Vetoed: Struct({ who: cdc1, proposal_hash: cdc1, until: u32 }),
  Blacklisted: cdc1,
  Voted: Struct({
    voter: cdc1,
    ref_index: u32,
    vote: cPallet_democracyVoteAccountVote,
  }),
  Seconded: Struct({ seconder: cdc1, prop_index: u32 }),
  ProposalCanceled: u32,
})

const cPallet_collectivePalletEvent = Enum({
  Proposed: Struct({
    account: cdc1,
    proposal_index: u32,
    proposal_hash: cdc1,
    threshold: u32,
  }),
  Voted: Struct({
    account: cdc1,
    proposal_hash: cdc1,
    voted: bool,
    yes: u32,
    no: u32,
  }),
  Approved: cdc1,
  Disapproved: cdc1,
  Executed: Struct({ proposal_hash: cdc1, result: cResult }),
  MemberExecuted: Struct({ proposal_hash: cdc1, result: cResult }),
  Closed: Struct({ proposal_hash: cdc1, yes: u32, no: u32 }),
})

const cdc70 = Tuple(cdc1, u128)

const cdc69 = Vector(cdc70)

const cPallet_elections_phragmenPalletEvent = Enum({
  NewTerm: cdc69,
  EmptyTerm: _void,
  ElectionError: _void,
  MemberKicked: cdc1,
  Renounced: cdc1,
  CandidateSlashed: Struct({ candidate: cdc1, amount: u128 }),
  SeatHolderSlashed: Struct({ seat_holder: cdc1, amount: u128 }),
})

const cPallet_membershipPalletEvent = Enum({
  MemberAdded: _void,
  MemberRemoved: _void,
  MembersSwapped: _void,
  MembersReset: _void,
  KeyChanged: _void,
  Dummy: _void,
})

const cPallet_treasuryPalletEvent = Enum({
  Proposed: u32,
  Spending: u128,
  Awarded: Struct({ proposal_index: u32, award: u128, account: cdc1 }),
  Rejected: Struct({ proposal_index: u32, slashed: u128 }),
  Burnt: u128,
  Rollover: u128,
  Deposit: u128,
  SpendApproved: Struct({
    proposal_index: u32,
    amount: u128,
    beneficiary: cdc1,
  }),
  UpdatedInactive: Struct({ reactivated: u128, deactivated: u128 }),
})

const cdc75 = Bytes(20)

const cPolkadot_runtime_commonClaimsPalletEvent = Enum({
  Claimed: Struct({ who: cdc1, ethereum_address: cdc75, amount: u128 }),
})

const cPallet_vestingPalletEvent = Enum({
  VestingUpdated: Struct({ account: cdc1, unvested: u128 }),
  VestingCompleted: cdc1,
})

const cPallet_utilityPalletEvent = Enum({
  BatchInterrupted: Struct({ index: u32, error: cSp_runtimeDispatchError }),
  BatchCompleted: _void,
  BatchCompletedWithErrors: _void,
  ItemCompleted: _void,
  ItemFailed: cSp_runtimeDispatchError,
  DispatchedAs: cResult,
})

const cPallet_identityPalletEvent = Enum({
  IdentitySet: cdc1,
  IdentityCleared: Struct({ who: cdc1, deposit: u128 }),
  IdentityKilled: Struct({ who: cdc1, deposit: u128 }),
  JudgementRequested: Struct({ who: cdc1, registrar_index: u32 }),
  JudgementUnrequested: Struct({ who: cdc1, registrar_index: u32 }),
  JudgementGiven: Struct({ target: cdc1, registrar_index: u32 }),
  RegistrarAdded: u32,
  SubIdentityAdded: Struct({ sub: cdc1, main: cdc1, deposit: u128 }),
  SubIdentityRemoved: Struct({ sub: cdc1, main: cdc1, deposit: u128 }),
  SubIdentityRevoked: Struct({ sub: cdc1, main: cdc1, deposit: u128 }),
})

const cPolkadot_runtimeProxyType = Enum({
  Any: _void,
  NonTransfer: _void,
  Governance: _void,
  Staking: _void,
  IdentityJudgement: _void,
  CancelProxy: _void,
  Auction: _void,
})

const cPallet_proxyPalletEvent = Enum({
  ProxyExecuted: cResult,
  PureCreated: Struct({
    pure: cdc1,
    who: cdc1,
    proxy_type: cPolkadot_runtimeProxyType,
    disambiguation_index: u16,
  }),
  Announced: Struct({ real: cdc1, proxy: cdc1, call_hash: cdc1 }),
  ProxyAdded: Struct({
    delegator: cdc1,
    delegatee: cdc1,
    proxy_type: cPolkadot_runtimeProxyType,
    delay: u32,
  }),
  ProxyRemoved: Struct({
    delegator: cdc1,
    delegatee: cdc1,
    proxy_type: cPolkadot_runtimeProxyType,
    delay: u32,
  }),
})

const cPallet_multisigTimepoint = Struct({ height: u32, index: u32 })

const cPallet_multisigPalletEvent = Enum({
  NewMultisig: Struct({ approving: cdc1, multisig: cdc1, call_hash: cdc1 }),
  MultisigApproval: Struct({
    approving: cdc1,
    timepoint: cPallet_multisigTimepoint,
    multisig: cdc1,
    call_hash: cdc1,
  }),
  MultisigExecuted: Struct({
    approving: cdc1,
    timepoint: cPallet_multisigTimepoint,
    multisig: cdc1,
    call_hash: cdc1,
    result: cResult,
  }),
  MultisigCancelled: Struct({
    cancelling: cdc1,
    timepoint: cPallet_multisigTimepoint,
    multisig: cdc1,
    call_hash: cdc1,
  }),
})

const cPallet_bountiesPalletEvent = Enum({
  BountyProposed: u32,
  BountyRejected: Struct({ index: u32, bond: u128 }),
  BountyBecameActive: u32,
  BountyAwarded: Struct({ index: u32, beneficiary: cdc1 }),
  BountyClaimed: Struct({ index: u32, payout: u128, beneficiary: cdc1 }),
  BountyCanceled: u32,
  BountyExtended: u32,
})

const cPallet_child_bountiesPalletEvent = Enum({
  Added: Struct({ index: u32, child_index: u32 }),
  Awarded: Struct({ index: u32, child_index: u32, beneficiary: cdc1 }),
  Claimed: Struct({
    index: u32,
    child_index: u32,
    payout: u128,
    beneficiary: cdc1,
  }),
  Canceled: Struct({ index: u32, child_index: u32 }),
})

const cPallet_tipsPalletEvent = Enum({
  NewTip: cdc1,
  TipClosing: cdc1,
  TipClosed: Struct({ tip_hash: cdc1, who: cdc1, payout: u128 }),
  TipRetracted: cdc1,
  TipSlashed: Struct({ tip_hash: cdc1, finder: cdc1, deposit: u128 }),
})

const cPallet_election_provider_multi_phaseElectionCompute = Enum({
  OnChain: _void,
  Signed: _void,
  Unsigned: _void,
  Fallback: _void,
  Emergency: _void,
})

const cSp_npos_electionsElectionScore = Struct({
  minimal_stake: u128,
  sum_stake: u128,
  sum_stake_squared: u128,
})

const cdc92 = Tuple(bool, u32)

const cPallet_election_provider_multi_phasePhase = Enum({
  Off: _void,
  Signed: _void,
  Unsigned: cdc92,
  Emergency: _void,
})

const cPallet_election_provider_multi_phasePalletEvent = Enum({
  SolutionStored: Struct({
    compute: cPallet_election_provider_multi_phaseElectionCompute,
    origin: cOption,
    prev_ejected: bool,
  }),
  ElectionFinalized: Struct({
    compute: cPallet_election_provider_multi_phaseElectionCompute,
    score: cSp_npos_electionsElectionScore,
  }),
  ElectionFailed: _void,
  Rewarded: Struct({ account: cdc1, value: u128 }),
  Slashed: Struct({ account: cdc1, value: u128 }),
  PhaseTransitioned: Struct({
    from: cPallet_election_provider_multi_phasePhase,
    to: cPallet_election_provider_multi_phasePhase,
    round: u32,
  }),
})

const cPallet_bags_listPalletEvent = Enum({
  Rebagged: Struct({ who: cdc1, from: u64, to: u64 }),
  ScoreUpdated: Struct({ who: cdc1, new_score: u64 }),
})

const cPallet_nomination_poolsPoolState = Enum({
  Open: _void,
  Blocked: _void,
  Destroying: _void,
})

const cPallet_nomination_poolsPalletEvent = Enum({
  Created: Struct({ depositor: cdc1, pool_id: u32 }),
  Bonded: Struct({ member: cdc1, pool_id: u32, bonded: u128, joined: bool }),
  PaidOut: Struct({ member: cdc1, pool_id: u32, payout: u128 }),
  Unbonded: Struct({
    member: cdc1,
    pool_id: u32,
    balance: u128,
    points: u128,
    era: u32,
  }),
  Withdrawn: Struct({
    member: cdc1,
    pool_id: u32,
    balance: u128,
    points: u128,
  }),
  Destroyed: u32,
  StateChanged: Struct({
    pool_id: u32,
    new_state: cPallet_nomination_poolsPoolState,
  }),
  MemberRemoved: Struct({ pool_id: u32, member: cdc1 }),
  RolesUpdated: Struct({
    root: cOption,
    state_toggler: cOption,
    nominator: cOption,
  }),
  PoolSlashed: Struct({ pool_id: u32, balance: u128 }),
  UnbondingPoolSlashed: Struct({ pool_id: u32, era: u32, balance: u128 }),
})

const cdc97 = Vector(u32)

const cPallet_fast_unstakePalletEvent = Enum({
  Unstaked: Struct({ stash: cdc1, result: cResult }),
  Slashed: Struct({ stash: cdc1, amount: u128 }),
  InternalError: _void,
  BatchChecked: cdc97,
  BatchFinished: _void,
})

const cdc105 = Bytes(64)

const cPolkadot_primitivesV2CandidateDescriptor = Struct({
  para_id: u32,
  relay_parent: cdc1,
  collator: cdc1,
  persisted_validation_data_hash: cdc1,
  pov_hash: cdc1,
  erasure_root: cdc1,
  signature: cdc105,
  para_head: cdc1,
  validation_code_hash: cdc1,
})

const cPolkadot_primitivesV2CandidateReceipt = Struct({
  descriptor: cPolkadot_primitivesV2CandidateDescriptor,
  commitments_hash: cdc1,
})

const cPolkadot_runtime_parachainsInclusionPalletEvent = Enum({
  CandidateBacked: Tuple(
    cPolkadot_primitivesV2CandidateReceipt,
    cdc12,
    u32,
    u32,
  ),
  CandidateIncluded: Tuple(
    cPolkadot_primitivesV2CandidateReceipt,
    cdc12,
    u32,
    u32,
  ),
  CandidateTimedOut: Tuple(cPolkadot_primitivesV2CandidateReceipt, cdc12, u32),
})

const cPolkadot_runtime_parachainsParasPalletEvent = Enum({
  CurrentCodeUpdated: u32,
  CurrentHeadUpdated: u32,
  CodeUpgradeScheduled: u32,
  NewHeadNoted: u32,
  ActionQueued: Tuple(u32, u32),
  PvfCheckStarted: Tuple(cdc1, u32),
  PvfCheckAccepted: Tuple(cdc1, u32),
  PvfCheckRejected: Tuple(cdc1, u32),
})

const cXcmV2TraitsError = Enum({
  Overflow: _void,
  Unimplemented: _void,
  UntrustedReserveLocation: _void,
  UntrustedTeleportLocation: _void,
  MultiLocationFull: _void,
  MultiLocationNotInvertible: _void,
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
  UnhandledXcmVersion: _void,
  WeightLimitReached: u64,
  Barrier: _void,
  WeightNotComputable: _void,
})

const cXcmV2TraitsOutcome = Enum({
  Complete: u64,
  Incomplete: Tuple(u64, cXcmV2TraitsError),
  Error: cXcmV2TraitsError,
})

const cPolkadot_runtime_parachainsUmpPalletEvent = Enum({
  InvalidFormat: cdc1,
  UnsupportedVersion: cdc1,
  ExecutedUpward: Tuple(cdc1, cXcmV2TraitsOutcome),
  WeightExhausted: Tuple(
    cdc1,
    cSp_weightsWeight_v2Weight,
    cSp_weightsWeight_v2Weight,
  ),
  UpwardMessagesReceived: Tuple(u32, u32, u32),
  OverweightEnqueued: Tuple(u32, cdc1, u64, cSp_weightsWeight_v2Weight),
  OverweightServiced: Tuple(u64, cSp_weightsWeight_v2Weight),
})

const cPolkadot_parachainPrimitivesHrmpChannelId = Struct({
  sender: u32,
  recipient: u32,
})

const cPolkadot_runtime_parachainsHrmpPalletEvent = Enum({
  OpenChannelRequested: Tuple(u32, u32, u32, u32),
  OpenChannelCanceled: Tuple(u32, cPolkadot_parachainPrimitivesHrmpChannelId),
  OpenChannelAccepted: Tuple(u32, u32),
  ChannelClosed: Tuple(u32, cPolkadot_parachainPrimitivesHrmpChannelId),
  HrmpChannelForceOpened: Tuple(u32, u32, u32, u32),
})

const cPolkadot_runtime_parachainsDisputesDisputeLocation = Enum({
  Local: _void,
  Remote: _void,
})

const cPolkadot_runtime_parachainsDisputesDisputeResult = Enum({
  Valid: _void,
  Invalid: _void,
})

const cPolkadot_runtime_parachainsDisputesPalletEvent = Enum({
  DisputeInitiated: Tuple(
    cdc1,
    cPolkadot_runtime_parachainsDisputesDisputeLocation,
  ),
  DisputeConcluded: Tuple(
    cdc1,
    cPolkadot_runtime_parachainsDisputesDisputeResult,
  ),
  DisputeTimedOut: cdc1,
  Revert: u32,
})

const cPolkadot_runtime_commonParas_registrarPalletEvent = Enum({
  Registered: Struct({ para_id: u32, manager: cdc1 }),
  Deregistered: u32,
  Reserved: Struct({ para_id: u32, who: cdc1 }),
})

const cPolkadot_runtime_commonSlotsPalletEvent = Enum({
  NewLeasePeriod: u32,
  Leased: Struct({
    para_id: u32,
    leaser: cdc1,
    period_begin: u32,
    period_count: u32,
    extra_reserved: u128,
    total_amount: u128,
  }),
})

const cPolkadot_runtime_commonAuctionsPalletEvent = Enum({
  AuctionStarted: Struct({
    auction_index: u32,
    lease_period: u32,
    ending: u32,
  }),
  AuctionClosed: u32,
  Reserved: Struct({ bidder: cdc1, extra_reserved: u128, total_amount: u128 }),
  Unreserved: Struct({ bidder: cdc1, amount: u128 }),
  ReserveConfiscated: Struct({ para_id: u32, leaser: cdc1, amount: u128 }),
  BidAccepted: Struct({
    bidder: cdc1,
    para_id: u32,
    amount: u128,
    first_slot: u32,
    last_slot: u32,
  }),
  WinningOffset: Struct({ auction_index: u32, block_number: u32 }),
})

const cPolkadot_runtime_commonCrowdloanPalletEvent = Enum({
  Created: u32,
  Contributed: Struct({ who: cdc1, fund_index: u32, amount: u128 }),
  Withdrew: Struct({ who: cdc1, fund_index: u32, amount: u128 }),
  PartiallyRefunded: u32,
  AllRefunded: u32,
  Dissolved: u32,
  HandleBidResult: Struct({ para_id: u32, result: cResult }),
  Edited: u32,
  MemoUpdated: Struct({ who: cdc1, para_id: u32, memo: cdc12 }),
  AddedToNewRaise: u32,
})

const cXcmV0JunctionNetworkId = Enum({
  Any: _void,
  Named: cdc12,
  Polkadot: _void,
  Kusama: _void,
})

const cXcmV0JunctionBodyId = Enum({
  Unit: _void,
  Named: cdc12,
  Index: compactNumber,
  Executive: _void,
  Technical: _void,
  Legislative: _void,
  Judicial: _void,
  Defense: _void,
  Administration: _void,
  Treasury: _void,
})

const cXcmV0JunctionBodyPart = Enum({
  Voice: _void,
  Members: compactNumber,
  Fraction: Struct({ nom: compactNumber, denom: compactNumber }),
  AtLeastProportion: Struct({ nom: compactNumber, denom: compactNumber }),
  MoreThanProportion: Struct({ nom: compactNumber, denom: compactNumber }),
})

const cXcmV1JunctionJunction = Enum({
  Parachain: compactNumber,
  AccountId32: Struct({ network: cXcmV0JunctionNetworkId, id: cdc1 }),
  AccountIndex64: Struct({
    network: cXcmV0JunctionNetworkId,
    index: compactBn,
  }),
  AccountKey20: Struct({ network: cXcmV0JunctionNetworkId, key: cdc75 }),
  PalletInstance: u8,
  GeneralIndex: compactBn,
  GeneralKey: cdc12,
  OnlyChild: _void,
  Plurality: Struct({ id: cXcmV0JunctionBodyId, part: cXcmV0JunctionBodyPart }),
})

const cXcmV1MultilocationJunctions = Enum({
  Here: _void,
  X1: cXcmV1JunctionJunction,
  X2: Tuple(cXcmV1JunctionJunction, cXcmV1JunctionJunction),
  X3: Tuple(
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
  ),
  X4: Tuple(
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
  ),
  X5: Tuple(
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
  ),
  X6: Tuple(
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
  ),
  X7: Tuple(
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
  ),
  X8: Tuple(
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
    cXcmV1JunctionJunction,
  ),
})

const cXcmV1MultilocationMultiLocation = Struct({
  parents: u8,
  interior: cXcmV1MultilocationJunctions,
})

const cXcmV1MultiassetAssetId = Enum({
  Concrete: cXcmV1MultilocationMultiLocation,
  Abstract: cdc12,
})

const cdc142 = Bytes(8)

const cXcmV1MultiassetAssetInstance = Enum({
  Undefined: _void,
  Index: compactBn,
  Array4: cdc16,
  Array8: cdc142,
  Array16: cdc46,
  Array32: cdc1,
  Blob: cdc12,
})

const cXcmV1MultiassetFungibility = Enum({
  Fungible: compactBn,
  NonFungible: cXcmV1MultiassetAssetInstance,
})

const cXcmV1MultiassetMultiAsset = Struct({
  id: cXcmV1MultiassetAssetId,
  fun: cXcmV1MultiassetFungibility,
})

const cdc137 = Vector(cXcmV1MultiassetMultiAsset)

const cdc145 = Tuple(u32, cXcmV2TraitsError)

const cXcmV2Response = Enum({
  Null: _void,
  Assets: cdc137,
  ExecutionResult: cOption,
  Version: u32,
})

const circularcXcmV2Xcm: Codec<
  () => typeof cXcmV2Xcm extends Codec<infer V> ? V : unknown
> = lazy(() => cXcmV2Xcm)

const cXcmV0OriginKind = Enum({
  Native: _void,
  SovereignAccount: _void,
  Superuser: _void,
  Xcm: _void,
})

const cXcmV1MultiassetWildFungibility = Enum({
  Fungible: _void,
  NonFungible: _void,
})

const cXcmV1MultiassetWildMultiAsset = Enum({
  All: _void,
  AllOf: Struct({
    id: cXcmV1MultiassetAssetId,
    fun: cXcmV1MultiassetWildFungibility,
  }),
})

const cXcmV1MultiassetMultiAssetFilter = Enum({
  Definite: cdc137,
  Wild: cXcmV1MultiassetWildMultiAsset,
})

const cXcmV2WeightLimit = Enum({ Unlimited: _void, Limited: compactBn })

const TransferReserveAsset = Struct({
  assets: cdc137,
  dest: cXcmV1MultilocationMultiLocation,
  xcm: circularcXcmV2Xcm,
})
const cXcmV2Instruction = Enum({
  WithdrawAsset: cdc137,
  ReserveAssetDeposited: cdc137,
  ReceiveTeleportedAsset: cdc137,
  QueryResponse: Struct({
    query_id: compactBn,
    response: cXcmV2Response,
    max_weight: compactBn,
  }),
  TransferAsset: Struct({
    assets: cdc137,
    beneficiary: cXcmV1MultilocationMultiLocation,
  }),
  TransferReserveAsset,
  Transact: Struct({
    origin_type: cXcmV0OriginKind,
    require_weight_at_most: compactBn,
    call: cdc12,
  }),
  HrmpNewChannelOpenRequest: Struct({
    sender: compactNumber,
    max_message_size: compactNumber,
    max_capacity: compactNumber,
  }),
  HrmpChannelAccepted: compactNumber,
  HrmpChannelClosing: Struct({
    initiator: compactNumber,
    sender: compactNumber,
    recipient: compactNumber,
  }),
  ClearOrigin: _void,
  DescendOrigin: cXcmV1MultilocationJunctions,
  ReportError: Struct({
    query_id: compactBn,
    dest: cXcmV1MultilocationMultiLocation,
    max_response_weight: compactBn,
  }),
  DepositAsset: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    max_assets: compactNumber,
    beneficiary: cXcmV1MultilocationMultiLocation,
  }),
  DepositReserveAsset: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    max_assets: compactNumber,
    dest: cXcmV1MultilocationMultiLocation,
    xcm: circularcXcmV2Xcm,
  }),
  ExchangeAsset: Struct({
    give: cXcmV1MultiassetMultiAssetFilter,
    receive: cdc137,
  }),
  InitiateReserveWithdraw: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    reserve: cXcmV1MultilocationMultiLocation,
    xcm: circularcXcmV2Xcm,
  }),
  InitiateTeleport: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    dest: cXcmV1MultilocationMultiLocation,
    xcm: circularcXcmV2Xcm,
  }),
  QueryHolding: Struct({
    query_id: compactBn,
    dest: cXcmV1MultilocationMultiLocation,
    assets: cXcmV1MultiassetMultiAssetFilter,
    max_response_weight: compactBn,
  }),
  BuyExecution: Struct({
    fees: cXcmV1MultiassetMultiAsset,
    weight_limit: cXcmV2WeightLimit,
  }),
  RefundSurplus: _void,
  SetErrorHandler: circularcXcmV2Xcm,
  SetAppendix: circularcXcmV2Xcm,
  ClearError: _void,
  ClaimAsset: Struct({
    assets: cdc137,
    ticket: cXcmV1MultilocationMultiLocation,
  }),
  Trap: compactBn,
  SubscribeVersion: Struct({
    query_id: compactBn,
    max_response_weight: compactBn,
  }),
  UnsubscribeVersion: _void,
})

const cdc134 = Vector(cXcmV2Instruction)

const cXcmV2Xcm = cdc134

const cXcmV0JunctionJunction = Enum({
  Parent: _void,
  Parachain: compactNumber,
  AccountId32: Struct({ network: cXcmV0JunctionNetworkId, id: cdc1 }),
  AccountIndex64: Struct({
    network: cXcmV0JunctionNetworkId,
    index: compactBn,
  }),
  AccountKey20: Struct({ network: cXcmV0JunctionNetworkId, key: cdc75 }),
  PalletInstance: u8,
  GeneralIndex: compactBn,
  GeneralKey: cdc12,
  OnlyChild: _void,
  Plurality: Struct({ id: cXcmV0JunctionBodyId, part: cXcmV0JunctionBodyPart }),
})

const cXcmV0Multi_locationMultiLocation = Enum({
  Null: _void,
  X1: cXcmV0JunctionJunction,
  X2: Tuple(cXcmV0JunctionJunction, cXcmV0JunctionJunction),
  X3: Tuple(
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
  ),
  X4: Tuple(
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
  ),
  X5: Tuple(
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
  ),
  X6: Tuple(
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
  ),
  X7: Tuple(
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
  ),
  X8: Tuple(
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
    cXcmV0JunctionJunction,
  ),
})

const cXcmV0Multi_assetMultiAsset = Enum({
  None: _void,
  All: _void,
  AllFungible: _void,
  AllNonFungible: _void,
  AllAbstractFungible: cdc12,
  AllAbstractNonFungible: cdc12,
  AllConcreteFungible: cXcmV0Multi_locationMultiLocation,
  AllConcreteNonFungible: cXcmV0Multi_locationMultiLocation,
  AbstractFungible: Struct({ id: cdc12, amount: compactBn }),
  AbstractNonFungible: Struct({
    class: cdc12,
    instance: cXcmV1MultiassetAssetInstance,
  }),
  ConcreteFungible: Struct({
    id: cXcmV0Multi_locationMultiLocation,
    amount: compactBn,
  }),
  ConcreteNonFungible: Struct({
    class: cXcmV0Multi_locationMultiLocation,
    instance: cXcmV1MultiassetAssetInstance,
  }),
})

const cdc154 = Vector(cXcmV0Multi_assetMultiAsset)

const cXcmVersionedMultiAssets = Enum({ V0: cdc154, V1: cdc137 })

const cXcmVersionedMultiLocation = Enum({
  V0: cXcmV0Multi_locationMultiLocation,
  V1: cXcmV1MultilocationMultiLocation,
})

const cPallet_xcmPalletEvent = Enum({
  Attempted: cXcmV2TraitsOutcome,
  Sent: Tuple(
    cXcmV1MultilocationMultiLocation,
    cXcmV1MultilocationMultiLocation,
    cdc134,
  ),
  UnexpectedResponse: Tuple(cXcmV1MultilocationMultiLocation, u64),
  ResponseReady: Tuple(u64, cXcmV2Response),
  Notified: Tuple(u64, u8, u8),
  NotifyOverweight: Tuple(
    u64,
    u8,
    u8,
    cSp_weightsWeight_v2Weight,
    cSp_weightsWeight_v2Weight,
  ),
  NotifyDispatchError: Tuple(u64, u8, u8),
  NotifyDecodeFailed: Tuple(u64, u8, u8),
  InvalidResponder: Tuple(cXcmV1MultilocationMultiLocation, u64, cOption),
  InvalidResponderVersion: Tuple(cXcmV1MultilocationMultiLocation, u64),
  ResponseTaken: u64,
  AssetsTrapped: Tuple(
    cdc1,
    cXcmV1MultilocationMultiLocation,
    cXcmVersionedMultiAssets,
  ),
  VersionChangeNotified: Tuple(cXcmV1MultilocationMultiLocation, u32),
  SupportedVersionChanged: Tuple(cXcmV1MultilocationMultiLocation, u32),
  NotifyTargetSendFail: Tuple(
    cXcmV1MultilocationMultiLocation,
    u64,
    cXcmV2TraitsError,
  ),
  NotifyTargetMigrationFail: Tuple(cXcmVersionedMultiLocation, u64),
  AssetsClaimed: Tuple(
    cdc1,
    cXcmV1MultilocationMultiLocation,
    cXcmVersionedMultiAssets,
  ),
})

const cPolkadot_runtimeRuntimeEvent = Enum({
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
  Ump: cPolkadot_runtime_parachainsUmpPalletEvent,
  Hrmp: cPolkadot_runtime_parachainsHrmpPalletEvent,
  ParasDisputes: cPolkadot_runtime_parachainsDisputesPalletEvent,
  Registrar: cPolkadot_runtime_commonParas_registrarPalletEvent,
  Slots: cPolkadot_runtime_commonSlotsPalletEvent,
  Auctions: cPolkadot_runtime_commonAuctionsPalletEvent,
  Crowdloan: cPolkadot_runtime_commonCrowdloanPalletEvent,
  XcmPallet: cPallet_xcmPalletEvent,
})

const cdc160 = Vector(cdc1)

const cFrame_systemEventRecord = Struct({
  phase: cFrame_systemPhase,
  event: cPolkadot_runtimeRuntimeEvent,
  topics: cdc160,
})

const cdc17 = Vector(cFrame_systemEventRecord)

const cdc161 = Vector(cdc30)

const cFrame_systemLastRuntimeUpgradeInfo = Struct({
  spec_version: compactNumber,
  spec_name: str,
})

const cFrame_supportTraitsPreimagesBounded = Enum({
  Legacy: cdc1,
  Inline: cdc12,
  Lookup: Struct({ hash: cdc1, len: u32 }),
})

const cFrame_supportDispatchRawOrigin = Enum({
  Root: _void,
  Signed: cdc1,
  None: _void,
})

const cPallet_collectiveRawOrigin = Enum({
  Members: Tuple(u32, u32),
  Member: cdc1,
  _Phantom: _void,
})

const cPolkadot_runtime_parachainsOriginPalletOrigin = Enum({ Parachain: u32 })

const cPallet_xcmPalletOrigin = Enum({
  Xcm: cXcmV1MultilocationMultiLocation,
  Response: cXcmV1MultilocationMultiLocation,
})

const cPolkadot_runtimeOriginCaller = Enum({
  system: cFrame_supportDispatchRawOrigin,
  Council: cPallet_collectiveRawOrigin,
  TechnicalCommittee: cPallet_collectiveRawOrigin,
  ParachainsOrigin: cPolkadot_runtime_parachainsOriginPalletOrigin,
  XcmPallet: cPallet_xcmPalletOrigin,
  Void: _void,
})

const cPallet_schedulerScheduled = Struct({
  maybe_id: cOption,
  priority: u8,
  call: cFrame_supportTraitsPreimagesBounded,
  maybe_periodic: cOption,
  origin: cPolkadot_runtimeOriginCaller,
})

const cdc452 = Vector(cOption)

const cPallet_preimageRequestStatus = Enum({
  Unrequested: Struct({ deposit: cdc70, len: u32 }),
  Requested: Struct({ deposit: cOption, count: u32, len: cOption }),
})

const cdc456 = Tuple(cdc1, u32)

const cdc460 = Tuple(cdc1, u64)

const cdc461 = Vector(cdc460)

const cdc196 = Tuple(u64, u64)

const cSp_consensus_babeAllowedSlots = Enum({
  PrimarySlots: _void,
  PrimaryAndSecondaryPlainSlots: _void,
  PrimaryAndSecondaryVRFSlots: _void,
})

const cSp_consensus_babeDigestsNextConfigDescriptor = Enum({
  V1: Struct({ c: cdc196, allowed_slots: cSp_consensus_babeAllowedSlots }),
})

const cdc463 = Vector(cdc1)

const cSp_consensus_babeDigestsPrimaryPreDigest = Struct({
  authority_index: u32,
  slot: u64,
  vrf_output: cdc1,
  vrf_proof: cdc105,
})

const cSp_consensus_babeDigestsSecondaryPlainPreDigest = Struct({
  authority_index: u32,
  slot: u64,
})

const cSp_consensus_babeDigestsSecondaryVRFPreDigest = Struct({
  authority_index: u32,
  slot: u64,
  vrf_output: cdc1,
  vrf_proof: cdc105,
})

const cSp_consensus_babeDigestsPreDigest = Enum({
  Primary: cSp_consensus_babeDigestsPrimaryPreDigest,
  SecondaryPlain: cSp_consensus_babeDigestsSecondaryPlainPreDigest,
  SecondaryVRF: cSp_consensus_babeDigestsSecondaryVRFPreDigest,
})

const cSp_consensus_babeBabeEpochConfiguration = Struct({
  c: cdc196,
  allowed_slots: cSp_consensus_babeAllowedSlots,
})

const cdc471 = Tuple(cdc1, u128, bool)

const cPallet_balancesReasons = Enum({ Fee: _void, Misc: _void, All: _void })

const cPallet_balancesBalanceLock = Struct({
  id: cdc142,
  amount: u128,
  reasons: cPallet_balancesReasons,
})

const cdc476 = Vector(cPallet_balancesBalanceLock)

const cPallet_balancesReserveData = Struct({ id: cdc142, amount: u128 })

const cdc479 = Vector(cPallet_balancesReserveData)

const cPallet_transaction_paymentReleases = Enum({
  V1Ancient: _void,
  V2: _void,
})

const cPallet_authorshipUncleEntryItem = Enum({
  InclusionHeight: u32,
  Uncle: Tuple(cdc1, cOption),
})

const cdc485 = Vector(cPallet_authorshipUncleEntryItem)

const cdc209 = Vector(cdc1)

const cPallet_stakingUnlockChunk = Struct({
  value: compactBn,
  era: compactNumber,
})

const cdc490 = Vector(cPallet_stakingUnlockChunk)

const cPallet_stakingStakingLedger = Struct({
  stash: cdc1,
  total: compactBn,
  active: compactBn,
  unlocking: cdc490,
  claimed_rewards: cdc97,
})

const cPallet_stakingRewardDestination = Enum({
  Staked: _void,
  Stash: _void,
  Controller: _void,
  Account: cdc1,
  None: _void,
})

const cPallet_stakingNominations = Struct({
  targets: cdc209,
  submitted_in: u32,
  suppressed: bool,
})

const cPallet_stakingActiveEraInfo = Struct({ index: u32, start: cOption })

const cdc496 = Tuple(u32, cdc1)

const cdc500 = Tuple(cdc1, u32)

const cdc499 = Vector(cdc500)

const cPallet_stakingEraRewardPoints = Struct({
  total: u32,
  individual: cdc499,
})

const cPallet_stakingUnappliedSlash = Struct({
  validator: cdc1,
  own: u128,
  others: cdc69,
  reporters: cdc209,
  payout: u128,
})

const cdc501 = Vector(cPallet_stakingUnappliedSlash)

const cdc503 = Tuple(u32, u128)

const cPallet_stakingSlashingSlashingSpans = Struct({
  span_index: u32,
  last_start: u32,
  last_nonzero_slash: u32,
  prior: cdc97,
})

const cPallet_stakingSlashingSpanRecord = Struct({
  slashed: u128,
  paid_out: u128,
})

const cdc507 = Tuple(u32, bool)

const cdc506 = Vector(cdc507)

const cSp_stakingOffenceOffenceDetails = Struct({
  offender: cdc57,
  reporters: cdc209,
})

const cdc510 = Tuple(cdc46, cdc12)

const cPolkadot_runtimeSessionKeys = Struct({
  grandpa: cdc1,
  babe: cdc1,
  im_online: cdc1,
  para_validator: cdc1,
  para_assignment: cdc1,
  authority_discovery: cdc1,
})

const cdc512 = Tuple(cdc1, cPolkadot_runtimeSessionKeys)

const cdc511 = Vector(cdc512)

const cdc513 = Tuple(cdc16, cdc12)

const cPallet_grandpaStoredState = Enum({
  Live: _void,
  PendingPause: Struct({ scheduled_at: u32, delay: u32 }),
  Paused: _void,
  PendingResume: Struct({ scheduled_at: u32, delay: u32 }),
})

const cPallet_grandpaStoredPendingChange = Struct({
  scheduled_at: u32,
  delay: u32,
  next_authorities: cdc49,
  forced: cOption,
})

const cdc521 = Vector(cdc1)

const cdc526 = Vector(cdc12)

const cPallet_im_onlineBoundedOpaqueNetworkState = Struct({
  peer_id: cdc12,
  external_addresses: cdc526,
})

const cFrame_supportTraitsMiscWrapperOpaque = Tuple(
  compactNumber,
  cPallet_im_onlineBoundedOpaqueNetworkState,
)

const cdc529 = Tuple(u32, cFrame_supportTraitsPreimagesBounded, cdc1)

const cdc530 = Vector(cdc529)

const cdc531 = Tuple(cdc209, u128)

const cPallet_democracyTypesTally = Struct({
  ayes: u128,
  nays: u128,
  turnout: u128,
})

const cPallet_democracyTypesReferendumStatus = Struct({
  end: u32,
  proposal: cFrame_supportTraitsPreimagesBounded,
  threshold: cPallet_democracyVote_thresholdVoteThreshold,
  delay: u32,
  tally: cPallet_democracyTypesTally,
})

const cPallet_democracyTypesReferendumInfo = Enum({
  Ongoing: cPallet_democracyTypesReferendumStatus,
  Finished: Struct({ approved: bool, end: u32 }),
})

const cdc538 = Tuple(u32, cPallet_democracyVoteAccountVote)

const cdc539 = Vector(cdc538)

const cPallet_democracyTypesDelegations = Struct({ votes: u128, capital: u128 })

const cPallet_democracyVotePriorLock = Tuple(u32, u128)

const cPallet_democracyConvictionConviction = Enum({
  None: _void,
  Locked1x: _void,
  Locked2x: _void,
  Locked3x: _void,
  Locked4x: _void,
  Locked5x: _void,
  Locked6x: _void,
})

const cPallet_democracyVoteVoting = Enum({
  Direct: Struct({
    votes: cdc539,
    delegations: cPallet_democracyTypesDelegations,
    prior: cPallet_democracyVotePriorLock,
  }),
  Delegating: Struct({
    balance: u128,
    target: cdc1,
    conviction: cPallet_democracyConvictionConviction,
    delegations: cPallet_democracyTypesDelegations,
    prior: cPallet_democracyVotePriorLock,
  }),
})

const cdc542 = Tuple(
  cFrame_supportTraitsPreimagesBounded,
  cPallet_democracyVote_thresholdVoteThreshold,
)

const cdc543 = Tuple(u32, cdc209)

const cdc166 = Tuple(cdc12, cdc12)

const cdc165 = Vector(cdc166)

const cdc167 = Vector(cdc12)

const cFrame_systemPalletCall = Enum({
  remark: cdc12,
  set_heap_pages: u64,
  set_code: cdc12,
  set_code_without_checks: cdc12,
  set_storage: cdc165,
  kill_storage: cdc167,
  kill_prefix: Struct({ prefix: cdc12, subkeys: u32 }),
  remark_with_event: cdc12,
})

const circularcPolkadot_runtimeRuntimeCall: Codec<
  () => typeof cPolkadot_runtimeRuntimeCall extends Codec<infer V> ? V : unknown
> = lazy(() => cPolkadot_runtimeRuntimeCall)

const cPallet_schedulerPalletCall = Enum({
  schedule: Struct({
    when: u32,
    maybe_periodic: cOption,
    priority: u8,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  cancel: Struct({ when: u32, index: u32 }),
  schedule_named: Struct({
    id: cdc1,
    when: u32,
    maybe_periodic: cOption,
    priority: u8,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  cancel_named: cdc1,
  schedule_after: Struct({
    after: u32,
    maybe_periodic: cOption,
    priority: u8,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  schedule_named_after: Struct({
    id: cdc1,
    after: u32,
    maybe_periodic: cOption,
    priority: u8,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
})

const cPallet_preimagePalletCall = Enum({
  note_preimage: cdc12,
  unnote_preimage: cdc1,
  request_preimage: cdc1,
  unrequest_preimage: cdc1,
})

const cSp_runtimeGenericHeaderHeader = Struct({
  parent_hash: cdc1,
  number: compactNumber,
  state_root: cdc1,
  extrinsics_root: cdc1,
  digest: cdc14,
})

const cSp_consensus_slotsEquivocationProof = Struct({
  offender: cdc1,
  slot: u64,
  first_header: cSp_runtimeGenericHeaderHeader,
  second_header: cSp_runtimeGenericHeaderHeader,
})

const cSp_sessionMembershipProof = Struct({
  session: u32,
  trie_nodes: cdc167,
  validator_count: u32,
})

const cPallet_babePalletCall = Enum({
  report_equivocation: Struct({
    equivocation_proof: cSp_consensus_slotsEquivocationProof,
    key_owner_proof: cSp_sessionMembershipProof,
  }),
  report_equivocation_unsigned: Struct({
    equivocation_proof: cSp_consensus_slotsEquivocationProof,
    key_owner_proof: cSp_sessionMembershipProof,
  }),
  plan_config_change: cSp_consensus_babeDigestsNextConfigDescriptor,
})

const cPallet_timestampPalletCall = Enum({ set: compactBn })

const cSp_runtimeMultiaddressMultiAddress = Enum({
  Id: cdc1,
  Index: compactNumber,
  Raw: cdc12,
  Address32: cdc1,
  Address20: cdc75,
})

const cPallet_indicesPalletCall = Enum({
  claim: u32,
  transfer: Struct({ new: cSp_runtimeMultiaddressMultiAddress, index: u32 }),
  free: u32,
  force_transfer: Struct({
    new: cSp_runtimeMultiaddressMultiAddress,
    index: u32,
    freeze: bool,
  }),
  freeze: u32,
})

const cPallet_balancesPalletCall = Enum({
  transfer: Struct({
    dest: cSp_runtimeMultiaddressMultiAddress,
    value: compactBn,
  }),
  set_balance: Struct({
    who: cSp_runtimeMultiaddressMultiAddress,
    new_free: compactBn,
    new_reserved: compactBn,
  }),
  force_transfer: Struct({
    source: cSp_runtimeMultiaddressMultiAddress,
    dest: cSp_runtimeMultiaddressMultiAddress,
    value: compactBn,
  }),
  transfer_keep_alive: Struct({
    dest: cSp_runtimeMultiaddressMultiAddress,
    value: compactBn,
  }),
  transfer_all: Struct({
    dest: cSp_runtimeMultiaddressMultiAddress,
    keep_alive: bool,
  }),
  force_unreserve: Struct({
    who: cSp_runtimeMultiaddressMultiAddress,
    amount: u128,
  }),
})

const cdc204 = Vector(cSp_runtimeGenericHeaderHeader)

const cPallet_authorshipPalletCall = Enum({ set_uncles: cdc204 })

const cdc207 = Vector(cSp_runtimeMultiaddressMultiAddress)

const cPallet_stakingPalletPalletConfigOp = Enum({
  Noop: _void,
  Set: u128,
  Remove: _void,
})

const cPallet_stakingPalletPalletCall = Enum({
  bond: Struct({
    controller: cSp_runtimeMultiaddressMultiAddress,
    value: compactBn,
    payee: cPallet_stakingRewardDestination,
  }),
  bond_extra: compactBn,
  unbond: compactBn,
  withdraw_unbonded: u32,
  validate: cPallet_stakingValidatorPrefs,
  nominate: cdc207,
  chill: _void,
  set_payee: cPallet_stakingRewardDestination,
  set_controller: cSp_runtimeMultiaddressMultiAddress,
  set_validator_count: compactNumber,
  increase_validator_count: compactNumber,
  scale_validator_count: u8,
  force_no_eras: _void,
  force_new_era: _void,
  set_invulnerables: cdc209,
  force_unstake: Struct({ stash: cdc1, num_slashing_spans: u32 }),
  force_new_era_always: _void,
  cancel_deferred_slash: Struct({ era: u32, slash_indices: cdc97 }),
  payout_stakers: Struct({ validator_stash: cdc1, era: u32 }),
  rebond: compactBn,
  reap_stash: Struct({ stash: cdc1, num_slashing_spans: u32 }),
  kick: cdc207,
  set_staking_configs: Struct({
    min_nominator_bond: cPallet_stakingPalletPalletConfigOp,
    min_validator_bond: cPallet_stakingPalletPalletConfigOp,
    max_nominator_count: cPallet_stakingPalletPalletConfigOp,
    max_validator_count: cPallet_stakingPalletPalletConfigOp,
    chill_threshold: cPallet_stakingPalletPalletConfigOp,
    min_commission: cPallet_stakingPalletPalletConfigOp,
  }),
  chill_other: cdc1,
  force_apply_min_commission: cdc1,
  set_min_commission: u32,
})

const cPallet_sessionPalletCall = Enum({
  set_keys: Struct({ keys: cPolkadot_runtimeSessionKeys, proof: cdc12 }),
  purge_keys: _void,
})

const cFinality_grandpaPrevote = Struct({
  target_hash: cdc1,
  target_number: u32,
})

const cdc226 = Tuple(cFinality_grandpaPrevote, cdc105)

const cFinality_grandpaEquivocation = Struct({
  round_number: u64,
  identity: cdc1,
  first: cdc226,
  second: cdc226,
})

const cFinality_grandpaPrecommit = Struct({
  target_hash: cdc1,
  target_number: u32,
})

const cdc229 = Tuple(cFinality_grandpaPrecommit, cdc105)

const cSp_finality_grandpaEquivocation = Enum({
  Prevote: cFinality_grandpaEquivocation,
  Precommit: cFinality_grandpaEquivocation,
})

const cSp_finality_grandpaEquivocationProof = Struct({
  set_id: u64,
  equivocation: cSp_finality_grandpaEquivocation,
})

const cPallet_grandpaPalletCall = Enum({
  report_equivocation: Struct({
    equivocation_proof: cSp_finality_grandpaEquivocationProof,
    key_owner_proof: cSp_sessionMembershipProof,
  }),
  report_equivocation_unsigned: Struct({
    equivocation_proof: cSp_finality_grandpaEquivocationProof,
    key_owner_proof: cSp_sessionMembershipProof,
  }),
  note_stalled: Struct({ delay: u32, best_finalized_block_number: u32 }),
})

const cdc234 = Vector(cdc12)

const cSp_coreOffchainOpaqueNetworkState = Struct({
  peer_id: cdc12,
  external_addresses: cdc234,
})

const cPallet_im_onlineHeartbeat = Struct({
  block_number: u32,
  network_state: cSp_coreOffchainOpaqueNetworkState,
  session_index: u32,
  authority_index: u32,
  validators_len: u32,
})

const cPallet_im_onlinePalletCall = Enum({
  heartbeat: Struct({
    heartbeat: cPallet_im_onlineHeartbeat,
    signature: cdc105,
  }),
})

const cPallet_democracyPalletCall = Enum({
  propose: Struct({
    proposal: cFrame_supportTraitsPreimagesBounded,
    value: compactBn,
  }),
  second: compactNumber,
  vote: Struct({
    ref_index: compactNumber,
    vote: cPallet_democracyVoteAccountVote,
  }),
  emergency_cancel: u32,
  external_propose: cFrame_supportTraitsPreimagesBounded,
  external_propose_majority: cFrame_supportTraitsPreimagesBounded,
  external_propose_default: cFrame_supportTraitsPreimagesBounded,
  fast_track: Struct({ proposal_hash: cdc1, voting_period: u32, delay: u32 }),
  veto_external: cdc1,
  cancel_referendum: compactNumber,
  delegate: Struct({
    to: cSp_runtimeMultiaddressMultiAddress,
    conviction: cPallet_democracyConvictionConviction,
    balance: u128,
  }),
  undelegate: _void,
  clear_public_proposals: _void,
  unlock: cSp_runtimeMultiaddressMultiAddress,
  remove_vote: u32,
  remove_other_vote: Struct({
    target: cSp_runtimeMultiaddressMultiAddress,
    index: u32,
  }),
  blacklist: Struct({ proposal_hash: cdc1, maybe_ref_index: cOption }),
  cancel_proposal: compactNumber,
})

const cPallet_collectivePalletCall = Enum({
  set_members: Struct({ new_members: cdc209, prime: cOption, old_count: u32 }),
  execute: Struct({
    proposal: circularcPolkadot_runtimeRuntimeCall,
    length_bound: compactNumber,
  }),
  propose: Struct({
    threshold: compactNumber,
    proposal: circularcPolkadot_runtimeRuntimeCall,
    length_bound: compactNumber,
  }),
  vote: Struct({ proposal: cdc1, index: compactNumber, approve: bool }),
  close_old_weight: Struct({
    proposal_hash: cdc1,
    index: compactNumber,
    proposal_weight_bound: compactBn,
    length_bound: compactNumber,
  }),
  disapprove_proposal: cdc1,
  close: Struct({
    proposal_hash: cdc1,
    index: compactNumber,
    proposal_weight_bound: cSp_weightsWeight_v2Weight,
    length_bound: compactNumber,
  }),
})

const cPallet_elections_phragmenRenouncing = Enum({
  Member: _void,
  RunnerUp: _void,
  Candidate: compactNumber,
})

const cPallet_elections_phragmenPalletCall = Enum({
  vote: Struct({ votes: cdc209, value: compactBn }),
  remove_voter: _void,
  submit_candidacy: compactNumber,
  renounce_candidacy: cPallet_elections_phragmenRenouncing,
  remove_member: Struct({
    who: cSp_runtimeMultiaddressMultiAddress,
    slash_bond: bool,
    rerun_election: bool,
  }),
  clean_defunct_voters: Struct({ num_voters: u32, num_defunct: u32 }),
})

const cPallet_membershipPalletCall = Enum({
  add_member: cSp_runtimeMultiaddressMultiAddress,
  remove_member: cSp_runtimeMultiaddressMultiAddress,
  swap_member: Struct({
    remove: cSp_runtimeMultiaddressMultiAddress,
    add: cSp_runtimeMultiaddressMultiAddress,
  }),
  reset_members: cdc209,
  change_key: cSp_runtimeMultiaddressMultiAddress,
  set_prime: cSp_runtimeMultiaddressMultiAddress,
  clear_prime: _void,
})

const cPallet_treasuryPalletCall = Enum({
  propose_spend: Struct({
    value: compactBn,
    beneficiary: cSp_runtimeMultiaddressMultiAddress,
  }),
  reject_proposal: compactNumber,
  approve_proposal: compactNumber,
  spend: Struct({
    amount: compactBn,
    beneficiary: cSp_runtimeMultiaddressMultiAddress,
  }),
  remove_approval: compactNumber,
})

const cdc250 = Bytes(65)

const cdc252 = Tuple(u128, u128, u32)

const cPolkadot_runtime_commonClaimsStatementKind = Enum({
  Regular: _void,
  Saft: _void,
})

const cPolkadot_runtime_commonClaimsPalletCall = Enum({
  claim: Struct({ dest: cdc1, ethereum_signature: cdc250 }),
  mint_claim: Struct({
    who: cdc75,
    value: u128,
    vesting_schedule: cOption,
    statement: cOption,
  }),
  claim_attest: Struct({
    dest: cdc1,
    ethereum_signature: cdc250,
    statement: cdc12,
  }),
  attest: cdc12,
  move_claim: Struct({ old: cdc75, new: cdc75, maybe_preclaim: cOption }),
})

const cPallet_vestingVesting_infoVestingInfo = Struct({
  locked: u128,
  per_block: u128,
  starting_block: u32,
})

const cPallet_vestingPalletCall = Enum({
  vest: _void,
  vest_other: cSp_runtimeMultiaddressMultiAddress,
  vested_transfer: Struct({
    target: cSp_runtimeMultiaddressMultiAddress,
    schedule: cPallet_vestingVesting_infoVestingInfo,
  }),
  force_vested_transfer: Struct({
    source: cSp_runtimeMultiaddressMultiAddress,
    target: cSp_runtimeMultiaddressMultiAddress,
    schedule: cPallet_vestingVesting_infoVestingInfo,
  }),
  merge_schedules: Struct({ schedule1_index: u32, schedule2_index: u32 }),
})

const cdc258 = Vector(circularcPolkadot_runtimeRuntimeCall)

const cPallet_utilityPalletCall = Enum({
  batch: cdc258,
  as_derivative: Struct({
    index: u16,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  batch_all: cdc258,
  dispatch_as: Struct({
    as_origin: cPolkadot_runtimeOriginCaller,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  force_batch: cdc258,
  with_weight: Struct({
    call: circularcPolkadot_runtimeRuntimeCall,
    weight: cSp_weightsWeight_v2Weight,
  }),
})

const cdc271 = Bytes(0)

const cdc272 = Bytes(1)

const cdc273 = Bytes(2)

const cdc274 = Bytes(3)

const cdc275 = Bytes(5)

const cdc276 = Bytes(6)

const cdc277 = Bytes(7)

const cdc278 = Bytes(9)

const cdc279 = Bytes(10)

const cdc280 = Bytes(11)

const cdc281 = Bytes(12)

const cdc282 = Bytes(13)

const cdc283 = Bytes(14)

const cdc284 = Bytes(15)

const cdc285 = Bytes(17)

const cdc286 = Bytes(18)

const cdc287 = Bytes(19)

const cdc288 = Bytes(21)

const cdc289 = Bytes(22)

const cdc290 = Bytes(23)

const cdc291 = Bytes(24)

const cdc292 = Bytes(25)

const cdc293 = Bytes(26)

const cdc294 = Bytes(27)

const cdc295 = Bytes(28)

const cdc296 = Bytes(29)

const cdc297 = Bytes(30)

const cdc298 = Bytes(31)

const cPallet_identityTypesData = Enum({
  None: _void,
  Raw0: cdc271,
  Raw1: cdc272,
  Raw2: cdc273,
  Raw3: cdc274,
  Raw4: cdc16,
  Raw5: cdc275,
  Raw6: cdc276,
  Raw7: cdc277,
  Raw8: cdc142,
  Raw9: cdc278,
  Raw10: cdc279,
  Raw11: cdc280,
  Raw12: cdc281,
  Raw13: cdc282,
  Raw14: cdc283,
  Raw15: cdc284,
  Raw16: cdc46,
  Raw17: cdc285,
  Raw18: cdc286,
  Raw19: cdc287,
  Raw20: cdc75,
  Raw21: cdc288,
  Raw22: cdc289,
  Raw23: cdc290,
  Raw24: cdc291,
  Raw25: cdc292,
  Raw26: cdc293,
  Raw27: cdc294,
  Raw28: cdc295,
  Raw29: cdc296,
  Raw30: cdc297,
  Raw31: cdc298,
  Raw32: cdc1,
  BlakeTwo256: cdc1,
  Sha256: cdc1,
  Keccak256: cdc1,
  ShaThree256: cdc1,
})

const cdc269 = Tuple(cPallet_identityTypesData, cPallet_identityTypesData)

const cdc299 = Vector(cdc269)

const cPallet_identityTypesIdentityInfo = Struct({
  additional: cdc299,
  display: cPallet_identityTypesData,
  legal: cPallet_identityTypesData,
  web: cPallet_identityTypesData,
  riot: cPallet_identityTypesData,
  email: cPallet_identityTypesData,
  pgp_fingerprint: cOption,
  image: cPallet_identityTypesData,
  twitter: cPallet_identityTypesData,
})

const cdc302 = Tuple(cdc1, cPallet_identityTypesData)

const cdc301 = Vector(cdc302)

const cPallet_identityTypesJudgement = Enum({
  Unknown: _void,
  FeePaid: u128,
  Reasonable: _void,
  KnownGood: _void,
  OutOfDate: _void,
  LowQuality: _void,
  Erroneous: _void,
})

const cPallet_identityPalletCall = Enum({
  add_registrar: cSp_runtimeMultiaddressMultiAddress,
  set_identity: cPallet_identityTypesIdentityInfo,
  set_subs: cdc301,
  clear_identity: _void,
  request_judgement: Struct({ reg_index: compactNumber, max_fee: compactBn }),
  cancel_request: u32,
  set_fee: Struct({ index: compactNumber, fee: compactBn }),
  set_account_id: Struct({
    index: compactNumber,
    new: cSp_runtimeMultiaddressMultiAddress,
  }),
  set_fields: Struct({ index: compactNumber, fields: u64 }),
  provide_judgement: Struct({
    reg_index: compactNumber,
    target: cSp_runtimeMultiaddressMultiAddress,
    judgement: cPallet_identityTypesJudgement,
    identity: cdc1,
  }),
  kill_identity: cSp_runtimeMultiaddressMultiAddress,
  add_sub: Struct({
    sub: cSp_runtimeMultiaddressMultiAddress,
    data: cPallet_identityTypesData,
  }),
  rename_sub: Struct({
    sub: cSp_runtimeMultiaddressMultiAddress,
    data: cPallet_identityTypesData,
  }),
  remove_sub: cSp_runtimeMultiaddressMultiAddress,
  quit_sub: _void,
})

const cPallet_proxyPalletCall = Enum({
  proxy: Struct({
    real: cSp_runtimeMultiaddressMultiAddress,
    force_proxy_type: cOption,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  add_proxy: Struct({
    delegate: cSp_runtimeMultiaddressMultiAddress,
    proxy_type: cPolkadot_runtimeProxyType,
    delay: u32,
  }),
  remove_proxy: Struct({
    delegate: cSp_runtimeMultiaddressMultiAddress,
    proxy_type: cPolkadot_runtimeProxyType,
    delay: u32,
  }),
  remove_proxies: _void,
  create_pure: Struct({
    proxy_type: cPolkadot_runtimeProxyType,
    delay: u32,
    index: u16,
  }),
  kill_pure: Struct({
    spawner: cSp_runtimeMultiaddressMultiAddress,
    proxy_type: cPolkadot_runtimeProxyType,
    index: u16,
    height: compactNumber,
    ext_index: compactNumber,
  }),
  announce: Struct({
    real: cSp_runtimeMultiaddressMultiAddress,
    call_hash: cdc1,
  }),
  remove_announcement: Struct({
    real: cSp_runtimeMultiaddressMultiAddress,
    call_hash: cdc1,
  }),
  reject_announcement: Struct({
    delegate: cSp_runtimeMultiaddressMultiAddress,
    call_hash: cdc1,
  }),
  proxy_announced: Struct({
    delegate: cSp_runtimeMultiaddressMultiAddress,
    real: cSp_runtimeMultiaddressMultiAddress,
    force_proxy_type: cOption,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
})

const cPallet_multisigPalletCall = Enum({
  as_multi_threshold_1: Struct({
    other_signatories: cdc209,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  as_multi: Struct({
    threshold: u16,
    other_signatories: cdc209,
    maybe_timepoint: cOption,
    call: circularcPolkadot_runtimeRuntimeCall,
    max_weight: cSp_weightsWeight_v2Weight,
  }),
  approve_as_multi: Struct({
    threshold: u16,
    other_signatories: cdc209,
    maybe_timepoint: cOption,
    call_hash: cdc1,
    max_weight: cSp_weightsWeight_v2Weight,
  }),
  cancel_as_multi: Struct({
    threshold: u16,
    other_signatories: cdc209,
    timepoint: cPallet_multisigTimepoint,
    call_hash: cdc1,
  }),
})

const cPallet_bountiesPalletCall = Enum({
  propose_bounty: Struct({ value: compactBn, description: cdc12 }),
  approve_bounty: compactNumber,
  propose_curator: Struct({
    bounty_id: compactNumber,
    curator: cSp_runtimeMultiaddressMultiAddress,
    fee: compactBn,
  }),
  unassign_curator: compactNumber,
  accept_curator: compactNumber,
  award_bounty: Struct({
    bounty_id: compactNumber,
    beneficiary: cSp_runtimeMultiaddressMultiAddress,
  }),
  claim_bounty: compactNumber,
  close_bounty: compactNumber,
  extend_bounty_expiry: Struct({ bounty_id: compactNumber, remark: cdc12 }),
})

const cPallet_child_bountiesPalletCall = Enum({
  add_child_bounty: Struct({
    parent_bounty_id: compactNumber,
    value: compactBn,
    description: cdc12,
  }),
  propose_curator: Struct({
    parent_bounty_id: compactNumber,
    child_bounty_id: compactNumber,
    curator: cSp_runtimeMultiaddressMultiAddress,
    fee: compactBn,
  }),
  accept_curator: Struct({
    parent_bounty_id: compactNumber,
    child_bounty_id: compactNumber,
  }),
  unassign_curator: Struct({
    parent_bounty_id: compactNumber,
    child_bounty_id: compactNumber,
  }),
  award_child_bounty: Struct({
    parent_bounty_id: compactNumber,
    child_bounty_id: compactNumber,
    beneficiary: cSp_runtimeMultiaddressMultiAddress,
  }),
  claim_child_bounty: Struct({
    parent_bounty_id: compactNumber,
    child_bounty_id: compactNumber,
  }),
  close_child_bounty: Struct({
    parent_bounty_id: compactNumber,
    child_bounty_id: compactNumber,
  }),
})

const cPallet_tipsPalletCall = Enum({
  report_awesome: Struct({
    reason: cdc12,
    who: cSp_runtimeMultiaddressMultiAddress,
  }),
  retract_tip: cdc1,
  tip_new: Struct({
    reason: cdc12,
    who: cSp_runtimeMultiaddressMultiAddress,
    tip_value: compactBn,
  }),
  tip: Struct({ hash: cdc1, tip_value: compactBn }),
  close_tip: cdc1,
  slash_tip: cdc1,
})

const cdc317 = Tuple(compactNumber, compactNumber)

const cdc316 = Vector(cdc317)

const cdc321 = Tuple(compactNumber, compactNumber)

const cdc320 = Tuple(compactNumber, cdc321, compactNumber)

const cdc319 = Vector(cdc320)

const cdc326 = Vector(cdc321, 2)

const cdc325 = Tuple(compactNumber, cdc326, compactNumber)

const cdc324 = Vector(cdc325)

const cdc329 = Vector(cdc321, 3)

const cdc328 = Tuple(compactNumber, cdc329, compactNumber)

const cdc327 = Vector(cdc328)

const cdc332 = Vector(cdc321, 4)

const cdc331 = Tuple(compactNumber, cdc332, compactNumber)

const cdc330 = Vector(cdc331)

const cdc335 = Vector(cdc321, 5)

const cdc334 = Tuple(compactNumber, cdc335, compactNumber)

const cdc333 = Vector(cdc334)

const cdc338 = Vector(cdc321, 6)

const cdc337 = Tuple(compactNumber, cdc338, compactNumber)

const cdc336 = Vector(cdc337)

const cdc341 = Vector(cdc321, 7)

const cdc340 = Tuple(compactNumber, cdc341, compactNumber)

const cdc339 = Vector(cdc340)

const cdc344 = Vector(cdc321, 8)

const cdc343 = Tuple(compactNumber, cdc344, compactNumber)

const cdc342 = Vector(cdc343)

const cdc347 = Vector(cdc321, 9)

const cdc346 = Tuple(compactNumber, cdc347, compactNumber)

const cdc345 = Vector(cdc346)

const cdc350 = Vector(cdc321, 10)

const cdc349 = Tuple(compactNumber, cdc350, compactNumber)

const cdc348 = Vector(cdc349)

const cdc353 = Vector(cdc321, 11)

const cdc352 = Tuple(compactNumber, cdc353, compactNumber)

const cdc351 = Vector(cdc352)

const cdc356 = Vector(cdc321, 12)

const cdc355 = Tuple(compactNumber, cdc356, compactNumber)

const cdc354 = Vector(cdc355)

const cdc359 = Vector(cdc321, 13)

const cdc358 = Tuple(compactNumber, cdc359, compactNumber)

const cdc357 = Vector(cdc358)

const cdc362 = Vector(cdc321, 14)

const cdc361 = Tuple(compactNumber, cdc362, compactNumber)

const cdc360 = Vector(cdc361)

const cdc365 = Vector(cdc321, 15)

const cdc364 = Tuple(compactNumber, cdc365, compactNumber)

const cdc363 = Vector(cdc364)

const cPolkadot_runtimeNposCompactSolution16 = Struct({
  votes1: cdc316,
  votes2: cdc319,
  votes3: cdc324,
  votes4: cdc327,
  votes5: cdc330,
  votes6: cdc333,
  votes7: cdc336,
  votes8: cdc339,
  votes9: cdc342,
  votes10: cdc345,
  votes11: cdc348,
  votes12: cdc351,
  votes13: cdc354,
  votes14: cdc357,
  votes15: cdc360,
  votes16: cdc363,
})

const cPallet_election_provider_multi_phaseRawSolution = Struct({
  solution: cPolkadot_runtimeNposCompactSolution16,
  score: cSp_npos_electionsElectionScore,
  round: u32,
})

const cPallet_election_provider_multi_phaseSolutionOrSnapshotSize = Struct({
  voters: compactNumber,
  targets: compactNumber,
})

const cSp_npos_electionsSupport = Struct({ total: u128, voters: cdc69 })

const cdc369 = Tuple(cdc1, cSp_npos_electionsSupport)

const cdc368 = Vector(cdc369)

const cPallet_election_provider_multi_phasePalletCall = Enum({
  submit_unsigned: Struct({
    raw_solution: cPallet_election_provider_multi_phaseRawSolution,
    witness: cPallet_election_provider_multi_phaseSolutionOrSnapshotSize,
  }),
  set_minimum_untrusted_score: cOption,
  set_emergency_election_result: cdc368,
  submit: cPallet_election_provider_multi_phaseRawSolution,
  governance_fallback: Struct({
    maybe_max_voters: cOption,
    maybe_max_targets: cOption,
  }),
})

const cPallet_bags_listPalletCall = Enum({
  rebag: cSp_runtimeMultiaddressMultiAddress,
  put_in_front_of: cSp_runtimeMultiaddressMultiAddress,
})

const cPallet_nomination_poolsBondExtra = Enum({
  FreeBalance: u128,
  Rewards: _void,
})

const cPallet_nomination_poolsConfigOp = Enum({
  Noop: _void,
  Set: u128,
  Remove: _void,
})

const cPallet_nomination_poolsPalletCall = Enum({
  join: Struct({ amount: compactBn, pool_id: u32 }),
  bond_extra: cPallet_nomination_poolsBondExtra,
  claim_payout: _void,
  unbond: Struct({
    member_account: cSp_runtimeMultiaddressMultiAddress,
    unbonding_points: compactBn,
  }),
  pool_withdraw_unbonded: Struct({ pool_id: u32, num_slashing_spans: u32 }),
  withdraw_unbonded: Struct({
    member_account: cSp_runtimeMultiaddressMultiAddress,
    num_slashing_spans: u32,
  }),
  create: Struct({
    amount: compactBn,
    root: cSp_runtimeMultiaddressMultiAddress,
    nominator: cSp_runtimeMultiaddressMultiAddress,
    state_toggler: cSp_runtimeMultiaddressMultiAddress,
  }),
  create_with_pool_id: Struct({
    amount: compactBn,
    root: cSp_runtimeMultiaddressMultiAddress,
    nominator: cSp_runtimeMultiaddressMultiAddress,
    state_toggler: cSp_runtimeMultiaddressMultiAddress,
    pool_id: u32,
  }),
  nominate: Struct({ pool_id: u32, validators: cdc209 }),
  set_state: Struct({ pool_id: u32, state: cPallet_nomination_poolsPoolState }),
  set_metadata: Struct({ pool_id: u32, metadata: cdc12 }),
  set_configs: Struct({
    min_join_bond: cPallet_nomination_poolsConfigOp,
    min_create_bond: cPallet_nomination_poolsConfigOp,
    max_pools: cPallet_nomination_poolsConfigOp,
    max_members: cPallet_nomination_poolsConfigOp,
    max_members_per_pool: cPallet_nomination_poolsConfigOp,
  }),
  update_roles: Struct({
    pool_id: u32,
    new_root: cPallet_nomination_poolsConfigOp,
    new_nominator: cPallet_nomination_poolsConfigOp,
    new_state_toggler: cPallet_nomination_poolsConfigOp,
  }),
  chill: u32,
})

const cPallet_fast_unstakePalletCall = Enum({
  register_fast_unstake: _void,
  deregister: _void,
  control: u32,
})

const cPolkadot_runtime_parachainsConfigurationPalletCall = Enum({
  set_validation_upgrade_cooldown: u32,
  set_validation_upgrade_delay: u32,
  set_code_retention_period: u32,
  set_max_code_size: u32,
  set_max_pov_size: u32,
  set_max_head_data_size: u32,
  set_parathread_cores: u32,
  set_parathread_retries: u32,
  set_group_rotation_frequency: u32,
  set_chain_availability_period: u32,
  set_thread_availability_period: u32,
  set_scheduling_lookahead: u32,
  set_max_validators_per_core: cOption,
  set_max_validators: cOption,
  set_dispute_period: u32,
  set_dispute_post_conclusion_acceptance_period: u32,
  set_dispute_conclusion_by_time_out_period: u32,
  set_no_show_slots: u32,
  set_n_delay_tranches: u32,
  set_zeroth_delay_tranche_width: u32,
  set_needed_approvals: u32,
  set_relay_vrf_modulo_samples: u32,
  set_max_upward_queue_count: u32,
  set_max_upward_queue_size: u32,
  set_max_downward_message_size: u32,
  set_ump_service_total_weight: cSp_weightsWeight_v2Weight,
  set_max_upward_message_size: u32,
  set_max_upward_message_num_per_candidate: u32,
  set_hrmp_open_request_ttl: u32,
  set_hrmp_sender_deposit: u128,
  set_hrmp_recipient_deposit: u128,
  set_hrmp_channel_max_capacity: u32,
  set_hrmp_channel_max_total_size: u32,
  set_hrmp_max_parachain_inbound_channels: u32,
  set_hrmp_max_parathread_inbound_channels: u32,
  set_hrmp_channel_max_message_size: u32,
  set_hrmp_max_parachain_outbound_channels: u32,
  set_hrmp_max_parathread_outbound_channels: u32,
  set_hrmp_max_message_num_per_candidate: u32,
  set_ump_max_individual_weight: cSp_weightsWeight_v2Weight,
  set_pvf_checking_enabled: bool,
  set_pvf_voting_ttl: u32,
  set_minimum_validation_upgrade_delay: u32,
  set_bypass_consistency_check: bool,
})

const cdc386 = Bytes()

const cPolkadot_primitivesV2SignedUncheckedSigned = Struct({
  payload: cdc386,
  validator_index: u32,
  signature: cdc105,
})

const cdc383 = Vector(cPolkadot_primitivesV2SignedUncheckedSigned)

const cPolkadot_core_primitivesOutboundHrmpMessage = Struct({
  recipient: u32,
  data: cdc12,
})

const cdc394 = Vector(cPolkadot_core_primitivesOutboundHrmpMessage)

const cPolkadot_primitivesV2CandidateCommitments = Struct({
  upward_messages: cdc167,
  horizontal_messages: cdc394,
  new_validation_code: cOption,
  head_data: cdc12,
  processed_downward_messages: u32,
  hrmp_watermark: u32,
})

const cPolkadot_primitivesV2CommittedCandidateReceipt = Struct({
  descriptor: cPolkadot_primitivesV2CandidateDescriptor,
  commitments: cPolkadot_primitivesV2CandidateCommitments,
})

const cPolkadot_primitivesV2ValidityAttestation = Enum({
  Implicit: cdc105,
  Explicit: cdc105,
})

const cdc398 = Vector(cPolkadot_primitivesV2ValidityAttestation)

const cPolkadot_primitivesV2BackedCandidate = Struct({
  candidate: cPolkadot_primitivesV2CommittedCandidateReceipt,
  validity_votes: cdc398,
  validator_indices: cdc386,
})

const cdc390 = Vector(cPolkadot_primitivesV2BackedCandidate)

const cPolkadot_primitivesV2ValidDisputeStatementKind = Enum({
  Explicit: _void,
  BackingSeconded: cdc1,
  BackingValid: cdc1,
  ApprovalChecking: _void,
})

const cPolkadot_primitivesV2InvalidDisputeStatementKind = Enum({
  Explicit: _void,
})

const cPolkadot_primitivesV2DisputeStatement = Enum({
  Valid: cPolkadot_primitivesV2ValidDisputeStatementKind,
  Invalid: cPolkadot_primitivesV2InvalidDisputeStatementKind,
})

const cdc403 = Tuple(cPolkadot_primitivesV2DisputeStatement, u32, cdc105)

const cdc402 = Vector(cdc403)

const cPolkadot_primitivesV2DisputeStatementSet = Struct({
  candidate_hash: cdc1,
  session: u32,
  statements: cdc402,
})

const cdc400 = Vector(cPolkadot_primitivesV2DisputeStatementSet)

const cPolkadot_primitivesV2InherentData = Struct({
  bitfields: cdc383,
  backed_candidates: cdc390,
  disputes: cdc400,
  parent_header: cSp_runtimeGenericHeaderHeader,
})

const cPolkadot_runtime_parachainsParas_inherentPalletCall = Enum({
  enter: cPolkadot_primitivesV2InherentData,
})

const cPolkadot_primitivesV2PvfCheckStatement = Struct({
  accept: bool,
  subject: cdc1,
  session_index: u32,
  validator_index: u32,
})

const cPolkadot_runtime_parachainsParasPalletCall = Enum({
  force_set_current_code: Struct({ para: u32, new_code: cdc12 }),
  force_set_current_head: Struct({ para: u32, new_head: cdc12 }),
  force_schedule_code_upgrade: Struct({
    para: u32,
    new_code: cdc12,
    relay_parent_number: u32,
  }),
  force_note_new_head: Struct({ para: u32, new_head: cdc12 }),
  force_queue_action: u32,
  add_trusted_validation_code: cdc12,
  poke_unused_validation_code: cdc1,
  include_pvf_check_statement: Struct({
    stmt: cPolkadot_primitivesV2PvfCheckStatement,
    signature: cdc105,
  }),
})

const cPolkadot_runtime_parachainsInitializerPalletCall = Enum({
  force_approve: u32,
})

const cPolkadot_runtime_parachainsUmpPalletCall = Enum({
  service_overweight: Struct({
    index: u64,
    weight_limit: cSp_weightsWeight_v2Weight,
  }),
})

const cPolkadot_runtime_parachainsHrmpPalletCall = Enum({
  hrmp_init_open_channel: Struct({
    recipient: u32,
    proposed_max_capacity: u32,
    proposed_max_message_size: u32,
  }),
  hrmp_accept_open_channel: u32,
  hrmp_close_channel: cPolkadot_parachainPrimitivesHrmpChannelId,
  force_clean_hrmp: Struct({ para: u32, inbound: u32, outbound: u32 }),
  force_process_hrmp_open: u32,
  force_process_hrmp_close: u32,
  hrmp_cancel_open_request: Struct({
    channel_id: cPolkadot_parachainPrimitivesHrmpChannelId,
    open_requests: u32,
  }),
  force_open_hrmp_channel: Struct({
    sender: u32,
    recipient: u32,
    max_capacity: u32,
    max_message_size: u32,
  }),
})

const cPolkadot_runtime_parachainsDisputesPalletCall = Enum({
  force_unfreeze: _void,
})

const cPolkadot_runtime_commonParas_registrarPalletCall = Enum({
  register: Struct({ id: u32, genesis_head: cdc12, validation_code: cdc12 }),
  force_register: Struct({
    who: cdc1,
    deposit: u128,
    id: u32,
    genesis_head: cdc12,
    validation_code: cdc12,
  }),
  deregister: u32,
  swap: Struct({ id: u32, other: u32 }),
  remove_lock: u32,
  reserve: _void,
  add_lock: u32,
  schedule_code_upgrade: Struct({ para: u32, new_code: cdc12 }),
  set_current_head: Struct({ para: u32, new_head: cdc12 }),
})

const cPolkadot_runtime_commonSlotsPalletCall = Enum({
  force_lease: Struct({
    para: u32,
    leaser: cdc1,
    amount: u128,
    period_begin: u32,
    period_count: u32,
  }),
  clear_all_leases: u32,
  trigger_onboard: u32,
})

const cPolkadot_runtime_commonAuctionsPalletCall = Enum({
  new_auction: Struct({
    duration: compactNumber,
    lease_period_index: compactNumber,
  }),
  bid: Struct({
    para: compactNumber,
    auction_index: compactNumber,
    first_slot: compactNumber,
    last_slot: compactNumber,
    amount: compactBn,
  }),
  cancel_auction: _void,
})

const cdc422 = Bytes(33)

const cSp_runtimeMultiSigner = Enum({
  Ed25519: cdc1,
  Sr25519: cdc1,
  Ecdsa: cdc422,
})

const cSp_runtimeMultiSignature = Enum({
  Ed25519: cdc105,
  Sr25519: cdc105,
  Ecdsa: cdc250,
})

const cPolkadot_runtime_commonCrowdloanPalletCall = Enum({
  create: Struct({
    index: compactNumber,
    cap: compactBn,
    first_period: compactNumber,
    last_period: compactNumber,
    end: compactNumber,
    verifier: cOption,
  }),
  contribute: Struct({
    index: compactNumber,
    value: compactBn,
    signature: cOption,
  }),
  withdraw: Struct({ who: cdc1, index: compactNumber }),
  refund: compactNumber,
  dissolve: compactNumber,
  edit: Struct({
    index: compactNumber,
    cap: compactBn,
    first_period: compactNumber,
    last_period: compactNumber,
    end: compactNumber,
    verifier: cOption,
  }),
  add_memo: Struct({ index: u32, memo: cdc12 }),
  poke: u32,
  contribute_all: Struct({ index: compactNumber, signature: cOption }),
})

const circularcdc429: Codec<
  () => typeof cdc429 extends Codec<infer V> ? V : unknown
> = lazy(() => cdc429)

const circularcXcmV0Xcm: Codec<
  () => typeof cXcmV0Xcm extends Codec<infer V> ? V : unknown
> = lazy(() => cXcmV0Xcm)

const cdc431 = Vector(circularcXcmV0Xcm)

const cXcmV0OrderOrder = Enum({
  Null: _void,
  DepositAsset: Struct({
    assets: cdc154,
    dest: cXcmV0Multi_locationMultiLocation,
  }),
  DepositReserveAsset: Struct({
    assets: cdc154,
    dest: cXcmV0Multi_locationMultiLocation,
    effects: circularcdc429,
  }),
  ExchangeAsset: Struct({ give: cdc154, receive: cdc154 }),
  InitiateReserveWithdraw: Struct({
    assets: cdc154,
    reserve: cXcmV0Multi_locationMultiLocation,
    effects: circularcdc429,
  }),
  InitiateTeleport: Struct({
    assets: cdc154,
    dest: cXcmV0Multi_locationMultiLocation,
    effects: circularcdc429,
  }),
  QueryHolding: Struct({
    query_id: compactBn,
    dest: cXcmV0Multi_locationMultiLocation,
    assets: cdc154,
  }),
  BuyExecution: Struct({
    fees: cXcmV0Multi_assetMultiAsset,
    weight: u64,
    debt: u64,
    halt_on_error: bool,
    xcm: cdc431,
  }),
})

const cdc429 = Vector(cXcmV0OrderOrder)

const cXcmV0Response = Enum({ Assets: cdc154 })

const cXcmV0Xcm = Enum({
  WithdrawAsset: Struct({ assets: cdc154, effects: cdc429 }),
  ReserveAssetDeposit: Struct({ assets: cdc154, effects: cdc429 }),
  TeleportAsset: Struct({ assets: cdc154, effects: cdc429 }),
  QueryResponse: Struct({ query_id: compactBn, response: cXcmV0Response }),
  TransferAsset: Struct({
    assets: cdc154,
    dest: cXcmV0Multi_locationMultiLocation,
  }),
  TransferReserveAsset: Struct({
    assets: cdc154,
    dest: cXcmV0Multi_locationMultiLocation,
    effects: cdc429,
  }),
  Transact: Struct({
    origin_type: cXcmV0OriginKind,
    require_weight_at_most: u64,
    call: cdc12,
  }),
  HrmpNewChannelOpenRequest: Struct({
    sender: compactNumber,
    max_message_size: compactNumber,
    max_capacity: compactNumber,
  }),
  HrmpChannelAccepted: compactNumber,
  HrmpChannelClosing: Struct({
    initiator: compactNumber,
    sender: compactNumber,
    recipient: compactNumber,
  }),
  RelayedFrom: Struct({
    who: cXcmV0Multi_locationMultiLocation,
    message: circularcXcmV0Xcm,
  }),
})

const circularcdc434: Codec<
  () => typeof cdc434 extends Codec<infer V> ? V : unknown
> = lazy(() => cdc434)

const circularcXcmV1Xcm: Codec<
  () => typeof cXcmV1Xcm extends Codec<infer V> ? V : unknown
> = lazy(() => cXcmV1Xcm)

const cdc436 = Vector(circularcXcmV1Xcm)

const cXcmV1OrderOrder = Enum({
  Noop: _void,
  DepositAsset: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    max_assets: u32,
    beneficiary: cXcmV1MultilocationMultiLocation,
  }),
  DepositReserveAsset: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    max_assets: u32,
    dest: cXcmV1MultilocationMultiLocation,
    effects: circularcdc434,
  }),
  ExchangeAsset: Struct({
    give: cXcmV1MultiassetMultiAssetFilter,
    receive: cdc137,
  }),
  InitiateReserveWithdraw: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    reserve: cXcmV1MultilocationMultiLocation,
    effects: circularcdc434,
  }),
  InitiateTeleport: Struct({
    assets: cXcmV1MultiassetMultiAssetFilter,
    dest: cXcmV1MultilocationMultiLocation,
    effects: circularcdc434,
  }),
  QueryHolding: Struct({
    query_id: compactBn,
    dest: cXcmV1MultilocationMultiLocation,
    assets: cXcmV1MultiassetMultiAssetFilter,
  }),
  BuyExecution: Struct({
    fees: cXcmV1MultiassetMultiAsset,
    weight: u64,
    debt: u64,
    halt_on_error: bool,
    instructions: cdc436,
  }),
})

const cdc434 = Vector(cXcmV1OrderOrder)

const cXcmV1Response = Enum({ Assets: cdc137, Version: u32 })

const cXcmV1Xcm = Enum({
  WithdrawAsset: Struct({ assets: cdc137, effects: cdc434 }),
  ReserveAssetDeposited: Struct({ assets: cdc137, effects: cdc434 }),
  ReceiveTeleportedAsset: Struct({ assets: cdc137, effects: cdc434 }),
  QueryResponse: Struct({ query_id: compactBn, response: cXcmV1Response }),
  TransferAsset: Struct({
    assets: cdc137,
    beneficiary: cXcmV1MultilocationMultiLocation,
  }),
  TransferReserveAsset: Struct({
    assets: cdc137,
    dest: cXcmV1MultilocationMultiLocation,
    effects: cdc434,
  }),
  Transact: Struct({
    origin_type: cXcmV0OriginKind,
    require_weight_at_most: u64,
    call: cdc12,
  }),
  HrmpNewChannelOpenRequest: Struct({
    sender: compactNumber,
    max_message_size: compactNumber,
    max_capacity: compactNumber,
  }),
  HrmpChannelAccepted: compactNumber,
  HrmpChannelClosing: Struct({
    initiator: compactNumber,
    sender: compactNumber,
    recipient: compactNumber,
  }),
  RelayedFrom: Struct({
    who: cXcmV1MultilocationJunctions,
    message: circularcXcmV1Xcm,
  }),
  SubscribeVersion: Struct({
    query_id: compactBn,
    max_response_weight: compactBn,
  }),
  UnsubscribeVersion: _void,
})

const cXcmVersionedXcm = Enum({ V0: cXcmV0Xcm, V1: cXcmV1Xcm, V2: cdc134 })

const cdc442 = Vector(circularcXcmV0Xcm)

const cdc440 = Vector(cXcmV0OrderOrder)

const cdc447 = Vector(circularcXcmV1Xcm)

const cdc445 = Vector(cXcmV1OrderOrder)

const cdc449 = Vector(cXcmV2Instruction)

const cPallet_xcmPalletCall = Enum({
  send: Struct({ dest: cXcmVersionedMultiLocation, message: cXcmVersionedXcm }),
  teleport_assets: Struct({
    dest: cXcmVersionedMultiLocation,
    beneficiary: cXcmVersionedMultiLocation,
    assets: cXcmVersionedMultiAssets,
    fee_asset_item: u32,
  }),
  reserve_transfer_assets: Struct({
    dest: cXcmVersionedMultiLocation,
    beneficiary: cXcmVersionedMultiLocation,
    assets: cXcmVersionedMultiAssets,
    fee_asset_item: u32,
  }),
  execute: Struct({ message: cXcmVersionedXcm, max_weight: u64 }),
  force_xcm_version: Struct({
    location: cXcmV1MultilocationMultiLocation,
    xcm_version: u32,
  }),
  force_default_xcm_version: cOption,
  force_subscribe_version_notify: cXcmVersionedMultiLocation,
  force_unsubscribe_version_notify: cXcmVersionedMultiLocation,
  limited_reserve_transfer_assets: Struct({
    dest: cXcmVersionedMultiLocation,
    beneficiary: cXcmVersionedMultiLocation,
    assets: cXcmVersionedMultiAssets,
    fee_asset_item: u32,
    weight_limit: cXcmV2WeightLimit,
  }),
  limited_teleport_assets: Struct({
    dest: cXcmVersionedMultiLocation,
    beneficiary: cXcmVersionedMultiLocation,
    assets: cXcmVersionedMultiAssets,
    fee_asset_item: u32,
    weight_limit: cXcmV2WeightLimit,
  }),
})

const cPolkadot_runtimeRuntimeCall = Enum({
  System: cFrame_systemPalletCall,
  Scheduler: cPallet_schedulerPalletCall,
  Preimage: cPallet_preimagePalletCall,
  Babe: cPallet_babePalletCall,
  Timestamp: cPallet_timestampPalletCall,
  Indices: cPallet_indicesPalletCall,
  Balances: cPallet_balancesPalletCall,
  Authorship: cPallet_authorshipPalletCall,
  Staking: cPallet_stakingPalletPalletCall,
  Session: cPallet_sessionPalletCall,
  Grandpa: cPallet_grandpaPalletCall,
  ImOnline: cPallet_im_onlinePalletCall,
  Democracy: cPallet_democracyPalletCall,
  Council: cPallet_collectivePalletCall,
  TechnicalCommittee: cPallet_collectivePalletCall,
  PhragmenElection: cPallet_elections_phragmenPalletCall,
  TechnicalMembership: cPallet_membershipPalletCall,
  Treasury: cPallet_treasuryPalletCall,
  Claims: cPolkadot_runtime_commonClaimsPalletCall,
  Vesting: cPallet_vestingPalletCall,
  Utility: cPallet_utilityPalletCall,
  Identity: cPallet_identityPalletCall,
  Proxy: cPallet_proxyPalletCall,
  Multisig: cPallet_multisigPalletCall,
  Bounties: cPallet_bountiesPalletCall,
  ChildBounties: cPallet_child_bountiesPalletCall,
  Tips: cPallet_tipsPalletCall,
  ElectionProviderMultiPhase: cPallet_election_provider_multi_phasePalletCall,
  VoterList: cPallet_bags_listPalletCall,
  NominationPools: cPallet_nomination_poolsPalletCall,
  FastUnstake: cPallet_fast_unstakePalletCall,
  Configuration: cPolkadot_runtime_parachainsConfigurationPalletCall,
  ParasShared: _void,
  ParaInclusion: _void,
  ParaInherent: cPolkadot_runtime_parachainsParas_inherentPalletCall,
  Paras: cPolkadot_runtime_parachainsParasPalletCall,
  Initializer: cPolkadot_runtime_parachainsInitializerPalletCall,
  Dmp: _void,
  Ump: cPolkadot_runtime_parachainsUmpPalletCall,
  Hrmp: cPolkadot_runtime_parachainsHrmpPalletCall,
  ParasDisputes: cPolkadot_runtime_parachainsDisputesPalletCall,
  Registrar: cPolkadot_runtime_commonParas_registrarPalletCall,
  Slots: cPolkadot_runtime_commonSlotsPalletCall,
  Auctions: cPolkadot_runtime_commonAuctionsPalletCall,
  Crowdloan: cPolkadot_runtime_commonCrowdloanPalletCall,
  XcmPallet: cPallet_xcmPalletCall,
})

const cPallet_collectiveVotes = Struct({
  index: u32,
  threshold: u32,
  ayes: cdc209,
  nays: cdc209,
  end: u32,
})

const cPallet_elections_phragmenSeatHolder = Struct({
  who: cdc1,
  stake: u128,
  deposit: u128,
})

const cdc550 = Vector(cPallet_elections_phragmenSeatHolder)

const cPallet_elections_phragmenVoter = Struct({
  votes: cdc209,
  stake: u128,
  deposit: u128,
})

const cPallet_treasuryProposal = Struct({
  proposer: cdc1,
  value: u128,
  beneficiary: cdc1,
  bond: u128,
})

const cdc564 = Vector(cPallet_vestingVesting_infoVestingInfo)

const cPallet_vestingReleases = Enum({ V0: _void, V1: _void })

const cdc570 = Tuple(u32, cPallet_identityTypesJudgement)

const cdc571 = Vector(cdc570)

const cPallet_identityTypesRegistration = Struct({
  judgements: cdc571,
  deposit: u128,
  info: cPallet_identityTypesIdentityInfo,
})

const cdc572 = Tuple(u128, cdc209)

const cPallet_identityTypesRegistrarInfo = Struct({
  account: cdc1,
  fee: u128,
  fields: u64,
})

const cdc577 = Vector(cOption)

const cPallet_proxyProxyDefinition = Struct({
  delegate: cdc1,
  proxy_type: cPolkadot_runtimeProxyType,
  delay: u32,
})

const cdc582 = Vector(cPallet_proxyProxyDefinition)

const cdc579 = Tuple(cdc582, u128)

const cPallet_proxyAnnouncement = Struct({
  real: cdc1,
  call_hash: cdc1,
  height: u32,
})

const cdc586 = Vector(cPallet_proxyAnnouncement)

const cdc583 = Tuple(cdc586, u128)

const cPallet_multisigMultisig = Struct({
  when: cPallet_multisigTimepoint,
  deposit: u128,
  depositor: cdc1,
  approvals: cdc209,
})

const cdc588 = Tuple(cdc1, cdc1)

const cPallet_bountiesBountyStatus = Enum({
  Proposed: _void,
  Approved: _void,
  Funded: _void,
  CuratorProposed: cdc1,
  Active: Struct({ curator: cdc1, update_due: u32 }),
  PendingPayout: Struct({ curator: cdc1, beneficiary: cdc1, unlock_at: u32 }),
})

const cPallet_bountiesBounty = Struct({
  proposer: cdc1,
  value: u128,
  fee: u128,
  curator_deposit: u128,
  bond: u128,
  status: cPallet_bountiesBountyStatus,
})

const cPallet_child_bountiesChildBountyStatus = Enum({
  Added: _void,
  CuratorProposed: cdc1,
  Active: cdc1,
  PendingPayout: Struct({ curator: cdc1, beneficiary: cdc1, unlock_at: u32 }),
})

const cPallet_child_bountiesChildBounty = Struct({
  parent_bounty: u32,
  value: u128,
  fee: u128,
  curator_deposit: u128,
  status: cPallet_child_bountiesChildBountyStatus,
})

const cPallet_tipsOpenTip = Struct({
  reason: cdc1,
  who: cdc1,
  finder: cdc1,
  deposit: u128,
  closes: cOption,
  tips: cdc69,
  finders_fee: bool,
})

const cPallet_election_provider_multi_phaseReadySolution = Struct({
  supports: cdc368,
  score: cSp_npos_electionsElectionScore,
  compute: cPallet_election_provider_multi_phaseElectionCompute,
})

const cdc605 = Tuple(cdc1, u64, cdc209)

const cdc604 = Vector(cdc605)

const cPallet_election_provider_multi_phaseRoundSnapshot = Struct({
  voters: cdc604,
  targets: cdc209,
})

const cdc607 = Tuple(cSp_npos_electionsElectionScore, u32, u32)

const cdc608 = Vector(cdc607)

const cPallet_election_provider_multi_phaseSignedSignedSubmission = Struct({
  who: cdc1,
  deposit: u128,
  raw_solution: cPallet_election_provider_multi_phaseRawSolution,
  call_fee: u128,
})

const cPallet_bags_listListNode = Struct({
  id: cdc1,
  prev: cOption,
  next: cOption,
  bag_upper: u64,
  score: u64,
})

const cPallet_bags_listListBag = Struct({ head: cOption, tail: cOption })

const cdc620 = Tuple(u32, u128)

const cdc619 = Vector(cdc620)

const cPallet_nomination_poolsPoolMember = Struct({
  pool_id: u32,
  points: u128,
  last_recorded_reward_counter: u128,
  unbonding_eras: cdc619,
})

const cPallet_nomination_poolsPoolRoles = Struct({
  depositor: cdc1,
  root: cOption,
  nominator: cOption,
  state_toggler: cOption,
})

const cPallet_nomination_poolsBondedPoolInner = Struct({
  points: u128,
  state: cPallet_nomination_poolsPoolState,
  member_counter: u32,
  roles: cPallet_nomination_poolsPoolRoles,
})

const cPallet_nomination_poolsRewardPool = Struct({
  last_recorded_reward_counter: u128,
  last_recorded_total_payouts: u128,
  total_rewards_claimed: u128,
})

const cPallet_nomination_poolsUnbondPool = Struct({
  points: u128,
  balance: u128,
})

const cdc629 = Tuple(u32, cPallet_nomination_poolsUnbondPool)

const cdc628 = Vector(cdc629)

const cPallet_nomination_poolsSubPools = Struct({
  no_era: cPallet_nomination_poolsUnbondPool,
  with_era: cdc628,
})

const cPallet_fast_unstakeTypesUnstakeRequest = Struct({
  stashes: cdc69,
  checked: cdc97,
})

const cPolkadot_runtime_parachainsConfigurationHostConfiguration = Struct({
  max_code_size: u32,
  max_head_data_size: u32,
  max_upward_queue_count: u32,
  max_upward_queue_size: u32,
  max_upward_message_size: u32,
  max_upward_message_num_per_candidate: u32,
  hrmp_max_message_num_per_candidate: u32,
  validation_upgrade_cooldown: u32,
  validation_upgrade_delay: u32,
  max_pov_size: u32,
  max_downward_message_size: u32,
  ump_service_total_weight: cSp_weightsWeight_v2Weight,
  hrmp_max_parachain_outbound_channels: u32,
  hrmp_max_parathread_outbound_channels: u32,
  hrmp_sender_deposit: u128,
  hrmp_recipient_deposit: u128,
  hrmp_channel_max_capacity: u32,
  hrmp_channel_max_total_size: u32,
  hrmp_max_parachain_inbound_channels: u32,
  hrmp_max_parathread_inbound_channels: u32,
  hrmp_channel_max_message_size: u32,
  code_retention_period: u32,
  parathread_cores: u32,
  parathread_retries: u32,
  group_rotation_frequency: u32,
  chain_availability_period: u32,
  thread_availability_period: u32,
  scheduling_lookahead: u32,
  max_validators_per_core: cOption,
  max_validators: cOption,
  dispute_period: u32,
  dispute_post_conclusion_acceptance_period: u32,
  dispute_conclusion_by_time_out_period: u32,
  no_show_slots: u32,
  n_delay_tranches: u32,
  zeroth_delay_tranche_width: u32,
  needed_approvals: u32,
  relay_vrf_modulo_samples: u32,
  ump_max_individual_weight: cSp_weightsWeight_v2Weight,
  pvf_checking_enabled: bool,
  pvf_voting_ttl: u32,
  minimum_validation_upgrade_delay: u32,
})

const cdc639 = Tuple(
  u32,
  cPolkadot_runtime_parachainsConfigurationHostConfiguration,
)

const cdc638 = Vector(cdc639)

const cdc641 = Vector(u32)

const cdc642 = Vector(cdc1)

const cPolkadot_runtime_parachainsInclusionAvailabilityBitfieldRecord = Struct({
  bitfield: cdc386,
  submitted_at: u32,
})

const cPolkadot_runtime_parachainsInclusionCandidatePendingAvailability = Struct({
  core: u32,
  hash: cdc1,
  descriptor: cPolkadot_primitivesV2CandidateDescriptor,
  availability_votes: cdc386,
  backers: cdc386,
  relay_parent_number: u32,
  backed_in_number: u32,
  backing_group: u32,
})

const cdc650 = Tuple(u32, cPolkadot_primitivesV2ValidityAttestation)

const cdc649 = Vector(cdc650)

const cdc648 = Tuple(cPolkadot_primitivesV2CandidateReceipt, cdc649)

const cdc647 = Vector(cdc648)

const cPolkadot_primitivesV2ScrapedOnChainVotes = Struct({
  session: u32,
  backing_validators_per_candidate: cdc647,
  disputes: cdc400,
})

const cdc652 = Vector(cdc641)

const cPolkadot_primitivesV2ParathreadClaim = Tuple(u32, cdc1)

const cPolkadot_primitivesV2ParathreadEntry = Struct({
  claim: cPolkadot_primitivesV2ParathreadClaim,
  retries: u32,
})

const cPolkadot_runtime_parachainsSchedulerQueuedParathread = Struct({
  claim: cPolkadot_primitivesV2ParathreadEntry,
  core_offset: u32,
})

const cdc654 = Vector(cPolkadot_runtime_parachainsSchedulerQueuedParathread)

const cPolkadot_runtime_parachainsSchedulerParathreadClaimQueue = Struct({
  queue: cdc654,
  next_core_offset: u32,
})

const cPolkadot_primitivesV2CoreOccupied = Enum({
  Parathread: cPolkadot_primitivesV2ParathreadEntry,
  Parachain: _void,
})

const cdc658 = Vector(cOption)

const cdc661 = Vector(u32)

const cPolkadot_runtime_parachainsSchedulerAssignmentKind = Enum({
  Parachain: _void,
  Parathread: Tuple(cdc1, u32),
})

const cPolkadot_runtime_parachainsSchedulerCoreAssignment = Struct({
  core: u32,
  para_id: u32,
  kind: cPolkadot_runtime_parachainsSchedulerAssignmentKind,
  group_idx: u32,
})

const cdc662 = Vector(cPolkadot_runtime_parachainsSchedulerCoreAssignment)

const cPolkadot_runtime_parachainsParasPvfCheckCause = Enum({
  Onboarding: u32,
  Upgrade: Struct({ id: u32, relay_parent_number: u32 }),
})

const cdc666 = Vector(cPolkadot_runtime_parachainsParasPvfCheckCause)

const cPolkadot_runtime_parachainsParasPvfCheckActiveVoteState = Struct({
  votes_accept: cdc386,
  votes_reject: cdc386,
  age: u32,
  created_at: u32,
  causes: cdc666,
})

const cdc668 = Vector(cdc1)

const cPolkadot_runtime_parachainsParasParaLifecycle = Enum({
  Onboarding: _void,
  Parathread: _void,
  Parachain: _void,
  UpgradingParathread: _void,
  DowngradingParachain: _void,
  OffboardingParathread: _void,
  OffboardingParachain: _void,
})

const cdc670 = Tuple(u32, u32)

const cPolkadot_runtime_parachainsParasReplacementTimes = Struct({
  expected_at: u32,
  activated_at: u32,
})

const cdc672 = Vector(cPolkadot_runtime_parachainsParasReplacementTimes)

const cPolkadot_runtime_parachainsParasParaPastCodeMeta = Struct({
  upgrade_times: cdc672,
  last_pruned: cOption,
})

const cdc674 = Vector(cdc670)

const cPolkadot_primitivesV2UpgradeGoAhead = Enum({
  Abort: _void,
  GoAhead: _void,
})

const cPolkadot_primitivesV2UpgradeRestriction = Enum({ Present: _void })

const cPolkadot_runtime_parachainsParasParaGenesisArgs = Struct({
  genesis_head: cdc12,
  validation_code: cdc12,
  para_kind: bool,
})

const cPolkadot_runtime_parachainsInitializerBufferedSessionChange = Struct({
  validators: cdc642,
  queued: cdc642,
  session_index: u32,
})

const cdc679 = Vector(
  cPolkadot_runtime_parachainsInitializerBufferedSessionChange,
)

const cPolkadot_core_primitivesInboundDownwardMessage = Struct({
  sent_at: u32,
  msg: cdc12,
})

const cdc681 = Vector(cPolkadot_core_primitivesInboundDownwardMessage)

const cdc683 = Tuple(u32, cdc12)

const cPolkadot_runtime_parachainsHrmpHrmpOpenChannelRequest = Struct({
  confirmed: bool,
  _age: u32,
  sender_deposit: u128,
  max_message_size: u32,
  max_capacity: u32,
  max_total_size: u32,
})

const cdc686 = Vector(cPolkadot_parachainPrimitivesHrmpChannelId)

const cPolkadot_runtime_parachainsHrmpHrmpChannel = Struct({
  max_capacity: u32,
  max_total_size: u32,
  max_message_size: u32,
  msg_count: u32,
  total_size: u32,
  mqc_head: cOption,
  sender_deposit: u128,
  recipient_deposit: u128,
})

const cPolkadot_core_primitivesInboundHrmpMessage = Struct({
  sent_at: u32,
  data: cdc12,
})

const cdc689 = Vector(cPolkadot_core_primitivesInboundHrmpMessage)

const cdc692 = Tuple(u32, cdc661)

const cdc691 = Vector(cdc692)

const cdc694 = Vector(cdc1)

const cdc697 = Vector(cdc1)

const cPolkadot_primitivesV2SessionInfo = Struct({
  active_validator_indices: cdc641,
  random_seed: cdc1,
  dispute_period: u32,
  validators: cdc642,
  discovery_keys: cdc697,
  assignment_keys: cdc694,
  validator_groups: cdc652,
  n_cores: u32,
  zeroth_delay_tranche_width: u32,
  relay_vrf_modulo_samples: u32,
  n_delay_tranches: u32,
  no_show_slots: u32,
  needed_approvals: u32,
})

const cPolkadot_primitivesV2DisputeState = Struct({
  validators_for: cdc386,
  validators_against: cdc386,
  start: u32,
  concluded_at: cOption,
})

const cdc699 = Tuple(u32, cdc1)

const cPolkadot_runtime_commonParas_registrarParaInfo = Struct({
  manager: cdc1,
  deposit: u128,
  locked: bool,
})

const cdc704 = Vector(cOption)

const cdc706 = Tuple(cdc1, u32)

const cdc709 = Tuple(cdc1, u32, u128)

const cdc707 = Vector(cOption, 36)

const cPolkadot_runtime_commonCrowdloanLastContribution = Enum({
  Never: _void,
  PreEnding: u32,
  Ending: u32,
})

const cPolkadot_runtime_commonCrowdloanFundInfo = Struct({
  depositor: cdc1,
  verifier: cOption,
  deposit: u128,
  raised: u128,
  end: u32,
  cap: u128,
  last_contribution: cPolkadot_runtime_commonCrowdloanLastContribution,
  first_period: u32,
  last_period: u32,
  fund_index: u32,
})

const cdc716 = Tuple(u8, u8)

const cXcmVersionedResponse = Enum({
  V0: cXcmV0Response,
  V1: cXcmV1Response,
  V2: cXcmV2Response,
})

const cPallet_xcmPalletQueryStatus = Enum({
  Pending: Struct({
    responder: cXcmVersionedMultiLocation,
    maybe_notify: cOption,
    timeout: u32,
  }),
  VersionNotifier: Struct({
    origin: cXcmVersionedMultiLocation,
    is_active: bool,
  }),
  Ready: Struct({ response: cXcmVersionedResponse, at: u32 }),
})

const cdc718 = Tuple(u32, cXcmVersionedMultiLocation)

const cdc719 = Tuple(u64, u64, u32)

const cdc721 = Tuple(cXcmVersionedMultiLocation, u32)

const cdc722 = Vector(cdc721)

const cPallet_xcmPalletVersionMigrationStage = Enum({
  MigrateSupportedVersion: _void,
  MigrateVersionNotifiers: _void,
  NotifyCurrentTargets: cOption,
  MigrateAndNotifyOldTargets: _void,
})

export const SystemStorage = Storage("System")

export const SystemStorageEntries = {
  Account: SystemStorage("Account", cFrame_systemAccountInfo[1], [
    cdc1[0],
    Blake2128Concat,
  ]),
  ExtrinsicCount: SystemStorage("ExtrinsicCount", u32[1]),
  BlockWeight: SystemStorage(
    "BlockWeight",
    cFrame_supportDispatchPerDispatchClass[1],
  ),
  AllExtrinsicsLen: SystemStorage("AllExtrinsicsLen", u32[1]),
  BlockHash: SystemStorage("BlockHash", cdc1[1], [u32[0], Twox64Concat]),
  ExtrinsicData: SystemStorage("ExtrinsicData", cdc12[1], [
    u32[0],
    Twox64Concat,
  ]),
  Number: SystemStorage("Number", u32[1]),
  ParentHash: SystemStorage("ParentHash", cdc1[1]),
  Digest: SystemStorage("Digest", cdc14[1]),
  Events: SystemStorage("Events", cdc17[1]),
  EventCount: SystemStorage("EventCount", u32[1]),
  EventTopics: SystemStorage("EventTopics", cdc161[1], [
    cdc1[0],
    Blake2128Concat,
  ]),
  LastRuntimeUpgrade: SystemStorage(
    "LastRuntimeUpgrade",
    cFrame_systemLastRuntimeUpgradeInfo[1],
  ),
  UpgradedToU32RefCount: SystemStorage("UpgradedToU32RefCount", bool[1]),
  UpgradedToTripleRefCount: SystemStorage("UpgradedToTripleRefCount", bool[1]),
  ExecutionPhase: SystemStorage("ExecutionPhase", cFrame_systemPhase[1]),
}

export const SchedulerStorage = Storage("Scheduler")

const SchedulerStorageEntries = {
  IncompleteSince: SchedulerStorage("IncompleteSince", u32[1]),
  Agenda: SchedulerStorage("Agenda", cdc452[1], [u32[0], Twox64Concat]),
  Lookup: SchedulerStorage("Lookup", cdc30[1], [cdc1[0], Twox64Concat]),
}

export const PreimageStorage = Storage("Preimage")

const PreimageStorageEntries = {
  StatusFor: PreimageStorage("StatusFor", cPallet_preimageRequestStatus[1], [
    cdc1[0],
    Identity,
  ]),
  PreimageFor: PreimageStorage("PreimageFor", cdc12[1], [cdc1[0], Identity]),
}

export const BabeStorage = Storage("Babe")

const BabeStorageEntries = {
  EpochIndex: BabeStorage("EpochIndex", u64[1]),
  Authorities: BabeStorage("Authorities", cdc461[1]),
  GenesisSlot: BabeStorage("GenesisSlot", u64[1]),
  CurrentSlot: BabeStorage("CurrentSlot", u64[1]),
  Randomness: BabeStorage("Randomness", cdc1[1]),
  PendingEpochConfigChange: BabeStorage(
    "PendingEpochConfigChange",
    cSp_consensus_babeDigestsNextConfigDescriptor[1],
  ),
  NextRandomness: BabeStorage("NextRandomness", cdc1[1]),
  NextAuthorities: BabeStorage("NextAuthorities", cdc461[1]),
  SegmentIndex: BabeStorage("SegmentIndex", u32[1]),
  UnderConstruction: BabeStorage("UnderConstruction", cdc463[1], [
    u32[0],
    Twox64Concat,
  ]),
  Initialized: BabeStorage("Initialized", cOption[1]),
  AuthorVrfRandomness: BabeStorage("AuthorVrfRandomness", cOption[1]),
  EpochStart: BabeStorage("EpochStart", cdc30[1]),
  Lateness: BabeStorage("Lateness", u32[1]),
  EpochConfig: BabeStorage(
    "EpochConfig",
    cSp_consensus_babeBabeEpochConfiguration[1],
  ),
  NextEpochConfig: BabeStorage(
    "NextEpochConfig",
    cSp_consensus_babeBabeEpochConfiguration[1],
  ),
}

export const TimestampStorage = Storage("Timestamp")

const TimestampStorageEntries = {
  Now: TimestampStorage("Now", u64[1]),
  DidUpdate: TimestampStorage("DidUpdate", bool[1]),
}

export const IndicesStorage = Storage("Indices")

const IndicesStorageEntries = {
  Accounts: IndicesStorage("Accounts", cdc471[1], [u32[0], Blake2128Concat]),
}

export const BalancesStorage = Storage("Balances")

const BalancesStorageEntries = {
  TotalIssuance: BalancesStorage("TotalIssuance", u128[1]),
  InactiveIssuance: BalancesStorage("InactiveIssuance", u128[1]),
  Account: BalancesStorage("Account", cPallet_balancesAccountData[1], [
    cdc1[0],
    Blake2128Concat,
  ]),
  Locks: BalancesStorage("Locks", cdc476[1], [cdc1[0], Blake2128Concat]),
  Reserves: BalancesStorage("Reserves", cdc479[1], [cdc1[0], Blake2128Concat]),
}

export const TransactionPaymentStorage = Storage("TransactionPayment")

const TransactionPaymentStorageEntries = {
  NextFeeMultiplier: TransactionPaymentStorage("NextFeeMultiplier", u128[1]),
  StorageVersion: TransactionPaymentStorage(
    "StorageVersion",
    cPallet_transaction_paymentReleases[1],
  ),
}

export const AuthorshipStorage = Storage("Authorship")

const AuthorshipStorageEntries = {
  Uncles: AuthorshipStorage("Uncles", cdc485[1]),
  Author: AuthorshipStorage("Author", cdc1[1]),
  DidSetUncles: AuthorshipStorage("DidSetUncles", bool[1]),
}

export const StakingStorage = Storage("Staking")

const StakingStorageEntries = {
  ValidatorCount: StakingStorage("ValidatorCount", u32[1]),
  MinimumValidatorCount: StakingStorage("MinimumValidatorCount", u32[1]),
  Invulnerables: StakingStorage("Invulnerables", cdc209[1]),
  Bonded: StakingStorage("Bonded", cdc1[1], [cdc1[0], Twox64Concat]),
  MinNominatorBond: StakingStorage("MinNominatorBond", u128[1]),
  MinValidatorBond: StakingStorage("MinValidatorBond", u128[1]),
  MinimumActiveStake: StakingStorage("MinimumActiveStake", u128[1]),
  MinCommission: StakingStorage("MinCommission", u32[1]),
  Ledger: StakingStorage("Ledger", cPallet_stakingStakingLedger[1], [
    cdc1[0],
    Blake2128Concat,
  ]),
  Payee: StakingStorage("Payee", cPallet_stakingRewardDestination[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  Validators: StakingStorage("Validators", cPallet_stakingValidatorPrefs[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  CounterForValidators: StakingStorage("CounterForValidators", u32[1]),
  MaxValidatorsCount: StakingStorage("MaxValidatorsCount", u32[1]),
  Nominators: StakingStorage("Nominators", cPallet_stakingNominations[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  CounterForNominators: StakingStorage("CounterForNominators", u32[1]),
  MaxNominatorsCount: StakingStorage("MaxNominatorsCount", u32[1]),
  CurrentEra: StakingStorage("CurrentEra", u32[1]),
  ActiveEra: StakingStorage("ActiveEra", cPallet_stakingActiveEraInfo[1]),
  ErasStartSessionIndex: StakingStorage("ErasStartSessionIndex", u32[1], [
    u32[0],
    Twox64Concat,
  ]),
  ErasStakers: StakingStorage(
    "ErasStakers",
    cPallet_stakingExposure[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Twox64Concat],
  ),
  ErasStakersClipped: StakingStorage(
    "ErasStakersClipped",
    cPallet_stakingExposure[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Twox64Concat],
  ),
  ErasValidatorPrefs: StakingStorage(
    "ErasValidatorPrefs",
    cPallet_stakingValidatorPrefs[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Twox64Concat],
  ),
  ErasValidatorReward: StakingStorage("ErasValidatorReward", u128[1], [
    u32[0],
    Twox64Concat,
  ]),
  ErasRewardPoints: StakingStorage(
    "ErasRewardPoints",
    cPallet_stakingEraRewardPoints[1],
    [u32[0], Twox64Concat],
  ),
  ErasTotalStake: StakingStorage("ErasTotalStake", u128[1], [
    u32[0],
    Twox64Concat,
  ]),
  ForceEra: StakingStorage("ForceEra", cPallet_stakingForcing[1]),
  SlashRewardFraction: StakingStorage("SlashRewardFraction", u32[1]),
  CanceledSlashPayout: StakingStorage("CanceledSlashPayout", u128[1]),
  UnappliedSlashes: StakingStorage("UnappliedSlashes", cdc501[1], [
    u32[0],
    Twox64Concat,
  ]),
  BondedEras: StakingStorage("BondedEras", cdc161[1]),
  ValidatorSlashInEra: StakingStorage(
    "ValidatorSlashInEra",
    cdc503[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Twox64Concat],
  ),
  NominatorSlashInEra: StakingStorage(
    "NominatorSlashInEra",
    u128[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Twox64Concat],
  ),
  SlashingSpans: StakingStorage(
    "SlashingSpans",
    cPallet_stakingSlashingSlashingSpans[1],
    [cdc1[0], Twox64Concat],
  ),
  SpanSlash: StakingStorage("SpanSlash", cPallet_stakingSlashingSpanRecord[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  CurrentPlannedSession: StakingStorage("CurrentPlannedSession", u32[1]),
  OffendingValidators: StakingStorage("OffendingValidators", cdc506[1]),
  ChillThreshold: StakingStorage("ChillThreshold", u8[1]),
}

export const OffencesStorage = Storage("Offences")

const OffencesStorageEntries = {
  Reports: OffencesStorage("Reports", cSp_stakingOffenceOffenceDetails[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  ConcurrentReportsIndex: OffencesStorage(
    "ConcurrentReportsIndex",
    cdc160[1],
    [cdc46[0], Twox64Concat],
    [cdc12[0], Twox64Concat],
  ),
  ReportsByKindIndex: OffencesStorage("ReportsByKindIndex", cdc12[1], [
    cdc46[0],
    Twox64Concat,
  ]),
}

export const SessionStorage = Storage("Session")

const SessionStorageEntries = {
  Validators: SessionStorage("Validators", cdc209[1]),
  CurrentIndex: SessionStorage("CurrentIndex", u32[1]),
  QueuedChanged: SessionStorage("QueuedChanged", bool[1]),
  QueuedKeys: SessionStorage("QueuedKeys", cdc511[1]),
  DisabledValidators: SessionStorage("DisabledValidators", cdc97[1]),
  NextKeys: SessionStorage("NextKeys", cPolkadot_runtimeSessionKeys[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  KeyOwner: SessionStorage("KeyOwner", cdc1[1], [cdc16[0], Twox64Concat]),
}

export const GrandpaStorage = Storage("Grandpa")

const GrandpaStorageEntries = {
  State: GrandpaStorage("State", cPallet_grandpaStoredState[1]),
  PendingChange: GrandpaStorage(
    "PendingChange",
    cPallet_grandpaStoredPendingChange[1],
  ),
  NextForced: GrandpaStorage("NextForced", u32[1]),
  Stalled: GrandpaStorage("Stalled", cdc30[1]),
  CurrentSetId: GrandpaStorage("CurrentSetId", u64[1]),
  SetIdSession: GrandpaStorage("SetIdSession", u32[1], [u64[0], Twox64Concat]),
}

export const ImOnlineStorage = Storage("ImOnline")

const ImOnlineStorageEntries = {
  HeartbeatAfter: ImOnlineStorage("HeartbeatAfter", u32[1]),
  Keys: ImOnlineStorage("Keys", cdc521[1]),
  ReceivedHeartbeats: ImOnlineStorage(
    "ReceivedHeartbeats",
    cFrame_supportTraitsMiscWrapperOpaque[1],
    [u32[0], Twox64Concat],
    [u32[0], Twox64Concat],
  ),
  AuthoredBlocks: ImOnlineStorage(
    "AuthoredBlocks",
    u32[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Twox64Concat],
  ),
}

export const DemocracyStorage = Storage("Democracy")

const DemocracyStorageEntries = {
  PublicPropCount: DemocracyStorage("PublicPropCount", u32[1]),
  PublicProps: DemocracyStorage("PublicProps", cdc530[1]),
  DepositOf: DemocracyStorage("DepositOf", cdc531[1], [u32[0], Twox64Concat]),
  ReferendumCount: DemocracyStorage("ReferendumCount", u32[1]),
  LowestUnbaked: DemocracyStorage("LowestUnbaked", u32[1]),
  ReferendumInfoOf: DemocracyStorage(
    "ReferendumInfoOf",
    cPallet_democracyTypesReferendumInfo[1],
    [u32[0], Twox64Concat],
  ),
  VotingOf: DemocracyStorage("VotingOf", cPallet_democracyVoteVoting[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  LastTabledWasExternal: DemocracyStorage("LastTabledWasExternal", bool[1]),
  NextExternal: DemocracyStorage("NextExternal", cdc542[1]),
  Blacklist: DemocracyStorage("Blacklist", cdc543[1], [cdc1[0], Identity]),
  Cancellations: DemocracyStorage("Cancellations", bool[1], [
    cdc1[0],
    Identity,
  ]),
}

export const CouncilStorage = Storage("Council")

const CouncilStorageEntries = {
  Proposals: CouncilStorage("Proposals", cdc160[1]),
  ProposalOf: CouncilStorage("ProposalOf", cPolkadot_runtimeRuntimeCall[1], [
    cdc1[0],
    Identity,
  ]),
  Voting: CouncilStorage("Voting", cPallet_collectiveVotes[1], [
    cdc1[0],
    Identity,
  ]),
  ProposalCount: CouncilStorage("ProposalCount", u32[1]),
  Members: CouncilStorage("Members", cdc209[1]),
  Prime: CouncilStorage("Prime", cdc1[1]),
}

export const TechnicalCommitteeStorage = Storage("TechnicalCommittee")

const TechnicalCommitteeStorageEntries = {
  Proposals: TechnicalCommitteeStorage("Proposals", cdc160[1]),
  ProposalOf: TechnicalCommitteeStorage(
    "ProposalOf",
    cPolkadot_runtimeRuntimeCall[1],
    [cdc1[0], Identity],
  ),
  Voting: TechnicalCommitteeStorage("Voting", cPallet_collectiveVotes[1], [
    cdc1[0],
    Identity,
  ]),
  ProposalCount: TechnicalCommitteeStorage("ProposalCount", u32[1]),
  Members: TechnicalCommitteeStorage("Members", cdc209[1]),
  Prime: TechnicalCommitteeStorage("Prime", cdc1[1]),
}

export const PhragmenElectionStorage = Storage("PhragmenElection")

const PhragmenElectionStorageEntries = {
  Members: PhragmenElectionStorage("Members", cdc550[1]),
  RunnersUp: PhragmenElectionStorage("RunnersUp", cdc550[1]),
  Candidates: PhragmenElectionStorage("Candidates", cdc69[1]),
  ElectionRounds: PhragmenElectionStorage("ElectionRounds", u32[1]),
  Voting: PhragmenElectionStorage(
    "Voting",
    cPallet_elections_phragmenVoter[1],
    [cdc1[0], Twox64Concat],
  ),
}

export const TechnicalMembershipStorage = Storage("TechnicalMembership")

const TechnicalMembershipStorageEntries = {
  Members: TechnicalMembershipStorage("Members", cdc209[1]),
  Prime: TechnicalMembershipStorage("Prime", cdc1[1]),
}

export const TreasuryStorage = Storage("Treasury")

const TreasuryStorageEntries = {
  ProposalCount: TreasuryStorage("ProposalCount", u32[1]),
  Proposals: TreasuryStorage("Proposals", cPallet_treasuryProposal[1], [
    u32[0],
    Twox64Concat,
  ]),
  Deactivated: TreasuryStorage("Deactivated", u128[1]),
  Approvals: TreasuryStorage("Approvals", cdc97[1]),
}

export const ClaimsStorage = Storage("Claims")

const ClaimsStorageEntries = {
  Claims: ClaimsStorage("Claims", u128[1], [cdc75[0], Identity]),
  Total: ClaimsStorage("Total", u128[1]),
  Vesting: ClaimsStorage("Vesting", cdc252[1], [cdc75[0], Identity]),
  Signing: ClaimsStorage(
    "Signing",
    cPolkadot_runtime_commonClaimsStatementKind[1],
    [cdc75[0], Identity],
  ),
  Preclaims: ClaimsStorage("Preclaims", cdc75[1], [cdc1[0], Identity]),
}

export const VestingStorage = Storage("Vesting")

const VestingStorageEntries = {
  Vesting: VestingStorage("Vesting", cdc564[1], [cdc1[0], Blake2128Concat]),
  StorageVersion: VestingStorage("StorageVersion", cPallet_vestingReleases[1]),
}

export const IdentityStorage = Storage("Identity")

const IdentityStorageEntries = {
  IdentityOf: IdentityStorage(
    "IdentityOf",
    cPallet_identityTypesRegistration[1],
    [cdc1[0], Twox64Concat],
  ),
  SuperOf: IdentityStorage("SuperOf", cdc302[1], [cdc1[0], Blake2128Concat]),
  SubsOf: IdentityStorage("SubsOf", cdc572[1], [cdc1[0], Twox64Concat]),
  Registrars: IdentityStorage("Registrars", cdc577[1]),
}

export const ProxyStorage = Storage("Proxy")

const ProxyStorageEntries = {
  Proxies: ProxyStorage("Proxies", cdc579[1], [cdc1[0], Twox64Concat]),
  Announcements: ProxyStorage("Announcements", cdc583[1], [
    cdc1[0],
    Twox64Concat,
  ]),
}

export const MultisigStorage = Storage("Multisig")

const MultisigStorageEntries = {
  Multisigs: MultisigStorage(
    "Multisigs",
    cPallet_multisigMultisig[1],
    [cdc1[0], Twox64Concat],
    [cdc1[0], Blake2128Concat],
  ),
}

export const BountiesStorage = Storage("Bounties")

const BountiesStorageEntries = {
  BountyCount: BountiesStorage("BountyCount", u32[1]),
  Bounties: BountiesStorage("Bounties", cPallet_bountiesBounty[1], [
    u32[0],
    Twox64Concat,
  ]),
  BountyDescriptions: BountiesStorage("BountyDescriptions", cdc12[1], [
    u32[0],
    Twox64Concat,
  ]),
  BountyApprovals: BountiesStorage("BountyApprovals", cdc97[1]),
}

export const ChildBountiesStorage = Storage("ChildBounties")

const ChildBountiesStorageEntries = {
  ChildBountyCount: ChildBountiesStorage("ChildBountyCount", u32[1]),
  ParentChildBounties: ChildBountiesStorage("ParentChildBounties", u32[1], [
    u32[0],
    Twox64Concat,
  ]),
  ChildBounties: ChildBountiesStorage(
    "ChildBounties",
    cPallet_child_bountiesChildBounty[1],
    [u32[0], Twox64Concat],
    [u32[0], Twox64Concat],
  ),
  ChildBountyDescriptions: ChildBountiesStorage(
    "ChildBountyDescriptions",
    cdc12[1],
    [u32[0], Twox64Concat],
  ),
  ChildrenCuratorFees: ChildBountiesStorage("ChildrenCuratorFees", u128[1], [
    u32[0],
    Twox64Concat,
  ]),
}

export const TipsStorage = Storage("Tips")

const TipsStorageEntries = {
  Tips: TipsStorage("Tips", cPallet_tipsOpenTip[1], [cdc1[0], Twox64Concat]),
  Reasons: TipsStorage("Reasons", cdc12[1], [cdc1[0], Identity]),
}

export const ElectionProviderMultiPhaseStorage = Storage(
  "ElectionProviderMultiPhase",
)

const ElectionProviderMultiPhaseStorageEntries = {
  Round: ElectionProviderMultiPhaseStorage("Round", u32[1]),
  CurrentPhase: ElectionProviderMultiPhaseStorage(
    "CurrentPhase",
    cPallet_election_provider_multi_phasePhase[1],
  ),
  QueuedSolution: ElectionProviderMultiPhaseStorage(
    "QueuedSolution",
    cPallet_election_provider_multi_phaseReadySolution[1],
  ),
  Snapshot: ElectionProviderMultiPhaseStorage(
    "Snapshot",
    cPallet_election_provider_multi_phaseRoundSnapshot[1],
  ),
  DesiredTargets: ElectionProviderMultiPhaseStorage("DesiredTargets", u32[1]),
  SnapshotMetadata: ElectionProviderMultiPhaseStorage(
    "SnapshotMetadata",
    cPallet_election_provider_multi_phaseSolutionOrSnapshotSize[1],
  ),
  SignedSubmissionNextIndex: ElectionProviderMultiPhaseStorage(
    "SignedSubmissionNextIndex",
    u32[1],
  ),
  SignedSubmissionIndices: ElectionProviderMultiPhaseStorage(
    "SignedSubmissionIndices",
    cdc608[1],
  ),
  SignedSubmissionsMap: ElectionProviderMultiPhaseStorage(
    "SignedSubmissionsMap",
    cPallet_election_provider_multi_phaseSignedSignedSubmission[1],
    [u32[0], Twox64Concat],
  ),
  MinimumUntrustedScore: ElectionProviderMultiPhaseStorage(
    "MinimumUntrustedScore",
    cSp_npos_electionsElectionScore[1],
  ),
}

export const VoterListStorage = Storage("VoterList")

const VoterListStorageEntries = {
  ListNodes: VoterListStorage("ListNodes", cPallet_bags_listListNode[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  CounterForListNodes: VoterListStorage("CounterForListNodes", u32[1]),
  ListBags: VoterListStorage("ListBags", cPallet_bags_listListBag[1], [
    u64[0],
    Twox64Concat,
  ]),
}

export const NominationPoolsStorage = Storage("NominationPools")

const NominationPoolsStorageEntries = {
  MinJoinBond: NominationPoolsStorage("MinJoinBond", u128[1]),
  MinCreateBond: NominationPoolsStorage("MinCreateBond", u128[1]),
  MaxPools: NominationPoolsStorage("MaxPools", u32[1]),
  MaxPoolMembers: NominationPoolsStorage("MaxPoolMembers", u32[1]),
  MaxPoolMembersPerPool: NominationPoolsStorage(
    "MaxPoolMembersPerPool",
    u32[1],
  ),
  PoolMembers: NominationPoolsStorage(
    "PoolMembers",
    cPallet_nomination_poolsPoolMember[1],
    [cdc1[0], Twox64Concat],
  ),
  CounterForPoolMembers: NominationPoolsStorage(
    "CounterForPoolMembers",
    u32[1],
  ),
  BondedPools: NominationPoolsStorage(
    "BondedPools",
    cPallet_nomination_poolsBondedPoolInner[1],
    [u32[0], Twox64Concat],
  ),
  CounterForBondedPools: NominationPoolsStorage(
    "CounterForBondedPools",
    u32[1],
  ),
  RewardPools: NominationPoolsStorage(
    "RewardPools",
    cPallet_nomination_poolsRewardPool[1],
    [u32[0], Twox64Concat],
  ),
  CounterForRewardPools: NominationPoolsStorage(
    "CounterForRewardPools",
    u32[1],
  ),
  SubPoolsStorage: NominationPoolsStorage(
    "SubPoolsStorage",
    cPallet_nomination_poolsSubPools[1],
    [u32[0], Twox64Concat],
  ),
  CounterForSubPoolsStorage: NominationPoolsStorage(
    "CounterForSubPoolsStorage",
    u32[1],
  ),
  Metadata: NominationPoolsStorage("Metadata", cdc12[1], [
    u32[0],
    Twox64Concat,
  ]),
  CounterForMetadata: NominationPoolsStorage("CounterForMetadata", u32[1]),
  LastPoolId: NominationPoolsStorage("LastPoolId", u32[1]),
  ReversePoolIdLookup: NominationPoolsStorage("ReversePoolIdLookup", u32[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  CounterForReversePoolIdLookup: NominationPoolsStorage(
    "CounterForReversePoolIdLookup",
    u32[1],
  ),
}

export const FastUnstakeStorage = Storage("FastUnstake")

const FastUnstakeStorageEntries = {
  Head: FastUnstakeStorage("Head", cPallet_fast_unstakeTypesUnstakeRequest[1]),
  Queue: FastUnstakeStorage("Queue", u128[1], [cdc1[0], Twox64Concat]),
  CounterForQueue: FastUnstakeStorage("CounterForQueue", u32[1]),
  ErasToCheckPerBlock: FastUnstakeStorage("ErasToCheckPerBlock", u32[1]),
}

export const ConfigurationStorage = Storage("Configuration")

const ConfigurationStorageEntries = {
  ActiveConfig: ConfigurationStorage(
    "ActiveConfig",
    cPolkadot_runtime_parachainsConfigurationHostConfiguration[1],
  ),
  PendingConfigs: ConfigurationStorage("PendingConfigs", cdc638[1]),
  BypassConsistencyCheck: ConfigurationStorage(
    "BypassConsistencyCheck",
    bool[1],
  ),
}

export const ParasSharedStorage = Storage("ParasShared")

const ParasSharedStorageEntries = {
  CurrentSessionIndex: ParasSharedStorage("CurrentSessionIndex", u32[1]),
  ActiveValidatorIndices: ParasSharedStorage(
    "ActiveValidatorIndices",
    cdc641[1],
  ),
  ActiveValidatorKeys: ParasSharedStorage("ActiveValidatorKeys", cdc642[1]),
}

export const ParaInclusionStorage = Storage("ParaInclusion")

const ParaInclusionStorageEntries = {
  AvailabilityBitfields: ParaInclusionStorage(
    "AvailabilityBitfields",
    cPolkadot_runtime_parachainsInclusionAvailabilityBitfieldRecord[1],
    [u32[0], Twox64Concat],
  ),
  PendingAvailability: ParaInclusionStorage(
    "PendingAvailability",
    cPolkadot_runtime_parachainsInclusionCandidatePendingAvailability[1],
    [u32[0], Twox64Concat],
  ),
  PendingAvailabilityCommitments: ParaInclusionStorage(
    "PendingAvailabilityCommitments",
    cPolkadot_primitivesV2CandidateCommitments[1],
    [u32[0], Twox64Concat],
  ),
}

export const ParaInherentStorage = Storage("ParaInherent")

const ParaInherentStorageEntries = {
  Included: ParaInherentStorage("Included", _void[1]),
  OnChainVotes: ParaInherentStorage(
    "OnChainVotes",
    cPolkadot_primitivesV2ScrapedOnChainVotes[1],
  ),
}

export const ParaSchedulerStorage = Storage("ParaScheduler")

const ParaSchedulerStorageEntries = {
  ValidatorGroups: ParaSchedulerStorage("ValidatorGroups", cdc652[1]),
  ParathreadQueue: ParaSchedulerStorage(
    "ParathreadQueue",
    cPolkadot_runtime_parachainsSchedulerParathreadClaimQueue[1],
  ),
  AvailabilityCores: ParaSchedulerStorage("AvailabilityCores", cdc658[1]),
  ParathreadClaimIndex: ParaSchedulerStorage("ParathreadClaimIndex", cdc661[1]),
  SessionStartBlock: ParaSchedulerStorage("SessionStartBlock", u32[1]),
  Scheduled: ParaSchedulerStorage("Scheduled", cdc662[1]),
}

export const ParasStorage = Storage("Paras")

const ParasStorageEntries = {
  PvfActiveVoteMap: ParasStorage(
    "PvfActiveVoteMap",
    cPolkadot_runtime_parachainsParasPvfCheckActiveVoteState[1],
    [cdc1[0], Twox64Concat],
  ),
  PvfActiveVoteList: ParasStorage("PvfActiveVoteList", cdc668[1]),
  Parachains: ParasStorage("Parachains", cdc661[1]),
  ParaLifecycles: ParasStorage(
    "ParaLifecycles",
    cPolkadot_runtime_parachainsParasParaLifecycle[1],
    [u32[0], Twox64Concat],
  ),
  Heads: ParasStorage("Heads", cdc12[1], [u32[0], Twox64Concat]),
  CurrentCodeHash: ParasStorage("CurrentCodeHash", cdc1[1], [
    u32[0],
    Twox64Concat,
  ]),
  PastCodeHash: ParasStorage("PastCodeHash", cdc1[1], [u32[0], Twox64Concat]),
  PastCodeMeta: ParasStorage(
    "PastCodeMeta",
    cPolkadot_runtime_parachainsParasParaPastCodeMeta[1],
    [u32[0], Twox64Concat],
  ),
  PastCodePruning: ParasStorage("PastCodePruning", cdc674[1]),
  FutureCodeUpgrades: ParasStorage("FutureCodeUpgrades", u32[1], [
    u32[0],
    Twox64Concat,
  ]),
  FutureCodeHash: ParasStorage("FutureCodeHash", cdc1[1], [
    u32[0],
    Twox64Concat,
  ]),
  UpgradeGoAheadSignal: ParasStorage(
    "UpgradeGoAheadSignal",
    cPolkadot_primitivesV2UpgradeGoAhead[1],
    [u32[0], Twox64Concat],
  ),
  UpgradeRestrictionSignal: ParasStorage(
    "UpgradeRestrictionSignal",
    cPolkadot_primitivesV2UpgradeRestriction[1],
    [u32[0], Twox64Concat],
  ),
  UpgradeCooldowns: ParasStorage("UpgradeCooldowns", cdc674[1]),
  UpcomingUpgrades: ParasStorage("UpcomingUpgrades", cdc674[1]),
  ActionsQueue: ParasStorage("ActionsQueue", cdc661[1], [u32[0], Twox64Concat]),
  UpcomingParasGenesis: ParasStorage(
    "UpcomingParasGenesis",
    cPolkadot_runtime_parachainsParasParaGenesisArgs[1],
    [u32[0], Twox64Concat],
  ),
  CodeByHashRefs: ParasStorage("CodeByHashRefs", u32[1], [cdc1[0], Identity]),
  CodeByHash: ParasStorage("CodeByHash", cdc12[1], [cdc1[0], Identity]),
}

export const InitializerStorage = Storage("Initializer")

const InitializerStorageEntries = {
  HasInitialized: InitializerStorage("HasInitialized", _void[1]),
  BufferedSessionChanges: InitializerStorage(
    "BufferedSessionChanges",
    cdc679[1],
  ),
}

export const DmpStorage = Storage("Dmp")

const DmpStorageEntries = {
  DownwardMessageQueues: DmpStorage("DownwardMessageQueues", cdc681[1], [
    u32[0],
    Twox64Concat,
  ]),
  DownwardMessageQueueHeads: DmpStorage("DownwardMessageQueueHeads", cdc1[1], [
    u32[0],
    Twox64Concat,
  ]),
}

export const UmpStorage = Storage("Ump")

const UmpStorageEntries = {
  RelayDispatchQueues: UmpStorage("RelayDispatchQueues", cdc167[1], [
    u32[0],
    Twox64Concat,
  ]),
  RelayDispatchQueueSize: UmpStorage("RelayDispatchQueueSize", cdc30[1], [
    u32[0],
    Twox64Concat,
  ]),
  NeedsDispatch: UmpStorage("NeedsDispatch", cdc661[1]),
  NextDispatchRoundStartWith: UmpStorage("NextDispatchRoundStartWith", u32[1]),
  Overweight: UmpStorage("Overweight", cdc683[1], [u64[0], Twox64Concat]),
  OverweightCount: UmpStorage("OverweightCount", u64[1]),
}

export const HrmpStorage = Storage("Hrmp")

const HrmpStorageEntries = {
  HrmpOpenChannelRequests: HrmpStorage(
    "HrmpOpenChannelRequests",
    cPolkadot_runtime_parachainsHrmpHrmpOpenChannelRequest[1],
    [cPolkadot_parachainPrimitivesHrmpChannelId[0], Twox64Concat],
  ),
  HrmpOpenChannelRequestsList: HrmpStorage(
    "HrmpOpenChannelRequestsList",
    cdc686[1],
  ),
  HrmpOpenChannelRequestCount: HrmpStorage(
    "HrmpOpenChannelRequestCount",
    u32[1],
    [u32[0], Twox64Concat],
  ),
  HrmpAcceptedChannelRequestCount: HrmpStorage(
    "HrmpAcceptedChannelRequestCount",
    u32[1],
    [u32[0], Twox64Concat],
  ),
  HrmpCloseChannelRequests: HrmpStorage("HrmpCloseChannelRequests", _void[1], [
    cPolkadot_parachainPrimitivesHrmpChannelId[0],
    Twox64Concat,
  ]),
  HrmpCloseChannelRequestsList: HrmpStorage(
    "HrmpCloseChannelRequestsList",
    cdc686[1],
  ),
  HrmpWatermarks: HrmpStorage("HrmpWatermarks", u32[1], [u32[0], Twox64Concat]),
  HrmpChannels: HrmpStorage(
    "HrmpChannels",
    cPolkadot_runtime_parachainsHrmpHrmpChannel[1],
    [cPolkadot_parachainPrimitivesHrmpChannelId[0], Twox64Concat],
  ),
  HrmpIngressChannelsIndex: HrmpStorage("HrmpIngressChannelsIndex", cdc661[1], [
    u32[0],
    Twox64Concat,
  ]),
  HrmpEgressChannelsIndex: HrmpStorage("HrmpEgressChannelsIndex", cdc661[1], [
    u32[0],
    Twox64Concat,
  ]),
  HrmpChannelContents: HrmpStorage("HrmpChannelContents", cdc689[1], [
    cPolkadot_parachainPrimitivesHrmpChannelId[0],
    Twox64Concat,
  ]),
  HrmpChannelDigests: HrmpStorage("HrmpChannelDigests", cdc691[1], [
    u32[0],
    Twox64Concat,
  ]),
}

export const ParaSessionInfoStorage = Storage("ParaSessionInfo")

const ParaSessionInfoStorageEntries = {
  AssignmentKeysUnsafe: ParaSessionInfoStorage(
    "AssignmentKeysUnsafe",
    cdc694[1],
  ),
  EarliestStoredSession: ParaSessionInfoStorage(
    "EarliestStoredSession",
    u32[1],
  ),
  Sessions: ParaSessionInfoStorage(
    "Sessions",
    cPolkadot_primitivesV2SessionInfo[1],
    [u32[0], Identity],
  ),
  AccountKeys: ParaSessionInfoStorage("AccountKeys", cdc209[1], [
    u32[0],
    Identity,
  ]),
}

export const ParasDisputesStorage = Storage("ParasDisputes")

const ParasDisputesStorageEntries = {
  LastPrunedSession: ParasDisputesStorage("LastPrunedSession", u32[1]),
  Disputes: ParasDisputesStorage(
    "Disputes",
    cPolkadot_primitivesV2DisputeState[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Blake2128Concat],
  ),
  Included: ParasDisputesStorage(
    "Included",
    u32[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Blake2128Concat],
  ),
  Frozen: ParasDisputesStorage("Frozen", cOption[1]),
}

export const RegistrarStorage = Storage("Registrar")

const RegistrarStorageEntries = {
  PendingSwap: RegistrarStorage("PendingSwap", u32[1], [u32[0], Twox64Concat]),
  Paras: RegistrarStorage(
    "Paras",
    cPolkadot_runtime_commonParas_registrarParaInfo[1],
    [u32[0], Twox64Concat],
  ),
  NextFreeParaId: RegistrarStorage("NextFreeParaId", u32[1]),
}

export const SlotsStorage = Storage("Slots")

const SlotsStorageEntries = {
  Leases: SlotsStorage("Leases", cdc704[1], [u32[0], Twox64Concat]),
}

export const AuctionsStorage = Storage("Auctions")

const AuctionsStorageEntries = {
  AuctionCounter: AuctionsStorage("AuctionCounter", u32[1]),
  AuctionInfo: AuctionsStorage("AuctionInfo", cdc30[1]),
  ReservedAmounts: AuctionsStorage("ReservedAmounts", u128[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  Winning: AuctionsStorage("Winning", cdc707[1], [u32[0], Twox64Concat]),
}

export const CrowdloanStorage = Storage("Crowdloan")

const CrowdloanStorageEntries = {
  Funds: CrowdloanStorage(
    "Funds",
    cPolkadot_runtime_commonCrowdloanFundInfo[1],
    [u32[0], Twox64Concat],
  ),
  NewRaise: CrowdloanStorage("NewRaise", cdc661[1]),
  EndingsCount: CrowdloanStorage("EndingsCount", u32[1]),
  NextFundIndex: CrowdloanStorage("NextFundIndex", u32[1]),
}
