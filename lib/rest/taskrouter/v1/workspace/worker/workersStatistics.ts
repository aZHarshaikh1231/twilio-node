/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");




/**
 * Options to pass to fetch a WorkersStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskQueueSid] The SID of the TaskQueue for which to fetch Worker statistics.
 * @property { string } [taskQueueName] The &#x60;friendly_name&#x60; of the TaskQueue for which to fetch Worker statistics.
 * @property { string } [friendlyName] Only include Workers with &#x60;friendly_name&#x60; values that match this parameter.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;.
 */
export interface WorkersStatisticsContextFetchOptions {
  "minutes"?: number;
  "startDate"?: Date;
  "endDate"?: Date;
  "taskQueueSid"?: string;
  "taskQueueName"?: string;
  "friendlyName"?: string;
  "taskChannel"?: string;
}

export interface WorkersStatisticsContext {


  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersStatisticsInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param { WorkersStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersStatisticsInstance
   */
  fetch(params: WorkersStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkersStatisticsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkersStatisticsContextSolution {
  "workspaceSid"?: string;
}

export class WorkersStatisticsContextImpl implements WorkersStatisticsContext {
  protected _solution: WorkersStatisticsContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, workspaceSid: string) {
    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/Statistics`;
  }

  fetch(params?: any, callback?: any): Promise<WorkersStatisticsInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["minutes"] !== undefined)
    data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined)
    data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["endDate"] !== undefined)
    data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["taskQueueSid"] !== undefined)
    data["TaskQueueSid"] = params["taskQueueSid"];
    if (params["taskQueueName"] !== undefined)
    data["TaskQueueName"] = params["taskQueueName"];
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["taskChannel"] !== undefined)
    data["TaskChannel"] = params["taskChannel"];

    

    const headers: any = {};

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkersStatisticsInstance(operationVersion, payload, this._solution.workspaceSid));
    

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

interface WorkersStatisticsPayload extends WorkersStatisticsResource{
}

interface WorkersStatisticsResource {
  realtime?: any | null;
  cumulative?: any | null;
  account_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkersStatisticsInstance {
  protected _solution: WorkersStatisticsContextSolution;
  protected _context?: WorkersStatisticsContext;

  constructor(protected _version: V1, payload: WorkersStatisticsPayload, workspaceSid?: string) {
    this.realtime = payload.realtime;
    this.cumulative = payload.cumulative;
    this.accountSid = payload.account_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid: workspaceSid || this.workspaceSid };
  }

  /**
   * An object that contains the real-time statistics for the Worker
   */
  realtime?: any | null;
  /**
   * An object that contains the cumulative statistics for the Worker
   */
  cumulative?: any | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Workspace that contains the Worker
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Worker statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkersStatisticsContext {
    this._context = this._context || new WorkersStatisticsContextImpl(this._version, this._solution.workspaceSid);
    return this._context;
  }

  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersStatisticsInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param { WorkersStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersStatisticsInstance
   */
  fetch(params: WorkersStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkersStatisticsInstance>
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
      realtime: this.realtime, 
      cumulative: this.cumulative, 
      accountSid: this.accountSid, 
      workspaceSid: this.workspaceSid, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface WorkersStatisticsListInstance {
  (): WorkersStatisticsContext;
  get(): WorkersStatisticsContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface Solution {
  workspaceSid?: string;
}

interface WorkersStatisticsListInstanceImpl extends WorkersStatisticsListInstance {}
class WorkersStatisticsListInstanceImpl implements WorkersStatisticsListInstance {
  _version?: V1;
  _solution?: Solution;
  _uri?: string;

}

export function WorkersStatisticsListInstance(version: V1, workspaceSid: string): WorkersStatisticsListInstance {
  const instance = (() => instance.get()) as WorkersStatisticsListInstanceImpl;

  instance.get = function get(): WorkersStatisticsContext {
    return new WorkersStatisticsContextImpl(version, workspaceSid);
  }

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workers/Statistics`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



