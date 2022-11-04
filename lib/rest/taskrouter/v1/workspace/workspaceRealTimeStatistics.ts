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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");




/**
 * Options to pass to fetch a WorkspaceRealTimeStatisticsInstance
 *
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;.
 */
export interface WorkspaceRealTimeStatisticsContextFetchOptions {
  "taskChannel"?: string;
}

export interface WorkspaceRealTimeStatisticsContext {


  /**
   * Fetch a WorkspaceRealTimeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkspaceRealTimeStatisticsInstance
   *
   * @param { WorkspaceRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
   */
  fetch(params: WorkspaceRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkspaceRealTimeStatisticsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceRealTimeStatisticsContextSolution {
  "workspaceSid"?: string;
}

export class WorkspaceRealTimeStatisticsContextImpl implements WorkspaceRealTimeStatisticsContext {
  protected _solution: WorkspaceRealTimeStatisticsContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, workspaceSid: string) {
    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/RealTimeStatistics`;
  }

  fetch(params?: any, callback?: any): Promise<WorkspaceRealTimeStatisticsInstance> {
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
    
    operationPromise = operationPromise.then(payload => new WorkspaceRealTimeStatisticsInstance(operationVersion, payload, this._solution.workspaceSid));
    

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

interface WorkspaceRealTimeStatisticsPayload extends WorkspaceRealTimeStatisticsResource{
}

interface WorkspaceRealTimeStatisticsResource {
  account_sid?: string | null;
  activity_statistics?: Array<any> | null;
  longest_task_waiting_age?: number | null;
  longest_task_waiting_sid?: string | null;
  tasks_by_priority?: any | null;
  tasks_by_status?: any | null;
  total_tasks?: number | null;
  total_workers?: number | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkspaceRealTimeStatisticsInstance {
  protected _solution: WorkspaceRealTimeStatisticsContextSolution;
  protected _context?: WorkspaceRealTimeStatisticsContext;

  constructor(protected _version: V1, payload: WorkspaceRealTimeStatisticsPayload, workspaceSid?: string) {
    this.accountSid = payload.account_sid;
    this.activityStatistics = payload.activity_statistics;
    this.longestTaskWaitingAge = deserialize.integer(payload.longest_task_waiting_age);
    this.longestTaskWaitingSid = payload.longest_task_waiting_sid;
    this.tasksByPriority = payload.tasks_by_priority;
    this.tasksByStatus = payload.tasks_by_status;
    this.totalTasks = deserialize.integer(payload.total_tasks);
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
   * The age of the longest waiting Task
   */
  longestTaskWaitingAge?: number | null;
  /**
   * The SID of the longest waiting Task
   */
  longestTaskWaitingSid?: string | null;
  /**
   * The number of Tasks by priority
   */
  tasksByPriority?: any | null;
  /**
   * The number of Tasks by their current status
   */
  tasksByStatus?: any | null;
  /**
   * The total number of Tasks
   */
  totalTasks?: number | null;
  /**
   * The total number of Workers in the Workspace
   */
  totalWorkers?: number | null;
  /**
   * The SID of the Workspace
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workspace statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkspaceRealTimeStatisticsContext {
    this._context = this._context || new WorkspaceRealTimeStatisticsContextImpl(this._version, this._solution.workspaceSid);
    return this._context;
  }

  /**
   * Fetch a WorkspaceRealTimeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkspaceRealTimeStatisticsInstance
   *
   * @param { WorkspaceRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
   */
  fetch(params: WorkspaceRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkspaceRealTimeStatisticsInstance>
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
      longestTaskWaitingAge: this.longestTaskWaitingAge, 
      longestTaskWaitingSid: this.longestTaskWaitingSid, 
      tasksByPriority: this.tasksByPriority, 
      tasksByStatus: this.tasksByStatus, 
      totalTasks: this.totalTasks, 
      totalWorkers: this.totalWorkers, 
      workspaceSid: this.workspaceSid, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface WorkspaceRealTimeStatisticsListInstance {
  (): WorkspaceRealTimeStatisticsContext;
  get(): WorkspaceRealTimeStatisticsContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceRealTimeStatisticsSolution {
  workspaceSid?: string;
}

interface WorkspaceRealTimeStatisticsListInstanceImpl extends WorkspaceRealTimeStatisticsListInstance {}
class WorkspaceRealTimeStatisticsListInstanceImpl implements WorkspaceRealTimeStatisticsListInstance {
  _version?: V1;
  _solution?: WorkspaceRealTimeStatisticsSolution;
  _uri?: string;

}

export function WorkspaceRealTimeStatisticsListInstance(version: V1, workspaceSid: string): WorkspaceRealTimeStatisticsListInstance {
  const instance = (() => instance.get()) as WorkspaceRealTimeStatisticsListInstanceImpl;

  instance.get = function get(): WorkspaceRealTimeStatisticsContext {
    return new WorkspaceRealTimeStatisticsContextImpl(version, workspaceSid);
  }

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/RealTimeStatistics`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



