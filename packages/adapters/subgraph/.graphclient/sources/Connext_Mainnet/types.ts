// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ConnextMainnetTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  mainnet_BigDecimal: any;
  BigInt: any;
  mainnet_Bytes: any;
};

export type mainnet_AggregateRoot = {
  id: Scalars['ID'];
  root: Scalars['mainnet_Bytes'];
  blockNumber: Scalars['BigInt'];
};

export type mainnet_AggregateRoot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  root?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  root_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_AggregateRoot_orderBy =
  | 'id'
  | 'root'
  | 'blockNumber';

export type mainnet_Asset = {
  id: Scalars['ID'];
  key?: Maybe<Scalars['mainnet_Bytes']>;
  canonicalId?: Maybe<Scalars['mainnet_Bytes']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  adoptedAsset?: Maybe<Scalars['mainnet_Bytes']>;
  localAsset?: Maybe<Scalars['mainnet_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type mainnet_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: mainnet_Router;
  asset: mainnet_Asset;
  feesEarned: Scalars['BigInt'];
};

export type mainnet_AssetBalance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<mainnet_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<mainnet_Asset_filter>;
  feesEarned?: InputMaybe<Scalars['BigInt']>;
  feesEarned_not?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feesEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset'
  | 'feesEarned';

export type mainnet_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['mainnet_Bytes']>;
  key_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  key_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adoptedAsset?: InputMaybe<Scalars['mainnet_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  localAsset?: InputMaybe<Scalars['mainnet_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_Asset_orderBy =
  | 'id'
  | 'key'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'adoptedAsset'
  | 'localAsset'
  | 'blockNumber';

export type mainnet_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type mainnet_Block_height = {
  hash?: InputMaybe<Scalars['mainnet_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type mainnet_ConnectorMeta = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  amb?: Maybe<Scalars['mainnet_Bytes']>;
  rootManager?: Maybe<Scalars['mainnet_Bytes']>;
  mirrorConnector?: Maybe<Scalars['mainnet_Bytes']>;
};

export type mainnet_ConnectorMeta_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amb?: InputMaybe<Scalars['mainnet_Bytes']>;
  amb_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  amb_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  amb_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  amb_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  amb_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  rootManager?: InputMaybe<Scalars['mainnet_Bytes']>;
  rootManager_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  rootManager_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  rootManager_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  rootManager_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  rootManager_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  mirrorConnector?: InputMaybe<Scalars['mainnet_Bytes']>;
  mirrorConnector_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  mirrorConnector_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  mirrorConnector_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  mirrorConnector_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  mirrorConnector_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_ConnectorMeta_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'amb'
  | 'rootManager'
  | 'mirrorConnector';

export type mainnet_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['mainnet_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<mainnet_TransferStatus>;
  routers?: Maybe<Array<mainnet_Router>>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['mainnet_Bytes']>;
  delegate?: Maybe<Scalars['mainnet_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['mainnet_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['mainnet_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['mainnet_Bytes']>;
  asset?: Maybe<mainnet_Asset>;
  amount?: Maybe<Scalars['BigInt']>;
  routersFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['mainnet_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['mainnet_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['mainnet_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['mainnet_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type mainnet_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Router_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Router_filter>;
};

export type mainnet_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<mainnet_TransferStatus>;
  status_not?: InputMaybe<mainnet_TransferStatus>;
  status_in?: InputMaybe<Array<mainnet_TransferStatus>>;
  status_not_in?: InputMaybe<Array<mainnet_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<mainnet_Router_filter>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['mainnet_Bytes']>;
  to_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  to_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['mainnet_Bytes']>;
  callData_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['mainnet_Bytes']>;
  originSender_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<mainnet_Asset_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee?: InputMaybe<Scalars['BigInt']>;
  routersFee_not?: InputMaybe<Scalars['BigInt']>;
  routersFee_gt?: InputMaybe<Scalars['BigInt']>;
  routersFee_lt?: InputMaybe<Scalars['BigInt']>;
  routersFee_gte?: InputMaybe<Scalars['BigInt']>;
  routersFee_lte?: InputMaybe<Scalars['BigInt']>;
  routersFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledCaller?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  reconciledTimestamp?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'routers'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'amount'
  | 'routersFee'
  | 'executedCaller'
  | 'executedTransactionHash'
  | 'executedTimestamp'
  | 'executedGasPrice'
  | 'executedGasLimit'
  | 'executedBlockNumber'
  | 'reconciledCaller'
  | 'reconciledTransactionHash'
  | 'reconciledTimestamp'
  | 'reconciledGasPrice'
  | 'reconciledGasLimit'
  | 'reconciledBlockNumber';

/** Defines the order direction, either ascending or descending */
export type mainnet_OrderDirection =
  | 'asc'
  | 'desc';

export type mainnet_OriginMessage = {
  id: Scalars['ID'];
  transferId?: Maybe<Scalars['mainnet_Bytes']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  leaf?: Maybe<Scalars['mainnet_Bytes']>;
  index?: Maybe<Scalars['BigInt']>;
  message?: Maybe<Scalars['mainnet_Bytes']>;
  root?: Maybe<Scalars['mainnet_Bytes']>;
  transactionHash?: Maybe<Scalars['mainnet_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  rootCount?: Maybe<mainnet_RootCount>;
};

export type mainnet_OriginMessage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transferId?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leaf?: InputMaybe<Scalars['mainnet_Bytes']>;
  leaf_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  leaf_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  leaf_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  leaf_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  leaf_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  message?: InputMaybe<Scalars['mainnet_Bytes']>;
  message_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  message_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  root?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  root_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rootCount?: InputMaybe<Scalars['String']>;
  rootCount_not?: InputMaybe<Scalars['String']>;
  rootCount_gt?: InputMaybe<Scalars['String']>;
  rootCount_lt?: InputMaybe<Scalars['String']>;
  rootCount_gte?: InputMaybe<Scalars['String']>;
  rootCount_lte?: InputMaybe<Scalars['String']>;
  rootCount_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_contains?: InputMaybe<Scalars['String']>;
  rootCount_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_contains?: InputMaybe<Scalars['String']>;
  rootCount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_?: InputMaybe<mainnet_RootCount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_OriginMessage_orderBy =
  | 'id'
  | 'transferId'
  | 'destinationDomain'
  | 'leaf'
  | 'index'
  | 'message'
  | 'root'
  | 'transactionHash'
  | 'blockNumber'
  | 'rootCount';

export type mainnet_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['mainnet_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<mainnet_TransferStatus>;
  messageHash?: Maybe<Scalars['mainnet_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['mainnet_Bytes']>;
  delegate?: Maybe<Scalars['mainnet_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['mainnet_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['mainnet_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['mainnet_Bytes']>;
  asset?: Maybe<mainnet_Asset>;
  message?: Maybe<mainnet_OriginMessage>;
  caller?: Maybe<Scalars['mainnet_Bytes']>;
  transactionHash?: Maybe<Scalars['mainnet_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type mainnet_OriginTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<mainnet_TransferStatus>;
  status_not?: InputMaybe<mainnet_TransferStatus>;
  status_in?: InputMaybe<Array<mainnet_TransferStatus>>;
  status_not_in?: InputMaybe<Array<mainnet_TransferStatus>>;
  messageHash?: InputMaybe<Scalars['mainnet_Bytes']>;
  messageHash_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  messageHash_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  messageHash_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  messageHash_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  messageHash_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['mainnet_Bytes']>;
  to_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  to_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['mainnet_Bytes']>;
  callData_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['mainnet_Bytes']>;
  originSender_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<mainnet_Asset_filter>;
  message?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_?: InputMaybe<mainnet_OriginMessage_filter>;
  caller?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'messageHash'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'message'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type mainnet_PooledToken = {
  id: Scalars['ID'];
  asset: Scalars['mainnet_Bytes'];
};

export type mainnet_PooledToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asset?: InputMaybe<Scalars['mainnet_Bytes']>;
  asset_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_PooledToken_orderBy =
  | 'id'
  | 'asset';

export type Query = {
  mainnet_asset?: Maybe<mainnet_Asset>;
  mainnet_assets: Array<mainnet_Asset>;
  mainnet_assetBalance?: Maybe<mainnet_AssetBalance>;
  mainnet_assetBalances: Array<mainnet_AssetBalance>;
  mainnet_router?: Maybe<mainnet_Router>;
  mainnet_routers: Array<mainnet_Router>;
  mainnet_setting?: Maybe<mainnet_Setting>;
  mainnet_settings: Array<mainnet_Setting>;
  mainnet_relayer?: Maybe<mainnet_Relayer>;
  mainnet_relayers: Array<mainnet_Relayer>;
  mainnet_sequencer?: Maybe<mainnet_Sequencer>;
  mainnet_sequencers: Array<mainnet_Sequencer>;
  mainnet_originTransfer?: Maybe<mainnet_OriginTransfer>;
  mainnet_originTransfers: Array<mainnet_OriginTransfer>;
  mainnet_destinationTransfer?: Maybe<mainnet_DestinationTransfer>;
  mainnet_destinationTransfers: Array<mainnet_DestinationTransfer>;
  mainnet_originMessage?: Maybe<mainnet_OriginMessage>;
  mainnet_originMessages: Array<mainnet_OriginMessage>;
  mainnet_aggregateRoot?: Maybe<mainnet_AggregateRoot>;
  mainnet_aggregateRoots: Array<mainnet_AggregateRoot>;
  mainnet_connectorMeta?: Maybe<mainnet_ConnectorMeta>;
  mainnet_connectorMetas: Array<mainnet_ConnectorMeta>;
  mainnet_rootCount?: Maybe<mainnet_RootCount>;
  mainnet_rootCounts: Array<mainnet_RootCount>;
  mainnet_rootMessageSent?: Maybe<mainnet_RootMessageSent>;
  mainnet_rootMessageSents: Array<mainnet_RootMessageSent>;
  mainnet_stableSwap?: Maybe<mainnet_StableSwap>;
  mainnet_stableSwaps: Array<mainnet_StableSwap>;
  mainnet_pooledToken?: Maybe<mainnet_PooledToken>;
  mainnet_pooledTokens: Array<mainnet_PooledToken>;
  mainnet_stableSwapLiquidity?: Maybe<mainnet_StableSwapLiquidity>;
  mainnet_stableSwapLiquidities: Array<mainnet_StableSwapLiquidity>;
  /** Access to subgraph metadata */
  mainnet__meta?: Maybe<mainnet__Meta_>;
};


export type Querymainnet_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Asset_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Asset_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_AssetBalance_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Router_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Router_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Setting_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Setting_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Relayer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Relayer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Sequencer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Sequencer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_OriginTransfer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_DestinationTransfer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_OriginMessage_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_AggregateRoot_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_ConnectorMeta_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_RootCount_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_RootCount_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_RootMessageSent_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_StableSwap_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_StableSwap_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_PooledToken_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_PooledToken_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_stableSwapLiquidityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet_stableSwapLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_StableSwapLiquidity_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_StableSwapLiquidity_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymainnet__metaArgs = {
  block?: InputMaybe<mainnet_Block_height>;
};

export type mainnet_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['mainnet_Bytes']>;
};

export type mainnet_Relayer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  relayer?: InputMaybe<Scalars['mainnet_Bytes']>;
  relayer_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type mainnet_RootCount = {
  id: Scalars['ID'];
  count?: Maybe<Scalars['BigInt']>;
};

export type mainnet_RootCount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_RootCount_orderBy =
  | 'id'
  | 'count';

export type mainnet_RootMessageSent = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  root?: Maybe<Scalars['mainnet_Bytes']>;
  count?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['mainnet_Bytes']>;
  transactionHash?: Maybe<Scalars['mainnet_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type mainnet_RootMessageSent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  root_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_RootMessageSent_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'root'
  | 'count'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type mainnet_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['mainnet_Bytes']>;
  recipient?: Maybe<Scalars['mainnet_Bytes']>;
  proposedOwner?: Maybe<Scalars['mainnet_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<mainnet_AssetBalance>;
};


export type mainnet_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_AssetBalance_filter>;
};

export type mainnet_Router_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  owner?: InputMaybe<Scalars['mainnet_Bytes']>;
  owner_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  recipient?: InputMaybe<Scalars['mainnet_Bytes']>;
  recipient_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['mainnet_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<mainnet_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type mainnet_Sequencer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  sequencer?: Maybe<Scalars['mainnet_Bytes']>;
};

export type mainnet_Sequencer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  sequencer?: InputMaybe<Scalars['mainnet_Bytes']>;
  sequencer_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  sequencer_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  sequencer_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  sequencer_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  sequencer_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_Sequencer_orderBy =
  | 'id'
  | 'isActive'
  | 'sequencer';

export type mainnet_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['mainnet_Bytes'];
};

export type mainnet_Setting_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type mainnet_StableSwap = {
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['mainnet_Bytes']>;
  canonicalId?: Maybe<Scalars['mainnet_Bytes']>;
  domain?: Maybe<Scalars['BigInt']>;
  swapPool?: Maybe<Scalars['mainnet_Bytes']>;
  lpToken?: Maybe<Scalars['mainnet_Bytes']>;
  initialA?: Maybe<Scalars['BigInt']>;
  futureA?: Maybe<Scalars['BigInt']>;
  initialATime?: Maybe<Scalars['BigInt']>;
  futureATime?: Maybe<Scalars['BigInt']>;
  swapFee?: Maybe<Scalars['BigInt']>;
  adminFee?: Maybe<Scalars['BigInt']>;
  pooledTokens: Array<mainnet_PooledToken>;
  tokenPrecisionMultipliers?: Maybe<Array<Scalars['BigInt']>>;
  balances: Array<Scalars['BigInt']>;
  adminFees?: Maybe<Array<Scalars['BigInt']>>;
};


export type mainnet_StableSwappooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_PooledToken_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_PooledToken_filter>;
};

export type mainnet_StableSwapLiquidity = {
  id: Scalars['ID'];
  provider: Scalars['mainnet_Bytes'];
  stableSwap: mainnet_StableSwap;
  tokenAmounts: Array<Scalars['BigInt']>;
  fees: Array<Scalars['BigInt']>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply?: Maybe<Scalars['BigInt']>;
};

export type mainnet_StableSwapLiquidity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  provider?: InputMaybe<Scalars['mainnet_Bytes']>;
  provider_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  provider_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  provider_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  provider_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  provider_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<mainnet_StableSwap_filter>;
  tokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant?: InputMaybe<Scalars['BigInt']>;
  invariant_not?: InputMaybe<Scalars['BigInt']>;
  invariant_gt?: InputMaybe<Scalars['BigInt']>;
  invariant_lt?: InputMaybe<Scalars['BigInt']>;
  invariant_gte?: InputMaybe<Scalars['BigInt']>;
  invariant_lte?: InputMaybe<Scalars['BigInt']>;
  invariant_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_StableSwapLiquidity_orderBy =
  | 'id'
  | 'provider'
  | 'stableSwap'
  | 'tokenAmounts'
  | 'fees'
  | 'invariant'
  | 'lpTokenSupply';

export type mainnet_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  key?: InputMaybe<Scalars['mainnet_Bytes']>;
  key_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  key_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['mainnet_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  lpToken?: InputMaybe<Scalars['mainnet_Bytes']>;
  lpToken_not?: InputMaybe<Scalars['mainnet_Bytes']>;
  lpToken_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  lpToken_not_in?: InputMaybe<Array<Scalars['mainnet_Bytes']>>;
  lpToken_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  lpToken_not_contains?: InputMaybe<Scalars['mainnet_Bytes']>;
  initialA?: InputMaybe<Scalars['BigInt']>;
  initialA_not?: InputMaybe<Scalars['BigInt']>;
  initialA_gt?: InputMaybe<Scalars['BigInt']>;
  initialA_lt?: InputMaybe<Scalars['BigInt']>;
  initialA_gte?: InputMaybe<Scalars['BigInt']>;
  initialA_lte?: InputMaybe<Scalars['BigInt']>;
  initialA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureA?: InputMaybe<Scalars['BigInt']>;
  futureA_not?: InputMaybe<Scalars['BigInt']>;
  futureA_gt?: InputMaybe<Scalars['BigInt']>;
  futureA_lt?: InputMaybe<Scalars['BigInt']>;
  futureA_gte?: InputMaybe<Scalars['BigInt']>;
  futureA_lte?: InputMaybe<Scalars['BigInt']>;
  futureA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialATime?: InputMaybe<Scalars['BigInt']>;
  initialATime_not?: InputMaybe<Scalars['BigInt']>;
  initialATime_gt?: InputMaybe<Scalars['BigInt']>;
  initialATime_lt?: InputMaybe<Scalars['BigInt']>;
  initialATime_gte?: InputMaybe<Scalars['BigInt']>;
  initialATime_lte?: InputMaybe<Scalars['BigInt']>;
  initialATime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialATime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureATime?: InputMaybe<Scalars['BigInt']>;
  futureATime_not?: InputMaybe<Scalars['BigInt']>;
  futureATime_gt?: InputMaybe<Scalars['BigInt']>;
  futureATime_lt?: InputMaybe<Scalars['BigInt']>;
  futureATime_gte?: InputMaybe<Scalars['BigInt']>;
  futureATime_lte?: InputMaybe<Scalars['BigInt']>;
  futureATime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureATime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapFee?: InputMaybe<Scalars['BigInt']>;
  swapFee_not?: InputMaybe<Scalars['BigInt']>;
  swapFee_gt?: InputMaybe<Scalars['BigInt']>;
  swapFee_lt?: InputMaybe<Scalars['BigInt']>;
  swapFee_gte?: InputMaybe<Scalars['BigInt']>;
  swapFee_lte?: InputMaybe<Scalars['BigInt']>;
  swapFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFee?: InputMaybe<Scalars['BigInt']>;
  adminFee_not?: InputMaybe<Scalars['BigInt']>;
  adminFee_gt?: InputMaybe<Scalars['BigInt']>;
  adminFee_lt?: InputMaybe<Scalars['BigInt']>;
  adminFee_gte?: InputMaybe<Scalars['BigInt']>;
  adminFee_lte?: InputMaybe<Scalars['BigInt']>;
  adminFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pooledTokens?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_?: InputMaybe<mainnet_PooledToken_filter>;
  tokenPrecisionMultipliers?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mainnet_BlockChangedFilter>;
};

export type mainnet_StableSwap_orderBy =
  | 'id'
  | 'isActive'
  | 'key'
  | 'canonicalId'
  | 'domain'
  | 'swapPool'
  | 'lpToken'
  | 'initialA'
  | 'futureA'
  | 'initialATime'
  | 'futureATime'
  | 'swapFee'
  | 'adminFee'
  | 'pooledTokens'
  | 'tokenPrecisionMultipliers'
  | 'balances'
  | 'adminFees';

export type Subscription = {
  mainnet_asset?: Maybe<mainnet_Asset>;
  mainnet_assets: Array<mainnet_Asset>;
  mainnet_assetBalance?: Maybe<mainnet_AssetBalance>;
  mainnet_assetBalances: Array<mainnet_AssetBalance>;
  mainnet_router?: Maybe<mainnet_Router>;
  mainnet_routers: Array<mainnet_Router>;
  mainnet_setting?: Maybe<mainnet_Setting>;
  mainnet_settings: Array<mainnet_Setting>;
  mainnet_relayer?: Maybe<mainnet_Relayer>;
  mainnet_relayers: Array<mainnet_Relayer>;
  mainnet_sequencer?: Maybe<mainnet_Sequencer>;
  mainnet_sequencers: Array<mainnet_Sequencer>;
  mainnet_originTransfer?: Maybe<mainnet_OriginTransfer>;
  mainnet_originTransfers: Array<mainnet_OriginTransfer>;
  mainnet_destinationTransfer?: Maybe<mainnet_DestinationTransfer>;
  mainnet_destinationTransfers: Array<mainnet_DestinationTransfer>;
  mainnet_originMessage?: Maybe<mainnet_OriginMessage>;
  mainnet_originMessages: Array<mainnet_OriginMessage>;
  mainnet_aggregateRoot?: Maybe<mainnet_AggregateRoot>;
  mainnet_aggregateRoots: Array<mainnet_AggregateRoot>;
  mainnet_connectorMeta?: Maybe<mainnet_ConnectorMeta>;
  mainnet_connectorMetas: Array<mainnet_ConnectorMeta>;
  mainnet_rootCount?: Maybe<mainnet_RootCount>;
  mainnet_rootCounts: Array<mainnet_RootCount>;
  mainnet_rootMessageSent?: Maybe<mainnet_RootMessageSent>;
  mainnet_rootMessageSents: Array<mainnet_RootMessageSent>;
  mainnet_stableSwap?: Maybe<mainnet_StableSwap>;
  mainnet_stableSwaps: Array<mainnet_StableSwap>;
  mainnet_pooledToken?: Maybe<mainnet_PooledToken>;
  mainnet_pooledTokens: Array<mainnet_PooledToken>;
  mainnet_stableSwapLiquidity?: Maybe<mainnet_StableSwapLiquidity>;
  mainnet_stableSwapLiquidities: Array<mainnet_StableSwapLiquidity>;
  /** Access to subgraph metadata */
  mainnet__meta?: Maybe<mainnet__Meta_>;
};


export type Subscriptionmainnet_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Asset_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Asset_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_AssetBalance_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Router_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Router_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Setting_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Setting_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Relayer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Relayer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_Sequencer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_Sequencer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_OriginTransfer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_DestinationTransfer_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_OriginMessage_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_AggregateRoot_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_ConnectorMeta_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_RootCount_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_RootCount_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_RootMessageSent_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_StableSwap_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_StableSwap_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_PooledToken_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_PooledToken_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_stableSwapLiquidityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet_stableSwapLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mainnet_StableSwapLiquidity_orderBy>;
  orderDirection?: InputMaybe<mainnet_OrderDirection>;
  where?: InputMaybe<mainnet_StableSwapLiquidity_filter>;
  block?: InputMaybe<mainnet_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmainnet__metaArgs = {
  block?: InputMaybe<mainnet_Block_height>;
};

export type mainnet_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type mainnet__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['mainnet_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type mainnet__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: mainnet__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  mainnet_asset: InContextSdkMethod<Query['mainnet_asset'], Querymainnet_assetArgs, MeshContext>,
  /** null **/
  mainnet_assets: InContextSdkMethod<Query['mainnet_assets'], Querymainnet_assetsArgs, MeshContext>,
  /** null **/
  mainnet_assetBalance: InContextSdkMethod<Query['mainnet_assetBalance'], Querymainnet_assetBalanceArgs, MeshContext>,
  /** null **/
  mainnet_assetBalances: InContextSdkMethod<Query['mainnet_assetBalances'], Querymainnet_assetBalancesArgs, MeshContext>,
  /** null **/
  mainnet_router: InContextSdkMethod<Query['mainnet_router'], Querymainnet_routerArgs, MeshContext>,
  /** null **/
  mainnet_routers: InContextSdkMethod<Query['mainnet_routers'], Querymainnet_routersArgs, MeshContext>,
  /** null **/
  mainnet_setting: InContextSdkMethod<Query['mainnet_setting'], Querymainnet_settingArgs, MeshContext>,
  /** null **/
  mainnet_settings: InContextSdkMethod<Query['mainnet_settings'], Querymainnet_settingsArgs, MeshContext>,
  /** null **/
  mainnet_relayer: InContextSdkMethod<Query['mainnet_relayer'], Querymainnet_relayerArgs, MeshContext>,
  /** null **/
  mainnet_relayers: InContextSdkMethod<Query['mainnet_relayers'], Querymainnet_relayersArgs, MeshContext>,
  /** null **/
  mainnet_sequencer: InContextSdkMethod<Query['mainnet_sequencer'], Querymainnet_sequencerArgs, MeshContext>,
  /** null **/
  mainnet_sequencers: InContextSdkMethod<Query['mainnet_sequencers'], Querymainnet_sequencersArgs, MeshContext>,
  /** null **/
  mainnet_originTransfer: InContextSdkMethod<Query['mainnet_originTransfer'], Querymainnet_originTransferArgs, MeshContext>,
  /** null **/
  mainnet_originTransfers: InContextSdkMethod<Query['mainnet_originTransfers'], Querymainnet_originTransfersArgs, MeshContext>,
  /** null **/
  mainnet_destinationTransfer: InContextSdkMethod<Query['mainnet_destinationTransfer'], Querymainnet_destinationTransferArgs, MeshContext>,
  /** null **/
  mainnet_destinationTransfers: InContextSdkMethod<Query['mainnet_destinationTransfers'], Querymainnet_destinationTransfersArgs, MeshContext>,
  /** null **/
  mainnet_originMessage: InContextSdkMethod<Query['mainnet_originMessage'], Querymainnet_originMessageArgs, MeshContext>,
  /** null **/
  mainnet_originMessages: InContextSdkMethod<Query['mainnet_originMessages'], Querymainnet_originMessagesArgs, MeshContext>,
  /** null **/
  mainnet_aggregateRoot: InContextSdkMethod<Query['mainnet_aggregateRoot'], Querymainnet_aggregateRootArgs, MeshContext>,
  /** null **/
  mainnet_aggregateRoots: InContextSdkMethod<Query['mainnet_aggregateRoots'], Querymainnet_aggregateRootsArgs, MeshContext>,
  /** null **/
  mainnet_connectorMeta: InContextSdkMethod<Query['mainnet_connectorMeta'], Querymainnet_connectorMetaArgs, MeshContext>,
  /** null **/
  mainnet_connectorMetas: InContextSdkMethod<Query['mainnet_connectorMetas'], Querymainnet_connectorMetasArgs, MeshContext>,
  /** null **/
  mainnet_rootCount: InContextSdkMethod<Query['mainnet_rootCount'], Querymainnet_rootCountArgs, MeshContext>,
  /** null **/
  mainnet_rootCounts: InContextSdkMethod<Query['mainnet_rootCounts'], Querymainnet_rootCountsArgs, MeshContext>,
  /** null **/
  mainnet_rootMessageSent: InContextSdkMethod<Query['mainnet_rootMessageSent'], Querymainnet_rootMessageSentArgs, MeshContext>,
  /** null **/
  mainnet_rootMessageSents: InContextSdkMethod<Query['mainnet_rootMessageSents'], Querymainnet_rootMessageSentsArgs, MeshContext>,
  /** null **/
  mainnet_stableSwap: InContextSdkMethod<Query['mainnet_stableSwap'], Querymainnet_stableSwapArgs, MeshContext>,
  /** null **/
  mainnet_stableSwaps: InContextSdkMethod<Query['mainnet_stableSwaps'], Querymainnet_stableSwapsArgs, MeshContext>,
  /** null **/
  mainnet_pooledToken: InContextSdkMethod<Query['mainnet_pooledToken'], Querymainnet_pooledTokenArgs, MeshContext>,
  /** null **/
  mainnet_pooledTokens: InContextSdkMethod<Query['mainnet_pooledTokens'], Querymainnet_pooledTokensArgs, MeshContext>,
  /** null **/
  mainnet_stableSwapLiquidity: InContextSdkMethod<Query['mainnet_stableSwapLiquidity'], Querymainnet_stableSwapLiquidityArgs, MeshContext>,
  /** null **/
  mainnet_stableSwapLiquidities: InContextSdkMethod<Query['mainnet_stableSwapLiquidities'], Querymainnet_stableSwapLiquiditiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  mainnet__meta: InContextSdkMethod<Query['mainnet__meta'], Querymainnet__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  mainnet_asset: InContextSdkMethod<Subscription['mainnet_asset'], Subscriptionmainnet_assetArgs, MeshContext>,
  /** null **/
  mainnet_assets: InContextSdkMethod<Subscription['mainnet_assets'], Subscriptionmainnet_assetsArgs, MeshContext>,
  /** null **/
  mainnet_assetBalance: InContextSdkMethod<Subscription['mainnet_assetBalance'], Subscriptionmainnet_assetBalanceArgs, MeshContext>,
  /** null **/
  mainnet_assetBalances: InContextSdkMethod<Subscription['mainnet_assetBalances'], Subscriptionmainnet_assetBalancesArgs, MeshContext>,
  /** null **/
  mainnet_router: InContextSdkMethod<Subscription['mainnet_router'], Subscriptionmainnet_routerArgs, MeshContext>,
  /** null **/
  mainnet_routers: InContextSdkMethod<Subscription['mainnet_routers'], Subscriptionmainnet_routersArgs, MeshContext>,
  /** null **/
  mainnet_setting: InContextSdkMethod<Subscription['mainnet_setting'], Subscriptionmainnet_settingArgs, MeshContext>,
  /** null **/
  mainnet_settings: InContextSdkMethod<Subscription['mainnet_settings'], Subscriptionmainnet_settingsArgs, MeshContext>,
  /** null **/
  mainnet_relayer: InContextSdkMethod<Subscription['mainnet_relayer'], Subscriptionmainnet_relayerArgs, MeshContext>,
  /** null **/
  mainnet_relayers: InContextSdkMethod<Subscription['mainnet_relayers'], Subscriptionmainnet_relayersArgs, MeshContext>,
  /** null **/
  mainnet_sequencer: InContextSdkMethod<Subscription['mainnet_sequencer'], Subscriptionmainnet_sequencerArgs, MeshContext>,
  /** null **/
  mainnet_sequencers: InContextSdkMethod<Subscription['mainnet_sequencers'], Subscriptionmainnet_sequencersArgs, MeshContext>,
  /** null **/
  mainnet_originTransfer: InContextSdkMethod<Subscription['mainnet_originTransfer'], Subscriptionmainnet_originTransferArgs, MeshContext>,
  /** null **/
  mainnet_originTransfers: InContextSdkMethod<Subscription['mainnet_originTransfers'], Subscriptionmainnet_originTransfersArgs, MeshContext>,
  /** null **/
  mainnet_destinationTransfer: InContextSdkMethod<Subscription['mainnet_destinationTransfer'], Subscriptionmainnet_destinationTransferArgs, MeshContext>,
  /** null **/
  mainnet_destinationTransfers: InContextSdkMethod<Subscription['mainnet_destinationTransfers'], Subscriptionmainnet_destinationTransfersArgs, MeshContext>,
  /** null **/
  mainnet_originMessage: InContextSdkMethod<Subscription['mainnet_originMessage'], Subscriptionmainnet_originMessageArgs, MeshContext>,
  /** null **/
  mainnet_originMessages: InContextSdkMethod<Subscription['mainnet_originMessages'], Subscriptionmainnet_originMessagesArgs, MeshContext>,
  /** null **/
  mainnet_aggregateRoot: InContextSdkMethod<Subscription['mainnet_aggregateRoot'], Subscriptionmainnet_aggregateRootArgs, MeshContext>,
  /** null **/
  mainnet_aggregateRoots: InContextSdkMethod<Subscription['mainnet_aggregateRoots'], Subscriptionmainnet_aggregateRootsArgs, MeshContext>,
  /** null **/
  mainnet_connectorMeta: InContextSdkMethod<Subscription['mainnet_connectorMeta'], Subscriptionmainnet_connectorMetaArgs, MeshContext>,
  /** null **/
  mainnet_connectorMetas: InContextSdkMethod<Subscription['mainnet_connectorMetas'], Subscriptionmainnet_connectorMetasArgs, MeshContext>,
  /** null **/
  mainnet_rootCount: InContextSdkMethod<Subscription['mainnet_rootCount'], Subscriptionmainnet_rootCountArgs, MeshContext>,
  /** null **/
  mainnet_rootCounts: InContextSdkMethod<Subscription['mainnet_rootCounts'], Subscriptionmainnet_rootCountsArgs, MeshContext>,
  /** null **/
  mainnet_rootMessageSent: InContextSdkMethod<Subscription['mainnet_rootMessageSent'], Subscriptionmainnet_rootMessageSentArgs, MeshContext>,
  /** null **/
  mainnet_rootMessageSents: InContextSdkMethod<Subscription['mainnet_rootMessageSents'], Subscriptionmainnet_rootMessageSentsArgs, MeshContext>,
  /** null **/
  mainnet_stableSwap: InContextSdkMethod<Subscription['mainnet_stableSwap'], Subscriptionmainnet_stableSwapArgs, MeshContext>,
  /** null **/
  mainnet_stableSwaps: InContextSdkMethod<Subscription['mainnet_stableSwaps'], Subscriptionmainnet_stableSwapsArgs, MeshContext>,
  /** null **/
  mainnet_pooledToken: InContextSdkMethod<Subscription['mainnet_pooledToken'], Subscriptionmainnet_pooledTokenArgs, MeshContext>,
  /** null **/
  mainnet_pooledTokens: InContextSdkMethod<Subscription['mainnet_pooledTokens'], Subscriptionmainnet_pooledTokensArgs, MeshContext>,
  /** null **/
  mainnet_stableSwapLiquidity: InContextSdkMethod<Subscription['mainnet_stableSwapLiquidity'], Subscriptionmainnet_stableSwapLiquidityArgs, MeshContext>,
  /** null **/
  mainnet_stableSwapLiquidities: InContextSdkMethod<Subscription['mainnet_stableSwapLiquidities'], Subscriptionmainnet_stableSwapLiquiditiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  mainnet__meta: InContextSdkMethod<Subscription['mainnet__meta'], Subscriptionmainnet__metaArgs, MeshContext>
  };

  export type Context = {
      ["Connext_Mainnet"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
