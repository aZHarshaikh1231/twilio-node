/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");




/**
 * Options to pass to create a TrustProductsChannelEndpointAssignmentInstance
 *
 * @property { string } channelEndpointType The type of channel endpoint. eg: phone-number
 * @property { string } channelEndpointSid The SID of an channel endpoint
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceCreateOptions {
  "channelEndpointType": string;
  "channelEndpointSid": string;
}
/**
 * Options to pass to each
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceEachOptions {
  "channelEndpointSid"?: string;
  "channelEndpointSids"?: string;
  "pageSize"?: number;
  callback?: (item: TrustProductsChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceOptions {
  "channelEndpointSid"?: string;
  "channelEndpointSids"?: string;
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TrustProductsChannelEndpointAssignmentListInstancePageOptions {
  "channelEndpointSid"?: string;
  "channelEndpointSids"?: string;
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface TrustProductsChannelEndpointAssignmentContext {


  /**
   * Remove a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsChannelEndpointAssignmentInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsChannelEndpointAssignmentInstance) => any): Promise<TrustProductsChannelEndpointAssignmentInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsChannelEndpointAssignmentContextSolution {
  "trustProductSid"?: string;
  "sid"?: string;
}

export class TrustProductsChannelEndpointAssignmentContextImpl implements TrustProductsChannelEndpointAssignmentContext {
  protected _solution: TrustProductsChannelEndpointAssignmentContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, trustProductSid: string, sid: string) {
    this._solution = { trustProductSid, sid };
    this._uri = `/TrustProducts/${trustProductSid}/ChannelEndpointAssignments/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<TrustProductsChannelEndpointAssignmentInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new TrustProductsChannelEndpointAssignmentInstance(operationVersion, payload, this._solution.trustProductSid, this._solution.sid));
    

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

interface TrustProductsChannelEndpointAssignmentPayload extends TrustProductsChannelEndpointAssignmentResource, Page.TwilioResponsePayload {
}

interface TrustProductsChannelEndpointAssignmentResource {
  sid?: string | null;
  trust_product_sid?: string | null;
  account_sid?: string | null;
  channel_endpoint_type?: string | null;
  channel_endpoint_sid?: string | null;
  date_created?: Date | null;
  url?: string | null;
}

export class TrustProductsChannelEndpointAssignmentInstance {
  protected _solution: TrustProductsChannelEndpointAssignmentContextSolution;
  protected _context?: TrustProductsChannelEndpointAssignmentContext;

  constructor(protected _version: V1, payload: TrustProductsChannelEndpointAssignmentPayload, trustProductSid: string, sid?: string) {
    this.sid = payload.sid;
    this.trustProductSid = payload.trust_product_sid;
    this.accountSid = payload.account_sid;
    this.channelEndpointType = payload.channel_endpoint_type;
    this.channelEndpointSid = payload.channel_endpoint_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { trustProductSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The unique string that identifies the CustomerProfile resource.
   */
  trustProductSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The type of channel endpoint
   */
  channelEndpointType?: string | null;
  /**
   * The sid of an channel endpoint
   */
  channelEndpointSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The absolute URL of the Identity resource
   */
  url?: string | null;

  private get _proxy(): TrustProductsChannelEndpointAssignmentContext {
    this._context = this._context || new TrustProductsChannelEndpointAssignmentContextImpl(this._version, this._solution.trustProductSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsChannelEndpointAssignmentInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsChannelEndpointAssignmentInstance) => any): Promise<TrustProductsChannelEndpointAssignmentInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      trustProductSid: this.trustProductSid, 
      accountSid: this.accountSid, 
      channelEndpointType: this.channelEndpointType, 
      channelEndpointSid: this.channelEndpointSid, 
      dateCreated: this.dateCreated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface TrustProductsChannelEndpointAssignmentListInstance {
  (sid: string): TrustProductsChannelEndpointAssignmentContext;
  get(sid: string): TrustProductsChannelEndpointAssignmentContext;


  /**
   * Create a TrustProductsChannelEndpointAssignmentInstance
   *
   * @param { TrustProductsChannelEndpointAssignmentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsChannelEndpointAssignmentInstance
   */
  create(params: TrustProductsChannelEndpointAssignmentListInstanceCreateOptions, callback?: (error: Error | null, item?: TrustProductsChannelEndpointAssignmentInstance) => any): Promise<TrustProductsChannelEndpointAssignmentInstance>;
  create(params: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentInstance>



  /**
   * Streams TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: TrustProductsChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsChannelEndpointAssignmentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: TrustProductsChannelEndpointAssignmentListInstanceEachOptions, callback?: (item: TrustProductsChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
  /**
   * Retrieve a single target page of TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
  getPage(params?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentPage>;
  /**
   * Lists TrustProductsChannelEndpointAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentInstance[]) => any): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
  /**
   * Lists TrustProductsChannelEndpointAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsChannelEndpointAssignmentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: TrustProductsChannelEndpointAssignmentListInstanceOptions, callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentInstance[]) => any): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
  list(params?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
  /**
   * Retrieve a single page of TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
  /**
   * Retrieve a single page of TrustProductsChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsChannelEndpointAssignmentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: TrustProductsChannelEndpointAssignmentListInstancePageOptions, callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
  page(params?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsChannelEndpointAssignmentSolution {
  trustProductSid?: string;
}

interface TrustProductsChannelEndpointAssignmentListInstanceImpl extends TrustProductsChannelEndpointAssignmentListInstance {}
class TrustProductsChannelEndpointAssignmentListInstanceImpl implements TrustProductsChannelEndpointAssignmentListInstance {
  _version?: V1;
  _solution?: TrustProductsChannelEndpointAssignmentSolution;
  _uri?: string;

}

export function TrustProductsChannelEndpointAssignmentListInstance(version: V1, trustProductSid: string): TrustProductsChannelEndpointAssignmentListInstance {
  const instance = ((sid) => instance.get(sid)) as TrustProductsChannelEndpointAssignmentListInstanceImpl;

  instance.get = function get(sid): TrustProductsChannelEndpointAssignmentContext {
    return new TrustProductsChannelEndpointAssignmentContextImpl(version, trustProductSid, sid);
  }

  instance._version = version;
  instance._solution = { trustProductSid };
  instance._uri = `/TrustProducts/${trustProductSid}/ChannelEndpointAssignments`;

  instance.create = function create(params: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["channelEndpointType"] === null || params["channelEndpointType"] === undefined) {
      throw new Error('Required parameter "params[\'channelEndpointType\']" missing.');
    }

    if (params["channelEndpointSid"] === null || params["channelEndpointSid"] === undefined) {
      throw new Error('Required parameter "params[\'channelEndpointSid\']" missing.');
    }

    let data: any = {};

    
        
    data["ChannelEndpointType"] = params["channelEndpointType"];
    
    data["ChannelEndpointSid"] = params["channelEndpointSid"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsChannelEndpointAssignmentInstance(operationVersion, payload, this._solution.trustProductSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["channelEndpointSid"] !== undefined)
    data["ChannelEndpointSid"] = params["channelEndpointSid"];
    if (params["channelEndpointSids"] !== undefined)
    data["ChannelEndpointSids"] = params["channelEndpointSids"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsChannelEndpointAssignmentPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TrustProductsChannelEndpointAssignmentPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export class TrustProductsChannelEndpointAssignmentPage extends Page<V1, TrustProductsChannelEndpointAssignmentPayload, TrustProductsChannelEndpointAssignmentResource, TrustProductsChannelEndpointAssignmentInstance> {
/**
* Initialize the TrustProductsChannelEndpointAssignmentPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: TrustProductsChannelEndpointAssignmentSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of TrustProductsChannelEndpointAssignmentInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: TrustProductsChannelEndpointAssignmentPayload): TrustProductsChannelEndpointAssignmentInstance {
    return new TrustProductsChannelEndpointAssignmentInstance(
    this._version,
    payload,
        this._solution.trustProductSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

