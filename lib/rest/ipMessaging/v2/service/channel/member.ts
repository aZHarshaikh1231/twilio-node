/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
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



type MemberWebhookEnabledType = 'true'|'false';


/**
 * Options to pass to remove a MemberInstance
 *
 * @property { MemberWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface MemberContextRemoveOptions {
  "xTwilioWebhookEnabled"?: MemberWebhookEnabledType;
}

/**
 * Options to pass to update a MemberInstance
 *
 * @property { MemberWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [roleSid] 
 * @property { number } [lastConsumedMessageIndex] 
 * @property { Date } [lastConsumptionTimestamp] 
 * @property { Date } [dateCreated] 
 * @property { Date } [dateUpdated] 
 * @property { string } [attributes] 
 */
export interface MemberContextUpdateOptions {
  "xTwilioWebhookEnabled"?: MemberWebhookEnabledType;
  "roleSid"?: string;
  "lastConsumedMessageIndex"?: number;
  "lastConsumptionTimestamp"?: Date;
  "dateCreated"?: Date;
  "dateUpdated"?: Date;
  "attributes"?: string;
}

/**
 * Options to pass to create a MemberInstance
 *
 * @property { string } identity 
 * @property { MemberWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [roleSid] 
 * @property { number } [lastConsumedMessageIndex] 
 * @property { Date } [lastConsumptionTimestamp] 
 * @property { Date } [dateCreated] 
 * @property { Date } [dateUpdated] 
 * @property { string } [attributes] 
 */
export interface MemberListInstanceCreateOptions {
  "identity": string;
  "xTwilioWebhookEnabled"?: MemberWebhookEnabledType;
  "roleSid"?: string;
  "lastConsumedMessageIndex"?: number;
  "lastConsumptionTimestamp"?: Date;
  "dateCreated"?: Date;
  "dateUpdated"?: Date;
  "attributes"?: string;
}
/**
 * Options to pass to each
 *
 * @property { Array<string> } [identity] 
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
export interface MemberListInstanceEachOptions {
  "identity"?: Array<string>;
  "pageSize"?: number;
  callback?: (item: MemberInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Array<string> } [identity] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MemberListInstanceOptions {
  "identity"?: Array<string>;
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Array<string> } [identity] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MemberListInstancePageOptions {
  "identity"?: Array<string>;
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface MemberContext {


  /**
   * Remove a MemberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  /**
   * Remove a MemberInstance
   *
   * @param { MemberContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  remove(params: MemberContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>


  /**
   * Fetch a MemberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  fetch(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>


  /**
   * Update a MemberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  update(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
  /**
   * Update a MemberInstance
   *
   * @param { MemberContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  update(params: MemberContextUpdateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
  update(params?: any, callback?: any): Promise<MemberInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MemberContextSolution {
  "serviceSid"?: string;
  "channelSid"?: string;
  "sid"?: string;
}

export class MemberContextImpl implements MemberContext {
  protected _solution: MemberContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, serviceSid: string, channelSid: string, sid: string) {
    this._solution = { serviceSid, channelSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${channelSid}/Members/${sid}`;
  }

  remove(params?: any, callback?: any): Promise<boolean> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
    

    const headers: any = {};
    if (params["xTwilioWebhookEnabled"] !== undefined) headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete", params: data, headers });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<MemberInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new MemberInstance(operationVersion, payload, this._solution.serviceSid, this._solution.channelSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<MemberInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["roleSid"] !== undefined)
    data["RoleSid"] = params["roleSid"];
    if (params["lastConsumedMessageIndex"] !== undefined)
    data["LastConsumedMessageIndex"] = params["lastConsumedMessageIndex"];
    if (params["lastConsumptionTimestamp"] !== undefined)
    data["LastConsumptionTimestamp"] = serialize.iso8601DateTime(params["lastConsumptionTimestamp"]);
    if (params["dateCreated"] !== undefined)
    data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
    data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["attributes"] !== undefined)
    data["Attributes"] = params["attributes"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"
    if (params["xTwilioWebhookEnabled"] !== undefined) headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new MemberInstance(operationVersion, payload, this._solution.serviceSid, this._solution.channelSid, this._solution.sid));
    

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

interface MemberPayload extends MemberResource, Page.TwilioResponsePayload {
}

interface MemberResource {
  sid?: string | null;
  account_sid?: string | null;
  channel_sid?: string | null;
  service_sid?: string | null;
  identity?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  role_sid?: string | null;
  last_consumed_message_index?: number | null;
  last_consumption_timestamp?: Date | null;
  url?: string | null;
  attributes?: string | null;
}

export class MemberInstance {
  protected _solution: MemberContextSolution;
  protected _context?: MemberContext;

  constructor(protected _version: V2, payload: MemberPayload, serviceSid: string, channelSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.channelSid = payload.channel_sid;
    this.serviceSid = payload.service_sid;
    this.identity = payload.identity;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.roleSid = payload.role_sid;
    this.lastConsumedMessageIndex = deserialize.integer(payload.last_consumed_message_index);
    this.lastConsumptionTimestamp = deserialize.iso8601DateTime(payload.last_consumption_timestamp);
    this.url = payload.url;
    this.attributes = payload.attributes;

    this._solution = { serviceSid, channelSid, sid: sid || this.sid };
  }

  sid?: string | null;
  accountSid?: string | null;
  channelSid?: string | null;
  serviceSid?: string | null;
  identity?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  roleSid?: string | null;
  lastConsumedMessageIndex?: number | null;
  lastConsumptionTimestamp?: Date | null;
  url?: string | null;
  attributes?: string | null;

  private get _proxy(): MemberContext {
    this._context = this._context || new MemberContextImpl(this._version, this._solution.serviceSid, this._solution.channelSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a MemberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  /**
   * Remove a MemberInstance
   *
   * @param { MemberContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  remove(params: MemberContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>
     {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a MemberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  fetch(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MemberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  update(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
  /**
   * Update a MemberInstance
   *
   * @param { MemberContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  update(params: MemberContextUpdateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
  update(params?: any, callback?: any): Promise<MemberInstance>
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
      accountSid: this.accountSid, 
      channelSid: this.channelSid, 
      serviceSid: this.serviceSid, 
      identity: this.identity, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      roleSid: this.roleSid, 
      lastConsumedMessageIndex: this.lastConsumedMessageIndex, 
      lastConsumptionTimestamp: this.lastConsumptionTimestamp, 
      url: this.url, 
      attributes: this.attributes
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface MemberListInstance {
  (sid: string): MemberContext;
  get(sid: string): MemberContext;


  /**
   * Create a MemberInstance
   *
   * @param { MemberListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MemberInstance
   */
  create(params: MemberListInstanceCreateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
  create(params: any, callback?: any): Promise<MemberInstance>



  /**
   * Streams MemberInstance records from the API.
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
  each(callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MemberInstance records from the API.
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
   * @param { MemberListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: MemberListInstanceEachOptions, callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
  getPage(params?: any, callback?: any): Promise<MemberPage>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MemberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: MemberListInstanceOptions, callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
  list(params?: any, callback?: any): Promise<MemberInstance[]>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MemberListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: MemberListInstancePageOptions, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
  page(params?: any, callback?: any): Promise<MemberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MemberSolution {
  serviceSid?: string;
  channelSid?: string;
}

interface MemberListInstanceImpl extends MemberListInstance {}
class MemberListInstanceImpl implements MemberListInstance {
  _version?: V2;
  _solution?: MemberSolution;
  _uri?: string;

}

export function MemberListInstance(version: V2, serviceSid: string, channelSid: string): MemberListInstance {
  const instance = ((sid) => instance.get(sid)) as MemberListInstanceImpl;

  instance.get = function get(sid): MemberContext {
    return new MemberContextImpl(version, serviceSid, channelSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, channelSid };
  instance._uri = `/Services/${serviceSid}/Channels/${channelSid}/Members`;

  instance.create = function create(params: any, callback?: any): Promise<MemberInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error('Required parameter "params[\'identity\']" missing.');
    }

    let data: any = {};

    
        
    data["Identity"] = params["identity"];
    if (params["roleSid"] !== undefined)
    data["RoleSid"] = params["roleSid"];
    if (params["lastConsumedMessageIndex"] !== undefined)
    data["LastConsumedMessageIndex"] = params["lastConsumedMessageIndex"];
    if (params["lastConsumptionTimestamp"] !== undefined)
    data["LastConsumptionTimestamp"] = serialize.iso8601DateTime(params["lastConsumptionTimestamp"]);
    if (params["dateCreated"] !== undefined)
    data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
    data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["attributes"] !== undefined)
    data["Attributes"] = params["attributes"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"
    if (params["xTwilioWebhookEnabled"] !== undefined) headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new MemberInstance(operationVersion, payload, this._solution.serviceSid, this._solution.channelSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<MemberPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["identity"] !== undefined)
    data["Identity"] = serialize.map(params["identity"], ((e) => e));
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new MemberPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<MemberPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new MemberPage(this._version, payload, this._solution));
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


export class MemberPage extends Page<V2, MemberPayload, MemberResource, MemberInstance> {
/**
* Initialize the MemberPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: MemberSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of MemberInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: MemberPayload): MemberInstance {
    return new MemberInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.channelSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

