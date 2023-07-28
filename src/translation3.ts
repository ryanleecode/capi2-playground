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

const cPallet_balancesTypesAccountData = Struct({
  free: u128,
  reserved: u128,
  frozen: u128,
  flags: u128,
})

const cFrame_systemAccountInfo = Struct({
  nonce: u32,
  consumers: u32,
  providers: u32,
  sufficients: u32,
  data: cPallet_balancesTypesAccountData,
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

const cdc13 = Bytes()

const cdc17 = Bytes(4)

const cSp_runtimeGenericDigestDigestItem = Enum({
  PreRuntime: Tuple(cdc17, cdc13),
  Consensus: Tuple(cdc17, cdc13),
  Seal: Tuple(cdc17, cdc13),
  Other: cdc13,
  RuntimeEnvironmentUpdated: _void,
})

const cdc15 = Vector(cSp_runtimeGenericDigestDigestItem)

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

const cdc31 = Tuple(u32, u32)

const cOption = Enum({ None: _void, Some: cdc1 })

const cResult = Enum({ Ok: _void, Err: cSp_runtimeDispatchError })

const cPallet_schedulerPalletEvent = Enum({
  Scheduled: Struct({ when: u32, index: u32 }),
  Canceled: Struct({ when: u32, index: u32 }),
  Dispatched: Struct({ task: cdc31, id: cOption, result: cResult }),
  CallUnavailable: Struct({ task: cdc31, id: cOption }),
  PeriodicFailed: Struct({ task: cdc31, id: cOption }),
  PermanentlyOverweight: Struct({ task: cdc31, id: cOption }),
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
  BalanceSet: Struct({ who: cdc1, free: u128 }),
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
  Minted: Struct({ who: cdc1, amount: u128 }),
  Burned: Struct({ who: cdc1, amount: u128 }),
  Suspended: Struct({ who: cdc1, amount: u128 }),
  Restored: Struct({ who: cdc1, amount: u128 }),
  Upgraded: cdc1,
  Issued: u128,
  Rescinded: u128,
  Locked: Struct({ who: cdc1, amount: u128 }),
  Unlocked: Struct({ who: cdc1, amount: u128 }),
  Frozen: Struct({ who: cdc1, amount: u128 }),
  Thawed: Struct({ who: cdc1, amount: u128 }),
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

const cdc47 = Bytes(16)

const cPallet_offencesPalletEvent = Enum({
  Offence: Struct({ kind: cdc47, timeslot: cdc13 }),
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

const cPallet_democracyVote_thresholdVoteThreshold = Enum({
  SuperMajorityApprove: _void,
  SuperMajorityAgainst: _void,
  SimpleMajority: _void,
})

const cPallet_democracyVoteAccountVote = Enum({
  Standard: Struct({ vote: u8, balance: u128 }),
  Split: Struct({ aye: u128, nay: u128 }),
})

const cPallet_democracyTypesMetadataOwner = Enum({
  External: _void,
  Proposal: u32,
  Referendum: u32,
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
  MetadataSet: Struct({
    owner: cPallet_democracyTypesMetadataOwner,
    hash: cdc1,
  }),
  MetadataCleared: Struct({
    owner: cPallet_democracyTypesMetadataOwner,
    hash: cdc1,
  }),
  MetadataTransferred: Struct({
    prev_owner: cPallet_democracyTypesMetadataOwner,
    owner: cPallet_democracyTypesMetadataOwner,
    hash: cdc1,
  }),
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

const cdc72 = Tuple(cdc1, u128)

const cdc71 = Vector(cdc72)

const cPallet_elections_phragmenPalletEvent = Enum({
  NewTerm: cdc71,
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

const cPallet_conviction_votingPalletEvent = Enum({
  Delegated: Tuple(cdc1, cdc1),
  Undelegated: cdc1,
})

const cFrame_supportTraitsPreimagesBounded = Enum({
  Legacy: cdc1,
  Inline: cdc13,
  Lookup: Struct({ hash: cdc1, len: u32 }),
})

const cPallet_conviction_votingTypesTally = Struct({
  ayes: u128,
  nays: u128,
  support: u128,
})

const cPallet_referendaPalletEvent = Enum({
  Submitted: Struct({
    index: u32,
    track: u16,
    proposal: cFrame_supportTraitsPreimagesBounded,
  }),
  DecisionDepositPlaced: Struct({ index: u32, who: cdc1, amount: u128 }),
  DecisionDepositRefunded: Struct({ index: u32, who: cdc1, amount: u128 }),
  DepositSlashed: Struct({ who: cdc1, amount: u128 }),
  DecisionStarted: Struct({
    index: u32,
    track: u16,
    proposal: cFrame_supportTraitsPreimagesBounded,
    tally: cPallet_conviction_votingTypesTally,
  }),
  ConfirmStarted: u32,
  ConfirmAborted: u32,
  Confirmed: Struct({ index: u32, tally: cPallet_conviction_votingTypesTally }),
  Approved: u32,
  Rejected: Struct({ index: u32, tally: cPallet_conviction_votingTypesTally }),
  TimedOut: Struct({ index: u32, tally: cPallet_conviction_votingTypesTally }),
  Cancelled: Struct({ index: u32, tally: cPallet_conviction_votingTypesTally }),
  Killed: Struct({ index: u32, tally: cPallet_conviction_votingTypesTally }),
  SubmissionDepositRefunded: Struct({ index: u32, who: cdc1, amount: u128 }),
  MetadataSet: Struct({ index: u32, hash: cdc1 }),
  MetadataCleared: Struct({ index: u32, hash: cdc1 }),
})

const cFrame_supportDispatchPostDispatchInfo = Struct({
  actual_weight: cOption,
  pays_fee: cFrame_supportDispatchPays,
})

const cSp_runtimeDispatchErrorWithPostInfo = Struct({
  post_info: cFrame_supportDispatchPostDispatchInfo,
  error: cSp_runtimeDispatchError,
})

const cPallet_whitelistPalletEvent = Enum({
  CallWhitelisted: cdc1,
  WhitelistedCallRemoved: cdc1,
  WhitelistedCallDispatched: Struct({ call_hash: cdc1, result: cResult }),
})

const cdc102 = Bytes(20)

const cPolkadot_runtime_commonClaimsPalletEvent = Enum({
  Claimed: Struct({ who: cdc1, ethereum_address: cdc102, amount: u128 }),
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
  NominationPools: _void,
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

const cdc458 = Tuple(bool, u32)

const cPallet_election_provider_multi_phasePhase = Enum({
  Off: _void,
  Signed: _void,
  Unsigned: cdc458,
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

const cdc305 = Tuple(u32, cdc1)

const cPallet_nomination_poolsCommissionChangeRate = Struct({
  max_increase: u32,
  min_delay: u32,
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
  RolesUpdated: Struct({ root: cOption, bouncer: cOption, nominator: cOption }),
  PoolSlashed: Struct({ pool_id: u32, balance: u128 }),
  UnbondingPoolSlashed: Struct({ pool_id: u32, era: u32, balance: u128 }),
  PoolCommissionUpdated: Struct({ pool_id: u32, current: cOption }),
  PoolMaxCommissionUpdated: Struct({ pool_id: u32, max_commission: u32 }),
  PoolCommissionChangeRateUpdated: Struct({
    pool_id: u32,
    change_rate: cPallet_nomination_poolsCommissionChangeRate,
  }),
  PoolCommissionClaimed: Struct({ pool_id: u32, commission: u128 }),
})

const cdc109 = Vector(u32)

const cPallet_fast_unstakePalletEvent = Enum({
  Unstaked: Struct({ stash: cdc1, result: cResult }),
  Slashed: Struct({ stash: cdc1, amount: u128 }),
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

const cPolkadot_runtime_parachainsInclusionPalletEvent = Enum({
  CandidateBacked: Tuple(
    cPolkadot_primitivesV4CandidateReceipt,
    cdc13,
    u32,
    u32,
  ),
  CandidateIncluded: Tuple(
    cPolkadot_primitivesV4CandidateReceipt,
    cdc13,
    u32,
    u32,
  ),
  CandidateTimedOut: Tuple(cPolkadot_primitivesV4CandidateReceipt, cdc13, u32),
  UpwardMessagesReceived: Struct({ from: u32, count: u32 }),
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
  Revert: u32,
})

const cPolkadot_runtime_commonParas_registrarPalletEvent = Enum({
  Registered: Struct({ para_id: u32, manager: cdc1 }),
  Deregistered: u32,
  Reserved: Struct({ para_id: u32, who: cdc1 }),
  Swapped: Struct({ para_id: u32, other_id: u32 }),
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
  MemoUpdated: Struct({ who: cdc1, para_id: u32, memo: cdc13 }),
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

const cXcmV3TraitsOutcome = Enum({
  Complete: cSp_weightsWeight_v2Weight,
  Incomplete: Tuple(cSp_weightsWeight_v2Weight, cXcmV3TraitsError),
  Error: cXcmV3TraitsError,
})

const cXcmV3JunctionNetworkId = Enum({
  ByGenesis: cdc1,
  ByFork: Struct({ block_number: u64, block_hash: cdc1 }),
  Polkadot: _void,
  Kusama: _void,
  Westend: _void,
  Rococo: _void,
  Wococo: _void,
  Ethereum: compactBn,
  BitcoinCore: _void,
  BitcoinCash: _void,
})

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

const cXcmV3JunctionBodyPart = Enum({
  Voice: _void,
  Members: compactNumber,
  Fraction: Struct({ nom: compactNumber, denom: compactNumber }),
  AtLeastProportion: Struct({ nom: compactNumber, denom: compactNumber }),
  MoreThanProportion: Struct({ nom: compactNumber, denom: compactNumber }),
})

const cXcmV3JunctionJunction = Enum({
  Parachain: compactNumber,
  AccountId32: Struct({ network: cOption, id: cdc1 }),
  AccountIndex64: Struct({ network: cOption, index: compactBn }),
  AccountKey20: Struct({ network: cOption, key: cdc102 }),
  PalletInstance: u8,
  GeneralIndex: compactBn,
  GeneralKey: Struct({ length: u8, data: cdc1 }),
  OnlyChild: _void,
  Plurality: Struct({ id: cXcmV3JunctionBodyId, part: cXcmV3JunctionBodyPart }),
  GlobalConsensus: cXcmV3JunctionNetworkId,
})

const cXcmV3JunctionsJunctions = Enum({
  Here: _void,
  X1: cXcmV3JunctionJunction,
  X2: Tuple(cXcmV3JunctionJunction, cXcmV3JunctionJunction),
  X3: Tuple(
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
  ),
  X4: Tuple(
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
  ),
  X5: Tuple(
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
  ),
  X6: Tuple(
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
  ),
  X7: Tuple(
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
  ),
  X8: Tuple(
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
    cXcmV3JunctionJunction,
  ),
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

const cdc413 = Tuple(u32, cXcmV3TraitsError)

const cXcmV3PalletInfo = Struct({
  index: compactNumber,
  name: cdc13,
  module_name: cdc13,
  major: compactNumber,
  minor: compactNumber,
  patch: compactNumber,
})

const cdc418 = Vector(cXcmV3PalletInfo)

const cXcmV3MaybeErrorCode = Enum({
  Success: _void,
  Error: cdc13,
  TruncatedError: cdc13,
})

const cXcmV3Response = Enum({
  Null: _void,
  Assets: cdc406,
  ExecutionResult: cOption,
  Version: u32,
  PalletsInfo: cdc418,
  DispatchResult: cXcmV3MaybeErrorCode,
})

const circularcXcmV3Xcm: Codec<
  () => typeof cXcmV3Xcm extends Codec<infer V> ? V : unknown
> = lazy(() => cXcmV3Xcm)

const cXcmV2OriginKind = Enum({
  Native: _void,
  SovereignAccount: _void,
  Superuser: _void,
  Xcm: _void,
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

const cXcmV3MultiassetWildMultiAsset = Enum({
  All: _void,
  AllOf: Struct({
    id: cXcmV3MultiassetAssetId,
    fun: cXcmV3MultiassetWildFungibility,
  }),
  AllCounted: compactNumber,
  AllOfCounted: Struct({
    id: cXcmV3MultiassetAssetId,
    fun: cXcmV3MultiassetWildFungibility,
    count: compactNumber,
  }),
})

const cXcmV3MultiassetMultiAssetFilter = Enum({
  Definite: cdc406,
  Wild: cXcmV3MultiassetWildMultiAsset,
})

const cXcmV3WeightLimit = Enum({
  Unlimited: _void,
  Limited: cSp_weightsWeight_v2Weight,
})

const cXcmV3Instruction = Enum({
  WithdrawAsset: cdc406,
  ReserveAssetDeposited: cdc406,
  ReceiveTeleportedAsset: cdc406,
  QueryResponse: Struct({
    query_id: compactBn,
    response: cXcmV3Response,
    max_weight: cSp_weightsWeight_v2Weight,
    querier: cOption,
  }),
  TransferAsset: Struct({
    assets: cdc406,
    beneficiary: cXcmV3MultilocationMultiLocation,
  }),
  TransferReserveAsset: Struct({
    assets: cdc406,
    dest: cXcmV3MultilocationMultiLocation,
    xcm: circularcXcmV3Xcm,
  }),
  Transact: Struct({
    origin_kind: cXcmV2OriginKind,
    require_weight_at_most: cSp_weightsWeight_v2Weight,
    call: cdc13,
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
  DescendOrigin: cXcmV3JunctionsJunctions,
  ReportError: cXcmV3QueryResponseInfo,
  DepositAsset: Struct({
    assets: cXcmV3MultiassetMultiAssetFilter,
    beneficiary: cXcmV3MultilocationMultiLocation,
  }),
  DepositReserveAsset: Struct({
    assets: cXcmV3MultiassetMultiAssetFilter,
    dest: cXcmV3MultilocationMultiLocation,
    xcm: circularcXcmV3Xcm,
  }),
  ExchangeAsset: Struct({
    give: cXcmV3MultiassetMultiAssetFilter,
    want: cdc406,
    maximal: bool,
  }),
  InitiateReserveWithdraw: Struct({
    assets: cXcmV3MultiassetMultiAssetFilter,
    reserve: cXcmV3MultilocationMultiLocation,
    xcm: circularcXcmV3Xcm,
  }),
  InitiateTeleport: Struct({
    assets: cXcmV3MultiassetMultiAssetFilter,
    dest: cXcmV3MultilocationMultiLocation,
    xcm: circularcXcmV3Xcm,
  }),
  ReportHolding: Struct({
    response_info: cXcmV3QueryResponseInfo,
    assets: cXcmV3MultiassetMultiAssetFilter,
  }),
  BuyExecution: Struct({
    fees: cXcmV3MultiassetMultiAsset,
    weight_limit: cXcmV3WeightLimit,
  }),
  RefundSurplus: _void,
  SetErrorHandler: circularcXcmV3Xcm,
  SetAppendix: circularcXcmV3Xcm,
  ClearError: _void,
  ClaimAsset: Struct({
    assets: cdc406,
    ticket: cXcmV3MultilocationMultiLocation,
  }),
  Trap: compactBn,
  SubscribeVersion: Struct({
    query_id: compactBn,
    max_response_weight: cSp_weightsWeight_v2Weight,
  }),
  UnsubscribeVersion: _void,
  BurnAsset: cdc406,
  ExpectAsset: cdc406,
  ExpectOrigin: cOption,
  ExpectError: cOption,
  ExpectTransactStatus: cXcmV3MaybeErrorCode,
  QueryPallet: Struct({
    module_name: cdc13,
    response_info: cXcmV3QueryResponseInfo,
  }),
  ExpectPallet: Struct({
    index: compactNumber,
    name: cdc13,
    module_name: cdc13,
    crate_major: compactNumber,
    min_crate_minor: compactNumber,
  }),
  ReportTransactStatus: cXcmV3QueryResponseInfo,
  ClearTransactStatus: _void,
  UniversalOrigin: cXcmV3JunctionJunction,
  ExportMessage: Struct({
    network: cXcmV3JunctionNetworkId,
    destination: cXcmV3JunctionsJunctions,
    xcm: circularcXcmV3Xcm,
  }),
  LockAsset: Struct({
    asset: cXcmV3MultiassetMultiAsset,
    unlocker: cXcmV3MultilocationMultiLocation,
  }),
  UnlockAsset: Struct({
    asset: cXcmV3MultiassetMultiAsset,
    target: cXcmV3MultilocationMultiLocation,
  }),
  NoteUnlockable: Struct({
    asset: cXcmV3MultiassetMultiAsset,
    owner: cXcmV3MultilocationMultiLocation,
  }),
  RequestUnlock: Struct({
    asset: cXcmV3MultiassetMultiAsset,
    locker: cXcmV3MultilocationMultiLocation,
  }),
  SetFeesMode: bool,
  SetTopic: cdc1,
  ClearTopic: _void,
  AliasOrigin: cXcmV3MultilocationMultiLocation,
  UnpaidExecution: Struct({
    weight_limit: cXcmV3WeightLimit,
    check_origin: cOption,
  }),
})

const cdc403 = Vector(cXcmV3Instruction)

const cXcmV3Xcm = cdc403

const cXcmV2NetworkId = Enum({
  Any: _void,
  Named: cdc13,
  Polkadot: _void,
  Kusama: _void,
})

const cXcmV2BodyId = Enum({
  Unit: _void,
  Named: cdc13,
  Index: compactNumber,
  Executive: _void,
  Technical: _void,
  Legislative: _void,
  Judicial: _void,
  Defense: _void,
  Administration: _void,
  Treasury: _void,
})

const cXcmV2BodyPart = Enum({
  Voice: _void,
  Members: compactNumber,
  Fraction: Struct({ nom: compactNumber, denom: compactNumber }),
  AtLeastProportion: Struct({ nom: compactNumber, denom: compactNumber }),
  MoreThanProportion: Struct({ nom: compactNumber, denom: compactNumber }),
})

const cXcmV2JunctionJunction = Enum({
  Parachain: compactNumber,
  AccountId32: Struct({ network: cXcmV2NetworkId, id: cdc1 }),
  AccountIndex64: Struct({ network: cXcmV2NetworkId, index: compactBn }),
  AccountKey20: Struct({ network: cXcmV2NetworkId, key: cdc102 }),
  PalletInstance: u8,
  GeneralIndex: compactBn,
  GeneralKey: cdc13,
  OnlyChild: _void,
  Plurality: Struct({ id: cXcmV2BodyId, part: cXcmV2BodyPart }),
})

const cXcmV2MultilocationJunctions = Enum({
  Here: _void,
  X1: cXcmV2JunctionJunction,
  X2: Tuple(cXcmV2JunctionJunction, cXcmV2JunctionJunction),
  X3: Tuple(
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
  ),
  X4: Tuple(
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
  ),
  X5: Tuple(
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
  ),
  X6: Tuple(
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
  ),
  X7: Tuple(
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
  ),
  X8: Tuple(
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
    cXcmV2JunctionJunction,
  ),
})

const cXcmV2MultilocationMultiLocation = Struct({
  parents: u8,
  interior: cXcmV2MultilocationJunctions,
})

const cXcmV2MultiassetAssetId = Enum({
  Concrete: cXcmV2MultilocationMultiLocation,
  Abstract: cdc13,
})

const cXcmV2MultiassetAssetInstance = Enum({
  Undefined: _void,
  Index: compactBn,
  Array4: cdc17,
  Array8: cdc198,
  Array16: cdc47,
  Array32: cdc1,
  Blob: cdc13,
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

const cXcmVersionedMultiAssets = Enum({ V2: cdc387, V3: cdc406 })

const cXcmVersionedMultiLocation = Enum({
  V2: cXcmV2MultilocationMultiLocation,
  V3: cXcmV3MultilocationMultiLocation,
})

const cPallet_xcmPalletEvent = Enum({
  Attempted: cXcmV3TraitsOutcome,
  Sent: Tuple(
    cXcmV3MultilocationMultiLocation,
    cXcmV3MultilocationMultiLocation,
    cdc403,
  ),
  UnexpectedResponse: Tuple(cXcmV3MultilocationMultiLocation, u64),
  ResponseReady: Tuple(u64, cXcmV3Response),
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
  InvalidResponder: Tuple(cXcmV3MultilocationMultiLocation, u64, cOption),
  InvalidResponderVersion: Tuple(cXcmV3MultilocationMultiLocation, u64),
  ResponseTaken: u64,
  AssetsTrapped: Tuple(
    cdc1,
    cXcmV3MultilocationMultiLocation,
    cXcmVersionedMultiAssets,
  ),
  VersionChangeNotified: Tuple(cXcmV3MultilocationMultiLocation, u32, cdc406),
  SupportedVersionChanged: Tuple(cXcmV3MultilocationMultiLocation, u32),
  NotifyTargetSendFail: Tuple(
    cXcmV3MultilocationMultiLocation,
    u64,
    cXcmV3TraitsError,
  ),
  NotifyTargetMigrationFail: Tuple(cXcmVersionedMultiLocation, u64),
  InvalidQuerierVersion: Tuple(cXcmV3MultilocationMultiLocation, u64),
  InvalidQuerier: Tuple(
    cXcmV3MultilocationMultiLocation,
    u64,
    cXcmV3MultilocationMultiLocation,
    cOption,
  ),
  VersionNotifyStarted: Tuple(cXcmV3MultilocationMultiLocation, cdc406),
  VersionNotifyRequested: Tuple(cXcmV3MultilocationMultiLocation, cdc406),
  VersionNotifyUnrequested: Tuple(cXcmV3MultilocationMultiLocation, cdc406),
  FeesPaid: Tuple(cXcmV3MultilocationMultiLocation, cdc406),
  AssetsClaimed: Tuple(
    cdc1,
    cXcmV3MultilocationMultiLocation,
    cXcmVersionedMultiAssets,
  ),
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

const cPallet_message_queuePalletEvent = Enum({
  ProcessingFailed: Struct({
    id: cdc1,
    origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
    error: cFrame_supportTraitsMessagesProcessMessageError,
  }),
  Processed: Struct({
    id: cdc1,
    origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
    weight_used: cSp_weightsWeight_v2Weight,
    success: bool,
  }),
  OverweightEnqueued: Struct({
    id: cdc1,
    origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
    page_index: u32,
    message_index: u32,
  }),
  PageReaped: Struct({
    origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
    index: u32,
  }),
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
})

const cdc480 = Vector(cdc1)

const cFrame_systemEventRecord = Struct({
  phase: cFrame_systemPhase,
  event: cPolkadot_runtimeRuntimeEvent,
  topics: cdc480,
})

const cdc18 = Vector(cFrame_systemEventRecord)

const cdc481 = Vector(cdc31)

const cFrame_systemLastRuntimeUpgradeInfo = Struct({
  spec_version: compactNumber,
  spec_name: str,
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

const cPolkadot_runtimeGovernanceOriginsPallet_custom_originsOrigin = Enum({
  StakingAdmin: _void,
  Treasurer: _void,
  FellowshipAdmin: _void,
  GeneralAdmin: _void,
  AuctionAdmin: _void,
  LeaseAdmin: _void,
  ReferendumCanceller: _void,
  ReferendumKiller: _void,
  SmallTipper: _void,
  BigTipper: _void,
  SmallSpender: _void,
  MediumSpender: _void,
  BigSpender: _void,
  WhitelistedCaller: _void,
})

const cPolkadot_runtime_parachainsOriginPalletOrigin = Enum({ Parachain: u32 })

const cPallet_xcmPalletOrigin = Enum({
  Xcm: cXcmV3MultilocationMultiLocation,
  Response: cXcmV3MultilocationMultiLocation,
})

const cPolkadot_runtimeOriginCaller = Enum({
  system: cFrame_supportDispatchRawOrigin,
  Council: cPallet_collectiveRawOrigin,
  TechnicalCommittee: cPallet_collectiveRawOrigin,
  Origins: cPolkadot_runtimeGovernanceOriginsPallet_custom_originsOrigin,
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

const cdc498 = Vector(cOption)

const cPallet_preimageRequestStatus = Enum({
  Unrequested: Struct({ deposit: cdc72, len: u32 }),
  Requested: Struct({ deposit: cOption, count: u32, len: cOption }),
})

const cdc502 = Tuple(cdc1, u32)

const cdc506 = Tuple(cdc1, u64)

const cdc507 = Vector(cdc506)

const cdc96 = Tuple(u64, u64)

const cSp_consensus_babeAllowedSlots = Enum({
  PrimarySlots: _void,
  PrimaryAndSecondaryPlainSlots: _void,
  PrimaryAndSecondaryVRFSlots: _void,
})

const cSp_consensus_babeDigestsNextConfigDescriptor = Enum({
  V1: Struct({ c: cdc96, allowed_slots: cSp_consensus_babeAllowedSlots }),
})

const cdc509 = Vector(cdc1)

const cSp_coreSr25519VrfVrfSignature = Struct({ output: cdc1, proof: cdc126 })

const cSp_consensus_babeDigestsPrimaryPreDigest = Struct({
  authority_index: u32,
  slot: u64,
  vrf_signature: cSp_coreSr25519VrfVrfSignature,
})

const cSp_consensus_babeDigestsSecondaryPlainPreDigest = Struct({
  authority_index: u32,
  slot: u64,
})

const cSp_consensus_babeDigestsSecondaryVRFPreDigest = Struct({
  authority_index: u32,
  slot: u64,
  vrf_signature: cSp_coreSr25519VrfVrfSignature,
})

const cSp_consensus_babeDigestsPreDigest = Enum({
  Primary: cSp_consensus_babeDigestsPrimaryPreDigest,
  SecondaryPlain: cSp_consensus_babeDigestsSecondaryPlainPreDigest,
  SecondaryVRF: cSp_consensus_babeDigestsSecondaryVRFPreDigest,
})

const cSp_consensus_babeBabeEpochConfiguration = Struct({
  c: cdc96,
  allowed_slots: cSp_consensus_babeAllowedSlots,
})

const cdc518 = Tuple(u64, u32)

const cdc519 = Vector(cdc518)

const cdc521 = Tuple(cdc1, u128, bool)

const cPallet_balancesTypesReasons = Enum({
  Fee: _void,
  Misc: _void,
  All: _void,
})

const cPallet_balancesTypesBalanceLock = Struct({
  id: cdc198,
  amount: u128,
  reasons: cPallet_balancesTypesReasons,
})

const cdc526 = Vector(cPallet_balancesTypesBalanceLock)

const cPallet_balancesTypesReserveData = Struct({ id: cdc198, amount: u128 })

const cdc529 = Vector(cPallet_balancesTypesReserveData)

const cPallet_balancesTypesIdAmount = Struct({ id: _void, amount: u128 })

const cdc532 = Vector(cPallet_balancesTypesIdAmount)

const cPallet_transaction_paymentReleases = Enum({
  V1Ancient: _void,
  V2: _void,
})

const cdc104 = Vector(cdc1)

const cPallet_stakingUnlockChunk = Struct({
  value: compactBn,
  era: compactNumber,
})

const cdc539 = Vector(cPallet_stakingUnlockChunk)

const cPallet_stakingStakingLedger = Struct({
  stash: cdc1,
  total: compactBn,
  active: compactBn,
  unlocking: cdc539,
  claimed_rewards: cdc109,
})

const cPallet_stakingRewardDestination = Enum({
  Staked: _void,
  Stash: _void,
  Controller: _void,
  Account: cdc1,
  None: _void,
})

const cPallet_stakingNominations = Struct({
  targets: cdc104,
  submitted_in: u32,
  suppressed: bool,
})

const cPallet_stakingActiveEraInfo = Struct({ index: u32, start: cOption })

const cdc545 = Tuple(u32, cdc1)

const cdc549 = Tuple(cdc1, u32)

const cdc548 = Vector(cdc549)

const cPallet_stakingEraRewardPoints = Struct({
  total: u32,
  individual: cdc548,
})

const cPallet_stakingUnappliedSlash = Struct({
  validator: cdc1,
  own: u128,
  others: cdc71,
  reporters: cdc104,
  payout: u128,
})

const cdc550 = Vector(cPallet_stakingUnappliedSlash)

const cdc552 = Tuple(u32, u128)

const cPallet_stakingSlashingSlashingSpans = Struct({
  span_index: u32,
  last_start: u32,
  last_nonzero_slash: u32,
  prior: cdc109,
})

const cPallet_stakingSlashingSpanRecord = Struct({
  slashed: u128,
  paid_out: u128,
})

const cdc556 = Tuple(u32, bool)

const cdc555 = Vector(cdc556)

const cSp_stakingOffenceOffenceDetails = Struct({
  offender: cdc58,
  reporters: cdc104,
})

const cdc559 = Tuple(cdc47, cdc13)

const cPolkadot_runtimeSessionKeys = Struct({
  grandpa: cdc1,
  babe: cdc1,
  im_online: cdc1,
  para_validator: cdc1,
  para_assignment: cdc1,
  authority_discovery: cdc1,
})

const cdc561 = Tuple(cdc1, cPolkadot_runtimeSessionKeys)

const cdc560 = Vector(cdc561)

const cdc562 = Tuple(cdc17, cdc13)

const cPallet_grandpaStoredState = Enum({
  Live: _void,
  PendingPause: Struct({ scheduled_at: u32, delay: u32 }),
  Paused: _void,
  PendingResume: Struct({ scheduled_at: u32, delay: u32 }),
})

const cPallet_grandpaStoredPendingChange = Struct({
  scheduled_at: u32,
  delay: u32,
  next_authorities: cdc50,
  forced: cOption,
})

const cdc570 = Vector(cdc1)

const cdc575 = Vector(cdc13)

const cPallet_im_onlineBoundedOpaqueNetworkState = Struct({
  peer_id: cdc13,
  external_addresses: cdc575,
})

const cFrame_supportTraitsMiscWrapperOpaque = Tuple(
  compactNumber,
  cPallet_im_onlineBoundedOpaqueNetworkState,
)

const cdc578 = Tuple(u32, cFrame_supportTraitsPreimagesBounded, cdc1)

const cdc579 = Vector(cdc578)

const cdc580 = Tuple(cdc104, u128)

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

const cdc587 = Tuple(u32, cPallet_democracyVoteAccountVote)

const cdc588 = Vector(cdc587)

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
    votes: cdc588,
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

const cdc591 = Tuple(
  cFrame_supportTraitsPreimagesBounded,
  cPallet_democracyVote_thresholdVoteThreshold,
)

const cdc592 = Tuple(u32, cdc104)

const cdc82 = Tuple(cdc13, cdc13)

const cdc81 = Vector(cdc82)

const cdc83 = Vector(cdc13)

const cFrame_systemPalletCall = Enum({
  remark: cdc13,
  set_heap_pages: u64,
  set_code: cdc13,
  set_code_without_checks: cdc13,
  set_storage: cdc81,
  kill_storage: cdc83,
  kill_prefix: Struct({ prefix: cdc13, subkeys: u32 }),
  remark_with_event: cdc13,
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
  note_preimage: cdc13,
  unnote_preimage: cdc1,
  request_preimage: cdc1,
  unrequest_preimage: cdc1,
})

const cSp_runtimeGenericHeaderHeader = Struct({
  parent_hash: cdc1,
  number: compactNumber,
  state_root: cdc1,
  extrinsics_root: cdc1,
  digest: cdc15,
})

const cSp_consensus_slotsEquivocationProof = Struct({
  offender: cdc1,
  slot: u64,
  first_header: cSp_runtimeGenericHeaderHeader,
  second_header: cSp_runtimeGenericHeaderHeader,
})

const cSp_sessionMembershipProof = Struct({
  session: u32,
  trie_nodes: cdc83,
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
  Raw: cdc13,
  Address32: cdc1,
  Address20: cdc102,
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
  transfer_allow_death: Struct({
    dest: cSp_runtimeMultiaddressMultiAddress,
    value: compactBn,
  }),
  set_balance_deprecated: Struct({
    who: cSp_runtimeMultiaddressMultiAddress,
    new_free: compactBn,
    old_reserved: compactBn,
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
  upgrade_accounts: cdc104,
  transfer: Struct({
    dest: cSp_runtimeMultiaddressMultiAddress,
    value: compactBn,
  }),
  force_set_balance: Struct({
    who: cSp_runtimeMultiaddressMultiAddress,
    new_free: compactBn,
  }),
})

const cdc107 = Vector(cSp_runtimeMultiaddressMultiAddress)

const cPallet_stakingPalletPalletConfigOp = Enum({
  Noop: _void,
  Set: u128,
  Remove: _void,
})

const cPallet_stakingPalletPalletCall = Enum({
  bond: Struct({ value: compactBn, payee: cPallet_stakingRewardDestination }),
  bond_extra: compactBn,
  unbond: compactBn,
  withdraw_unbonded: u32,
  validate: cPallet_stakingValidatorPrefs,
  nominate: cdc107,
  chill: _void,
  set_payee: cPallet_stakingRewardDestination,
  set_controller: _void,
  set_validator_count: compactNumber,
  increase_validator_count: compactNumber,
  scale_validator_count: u8,
  force_no_eras: _void,
  force_new_era: _void,
  set_invulnerables: cdc104,
  force_unstake: Struct({ stash: cdc1, num_slashing_spans: u32 }),
  force_new_era_always: _void,
  cancel_deferred_slash: Struct({ era: u32, slash_indices: cdc109 }),
  payout_stakers: Struct({ validator_stash: cdc1, era: u32 }),
  rebond: compactBn,
  reap_stash: Struct({ stash: cdc1, num_slashing_spans: u32 }),
  kick: cdc107,
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
  set_keys: Struct({ keys: cPolkadot_runtimeSessionKeys, proof: cdc13 }),
  purge_keys: _void,
})

const cFinality_grandpaPrevote = Struct({
  target_hash: cdc1,
  target_number: u32,
})

const cdc127 = Tuple(cFinality_grandpaPrevote, cdc126)

const cFinality_grandpaEquivocation = Struct({
  round_number: u64,
  identity: cdc1,
  first: cdc127,
  second: cdc127,
})

const cFinality_grandpaPrecommit = Struct({
  target_hash: cdc1,
  target_number: u32,
})

const cdc130 = Tuple(cFinality_grandpaPrecommit, cdc126)

const cSp_consensus_grandpaEquivocation = Enum({
  Prevote: cFinality_grandpaEquivocation,
  Precommit: cFinality_grandpaEquivocation,
})

const cSp_consensus_grandpaEquivocationProof = Struct({
  set_id: u64,
  equivocation: cSp_consensus_grandpaEquivocation,
})

const cPallet_grandpaPalletCall = Enum({
  report_equivocation: Struct({
    equivocation_proof: cSp_consensus_grandpaEquivocationProof,
    key_owner_proof: cSp_sessionMembershipProof,
  }),
  report_equivocation_unsigned: Struct({
    equivocation_proof: cSp_consensus_grandpaEquivocationProof,
    key_owner_proof: cSp_sessionMembershipProof,
  }),
  note_stalled: Struct({ delay: u32, best_finalized_block_number: u32 }),
})

const cdc135 = Vector(cdc13)

const cSp_coreOffchainOpaqueNetworkState = Struct({
  peer_id: cdc13,
  external_addresses: cdc135,
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
    signature: cdc126,
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
  set_metadata: Struct({
    owner: cPallet_democracyTypesMetadataOwner,
    maybe_hash: cOption,
  }),
})

const cPallet_collectivePalletCall = Enum({
  set_members: Struct({ new_members: cdc104, prime: cOption, old_count: u32 }),
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
  vote: Struct({ votes: cdc104, value: compactBn }),
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
  reset_members: cdc104,
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

const cPallet_conviction_votingVoteAccountVote = Enum({
  Standard: Struct({ vote: u8, balance: u128 }),
  Split: Struct({ aye: u128, nay: u128 }),
  SplitAbstain: Struct({ aye: u128, nay: u128, abstain: u128 }),
})

const cPallet_conviction_votingConvictionConviction = Enum({
  None: _void,
  Locked1x: _void,
  Locked2x: _void,
  Locked3x: _void,
  Locked4x: _void,
  Locked5x: _void,
  Locked6x: _void,
})

const cPallet_conviction_votingPalletCall = Enum({
  vote: Struct({
    poll_index: compactNumber,
    vote: cPallet_conviction_votingVoteAccountVote,
  }),
  delegate: Struct({
    class: u16,
    to: cSp_runtimeMultiaddressMultiAddress,
    conviction: cPallet_conviction_votingConvictionConviction,
    balance: u128,
  }),
  undelegate: u16,
  unlock: Struct({ class: u16, target: cSp_runtimeMultiaddressMultiAddress }),
  remove_vote: Struct({ class: cOption, index: u32 }),
  remove_other_vote: Struct({
    target: cSp_runtimeMultiaddressMultiAddress,
    class: u16,
    index: u32,
  }),
})

const cFrame_supportTraitsScheduleDispatchTime = Enum({ At: u32, After: u32 })

const cPallet_referendaPalletCall = Enum({
  submit: Struct({
    proposal_origin: cPolkadot_runtimeOriginCaller,
    proposal: cFrame_supportTraitsPreimagesBounded,
    enactment_moment: cFrame_supportTraitsScheduleDispatchTime,
  }),
  place_decision_deposit: u32,
  refund_decision_deposit: u32,
  cancel: u32,
  kill: u32,
  nudge_referendum: u32,
  one_fewer_deciding: u16,
  refund_submission_deposit: u32,
  set_metadata: Struct({ index: u32, maybe_hash: cOption }),
})

const cPallet_whitelistPalletCall = Enum({
  whitelist_call: cdc1,
  remove_whitelisted_call: cdc1,
  dispatch_whitelisted_call: Struct({
    call_hash: cdc1,
    call_encoded_len: u32,
    call_weight_witness: cSp_weightsWeight_v2Weight,
  }),
  dispatch_whitelisted_call_with_preimage: circularcPolkadot_runtimeRuntimeCall,
})

const cdc176 = Bytes(65)

const cdc179 = Tuple(u128, u128, u32)

const cPolkadot_runtime_commonClaimsStatementKind = Enum({
  Regular: _void,
  Saft: _void,
})

const cPolkadot_runtime_commonClaimsPalletCall = Enum({
  claim: Struct({ dest: cdc1, ethereum_signature: cdc176 }),
  mint_claim: Struct({
    who: cdc102,
    value: u128,
    vesting_schedule: cOption,
    statement: cOption,
  }),
  claim_attest: Struct({
    dest: cdc1,
    ethereum_signature: cdc176,
    statement: cdc13,
  }),
  attest: cdc13,
  move_claim: Struct({ old: cdc102, new: cdc102, maybe_preclaim: cOption }),
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

const cdc185 = Vector(circularcPolkadot_runtimeRuntimeCall)

const cPallet_utilityPalletCall = Enum({
  batch: cdc185,
  as_derivative: Struct({
    index: u16,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  batch_all: cdc185,
  dispatch_as: Struct({
    as_origin: cPolkadot_runtimeOriginCaller,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  force_batch: cdc185,
  with_weight: Struct({
    call: circularcPolkadot_runtimeRuntimeCall,
    weight: cSp_weightsWeight_v2Weight,
  }),
})

const cdc191 = Bytes(0)

const cdc192 = Bytes(1)

const cdc193 = Bytes(2)

const cdc194 = Bytes(3)

const cdc195 = Bytes(5)

const cdc196 = Bytes(6)

const cdc197 = Bytes(7)

const cdc199 = Bytes(9)

const cdc200 = Bytes(10)

const cdc201 = Bytes(11)

const cdc202 = Bytes(12)

const cdc203 = Bytes(13)

const cdc204 = Bytes(14)

const cdc205 = Bytes(15)

const cdc206 = Bytes(17)

const cdc207 = Bytes(18)

const cdc208 = Bytes(19)

const cdc209 = Bytes(21)

const cdc210 = Bytes(22)

const cdc211 = Bytes(23)

const cdc212 = Bytes(24)

const cdc213 = Bytes(25)

const cdc214 = Bytes(26)

const cdc215 = Bytes(27)

const cdc216 = Bytes(28)

const cdc217 = Bytes(29)

const cdc218 = Bytes(30)

const cdc219 = Bytes(31)

const cPallet_identityTypesData = Enum({
  None: _void,
  Raw0: cdc191,
  Raw1: cdc192,
  Raw2: cdc193,
  Raw3: cdc194,
  Raw4: cdc17,
  Raw5: cdc195,
  Raw6: cdc196,
  Raw7: cdc197,
  Raw8: cdc198,
  Raw9: cdc199,
  Raw10: cdc200,
  Raw11: cdc201,
  Raw12: cdc202,
  Raw13: cdc203,
  Raw14: cdc204,
  Raw15: cdc205,
  Raw16: cdc47,
  Raw17: cdc206,
  Raw18: cdc207,
  Raw19: cdc208,
  Raw20: cdc102,
  Raw21: cdc209,
  Raw22: cdc210,
  Raw23: cdc211,
  Raw24: cdc212,
  Raw25: cdc213,
  Raw26: cdc214,
  Raw27: cdc215,
  Raw28: cdc216,
  Raw29: cdc217,
  Raw30: cdc218,
  Raw31: cdc219,
  Raw32: cdc1,
  BlakeTwo256: cdc1,
  Sha256: cdc1,
  Keccak256: cdc1,
  ShaThree256: cdc1,
})

const cdc189 = Tuple(cPallet_identityTypesData, cPallet_identityTypesData)

const cdc220 = Vector(cdc189)

const cPallet_identityTypesIdentityInfo = Struct({
  additional: cdc220,
  display: cPallet_identityTypesData,
  legal: cPallet_identityTypesData,
  web: cPallet_identityTypesData,
  riot: cPallet_identityTypesData,
  email: cPallet_identityTypesData,
  pgp_fingerprint: cOption,
  image: cPallet_identityTypesData,
  twitter: cPallet_identityTypesData,
})

const cdc223 = Tuple(cdc1, cPallet_identityTypesData)

const cdc222 = Vector(cdc223)

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
  set_subs: cdc222,
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
    other_signatories: cdc104,
    call: circularcPolkadot_runtimeRuntimeCall,
  }),
  as_multi: Struct({
    threshold: u16,
    other_signatories: cdc104,
    maybe_timepoint: cOption,
    call: circularcPolkadot_runtimeRuntimeCall,
    max_weight: cSp_weightsWeight_v2Weight,
  }),
  approve_as_multi: Struct({
    threshold: u16,
    other_signatories: cdc104,
    maybe_timepoint: cOption,
    call_hash: cdc1,
    max_weight: cSp_weightsWeight_v2Weight,
  }),
  cancel_as_multi: Struct({
    threshold: u16,
    other_signatories: cdc104,
    timepoint: cPallet_multisigTimepoint,
    call_hash: cdc1,
  }),
})

const cPallet_bountiesPalletCall = Enum({
  propose_bounty: Struct({ value: compactBn, description: cdc13 }),
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
  extend_bounty_expiry: Struct({ bounty_id: compactNumber, remark: cdc13 }),
})

const cPallet_child_bountiesPalletCall = Enum({
  add_child_bounty: Struct({
    parent_bounty_id: compactNumber,
    value: compactBn,
    description: cdc13,
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
    reason: cdc13,
    who: cSp_runtimeMultiaddressMultiAddress,
  }),
  retract_tip: cdc1,
  tip_new: Struct({
    reason: cdc13,
    who: cSp_runtimeMultiaddressMultiAddress,
    tip_value: compactBn,
  }),
  tip: Struct({ hash: cdc1, tip_value: compactBn }),
  close_tip: cdc1,
  slash_tip: cdc1,
})

const cdc240 = Tuple(compactNumber, compactNumber)

const cdc239 = Vector(cdc240)

const cdc244 = Tuple(compactNumber, compactNumber)

const cdc243 = Tuple(compactNumber, cdc244, compactNumber)

const cdc242 = Vector(cdc243)

const cdc249 = Vector(cdc244, 2)

const cdc248 = Tuple(compactNumber, cdc249, compactNumber)

const cdc247 = Vector(cdc248)

const cdc252 = Vector(cdc244, 3)

const cdc251 = Tuple(compactNumber, cdc252, compactNumber)

const cdc250 = Vector(cdc251)

const cdc255 = Vector(cdc244, 4)

const cdc254 = Tuple(compactNumber, cdc255, compactNumber)

const cdc253 = Vector(cdc254)

const cdc258 = Vector(cdc244, 5)

const cdc257 = Tuple(compactNumber, cdc258, compactNumber)

const cdc256 = Vector(cdc257)

const cdc261 = Vector(cdc244, 6)

const cdc260 = Tuple(compactNumber, cdc261, compactNumber)

const cdc259 = Vector(cdc260)

const cdc264 = Vector(cdc244, 7)

const cdc263 = Tuple(compactNumber, cdc264, compactNumber)

const cdc262 = Vector(cdc263)

const cdc267 = Vector(cdc244, 8)

const cdc266 = Tuple(compactNumber, cdc267, compactNumber)

const cdc265 = Vector(cdc266)

const cdc270 = Vector(cdc244, 9)

const cdc269 = Tuple(compactNumber, cdc270, compactNumber)

const cdc268 = Vector(cdc269)

const cdc273 = Vector(cdc244, 10)

const cdc272 = Tuple(compactNumber, cdc273, compactNumber)

const cdc271 = Vector(cdc272)

const cdc276 = Vector(cdc244, 11)

const cdc275 = Tuple(compactNumber, cdc276, compactNumber)

const cdc274 = Vector(cdc275)

const cdc279 = Vector(cdc244, 12)

const cdc278 = Tuple(compactNumber, cdc279, compactNumber)

const cdc277 = Vector(cdc278)

const cdc282 = Vector(cdc244, 13)

const cdc281 = Tuple(compactNumber, cdc282, compactNumber)

const cdc280 = Vector(cdc281)

const cdc285 = Vector(cdc244, 14)

const cdc284 = Tuple(compactNumber, cdc285, compactNumber)

const cdc283 = Vector(cdc284)

const cdc288 = Vector(cdc244, 15)

const cdc287 = Tuple(compactNumber, cdc288, compactNumber)

const cdc286 = Vector(cdc287)

const cPolkadot_runtimeNposCompactSolution16 = Struct({
  votes1: cdc239,
  votes2: cdc242,
  votes3: cdc247,
  votes4: cdc250,
  votes5: cdc253,
  votes6: cdc256,
  votes7: cdc259,
  votes8: cdc262,
  votes9: cdc265,
  votes10: cdc268,
  votes11: cdc271,
  votes12: cdc274,
  votes13: cdc277,
  votes14: cdc280,
  votes15: cdc283,
  votes16: cdc286,
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

const cSp_npos_electionsSupport = Struct({ total: u128, voters: cdc71 })

const cdc293 = Tuple(cdc1, cSp_npos_electionsSupport)

const cdc292 = Vector(cdc293)

const cPallet_election_provider_multi_phasePalletCall = Enum({
  submit_unsigned: Struct({
    raw_solution: cPallet_election_provider_multi_phaseRawSolution,
    witness: cPallet_election_provider_multi_phaseSolutionOrSnapshotSize,
  }),
  set_minimum_untrusted_score: cOption,
  set_emergency_election_result: cdc292,
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

const cPallet_nomination_poolsClaimPermission = Enum({
  Permissioned: _void,
  PermissionlessCompound: _void,
  PermissionlessWithdraw: _void,
  PermissionlessAll: _void,
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
    bouncer: cSp_runtimeMultiaddressMultiAddress,
  }),
  create_with_pool_id: Struct({
    amount: compactBn,
    root: cSp_runtimeMultiaddressMultiAddress,
    nominator: cSp_runtimeMultiaddressMultiAddress,
    bouncer: cSp_runtimeMultiaddressMultiAddress,
    pool_id: u32,
  }),
  nominate: Struct({ pool_id: u32, validators: cdc104 }),
  set_state: Struct({ pool_id: u32, state: cPallet_nomination_poolsPoolState }),
  set_metadata: Struct({ pool_id: u32, metadata: cdc13 }),
  set_configs: Struct({
    min_join_bond: cPallet_nomination_poolsConfigOp,
    min_create_bond: cPallet_nomination_poolsConfigOp,
    max_pools: cPallet_nomination_poolsConfigOp,
    max_members: cPallet_nomination_poolsConfigOp,
    max_members_per_pool: cPallet_nomination_poolsConfigOp,
    global_max_commission: cPallet_nomination_poolsConfigOp,
  }),
  update_roles: Struct({
    pool_id: u32,
    new_root: cPallet_nomination_poolsConfigOp,
    new_nominator: cPallet_nomination_poolsConfigOp,
    new_bouncer: cPallet_nomination_poolsConfigOp,
  }),
  chill: u32,
  bond_extra_other: Struct({
    member: cSp_runtimeMultiaddressMultiAddress,
    extra: cPallet_nomination_poolsBondExtra,
  }),
  set_claim_permission: cPallet_nomination_poolsClaimPermission,
  claim_payout_other: cdc1,
  set_commission: Struct({ pool_id: u32, new_commission: cOption }),
  set_commission_max: Struct({ pool_id: u32, max_commission: u32 }),
  set_commission_change_rate: Struct({
    pool_id: u32,
    change_rate: cPallet_nomination_poolsCommissionChangeRate,
  }),
  claim_commission: u32,
})

const cPallet_fast_unstakePalletCall = Enum({
  register_fast_unstake: _void,
  deregister: _void,
  control: u32,
})

const cPolkadot_primitivesVstagingAsyncBackingParams = Struct({
  max_candidate_depth: u32,
  allowed_ancestry_len: u32,
})

const cPolkadot_primitivesV4PvfPrepTimeoutKind = Enum({
  Precheck: _void,
  Lenient: _void,
})

const cPolkadot_primitivesV4PvfExecTimeoutKind = Enum({
  Backing: _void,
  Approval: _void,
})

const cPolkadot_primitivesV4Executor_paramsExecutorParam = Enum({
  MaxMemoryPages: u32,
  StackLogicalMax: u32,
  StackNativeMax: u32,
  PrecheckingMaxMemory: u64,
  PvfPrepTimeout: Tuple(cPolkadot_primitivesV4PvfPrepTimeoutKind, u64),
  PvfExecTimeout: Tuple(cPolkadot_primitivesV4PvfExecTimeoutKind, u64),
  WasmExtBulkMemory: _void,
})

const cdc311 = Vector(cPolkadot_primitivesV4Executor_paramsExecutorParam)

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
  set_no_show_slots: u32,
  set_n_delay_tranches: u32,
  set_zeroth_delay_tranche_width: u32,
  set_needed_approvals: u32,
  set_relay_vrf_modulo_samples: u32,
  set_max_upward_queue_count: u32,
  set_max_upward_queue_size: u32,
  set_max_downward_message_size: u32,
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
  set_pvf_checking_enabled: bool,
  set_pvf_voting_ttl: u32,
  set_minimum_validation_upgrade_delay: u32,
  set_bypass_consistency_check: bool,
  set_async_backing_params: cPolkadot_primitivesVstagingAsyncBackingParams,
  set_executor_params: cdc311,
})

const cdc322 = Bytes()

const cPolkadot_primitivesV4SignedUncheckedSigned = Struct({
  payload: cdc322,
  validator_index: u32,
  signature: cdc126,
})

const cdc319 = Vector(cPolkadot_primitivesV4SignedUncheckedSigned)

const cPolkadot_core_primitivesOutboundHrmpMessage = Struct({
  recipient: u32,
  data: cdc13,
})

const cdc337 = Vector(cPolkadot_core_primitivesOutboundHrmpMessage)

const cPolkadot_primitivesV4CandidateCommitments = Struct({
  upward_messages: cdc83,
  horizontal_messages: cdc337,
  new_validation_code: cOption,
  head_data: cdc13,
  processed_downward_messages: u32,
  hrmp_watermark: u32,
})

const cPolkadot_primitivesV4CommittedCandidateReceipt = Struct({
  descriptor: cPolkadot_primitivesV4CandidateDescriptor,
  commitments: cPolkadot_primitivesV4CandidateCommitments,
})

const cPolkadot_primitivesV4ValidityAttestation = Enum({
  Implicit: cdc126,
  Explicit: cdc126,
})

const cdc341 = Vector(cPolkadot_primitivesV4ValidityAttestation)

const cPolkadot_primitivesV4BackedCandidate = Struct({
  candidate: cPolkadot_primitivesV4CommittedCandidateReceipt,
  validity_votes: cdc341,
  validator_indices: cdc322,
})

const cdc326 = Vector(cPolkadot_primitivesV4BackedCandidate)

const cPolkadot_primitivesV4ValidDisputeStatementKind = Enum({
  Explicit: _void,
  BackingSeconded: cdc1,
  BackingValid: cdc1,
  ApprovalChecking: _void,
})

const cPolkadot_primitivesV4InvalidDisputeStatementKind = Enum({
  Explicit: _void,
})

const cPolkadot_primitivesV4DisputeStatement = Enum({
  Valid: cPolkadot_primitivesV4ValidDisputeStatementKind,
  Invalid: cPolkadot_primitivesV4InvalidDisputeStatementKind,
})

const cdc347 = Tuple(cPolkadot_primitivesV4DisputeStatement, u32, cdc126)

const cdc346 = Vector(cdc347)

const cPolkadot_primitivesV4DisputeStatementSet = Struct({
  candidate_hash: cdc1,
  session: u32,
  statements: cdc346,
})

const cdc343 = Vector(cPolkadot_primitivesV4DisputeStatementSet)

const cPolkadot_primitivesV4InherentData = Struct({
  bitfields: cdc319,
  backed_candidates: cdc326,
  disputes: cdc343,
  parent_header: cSp_runtimeGenericHeaderHeader,
})

const cPolkadot_runtime_parachainsParas_inherentPalletCall = Enum({
  enter: cPolkadot_primitivesV4InherentData,
})

const cPolkadot_primitivesV4PvfCheckStatement = Struct({
  accept: bool,
  subject: cdc1,
  session_index: u32,
  validator_index: u32,
})

const cPolkadot_runtime_parachainsParasPalletCall = Enum({
  force_set_current_code: Struct({ para: u32, new_code: cdc13 }),
  force_set_current_head: Struct({ para: u32, new_head: cdc13 }),
  force_schedule_code_upgrade: Struct({
    para: u32,
    new_code: cdc13,
    relay_parent_number: u32,
  }),
  force_note_new_head: Struct({ para: u32, new_head: cdc13 }),
  force_queue_action: u32,
  add_trusted_validation_code: cdc13,
  poke_unused_validation_code: cdc1,
  include_pvf_check_statement: Struct({
    stmt: cPolkadot_primitivesV4PvfCheckStatement,
    signature: cdc126,
  }),
})

const cPolkadot_runtime_parachainsInitializerPalletCall = Enum({
  force_approve: u32,
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

const cPolkadot_runtime_parachainsDisputesSlashingDisputesTimeSlot = Struct({
  session_index: u32,
  candidate_hash: cdc1,
})

const cPolkadot_runtime_parachainsDisputesSlashingSlashingOffenceKind = Enum({
  ForInvalid: _void,
  AgainstValid: _void,
})

const cPolkadot_runtime_parachainsDisputesSlashingDisputeProof = Struct({
  time_slot: cPolkadot_runtime_parachainsDisputesSlashingDisputesTimeSlot,
  kind: cPolkadot_runtime_parachainsDisputesSlashingSlashingOffenceKind,
  validator_index: u32,
  validator_id: cdc1,
})

const cPolkadot_runtime_parachainsDisputesSlashingPalletCall = Enum({
  report_dispute_lost_unsigned: Struct({
    dispute_proof: cPolkadot_runtime_parachainsDisputesSlashingDisputeProof,
    key_owner_proof: cSp_sessionMembershipProof,
  }),
})

const cPolkadot_runtime_commonParas_registrarPalletCall = Enum({
  register: Struct({ id: u32, genesis_head: cdc13, validation_code: cdc13 }),
  force_register: Struct({
    who: cdc1,
    deposit: u128,
    id: u32,
    genesis_head: cdc13,
    validation_code: cdc13,
  }),
  deregister: u32,
  swap: Struct({ id: u32, other: u32 }),
  remove_lock: u32,
  reserve: _void,
  add_lock: u32,
  schedule_code_upgrade: Struct({ para: u32, new_code: cdc13 }),
  set_current_head: Struct({ para: u32, new_head: cdc13 }),
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

const cdc369 = Bytes(33)

const cSp_runtimeMultiSigner = Enum({
  Ed25519: cdc1,
  Sr25519: cdc1,
  Ecdsa: cdc369,
})

const cSp_runtimeMultiSignature = Enum({
  Ed25519: cdc126,
  Sr25519: cdc126,
  Ecdsa: cdc176,
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
  add_memo: Struct({ index: u32, memo: cdc13 }),
  poke: u32,
  contribute_all: Struct({ index: compactNumber, signature: cOption }),
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

const cdc394 = Tuple(u32, cXcmV2TraitsError)

const cXcmV2Response = Enum({
  Null: _void,
  Assets: cdc387,
  ExecutionResult: cOption,
  Version: u32,
})

const circularcXcmV2Xcm: Codec<
  () => typeof cXcmV2Xcm extends Codec<infer V> ? V : unknown
> = lazy(() => cXcmV2Xcm)

const cXcmV2MultiassetWildFungibility = Enum({
  Fungible: _void,
  NonFungible: _void,
})

const cXcmV2MultiassetWildMultiAsset = Enum({
  All: _void,
  AllOf: Struct({
    id: cXcmV2MultiassetAssetId,
    fun: cXcmV2MultiassetWildFungibility,
  }),
})

const cXcmV2MultiassetMultiAssetFilter = Enum({
  Definite: cdc387,
  Wild: cXcmV2MultiassetWildMultiAsset,
})

const cXcmV2WeightLimit = Enum({ Unlimited: _void, Limited: compactBn })

const cXcmV2Instruction = Enum({
  WithdrawAsset: cdc387,
  ReserveAssetDeposited: cdc387,
  ReceiveTeleportedAsset: cdc387,
  QueryResponse: Struct({
    query_id: compactBn,
    response: cXcmV2Response,
    max_weight: compactBn,
  }),
  TransferAsset: Struct({
    assets: cdc387,
    beneficiary: cXcmV2MultilocationMultiLocation,
  }),
  TransferReserveAsset: Struct({
    assets: cdc387,
    dest: cXcmV2MultilocationMultiLocation,
    xcm: circularcXcmV2Xcm,
  }),
  Transact: Struct({
    origin_type: cXcmV2OriginKind,
    require_weight_at_most: compactBn,
    call: cdc13,
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
  DescendOrigin: cXcmV2MultilocationJunctions,
  ReportError: Struct({
    query_id: compactBn,
    dest: cXcmV2MultilocationMultiLocation,
    max_response_weight: compactBn,
  }),
  DepositAsset: Struct({
    assets: cXcmV2MultiassetMultiAssetFilter,
    max_assets: compactNumber,
    beneficiary: cXcmV2MultilocationMultiLocation,
  }),
  DepositReserveAsset: Struct({
    assets: cXcmV2MultiassetMultiAssetFilter,
    max_assets: compactNumber,
    dest: cXcmV2MultilocationMultiLocation,
    xcm: circularcXcmV2Xcm,
  }),
  ExchangeAsset: Struct({
    give: cXcmV2MultiassetMultiAssetFilter,
    receive: cdc387,
  }),
  InitiateReserveWithdraw: Struct({
    assets: cXcmV2MultiassetMultiAssetFilter,
    reserve: cXcmV2MultilocationMultiLocation,
    xcm: circularcXcmV2Xcm,
  }),
  InitiateTeleport: Struct({
    assets: cXcmV2MultiassetMultiAssetFilter,
    dest: cXcmV2MultilocationMultiLocation,
    xcm: circularcXcmV2Xcm,
  }),
  QueryHolding: Struct({
    query_id: compactBn,
    dest: cXcmV2MultilocationMultiLocation,
    assets: cXcmV2MultiassetMultiAssetFilter,
    max_response_weight: compactBn,
  }),
  BuyExecution: Struct({
    fees: cXcmV2MultiassetMultiAsset,
    weight_limit: cXcmV2WeightLimit,
  }),
  RefundSurplus: _void,
  SetErrorHandler: circularcXcmV2Xcm,
  SetAppendix: circularcXcmV2Xcm,
  ClearError: _void,
  ClaimAsset: Struct({
    assets: cdc387,
    ticket: cXcmV2MultilocationMultiLocation,
  }),
  Trap: compactBn,
  SubscribeVersion: Struct({
    query_id: compactBn,
    max_response_weight: compactBn,
  }),
  UnsubscribeVersion: _void,
})

const cdc384 = Vector(cXcmV2Instruction)

const cXcmV2Xcm = cdc384

const cXcmVersionedXcm = Enum({ V2: cdc384, V3: cdc403 })

const cdc430 = Vector(cXcmV2Instruction)

const cdc434 = Vector(cXcmV3Instruction)

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
  execute: Struct({
    message: cXcmVersionedXcm,
    max_weight: cSp_weightsWeight_v2Weight,
  }),
  force_xcm_version: Struct({
    location: cXcmV3MultilocationMultiLocation,
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
    weight_limit: cXcmV3WeightLimit,
  }),
  limited_teleport_assets: Struct({
    dest: cXcmVersionedMultiLocation,
    beneficiary: cXcmVersionedMultiLocation,
    assets: cXcmVersionedMultiAssets,
    fee_asset_item: u32,
    weight_limit: cXcmV3WeightLimit,
  }),
  force_suspension: bool,
})

const cPallet_message_queuePalletCall = Enum({
  reap_page: Struct({
    message_origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
    page_index: u32,
  }),
  execute_overweight: Struct({
    message_origin: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
    page: u32,
    index: u32,
    weight_limit: cSp_weightsWeight_v2Weight,
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
  ConvictionVoting: cPallet_conviction_votingPalletCall,
  Referenda: cPallet_referendaPalletCall,
  Whitelist: cPallet_whitelistPalletCall,
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
  Hrmp: cPolkadot_runtime_parachainsHrmpPalletCall,
  ParasDisputes: cPolkadot_runtime_parachainsDisputesPalletCall,
  ParasSlashing: cPolkadot_runtime_parachainsDisputesSlashingPalletCall,
  Registrar: cPolkadot_runtime_commonParas_registrarPalletCall,
  Slots: cPolkadot_runtime_commonSlotsPalletCall,
  Auctions: cPolkadot_runtime_commonAuctionsPalletCall,
  Crowdloan: cPolkadot_runtime_commonCrowdloanPalletCall,
  XcmPallet: cPallet_xcmPalletCall,
  MessageQueue: cPallet_message_queuePalletCall,
})

const cPallet_collectiveVotes = Struct({
  index: u32,
  threshold: u32,
  ayes: cdc104,
  nays: cdc104,
  end: u32,
})

const cPallet_elections_phragmenSeatHolder = Struct({
  who: cdc1,
  stake: u128,
  deposit: u128,
})

const cdc599 = Vector(cPallet_elections_phragmenSeatHolder)

const cPallet_elections_phragmenVoter = Struct({
  votes: cdc104,
  stake: u128,
  deposit: u128,
})

const cPallet_treasuryProposal = Struct({
  proposer: cdc1,
  value: u128,
  beneficiary: cdc1,
  bond: u128,
})

const cdc615 = Tuple(u32, cPallet_conviction_votingVoteAccountVote)

const cdc616 = Vector(cdc615)

const cPallet_conviction_votingTypesDelegations = Struct({
  votes: u128,
  capital: u128,
})

const cPallet_conviction_votingVotePriorLock = Tuple(u32, u128)

const cPallet_conviction_votingVoteCasting = Struct({
  votes: cdc616,
  delegations: cPallet_conviction_votingTypesDelegations,
  prior: cPallet_conviction_votingVotePriorLock,
})

const cPallet_conviction_votingVoteDelegating = Struct({
  balance: u128,
  target: cdc1,
  conviction: cPallet_conviction_votingConvictionConviction,
  delegations: cPallet_conviction_votingTypesDelegations,
  prior: cPallet_conviction_votingVotePriorLock,
})

const cPallet_conviction_votingVoteVoting = Enum({
  Casting: cPallet_conviction_votingVoteCasting,
  Delegating: cPallet_conviction_votingVoteDelegating,
})

const cdc611 = Tuple(cdc1, u16)

const cdc621 = Tuple(u16, u128)

const cdc622 = Vector(cdc621)

const cPallet_referendaTypesDeposit = Struct({ who: cdc1, amount: u128 })

const cPallet_referendaTypesDecidingStatus = Struct({
  since: u32,
  confirming: cOption,
})

const cdc631 = Tuple(u32, cdc31)

const cPallet_referendaTypesReferendumStatus = Struct({
  track: u16,
  origin: cPolkadot_runtimeOriginCaller,
  proposal: cFrame_supportTraitsPreimagesBounded,
  enactment: cFrame_supportTraitsScheduleDispatchTime,
  submitted: u32,
  submission_deposit: cPallet_referendaTypesDeposit,
  decision_deposit: cOption,
  deciding: cOption,
  tally: cPallet_conviction_votingTypesTally,
  in_queue: bool,
  alarm: cOption,
})

const cPallet_referendaTypesReferendumInfo = Enum({
  Ongoing: cPallet_referendaTypesReferendumStatus,
  Approved: Tuple(u32, cOption, cOption),
  Rejected: Tuple(u32, cOption, cOption),
  Cancelled: Tuple(u32, cOption, cOption),
  TimedOut: Tuple(u32, cOption, cOption),
  Killed: u32,
})

const cdc633 = Tuple(u32, u128)

const cdc634 = Vector(cdc633)

const cdc645 = Vector(cPallet_vestingVesting_infoVestingInfo)

const cPallet_vestingReleases = Enum({ V0: _void, V1: _void })

const cdc651 = Tuple(u32, cPallet_identityTypesJudgement)

const cdc652 = Vector(cdc651)

const cPallet_identityTypesRegistration = Struct({
  judgements: cdc652,
  deposit: u128,
  info: cPallet_identityTypesIdentityInfo,
})

const cdc653 = Tuple(u128, cdc104)

const cPallet_identityTypesRegistrarInfo = Struct({
  account: cdc1,
  fee: u128,
  fields: u64,
})

const cdc658 = Vector(cOption)

const cPallet_proxyProxyDefinition = Struct({
  delegate: cdc1,
  proxy_type: cPolkadot_runtimeProxyType,
  delay: u32,
})

const cdc663 = Vector(cPallet_proxyProxyDefinition)

const cdc660 = Tuple(cdc663, u128)

const cPallet_proxyAnnouncement = Struct({
  real: cdc1,
  call_hash: cdc1,
  height: u32,
})

const cdc667 = Vector(cPallet_proxyAnnouncement)

const cdc664 = Tuple(cdc667, u128)

const cPallet_multisigMultisig = Struct({
  when: cPallet_multisigTimepoint,
  deposit: u128,
  depositor: cdc1,
  approvals: cdc104,
})

const cdc669 = Tuple(cdc1, cdc1)

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
  tips: cdc71,
  finders_fee: bool,
})

const cPallet_election_provider_multi_phaseReadySolution = Struct({
  supports: cdc292,
  score: cSp_npos_electionsElectionScore,
  compute: cPallet_election_provider_multi_phaseElectionCompute,
})

const cdc685 = Tuple(cdc1, u64, cdc104)

const cdc686 = Vector(cdc685)

const cPallet_election_provider_multi_phaseRoundSnapshot = Struct({
  voters: cdc686,
  targets: cdc104,
})

const cdc688 = Tuple(cSp_npos_electionsElectionScore, u32, u32)

const cdc689 = Vector(cdc688)

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

const cPallet_nomination_poolsPoolMember = Struct({
  pool_id: u32,
  points: u128,
  last_recorded_reward_counter: u128,
  unbonding_eras: cdc634,
})

const cPallet_nomination_poolsCommission = Struct({
  current: cOption,
  max: cOption,
  change_rate: cOption,
  throttle_from: cOption,
})

const cPallet_nomination_poolsPoolRoles = Struct({
  depositor: cdc1,
  root: cOption,
  nominator: cOption,
  bouncer: cOption,
})

const cPallet_nomination_poolsBondedPoolInner = Struct({
  commission: cPallet_nomination_poolsCommission,
  member_counter: u32,
  points: u128,
  roles: cPallet_nomination_poolsPoolRoles,
  state: cPallet_nomination_poolsPoolState,
})

const cPallet_nomination_poolsRewardPool = Struct({
  last_recorded_reward_counter: u128,
  last_recorded_total_payouts: u128,
  total_rewards_claimed: u128,
  total_commission_pending: u128,
  total_commission_claimed: u128,
})

const cPallet_nomination_poolsUnbondPool = Struct({
  points: u128,
  balance: u128,
})

const cdc711 = Tuple(u32, cPallet_nomination_poolsUnbondPool)

const cdc710 = Vector(cdc711)

const cPallet_nomination_poolsSubPools = Struct({
  no_era: cPallet_nomination_poolsUnbondPool,
  with_era: cdc710,
})

const cPallet_fast_unstakeTypesUnstakeRequest = Struct({
  stashes: cdc71,
  checked: cdc109,
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
  async_backing_params: cPolkadot_primitivesVstagingAsyncBackingParams,
  max_pov_size: u32,
  max_downward_message_size: u32,
  hrmp_max_parachain_outbound_channels: u32,
  hrmp_max_parathread_outbound_channels: u32,
  hrmp_sender_deposit: u128,
  hrmp_recipient_deposit: u128,
  hrmp_channel_max_capacity: u32,
  hrmp_channel_max_total_size: u32,
  hrmp_max_parachain_inbound_channels: u32,
  hrmp_max_parathread_inbound_channels: u32,
  hrmp_channel_max_message_size: u32,
  executor_params: cdc311,
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
  no_show_slots: u32,
  n_delay_tranches: u32,
  zeroth_delay_tranche_width: u32,
  needed_approvals: u32,
  relay_vrf_modulo_samples: u32,
  pvf_checking_enabled: bool,
  pvf_voting_ttl: u32,
  minimum_validation_upgrade_delay: u32,
})

const cdc721 = Tuple(
  u32,
  cPolkadot_runtime_parachainsConfigurationHostConfiguration,
)

const cdc720 = Vector(cdc721)

const cdc723 = Vector(u32)

const cdc724 = Vector(cdc1)

const cPolkadot_runtime_parachainsInclusionAvailabilityBitfieldRecord = Struct({
  bitfield: cdc322,
  submitted_at: u32,
})

const cPolkadot_runtime_parachainsInclusionCandidatePendingAvailability = Struct({
  core: u32,
  hash: cdc1,
  descriptor: cPolkadot_primitivesV4CandidateDescriptor,
  availability_votes: cdc322,
  backers: cdc322,
  relay_parent_number: u32,
  backed_in_number: u32,
  backing_group: u32,
})

const cdc732 = Tuple(u32, cPolkadot_primitivesV4ValidityAttestation)

const cdc731 = Vector(cdc732)

const cdc730 = Tuple(cPolkadot_primitivesV4CandidateReceipt, cdc731)

const cdc729 = Vector(cdc730)

const cPolkadot_primitivesV4ScrapedOnChainVotes = Struct({
  session: u32,
  backing_validators_per_candidate: cdc729,
  disputes: cdc343,
})

const cdc734 = Vector(cdc723)

const cPolkadot_primitivesV4ParathreadClaim = Tuple(u32, cdc1)

const cPolkadot_primitivesV4ParathreadEntry = Struct({
  claim: cPolkadot_primitivesV4ParathreadClaim,
  retries: u32,
})

const cPolkadot_runtime_parachainsSchedulerQueuedParathread = Struct({
  claim: cPolkadot_primitivesV4ParathreadEntry,
  core_offset: u32,
})

const cdc736 = Vector(cPolkadot_runtime_parachainsSchedulerQueuedParathread)

const cPolkadot_runtime_parachainsSchedulerParathreadClaimQueue = Struct({
  queue: cdc736,
  next_core_offset: u32,
})

const cPolkadot_primitivesV4CoreOccupied = Enum({
  Parathread: cPolkadot_primitivesV4ParathreadEntry,
  Parachain: _void,
})

const cdc740 = Vector(cOption)

const cdc743 = Vector(u32)

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

const cdc744 = Vector(cPolkadot_runtime_parachainsSchedulerCoreAssignment)

const cPolkadot_runtime_parachainsParasPvfCheckCause = Enum({
  Onboarding: u32,
  Upgrade: Struct({ id: u32, relay_parent_number: u32 }),
})

const cdc748 = Vector(cPolkadot_runtime_parachainsParasPvfCheckCause)

const cPolkadot_runtime_parachainsParasPvfCheckActiveVoteState = Struct({
  votes_accept: cdc322,
  votes_reject: cdc322,
  age: u32,
  created_at: u32,
  causes: cdc748,
})

const cdc750 = Vector(cdc1)

const cPolkadot_runtime_parachainsParasParaLifecycle = Enum({
  Onboarding: _void,
  Parathread: _void,
  Parachain: _void,
  UpgradingParathread: _void,
  DowngradingParachain: _void,
  OffboardingParathread: _void,
  OffboardingParachain: _void,
})

const cdc752 = Tuple(u32, u32)

const cPolkadot_runtime_parachainsParasReplacementTimes = Struct({
  expected_at: u32,
  activated_at: u32,
})

const cdc754 = Vector(cPolkadot_runtime_parachainsParasReplacementTimes)

const cPolkadot_runtime_parachainsParasParaPastCodeMeta = Struct({
  upgrade_times: cdc754,
  last_pruned: cOption,
})

const cdc756 = Vector(cdc752)

const cPolkadot_primitivesV4UpgradeGoAhead = Enum({
  Abort: _void,
  GoAhead: _void,
})

const cPolkadot_primitivesV4UpgradeRestriction = Enum({ Present: _void })

const cPolkadot_runtime_parachainsParasParaGenesisArgs = Struct({
  genesis_head: cdc13,
  validation_code: cdc13,
  para_kind: bool,
})

const cPolkadot_runtime_parachainsInitializerBufferedSessionChange = Struct({
  validators: cdc724,
  queued: cdc724,
  session_index: u32,
})

const cdc761 = Vector(
  cPolkadot_runtime_parachainsInitializerBufferedSessionChange,
)

const cPolkadot_core_primitivesInboundDownwardMessage = Struct({
  sent_at: u32,
  msg: cdc13,
})

const cdc763 = Vector(cPolkadot_core_primitivesInboundDownwardMessage)

const cPolkadot_runtime_parachainsHrmpHrmpOpenChannelRequest = Struct({
  confirmed: bool,
  _age: u32,
  sender_deposit: u128,
  max_message_size: u32,
  max_capacity: u32,
  max_total_size: u32,
})

const cdc766 = Vector(cPolkadot_parachainPrimitivesHrmpChannelId)

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
  data: cdc13,
})

const cdc768 = Vector(cPolkadot_core_primitivesInboundHrmpMessage)

const cdc771 = Tuple(u32, cdc743)

const cdc770 = Vector(cdc771)

const cdc773 = Vector(cdc1)

const cdc776 = Vector(cdc1)

const cPolkadot_primitivesV4SessionInfo = Struct({
  active_validator_indices: cdc723,
  random_seed: cdc1,
  dispute_period: u32,
  validators: cdc724,
  discovery_keys: cdc776,
  assignment_keys: cdc773,
  validator_groups: cdc734,
  n_cores: u32,
  zeroth_delay_tranche_width: u32,
  relay_vrf_modulo_samples: u32,
  n_delay_tranches: u32,
  no_show_slots: u32,
  needed_approvals: u32,
})

const cPolkadot_primitivesV4DisputeState = Struct({
  validators_for: cdc322,
  validators_against: cdc322,
  start: u32,
  concluded_at: cOption,
})

const cdc778 = Tuple(u32, cdc1)

const cdc785 = Tuple(u32, cdc1)

const cdc784 = Vector(cdc785)

const cPolkadot_runtime_parachainsDisputesSlashingPendingSlashes = Struct({
  keys: cdc784,
  kind: cPolkadot_runtime_parachainsDisputesSlashingSlashingOffenceKind,
})

const cPolkadot_runtime_commonParas_registrarParaInfo = Struct({
  manager: cdc1,
  deposit: u128,
  locked: bool,
})

const cdc789 = Vector(cOption)

const cdc791 = Tuple(cdc1, u32)

const cdc794 = Tuple(cdc1, u32, u128)

const cdc792 = Vector(cOption, 36)

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

const cdc802 = Tuple(u8, u8)

const cXcmVersionedResponse = Enum({ V2: cXcmV2Response, V3: cXcmV3Response })

const cPallet_xcmPalletQueryStatus = Enum({
  Pending: Struct({
    responder: cXcmVersionedMultiLocation,
    maybe_match_querier: cOption,
    maybe_notify: cOption,
    timeout: u32,
  }),
  VersionNotifier: Struct({
    origin: cXcmVersionedMultiLocation,
    is_active: bool,
  }),
  Ready: Struct({ response: cXcmVersionedResponse, at: u32 }),
})

const cdc804 = Tuple(u32, cXcmVersionedMultiLocation)

const cdc805 = Tuple(u64, cSp_weightsWeight_v2Weight, u32)

const cdc807 = Tuple(cXcmVersionedMultiLocation, u32)

const cdc808 = Vector(cdc807)

const cPallet_xcmPalletVersionMigrationStage = Enum({
  MigrateSupportedVersion: _void,
  MigrateVersionNotifiers: _void,
  NotifyCurrentTargets: cOption,
  MigrateAndNotifyOldTargets: _void,
})

const cdc815 = Tuple(_void, u128)

const cdc816 = Vector(cdc815)

const cPallet_xcmPalletRemoteLockedFungibleRecord = Struct({
  amount: u128,
  owner: cXcmVersionedMultiLocation,
  locker: cXcmVersionedMultiLocation,
  consumers: cdc816,
})

const cXcmVersionedAssetId = Enum({ V3: cXcmV3MultiassetAssetId })

const cdc811 = Tuple(u32, cdc1, cXcmVersionedAssetId)

const cdc818 = Tuple(u128, cXcmVersionedMultiLocation)

const cdc819 = Vector(cdc818)

const cPallet_message_queueNeighbours = Struct({
  prev: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
  next: cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
})

const cPallet_message_queueBookState = Struct({
  begin: u32,
  end: u32,
  count: u32,
  ready_neighbours: cOption,
  message_count: u64,
  size: u64,
})

const cPallet_message_queuePage = Struct({
  remaining: u32,
  remaining_size: u32,
  first_index: u32,
  first: u32,
  last: u32,
  heap: cdc13,
})

const cdc824 = Tuple(
  cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin,
  u32,
)

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
  ExtrinsicData: SystemStorage("ExtrinsicData", cdc13[1], [
    u32[0],
    Twox64Concat,
  ]),
  Number: SystemStorage("Number", u32[1]),
  ParentHash: SystemStorage("ParentHash", cdc1[1]),
  Digest: SystemStorage("Digest", cdc15[1]),
  Events: SystemStorage("Events", cdc18[1]),
  EventCount: SystemStorage("EventCount", u32[1]),
  EventTopics: SystemStorage("EventTopics", cdc481[1], [
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
  Agenda: SchedulerStorage("Agenda", cdc498[1], [u32[0], Twox64Concat]),
  Lookup: SchedulerStorage("Lookup", cdc31[1], [cdc1[0], Twox64Concat]),
}

export const PreimageStorage = Storage("Preimage")

const PreimageStorageEntries = {
  StatusFor: PreimageStorage("StatusFor", cPallet_preimageRequestStatus[1], [
    cdc1[0],
    Identity,
  ]),
  PreimageFor: PreimageStorage("PreimageFor", cdc13[1], [cdc1[0], Identity]),
}

export const BabeStorage = Storage("Babe")

const BabeStorageEntries = {
  EpochIndex: BabeStorage("EpochIndex", u64[1]),
  Authorities: BabeStorage("Authorities", cdc507[1]),
  GenesisSlot: BabeStorage("GenesisSlot", u64[1]),
  CurrentSlot: BabeStorage("CurrentSlot", u64[1]),
  Randomness: BabeStorage("Randomness", cdc1[1]),
  PendingEpochConfigChange: BabeStorage(
    "PendingEpochConfigChange",
    cSp_consensus_babeDigestsNextConfigDescriptor[1],
  ),
  NextRandomness: BabeStorage("NextRandomness", cdc1[1]),
  NextAuthorities: BabeStorage("NextAuthorities", cdc507[1]),
  SegmentIndex: BabeStorage("SegmentIndex", u32[1]),
  UnderConstruction: BabeStorage("UnderConstruction", cdc509[1], [
    u32[0],
    Twox64Concat,
  ]),
  Initialized: BabeStorage("Initialized", cOption[1]),
  AuthorVrfRandomness: BabeStorage("AuthorVrfRandomness", cOption[1]),
  EpochStart: BabeStorage("EpochStart", cdc31[1]),
  Lateness: BabeStorage("Lateness", u32[1]),
  EpochConfig: BabeStorage(
    "EpochConfig",
    cSp_consensus_babeBabeEpochConfiguration[1],
  ),
  NextEpochConfig: BabeStorage(
    "NextEpochConfig",
    cSp_consensus_babeBabeEpochConfiguration[1],
  ),
  SkippedEpochs: BabeStorage("SkippedEpochs", cdc519[1]),
}

export const TimestampStorage = Storage("Timestamp")

const TimestampStorageEntries = {
  Now: TimestampStorage("Now", u64[1]),
  DidUpdate: TimestampStorage("DidUpdate", bool[1]),
}

export const IndicesStorage = Storage("Indices")

const IndicesStorageEntries = {
  Accounts: IndicesStorage("Accounts", cdc521[1], [u32[0], Blake2128Concat]),
}

export const BalancesStorage = Storage("Balances")

const BalancesStorageEntries = {
  TotalIssuance: BalancesStorage("TotalIssuance", u128[1]),
  InactiveIssuance: BalancesStorage("InactiveIssuance", u128[1]),
  Account: BalancesStorage("Account", cPallet_balancesTypesAccountData[1], [
    cdc1[0],
    Blake2128Concat,
  ]),
  Locks: BalancesStorage("Locks", cdc526[1], [cdc1[0], Blake2128Concat]),
  Reserves: BalancesStorage("Reserves", cdc529[1], [cdc1[0], Blake2128Concat]),
  Holds: BalancesStorage("Holds", cdc532[1], [cdc1[0], Blake2128Concat]),
  Freezes: BalancesStorage("Freezes", cdc532[1], [cdc1[0], Blake2128Concat]),
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
  Author: AuthorshipStorage("Author", cdc1[1]),
}

export const StakingStorage = Storage("Staking")

const StakingStorageEntries = {
  ValidatorCount: StakingStorage("ValidatorCount", u32[1]),
  MinimumValidatorCount: StakingStorage("MinimumValidatorCount", u32[1]),
  Invulnerables: StakingStorage("Invulnerables", cdc104[1]),
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
  UnappliedSlashes: StakingStorage("UnappliedSlashes", cdc550[1], [
    u32[0],
    Twox64Concat,
  ]),
  BondedEras: StakingStorage("BondedEras", cdc481[1]),
  ValidatorSlashInEra: StakingStorage(
    "ValidatorSlashInEra",
    cdc552[1],
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
  OffendingValidators: StakingStorage("OffendingValidators", cdc555[1]),
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
    cdc480[1],
    [cdc47[0], Twox64Concat],
    [cdc13[0], Twox64Concat],
  ),
}

export const SessionStorage = Storage("Session")

const SessionStorageEntries = {
  Validators: SessionStorage("Validators", cdc104[1]),
  CurrentIndex: SessionStorage("CurrentIndex", u32[1]),
  QueuedChanged: SessionStorage("QueuedChanged", bool[1]),
  QueuedKeys: SessionStorage("QueuedKeys", cdc560[1]),
  DisabledValidators: SessionStorage("DisabledValidators", cdc109[1]),
  NextKeys: SessionStorage("NextKeys", cPolkadot_runtimeSessionKeys[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  KeyOwner: SessionStorage("KeyOwner", cdc1[1], [cdc17[0], Twox64Concat]),
}

export const GrandpaStorage = Storage("Grandpa")

const GrandpaStorageEntries = {
  State: GrandpaStorage("State", cPallet_grandpaStoredState[1]),
  PendingChange: GrandpaStorage(
    "PendingChange",
    cPallet_grandpaStoredPendingChange[1],
  ),
  NextForced: GrandpaStorage("NextForced", u32[1]),
  Stalled: GrandpaStorage("Stalled", cdc31[1]),
  CurrentSetId: GrandpaStorage("CurrentSetId", u64[1]),
  SetIdSession: GrandpaStorage("SetIdSession", u32[1], [u64[0], Twox64Concat]),
}

export const ImOnlineStorage = Storage("ImOnline")

const ImOnlineStorageEntries = {
  HeartbeatAfter: ImOnlineStorage("HeartbeatAfter", u32[1]),
  Keys: ImOnlineStorage("Keys", cdc570[1]),
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
  PublicProps: DemocracyStorage("PublicProps", cdc579[1]),
  DepositOf: DemocracyStorage("DepositOf", cdc580[1], [u32[0], Twox64Concat]),
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
  NextExternal: DemocracyStorage("NextExternal", cdc591[1]),
  Blacklist: DemocracyStorage("Blacklist", cdc592[1], [cdc1[0], Identity]),
  Cancellations: DemocracyStorage("Cancellations", bool[1], [
    cdc1[0],
    Identity,
  ]),
  MetadataOf: DemocracyStorage("MetadataOf", cdc1[1], [
    cPallet_democracyTypesMetadataOwner[0],
    Blake2128Concat,
  ]),
}

export const CouncilStorage = Storage("Council")

const CouncilStorageEntries = {
  Proposals: CouncilStorage("Proposals", cdc480[1]),
  ProposalOf: CouncilStorage("ProposalOf", cPolkadot_runtimeRuntimeCall[1], [
    cdc1[0],
    Identity,
  ]),
  Voting: CouncilStorage("Voting", cPallet_collectiveVotes[1], [
    cdc1[0],
    Identity,
  ]),
  ProposalCount: CouncilStorage("ProposalCount", u32[1]),
  Members: CouncilStorage("Members", cdc104[1]),
  Prime: CouncilStorage("Prime", cdc1[1]),
}

export const TechnicalCommitteeStorage = Storage("TechnicalCommittee")

const TechnicalCommitteeStorageEntries = {
  Proposals: TechnicalCommitteeStorage("Proposals", cdc480[1]),
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
  Members: TechnicalCommitteeStorage("Members", cdc104[1]),
  Prime: TechnicalCommitteeStorage("Prime", cdc1[1]),
}

export const PhragmenElectionStorage = Storage("PhragmenElection")

const PhragmenElectionStorageEntries = {
  Members: PhragmenElectionStorage("Members", cdc599[1]),
  RunnersUp: PhragmenElectionStorage("RunnersUp", cdc599[1]),
  Candidates: PhragmenElectionStorage("Candidates", cdc71[1]),
  ElectionRounds: PhragmenElectionStorage("ElectionRounds", u32[1]),
  Voting: PhragmenElectionStorage(
    "Voting",
    cPallet_elections_phragmenVoter[1],
    [cdc1[0], Twox64Concat],
  ),
}

export const TechnicalMembershipStorage = Storage("TechnicalMembership")

const TechnicalMembershipStorageEntries = {
  Members: TechnicalMembershipStorage("Members", cdc104[1]),
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
  Approvals: TreasuryStorage("Approvals", cdc109[1]),
}

export const ConvictionVotingStorage = Storage("ConvictionVoting")

const ConvictionVotingStorageEntries = {
  VotingFor: ConvictionVotingStorage(
    "VotingFor",
    cPallet_conviction_votingVoteVoting[1],
    [cdc1[0], Twox64Concat],
    [u16[0], Twox64Concat],
  ),
  ClassLocksFor: ConvictionVotingStorage("ClassLocksFor", cdc622[1], [
    cdc1[0],
    Twox64Concat,
  ]),
}

export const ReferendaStorage = Storage("Referenda")

const ReferendaStorageEntries = {
  ReferendumCount: ReferendaStorage("ReferendumCount", u32[1]),
  ReferendumInfoFor: ReferendaStorage(
    "ReferendumInfoFor",
    cPallet_referendaTypesReferendumInfo[1],
    [u32[0], Blake2128Concat],
  ),
  TrackQueue: ReferendaStorage("TrackQueue", cdc634[1], [u16[0], Twox64Concat]),
  DecidingCount: ReferendaStorage("DecidingCount", u32[1], [
    u16[0],
    Twox64Concat,
  ]),
  MetadataOf: ReferendaStorage("MetadataOf", cdc1[1], [
    u32[0],
    Blake2128Concat,
  ]),
}

export const WhitelistStorage = Storage("Whitelist")

const WhitelistStorageEntries = {
  WhitelistedCall: WhitelistStorage("WhitelistedCall", _void[1], [
    cdc1[0],
    Twox64Concat,
  ]),
}

export const ClaimsStorage = Storage("Claims")

const ClaimsStorageEntries = {
  Claims: ClaimsStorage("Claims", u128[1], [cdc102[0], Identity]),
  Total: ClaimsStorage("Total", u128[1]),
  Vesting: ClaimsStorage("Vesting", cdc179[1], [cdc102[0], Identity]),
  Signing: ClaimsStorage(
    "Signing",
    cPolkadot_runtime_commonClaimsStatementKind[1],
    [cdc102[0], Identity],
  ),
  Preclaims: ClaimsStorage("Preclaims", cdc102[1], [cdc1[0], Identity]),
}

export const VestingStorage = Storage("Vesting")

const VestingStorageEntries = {
  Vesting: VestingStorage("Vesting", cdc645[1], [cdc1[0], Blake2128Concat]),
  StorageVersion: VestingStorage("StorageVersion", cPallet_vestingReleases[1]),
}

export const IdentityStorage = Storage("Identity")

const IdentityStorageEntries = {
  IdentityOf: IdentityStorage(
    "IdentityOf",
    cPallet_identityTypesRegistration[1],
    [cdc1[0], Twox64Concat],
  ),
  SuperOf: IdentityStorage("SuperOf", cdc223[1], [cdc1[0], Blake2128Concat]),
  SubsOf: IdentityStorage("SubsOf", cdc653[1], [cdc1[0], Twox64Concat]),
  Registrars: IdentityStorage("Registrars", cdc658[1]),
}

export const ProxyStorage = Storage("Proxy")

const ProxyStorageEntries = {
  Proxies: ProxyStorage("Proxies", cdc660[1], [cdc1[0], Twox64Concat]),
  Announcements: ProxyStorage("Announcements", cdc664[1], [
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
  BountyDescriptions: BountiesStorage("BountyDescriptions", cdc13[1], [
    u32[0],
    Twox64Concat,
  ]),
  BountyApprovals: BountiesStorage("BountyApprovals", cdc109[1]),
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
    cdc13[1],
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
  Reasons: TipsStorage("Reasons", cdc13[1], [cdc1[0], Identity]),
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
    cdc689[1],
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
  GlobalMaxCommission: NominationPoolsStorage("GlobalMaxCommission", u32[1]),
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
  Metadata: NominationPoolsStorage("Metadata", cdc13[1], [
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
  ClaimPermissions: NominationPoolsStorage(
    "ClaimPermissions",
    cPallet_nomination_poolsClaimPermission[1],
    [cdc1[0], Twox64Concat],
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
  PendingConfigs: ConfigurationStorage("PendingConfigs", cdc720[1]),
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
    cdc723[1],
  ),
  ActiveValidatorKeys: ParasSharedStorage("ActiveValidatorKeys", cdc724[1]),
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
    cPolkadot_primitivesV4CandidateCommitments[1],
    [u32[0], Twox64Concat],
  ),
}

export const ParaInherentStorage = Storage("ParaInherent")

const ParaInherentStorageEntries = {
  Included: ParaInherentStorage("Included", _void[1]),
  OnChainVotes: ParaInherentStorage(
    "OnChainVotes",
    cPolkadot_primitivesV4ScrapedOnChainVotes[1],
  ),
}

export const ParaSchedulerStorage = Storage("ParaScheduler")

const ParaSchedulerStorageEntries = {
  ValidatorGroups: ParaSchedulerStorage("ValidatorGroups", cdc734[1]),
  ParathreadQueue: ParaSchedulerStorage(
    "ParathreadQueue",
    cPolkadot_runtime_parachainsSchedulerParathreadClaimQueue[1],
  ),
  AvailabilityCores: ParaSchedulerStorage("AvailabilityCores", cdc740[1]),
  ParathreadClaimIndex: ParaSchedulerStorage("ParathreadClaimIndex", cdc743[1]),
  SessionStartBlock: ParaSchedulerStorage("SessionStartBlock", u32[1]),
  Scheduled: ParaSchedulerStorage("Scheduled", cdc744[1]),
}

export const ParasStorage = Storage("Paras")

const ParasStorageEntries = {
  PvfActiveVoteMap: ParasStorage(
    "PvfActiveVoteMap",
    cPolkadot_runtime_parachainsParasPvfCheckActiveVoteState[1],
    [cdc1[0], Twox64Concat],
  ),
  PvfActiveVoteList: ParasStorage("PvfActiveVoteList", cdc750[1]),
  Parachains: ParasStorage("Parachains", cdc743[1]),
  ParaLifecycles: ParasStorage(
    "ParaLifecycles",
    cPolkadot_runtime_parachainsParasParaLifecycle[1],
    [u32[0], Twox64Concat],
  ),
  Heads: ParasStorage("Heads", cdc13[1], [u32[0], Twox64Concat]),
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
  PastCodePruning: ParasStorage("PastCodePruning", cdc756[1]),
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
    cPolkadot_primitivesV4UpgradeGoAhead[1],
    [u32[0], Twox64Concat],
  ),
  UpgradeRestrictionSignal: ParasStorage(
    "UpgradeRestrictionSignal",
    cPolkadot_primitivesV4UpgradeRestriction[1],
    [u32[0], Twox64Concat],
  ),
  UpgradeCooldowns: ParasStorage("UpgradeCooldowns", cdc756[1]),
  UpcomingUpgrades: ParasStorage("UpcomingUpgrades", cdc756[1]),
  ActionsQueue: ParasStorage("ActionsQueue", cdc743[1], [u32[0], Twox64Concat]),
  UpcomingParasGenesis: ParasStorage(
    "UpcomingParasGenesis",
    cPolkadot_runtime_parachainsParasParaGenesisArgs[1],
    [u32[0], Twox64Concat],
  ),
  CodeByHashRefs: ParasStorage("CodeByHashRefs", u32[1], [cdc1[0], Identity]),
  CodeByHash: ParasStorage("CodeByHash", cdc13[1], [cdc1[0], Identity]),
}

export const InitializerStorage = Storage("Initializer")

const InitializerStorageEntries = {
  HasInitialized: InitializerStorage("HasInitialized", _void[1]),
  BufferedSessionChanges: InitializerStorage(
    "BufferedSessionChanges",
    cdc761[1],
  ),
}

export const DmpStorage = Storage("Dmp")

const DmpStorageEntries = {
  DownwardMessageQueues: DmpStorage("DownwardMessageQueues", cdc763[1], [
    u32[0],
    Twox64Concat,
  ]),
  DownwardMessageQueueHeads: DmpStorage("DownwardMessageQueueHeads", cdc1[1], [
    u32[0],
    Twox64Concat,
  ]),
  DeliveryFeeFactor: DmpStorage("DeliveryFeeFactor", u128[1], [
    u32[0],
    Twox64Concat,
  ]),
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
    cdc766[1],
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
    cdc766[1],
  ),
  HrmpWatermarks: HrmpStorage("HrmpWatermarks", u32[1], [u32[0], Twox64Concat]),
  HrmpChannels: HrmpStorage(
    "HrmpChannels",
    cPolkadot_runtime_parachainsHrmpHrmpChannel[1],
    [cPolkadot_parachainPrimitivesHrmpChannelId[0], Twox64Concat],
  ),
  HrmpIngressChannelsIndex: HrmpStorage("HrmpIngressChannelsIndex", cdc743[1], [
    u32[0],
    Twox64Concat,
  ]),
  HrmpEgressChannelsIndex: HrmpStorage("HrmpEgressChannelsIndex", cdc743[1], [
    u32[0],
    Twox64Concat,
  ]),
  HrmpChannelContents: HrmpStorage("HrmpChannelContents", cdc768[1], [
    cPolkadot_parachainPrimitivesHrmpChannelId[0],
    Twox64Concat,
  ]),
  HrmpChannelDigests: HrmpStorage("HrmpChannelDigests", cdc770[1], [
    u32[0],
    Twox64Concat,
  ]),
}

export const ParaSessionInfoStorage = Storage("ParaSessionInfo")

const ParaSessionInfoStorageEntries = {
  AssignmentKeysUnsafe: ParaSessionInfoStorage(
    "AssignmentKeysUnsafe",
    cdc773[1],
  ),
  EarliestStoredSession: ParaSessionInfoStorage(
    "EarliestStoredSession",
    u32[1],
  ),
  Sessions: ParaSessionInfoStorage(
    "Sessions",
    cPolkadot_primitivesV4SessionInfo[1],
    [u32[0], Identity],
  ),
  AccountKeys: ParaSessionInfoStorage("AccountKeys", cdc104[1], [
    u32[0],
    Identity,
  ]),
  SessionExecutorParams: ParaSessionInfoStorage(
    "SessionExecutorParams",
    cdc311[1],
    [u32[0], Identity],
  ),
}

export const ParasDisputesStorage = Storage("ParasDisputes")

const ParasDisputesStorageEntries = {
  LastPrunedSession: ParasDisputesStorage("LastPrunedSession", u32[1]),
  Disputes: ParasDisputesStorage(
    "Disputes",
    cPolkadot_primitivesV4DisputeState[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Blake2128Concat],
  ),
  BackersOnDisputes: ParasDisputesStorage(
    "BackersOnDisputes",
    cdc723[1],
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

export const ParasSlashingStorage = Storage("ParasSlashing")

const ParasSlashingStorageEntries = {
  UnappliedSlashes: ParasSlashingStorage(
    "UnappliedSlashes",
    cPolkadot_runtime_parachainsDisputesSlashingPendingSlashes[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Blake2128Concat],
  ),
  ValidatorSetCounts: ParasSlashingStorage("ValidatorSetCounts", u32[1], [
    u32[0],
    Twox64Concat,
  ]),
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
  Leases: SlotsStorage("Leases", cdc789[1], [u32[0], Twox64Concat]),
}

export const AuctionsStorage = Storage("Auctions")

const AuctionsStorageEntries = {
  AuctionCounter: AuctionsStorage("AuctionCounter", u32[1]),
  AuctionInfo: AuctionsStorage("AuctionInfo", cdc31[1]),
  ReservedAmounts: AuctionsStorage("ReservedAmounts", u128[1], [
    cdc1[0],
    Twox64Concat,
  ]),
  Winning: AuctionsStorage("Winning", cdc792[1], [u32[0], Twox64Concat]),
}

export const CrowdloanStorage = Storage("Crowdloan")

const CrowdloanStorageEntries = {
  Funds: CrowdloanStorage(
    "Funds",
    cPolkadot_runtime_commonCrowdloanFundInfo[1],
    [u32[0], Twox64Concat],
  ),
  NewRaise: CrowdloanStorage("NewRaise", cdc743[1]),
  EndingsCount: CrowdloanStorage("EndingsCount", u32[1]),
  NextFundIndex: CrowdloanStorage("NextFundIndex", u32[1]),
}

export const XcmPalletStorage = Storage("XcmPallet")

const XcmPalletStorageEntries = {
  QueryCounter: XcmPalletStorage("QueryCounter", u64[1]),
  Queries: XcmPalletStorage("Queries", cPallet_xcmPalletQueryStatus[1], [
    u64[0],
    Blake2128Concat,
  ]),
  AssetTraps: XcmPalletStorage("AssetTraps", u32[1], [cdc1[0], Identity]),
  SafeXcmVersion: XcmPalletStorage("SafeXcmVersion", u32[1]),
  SupportedVersion: XcmPalletStorage(
    "SupportedVersion",
    u32[1],
    [u32[0], Twox64Concat],
    [cXcmVersionedMultiLocation[0], Blake2128Concat],
  ),
  VersionNotifiers: XcmPalletStorage(
    "VersionNotifiers",
    u64[1],
    [u32[0], Twox64Concat],
    [cXcmVersionedMultiLocation[0], Blake2128Concat],
  ),
  VersionNotifyTargets: XcmPalletStorage(
    "VersionNotifyTargets",
    cdc805[1],
    [u32[0], Twox64Concat],
    [cXcmVersionedMultiLocation[0], Blake2128Concat],
  ),
  VersionDiscoveryQueue: XcmPalletStorage("VersionDiscoveryQueue", cdc808[1]),
  CurrentMigration: XcmPalletStorage(
    "CurrentMigration",
    cPallet_xcmPalletVersionMigrationStage[1],
  ),
  RemoteLockedFungibles: XcmPalletStorage(
    "RemoteLockedFungibles",
    cPallet_xcmPalletRemoteLockedFungibleRecord[1],
    [u32[0], Twox64Concat],
    [cdc1[0], Blake2128Concat],
    [cXcmVersionedAssetId[0], Blake2128Concat],
  ),
  LockedFungibles: XcmPalletStorage("LockedFungibles", cdc819[1], [
    cdc1[0],
    Blake2128Concat,
  ]),
  XcmExecutionSuspended: XcmPalletStorage("XcmExecutionSuspended", bool[1]),
}

export const MessageQueueStorage = Storage("MessageQueue")

const MessageQueueStorageEntries = {
  BookStateFor: MessageQueueStorage(
    "BookStateFor",
    cPallet_message_queueBookState[1],
    [
      cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin[0],
      Twox64Concat,
    ],
  ),
  ServiceHead: MessageQueueStorage(
    "ServiceHead",
    cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin[1],
  ),
  Pages: MessageQueueStorage(
    "Pages",
    cPallet_message_queuePage[1],
    [
      cPolkadot_runtime_parachainsInclusionAggregateMessageOrigin[0],
      Twox64Concat,
    ],
    [u32[0], Twox64Concat],
  ),
}
