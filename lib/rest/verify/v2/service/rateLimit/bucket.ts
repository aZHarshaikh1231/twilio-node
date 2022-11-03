/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");




/**
 * Options to pass to update a BucketInstance
 *
 * @property { number } [max] Maximum number of requests permitted in during the interval.
 * @property { number } [interval] Number of seconds that the rate limit will be enforced over.
 */
export interface BucketContextUpdateOptions {
  "max"?: number;
  "interval"?: number;
}

/**
 * Options to pass to create a BucketInstance
 *
 * @property { number } max Maximum number of requests permitted in during the interval.
 * @property { number } interval Number of seconds that the rate limit will be enforced over.
 */
export interface BucketListInstanceCreateOptions {
  "max": number;
  "interval": number;
}
/**
 * Options to pass to each
 *
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
export interface BucketListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: BucketInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BucketListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BucketListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface BucketContext {


  /**
   * Remove a BucketInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a BucketInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BucketInstance
   */
  fetch(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>


  /**
   * Update a BucketInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BucketInstance
   */
  update(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
  /**
   * Update a BucketInstance
   *
   * @param { BucketContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BucketInstance
   */
  update(params: BucketContextUpdateOptions, callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
  update(params?: any, callback?: any): Promise<BucketInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BucketContextSolution {
  "serviceSid"?: string;
  "rateLimitSid"?: string;
  "sid"?: string;
}

export class BucketContextImpl implements BucketContext {
  protected _solution: BucketContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, serviceSid: string, rateLimitSid: string, sid: string) {
    this._solution = { serviceSid, rateLimitSid, sid };
    this._uri = `/Services/${serviceSid}/RateLimits/${rateLimitSid}/Buckets/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<BucketInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new BucketInstance(operationVersion, payload, this._solution.serviceSid, this._solution.rateLimitSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<BucketInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["max"] !== undefined)
    data["Max"] = params["max"];
    if (params["interval"] !== undefined)
    data["Interval"] = params["interval"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new BucketInstance(operationVersion, payload, this._solution.serviceSid, this._solution.rateLimitSid, this._solution.sid));
    

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

interface BucketPayload extends BucketResource, Page.TwilioResponsePayload {
}

interface BucketResource {
  sid?: string | null;
  rate_limit_sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  max?: number | null;
  interval?: number | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class BucketInstance {
  protected _solution: BucketContextSolution;
  protected _context?: BucketContext;

  constructor(protected _version: V2, payload: BucketPayload, serviceSid: string, rateLimitSid: string, sid?: string) {
    this.sid = payload.sid;
    this.rateLimitSid = payload.rate_limit_sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.max = deserialize.integer(payload.max);
    this.interval = deserialize.integer(payload.interval);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, rateLimitSid, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Bucket.
   */
  sid?: string | null;
  /**
   * Rate Limit Sid.
   */
  rateLimitSid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * Max number of requests.
   */
  max?: number | null;
  /**
   * Number of seconds that the rate limit will be enforced over.
   */
  interval?: number | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  private get _proxy(): BucketContext {
    this._context = this._context || new BucketContextImpl(this._version, this._solution.serviceSid, this._solution.rateLimitSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a BucketInstance
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
   * Fetch a BucketInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BucketInstance
   */
  fetch(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a BucketInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BucketInstance
   */
  update(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
  /**
   * Update a BucketInstance
   *
   * @param { BucketContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BucketInstance
   */
  update(params: BucketContextUpdateOptions, callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
  update(params?: any, callback?: any): Promise<BucketInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      rateLimitSid: this.rateLimitSid, 
      serviceSid: this.serviceSid, 
      accountSid: this.accountSid, 
      max: this.max, 
      interval: this.interval, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface BucketListInstance {
  (sid: string): BucketContext;
  get(sid: string): BucketContext;


  /**
   * Create a BucketInstance
   *
   * @param { BucketListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BucketInstance
   */
  create(params: BucketListInstanceCreateOptions, callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
  create(params: any, callback?: any): Promise<BucketInstance>



  /**
   * Streams BucketInstance records from the API.
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
  each(callback?: (item: BucketInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BucketInstance records from the API.
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
   * @param { BucketListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: BucketListInstanceEachOptions, callback?: (item: BucketInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of BucketInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
  /**
   * Retrieve a single target page of BucketInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
  getPage(params?: any, callback?: any): Promise<BucketPage>;
  /**
   * Lists BucketInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BucketInstance[]) => any): Promise<BucketInstance[]>;
  /**
   * Lists BucketInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BucketListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: BucketListInstanceOptions, callback?: (error: Error | null, items: BucketInstance[]) => any): Promise<BucketInstance[]>;
  list(params?: any, callback?: any): Promise<BucketInstance[]>;
  /**
   * Retrieve a single page of BucketInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
  /**
   * Retrieve a single page of BucketInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BucketListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: BucketListInstancePageOptions, callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
  page(params?: any, callback?: any): Promise<BucketPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BucketSolution {
  serviceSid?: string;
  rateLimitSid?: string;
}

interface BucketListInstanceImpl extends BucketListInstance {}
class BucketListInstanceImpl implements BucketListInstance {
  _version?: V2;
  _solution?: BucketSolution;
  _uri?: string;

}

export function BucketListInstance(version: V2, serviceSid: string, rateLimitSid: string): BucketListInstance {
  const instance = ((sid) => instance.get(sid)) as BucketListInstanceImpl;

  instance.get = function get(sid): BucketContext {
    return new BucketContextImpl(version, serviceSid, rateLimitSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, rateLimitSid };
  instance._uri = `/Services/${serviceSid}/RateLimits/${rateLimitSid}/Buckets`;

  instance.create = function create(params: any, callback?: any): Promise<BucketInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["max"] === null || params["max"] === undefined) {
      throw new Error('Required parameter "params[\'max\']" missing.');
    }

    if (params["interval"] === null || params["interval"] === undefined) {
      throw new Error('Required parameter "params[\'interval\']" missing.');
    }

    let data: any = {};

    
        
    data["Max"] = params["max"];
    
    data["Interval"] = params["interval"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new BucketInstance(operationVersion, payload, this._solution.serviceSid, this._solution.rateLimitSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<BucketPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BucketPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<BucketPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new BucketPage(this._version, payload, this._solution));
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


export class BucketPage extends Page<V2, BucketPayload, BucketResource, BucketInstance> {
/**
* Initialize the BucketPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: BucketSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of BucketInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: BucketPayload): BucketInstance {
    return new BucketInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.rateLimitSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

