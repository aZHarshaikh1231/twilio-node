/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
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
 * Options to pass to create a PhoneNumberInstance
 *
 * @property { string } phoneNumberSid The SID of the Phone Number being added to the Service.
 */
export interface PhoneNumberListInstanceCreateOptions {
  "phoneNumberSid": string;
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
export interface PhoneNumberListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void;
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
export interface PhoneNumberListInstanceOptions {
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
export interface PhoneNumberListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface PhoneNumberContext {


  /**
   * Remove a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberContextSolution {
  "serviceSid"?: string;
  "sid"?: string;
}

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/PhoneNumbers/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<PhoneNumberInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new PhoneNumberInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

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

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  phone_number?: string | null;
  country_code?: string | null;
  capabilities?: Array<string> | null;
  url?: string | null;
}

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(protected _version: V1, payload: PhoneNumberPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.phoneNumber = payload.phone_number;
    this.countryCode = payload.country_code;
    this.capabilities = payload.capabilities;
    this.url = payload.url;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The phone number in E.164 format
   */
  phoneNumber?: string | null;
  /**
   * The 2-character ISO Country Code of the number
   */
  countryCode?: string | null;
  /**
   * An array of values that describe whether the number can receive calls or messages
   */
  capabilities?: Array<string> | null;
  /**
   * The absolute URL of the PhoneNumber resource
   */
  url?: string | null;

  private get _proxy(): PhoneNumberContext {
    this._context = this._context || new PhoneNumberContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a PhoneNumberInstance
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
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>
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
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      phoneNumber: this.phoneNumber, 
      countryCode: this.countryCode, 
      capabilities: this.capabilities, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface PhoneNumberListInstance {
  (sid: string): PhoneNumberContext;
  get(sid: string): PhoneNumberContext;


  /**
   * Create a PhoneNumberInstance
   *
   * @param { PhoneNumberListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  create(params: PhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  create(params: any, callback?: any): Promise<PhoneNumberInstance>



  /**
   * Streams PhoneNumberInstance records from the API.
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
  each(callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams PhoneNumberInstance records from the API.
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
   * @param { PhoneNumberListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: PhoneNumberListInstanceEachOptions, callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
  getPage(params?: any, callback?: any): Promise<PhoneNumberPage>;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PhoneNumberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: PhoneNumberListInstanceOptions, callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
  list(params?: any, callback?: any): Promise<PhoneNumberInstance[]>;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PhoneNumberListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: PhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
  page(params?: any, callback?: any): Promise<PhoneNumberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberSolution {
  serviceSid?: string;
}

interface PhoneNumberListInstanceImpl extends PhoneNumberListInstance {}
class PhoneNumberListInstanceImpl implements PhoneNumberListInstance {
  _version?: V1;
  _solution?: PhoneNumberSolution;
  _uri?: string;

}

export function PhoneNumberListInstance(version: V1, serviceSid: string): PhoneNumberListInstance {
  const instance = ((sid) => instance.get(sid)) as PhoneNumberListInstanceImpl;

  instance.get = function get(sid): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/PhoneNumbers`;

  instance.create = function create(params: any, callback?: any): Promise<PhoneNumberInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["phoneNumberSid"] === null || params["phoneNumberSid"] === undefined) {
      throw new Error('Required parameter "params[\'phoneNumberSid\']" missing.');
    }

    let data: any = {};

    
        
    data["PhoneNumberSid"] = params["phoneNumberSid"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new PhoneNumberInstance(operationVersion, payload, this._solution.serviceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<PhoneNumberPage> {
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
    
    operationPromise = operationPromise.then(payload => new PhoneNumberPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<PhoneNumberPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new PhoneNumberPage(this._version, payload, this._solution));
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


export class PhoneNumberPage extends Page<V1, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
/**
* Initialize the PhoneNumberPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: PhoneNumberSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of PhoneNumberInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: PhoneNumberPayload): PhoneNumberInstance {
    return new PhoneNumberInstance(
    this._version,
    payload,
        this._solution.serviceSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

