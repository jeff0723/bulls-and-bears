/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PaymentSplitterInterface extends ethers.utils.Interface {
  functions: {
    "payee(uint256)": FunctionFragment;
    "release(address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "shares(address)": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values: [string]): string;
  encodeFunctionData(functionFragment: "shares", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalReleased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;

  events: {
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
}

export type PayeeAddedEvent = TypedEvent<
  [string, BigNumber] & { account: string; shares: BigNumber }
>;

export type PaymentReceivedEvent = TypedEvent<
  [string, BigNumber] & { from: string; amount: BigNumber }
>;

export type PaymentReleasedEvent = TypedEvent<
  [string, BigNumber] & { to: string; amount: BigNumber }
>;

export class PaymentSplitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PaymentSplitterInterface;

  functions: {
    payee(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    release(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    released(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    shares(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  release(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    release(account: string, overrides?: CallOverrides): Promise<void>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "PayeeAdded(address,uint256)"(
      account?: null,
      shares?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; shares: BigNumber }
    >;

    PayeeAdded(
      account?: null,
      shares?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; shares: BigNumber }
    >;

    "PaymentReceived(address,uint256)"(
      from?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { from: string; amount: BigNumber }
    >;

    PaymentReceived(
      from?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { from: string; amount: BigNumber }
    >;

    "PaymentReleased(address,uint256)"(
      to?: null,
      amount?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; amount: BigNumber }>;

    PaymentReleased(
      to?: null,
      amount?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; amount: BigNumber }>;
  };

  estimateGas: {
    payee(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    release(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    payee(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    release(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    released(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shares(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
