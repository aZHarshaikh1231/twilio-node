/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



type SummaryCallState = 'ringing'|'completed'|'busy'|'fail'|'noanswer'|'canceled'|'answered'|'undialed';

type SummaryCallType = 'carrier'|'sip'|'trunking'|'client';

type SummaryProcessingState = 'complete'|'partial';


/**
 * Options to pass to fetch a CallSummaryInstance
 *
 * @property { SummaryProcessingState } [processingState] 
 */
export interface CallSummaryContextFetchOptions {
  "processingState"?: SummaryProcessingState;
}

export interface CallSummaryContext {


  /**
   * Fetch a CallSummaryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CallSummaryInstance
   */
  fetch(callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  /**
   * Fetch a CallSummaryInstance
   *
   * @param { CallSummaryContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CallSummaryInstance
   */
  fetch(params: CallSummaryContextFetchOptions, callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  fetch(params?: any, callback?: any): Promise<CallSummaryInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CallSummaryContextSolution {
  "callSid"?: string;
}

export class CallSummaryContextImpl implements CallSummaryContext {
  protected _solution: CallSummaryContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, callSid: string) {
    this._solution = { callSid };
    this._uri = `/Voice/${callSid}/Summary`;
  }

  fetch(params?: any, callback?: any): Promise<CallSummaryInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["processingState"] !== undefined)
    data["ProcessingState"] = params["processingState"];

    

    const headers: any = {};

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new CallSummaryInstance(operationVersion, payload, this._solution.callSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface CallSummaryPayload extends CallSummaryResource{
}

interface CallSummaryResource {
  account_sid?: string | null;
  call_sid?: string | null;
  call_type?: SummaryCallType;
  call_state?: SummaryCallState;
  processing_state?: SummaryProcessingState;
  created_time?: Date | null;
  start_time?: Date | null;
  end_time?: Date | null;
  duration?: number | null;
  connect_duration?: number | null;
  from?: any | null;
  to?: any | null;
  carrier_edge?: any | null;
  client_edge?: any | null;
  sdk_edge?: any | null;
  sip_edge?: any | null;
  tags?: Array<string> | null;
  url?: string | null;
  attributes?: any | null;
  properties?: any | null;
  trust?: any | null;
  annotation?: any | null;
}

export class CallSummaryInstance {
  protected _solution: CallSummaryContextSolution;
  protected _context?: CallSummaryContext;

  constructor(protected _version: V1, payload: CallSummaryPayload, callSid?: string) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.callType = payload.call_type;
    this.callState = payload.call_state;
    this.processingState = payload.processing_state;
    this.createdTime = deserialize.iso8601DateTime(payload.created_time);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.connectDuration = deserialize.integer(payload.connect_duration);
    this.from = payload.from;
    this.to = payload.to;
    this.carrierEdge = payload.carrier_edge;
    this.clientEdge = payload.client_edge;
    this.sdkEdge = payload.sdk_edge;
    this.sipEdge = payload.sip_edge;
    this.tags = payload.tags;
    this.url = payload.url;
    this.attributes = payload.attributes;
    this.properties = payload.properties;
    this.trust = payload.trust;
    this.annotation = payload.annotation;

    this._solution = { callSid: callSid || this.callSid };
  }

  accountSid?: string | null;
  callSid?: string | null;
  callType?: SummaryCallType;
  callState?: SummaryCallState;
  processingState?: SummaryProcessingState;
  createdTime?: Date | null;
  startTime?: Date | null;
  endTime?: Date | null;
  duration?: number | null;
  connectDuration?: number | null;
  from?: any | null;
  to?: any | null;
  carrierEdge?: any | null;
  clientEdge?: any | null;
  sdkEdge?: any | null;
  sipEdge?: any | null;
  tags?: Array<string> | null;
  url?: string | null;
  attributes?: any | null;
  properties?: any | null;
  trust?: any | null;
  annotation?: any | null;

  private get _proxy(): CallSummaryContext {
    this._context = this._context || new CallSummaryContextImpl(this._version, this._solution.callSid);
    return this._context;
  }

  /**
   * Fetch a CallSummaryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CallSummaryInstance
   */
  fetch(callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  /**
   * Fetch a CallSummaryInstance
   *
   * @param { CallSummaryContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CallSummaryInstance
   */
  fetch(params: CallSummaryContextFetchOptions, callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  fetch(params?: any, callback?: any): Promise<CallSummaryInstance>
     {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      callSid: this.callSid, 
      callType: this.callType, 
      callState: this.callState, 
      processingState: this.processingState, 
      createdTime: this.createdTime, 
      startTime: this.startTime, 
      endTime: this.endTime, 
      duration: this.duration, 
      connectDuration: this.connectDuration, 
      from: this.from, 
      to: this.to, 
      carrierEdge: this.carrierEdge, 
      clientEdge: this.clientEdge, 
      sdkEdge: this.sdkEdge, 
      sipEdge: this.sipEdge, 
      tags: this.tags, 
      url: this.url, 
      attributes: this.attributes, 
      properties: this.properties, 
      trust: this.trust, 
      annotation: this.annotation
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface CallSummaryListInstance {
  (): CallSummaryContext;
  get(): CallSummaryContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CallSummarySolution {
  callSid?: string;
}

interface CallSummaryListInstanceImpl extends CallSummaryListInstance {}
class CallSummaryListInstanceImpl implements CallSummaryListInstance {
  _version?: V1;
  _solution?: CallSummarySolution;
  _uri?: string;

}

export function CallSummaryListInstance(version: V1, callSid: string): CallSummaryListInstance {
  const instance = (() => instance.get()) as CallSummaryListInstanceImpl;

  instance.get = function get(): CallSummaryContext {
    return new CallSummaryContextImpl(version, callSid);
  }

  instance._version = version;
  instance._solution = { callSid };
  instance._uri = `/Voice/${callSid}/Summary`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



