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
 * Options to pass to fetch a WorkersRealTimeStatisticsInstance
 *
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;.
 */
export interface WorkersRealTimeStatisticsContextFetchOptions {
  "taskChannel"?: string;
}

export interface WorkersRealTimeStatisticsContext {


  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param { WorkersRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(params: WorkersRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkersRealTimeStatisticsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkersRealTimeStatisticsContextSolution {
  "workspaceSid"?: string;
}

export class WorkersRealTimeStatisticsContextImpl implements WorkersRealTimeStatisticsContext {
  protected _solution: WorkersRealTimeStatisticsContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, workspaceSid: string) {
    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/RealTimeStatistics`;
  }

  fetch(params?: any, callback?: any): Promise<WorkersRealTimeStatisticsInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["taskChannel"] !== undefined)
    data["TaskChannel"] = params["taskChannel"];

    

    const headers: any = {};

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkersRealTimeStatisticsInstance(operationVersion, payload, this._solution.workspaceSid));
    

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

interface WorkersRealTimeStatisticsPayload extends WorkersRealTimeStatisticsResource{
}

interface WorkersRealTimeStatisticsResource {
  account_sid?: string | null;
  activity_statistics?: Array<any> | null;
  total_workers?: number | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkersRealTimeStatisticsInstance {
  protected _solution: WorkersRealTimeStatisticsContextSolution;
  protected _context?: WorkersRealTimeStatisticsContext;

  constructor(protected _version: V1, payload: WorkersRealTimeStatisticsPayload, workspaceSid?: string) {
    this.accountSid = payload.account_sid;
    this.activityStatistics = payload.activity_statistics;
    this.totalWorkers = deserialize.integer(payload.total_workers);
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid: workspaceSid || this.workspaceSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The number of current Workers by Activity
   */
  activityStatistics?: Array<any> | null;
  /**
   * The total number of Workers
   */
  totalWorkers?: number | null;
  /**
   * The SID of the Workspace that contains the Workers
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workers statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkersRealTimeStatisticsContext {
    this._context = this._context || new WorkersRealTimeStatisticsContextImpl(this._version, this._solution.workspaceSid);
    return this._context;
  }

  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkersRealTimeStatisticsInstance
   *
   * @param { WorkersRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(params: WorkersRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkersRealTimeStatisticsInstance>
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
      activityStatistics: this.activityStatistics, 
      totalWorkers: this.totalWorkers, 
      workspaceSid: this.workspaceSid, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface WorkersRealTimeStatisticsListInstance {
  (): WorkersRealTimeStatisticsContext;
  get(): WorkersRealTimeStatisticsContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkersRealTimeStatisticsSolution {
  workspaceSid?: string;
}

interface WorkersRealTimeStatisticsListInstanceImpl extends WorkersRealTimeStatisticsListInstance {}
class WorkersRealTimeStatisticsListInstanceImpl implements WorkersRealTimeStatisticsListInstance {
  _version?: V1;
  _solution?: WorkersRealTimeStatisticsSolution;
  _uri?: string;

}

export function WorkersRealTimeStatisticsListInstance(version: V1, workspaceSid: string): WorkersRealTimeStatisticsListInstance {
  const instance = (() => instance.get()) as WorkersRealTimeStatisticsListInstanceImpl;

  instance.get = function get(): WorkersRealTimeStatisticsContext {
    return new WorkersRealTimeStatisticsContextImpl(version, workspaceSid);
  }

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workers/RealTimeStatistics`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



