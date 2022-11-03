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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { WorkflowCumulativeStatisticsListInstance } from "./workflow/workflowCumulativeStatistics";
import { WorkflowRealTimeStatisticsListInstance } from "./workflow/workflowRealTimeStatistics";
import { WorkflowStatisticsListInstance } from "./workflow/workflowStatistics";




/**
 * Options to pass to update a WorkflowInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Workflow resource. For example, &#x60;Inbound Call Workflow&#x60; or &#x60;2014 Outbound Campaign&#x60;.
 * @property { string } [assignmentCallbackUrl] The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details.
 * @property { string } [fallbackAssignmentCallbackUrl] The URL that we should call when a call to the &#x60;assignment_callback_url&#x60; fails.
 * @property { string } [configuration] A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
 * @property { number } [taskReservationTimeout] How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to &#x60;86,400&#x60; (24 hours) and the default is &#x60;120&#x60;.
 * @property { string } [reEvaluateTasks] Whether or not to re-evaluate Tasks. The default is &#x60;false&#x60;, which means Tasks in the Workflow will not be processed through the assignment loop again.
 */
export interface WorkflowContextUpdateOptions {
  "friendlyName"?: string;
  "assignmentCallbackUrl"?: string;
  "fallbackAssignmentCallbackUrl"?: string;
  "configuration"?: string;
  "taskReservationTimeout"?: number;
  "reEvaluateTasks"?: string;
}

/**
 * Options to pass to create a WorkflowInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Workflow resource. For example, &#x60;Inbound Call Workflow&#x60; or &#x60;2014 Outbound Campaign&#x60;.
 * @property { string } configuration A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
 * @property { string } [assignmentCallbackUrl] The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details.
 * @property { string } [fallbackAssignmentCallbackUrl] The URL that we should call when a call to the &#x60;assignment_callback_url&#x60; fails.
 * @property { number } [taskReservationTimeout] How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to &#x60;86,400&#x60; (24 hours) and the default is &#x60;120&#x60;.
 */
export interface WorkflowListInstanceCreateOptions {
  "friendlyName": string;
  "configuration": string;
  "assignmentCallbackUrl"?: string;
  "fallbackAssignmentCallbackUrl"?: string;
  "taskReservationTimeout"?: number;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Workflow resources to read.
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
export interface WorkflowListInstanceEachOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Workflow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkflowListInstanceOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Workflow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface WorkflowListInstancePageOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface WorkflowContext {

  cumulativeStatistics: WorkflowCumulativeStatisticsListInstance;
  realTimeStatistics: WorkflowRealTimeStatisticsListInstance;
  statistics: WorkflowStatisticsListInstance;

  /**
   * Remove a WorkflowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a WorkflowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>


  /**
   * Update a WorkflowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowInstance
   */
  update(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
  /**
   * Update a WorkflowInstance
   *
   * @param { WorkflowContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowInstance
   */
  update(params: WorkflowContextUpdateOptions, callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
  update(params?: any, callback?: any): Promise<WorkflowInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkflowContextSolution {
  "workspaceSid"?: string;
  "sid"?: string;
}

export class WorkflowContextImpl implements WorkflowContext {
  protected _solution: WorkflowContextSolution;
  protected _uri: string;

  protected _cumulativeStatistics?: WorkflowCumulativeStatisticsListInstance;
  protected _realTimeStatistics?: WorkflowRealTimeStatisticsListInstance;
  protected _statistics?: WorkflowStatisticsListInstance;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Workflows/${sid}`;
  }

  get cumulativeStatistics(): WorkflowCumulativeStatisticsListInstance {
    this._cumulativeStatistics = this._cumulativeStatistics || WorkflowCumulativeStatisticsListInstance(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._cumulativeStatistics;
  }

  get realTimeStatistics(): WorkflowRealTimeStatisticsListInstance {
    this._realTimeStatistics = this._realTimeStatistics || WorkflowRealTimeStatisticsListInstance(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._realTimeStatistics;
  }

  get statistics(): WorkflowStatisticsListInstance {
    this._statistics = this._statistics || WorkflowStatisticsListInstance(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._statistics;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<WorkflowInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new WorkflowInstance(operationVersion, payload, this._solution.workspaceSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<WorkflowInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["assignmentCallbackUrl"] !== undefined)
    data["AssignmentCallbackUrl"] = params["assignmentCallbackUrl"];
    if (params["fallbackAssignmentCallbackUrl"] !== undefined)
    data["FallbackAssignmentCallbackUrl"] = params["fallbackAssignmentCallbackUrl"];
    if (params["configuration"] !== undefined)
    data["Configuration"] = params["configuration"];
    if (params["taskReservationTimeout"] !== undefined)
    data["TaskReservationTimeout"] = params["taskReservationTimeout"];
    if (params["reEvaluateTasks"] !== undefined)
    data["ReEvaluateTasks"] = params["reEvaluateTasks"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkflowInstance(operationVersion, payload, this._solution.workspaceSid, this._solution.sid));
    

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

interface WorkflowPayload extends WorkflowResource, Page.TwilioResponsePayload {
}

interface WorkflowResource {
  account_sid?: string | null;
  assignment_callback_url?: string | null;
  configuration?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  document_content_type?: string | null;
  fallback_assignment_callback_url?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
  task_reservation_timeout?: number | null;
  workspace_sid?: string | null;
  url?: string | null;
  links?: object | null;
}

export class WorkflowInstance {
  protected _solution: WorkflowContextSolution;
  protected _context?: WorkflowContext;

  constructor(protected _version: V1, payload: WorkflowPayload, workspaceSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.assignmentCallbackUrl = payload.assignment_callback_url;
    this.configuration = payload.configuration;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.documentContentType = payload.document_content_type;
    this.fallbackAssignmentCallbackUrl = payload.fallback_assignment_callback_url;
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.taskReservationTimeout = deserialize.integer(payload.task_reservation_timeout);
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { workspaceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The URL that we call when a task managed by the Workflow is assigned to a Worker
   */
  assignmentCallbackUrl?: string | null;
  /**
   * A JSON string that contains the Workflow\'s configuration
   */
  configuration?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The MIME type of the document
   */
  documentContentType?: string | null;
  /**
   * The URL that we call when a call to the `assignment_callback_url` fails
   */
  fallbackAssignmentCallbackUrl?: string | null;
  /**
   * The string that you assigned to describe the Workflow resource
   */
  friendlyName?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker
   */
  taskReservationTimeout?: number | null;
  /**
   * The SID of the Workspace that contains the Workflow
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workflow resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): WorkflowContext {
    this._context = this._context || new WorkflowContextImpl(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a WorkflowInstance
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
   * Fetch a WorkflowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WorkflowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowInstance
   */
  update(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
  /**
   * Update a WorkflowInstance
   *
   * @param { WorkflowContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowInstance
   */
  update(params: WorkflowContextUpdateOptions, callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
  update(params?: any, callback?: any): Promise<WorkflowInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the cumulativeStatistics.
   */
  cumulativeStatistics(): WorkflowCumulativeStatisticsListInstance {
    return this._proxy.cumulativeStatistics;
  }

  /**
   * Access the realTimeStatistics.
   */
  realTimeStatistics(): WorkflowRealTimeStatisticsListInstance {
    return this._proxy.realTimeStatistics;
  }

  /**
   * Access the statistics.
   */
  statistics(): WorkflowStatisticsListInstance {
    return this._proxy.statistics;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      assignmentCallbackUrl: this.assignmentCallbackUrl, 
      configuration: this.configuration, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      documentContentType: this.documentContentType, 
      fallbackAssignmentCallbackUrl: this.fallbackAssignmentCallbackUrl, 
      friendlyName: this.friendlyName, 
      sid: this.sid, 
      taskReservationTimeout: this.taskReservationTimeout, 
      workspaceSid: this.workspaceSid, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface WorkflowListInstance {
  (sid: string): WorkflowContext;
  get(sid: string): WorkflowContext;


  /**
   * Create a WorkflowInstance
   *
   * @param { WorkflowListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowInstance
   */
  create(params: WorkflowListInstanceCreateOptions, callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
  create(params: any, callback?: any): Promise<WorkflowInstance>



  /**
   * Streams WorkflowInstance records from the API.
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
  each(callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams WorkflowInstance records from the API.
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
   * @param { WorkflowListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: WorkflowListInstanceEachOptions, callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of WorkflowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
  /**
   * Retrieve a single target page of WorkflowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
  getPage(params?: any, callback?: any): Promise<WorkflowPage>;
  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: WorkflowInstance[]) => any): Promise<WorkflowInstance[]>;
  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkflowListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: WorkflowListInstanceOptions, callback?: (error: Error | null, items: WorkflowInstance[]) => any): Promise<WorkflowInstance[]>;
  list(params?: any, callback?: any): Promise<WorkflowInstance[]>;
  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkflowListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: WorkflowListInstancePageOptions, callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
  page(params?: any, callback?: any): Promise<WorkflowPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkflowSolution {
  workspaceSid?: string;
}

interface WorkflowListInstanceImpl extends WorkflowListInstance {}
class WorkflowListInstanceImpl implements WorkflowListInstance {
  _version?: V1;
  _solution?: WorkflowSolution;
  _uri?: string;

}

export function WorkflowListInstance(version: V1, workspaceSid: string): WorkflowListInstance {
  const instance = ((sid) => instance.get(sid)) as WorkflowListInstanceImpl;

  instance.get = function get(sid): WorkflowContext {
    return new WorkflowContextImpl(version, workspaceSid, sid);
  }

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workflows`;

  instance.create = function create(params: any, callback?: any): Promise<WorkflowInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["friendlyName"] === null || params["friendlyName"] === undefined) {
      throw new Error('Required parameter "params[\'friendlyName\']" missing.');
    }

    if (params["configuration"] === null || params["configuration"] === undefined) {
      throw new Error('Required parameter "params[\'configuration\']" missing.');
    }

    let data: any = {};

    
        
    data["FriendlyName"] = params["friendlyName"];
    
    data["Configuration"] = params["configuration"];
    if (params["assignmentCallbackUrl"] !== undefined)
    data["AssignmentCallbackUrl"] = params["assignmentCallbackUrl"];
    if (params["fallbackAssignmentCallbackUrl"] !== undefined)
    data["FallbackAssignmentCallbackUrl"] = params["fallbackAssignmentCallbackUrl"];
    if (params["taskReservationTimeout"] !== undefined)
    data["TaskReservationTimeout"] = params["taskReservationTimeout"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkflowInstance(operationVersion, payload, this._solution.workspaceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<WorkflowPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkflowPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<WorkflowPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new WorkflowPage(this._version, payload, this._solution));
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


export class WorkflowPage extends Page<V1, WorkflowPayload, WorkflowResource, WorkflowInstance> {
/**
* Initialize the WorkflowPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: WorkflowSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of WorkflowInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: WorkflowPayload): WorkflowInstance {
    return new WorkflowInstance(
    this._version,
    payload,
        this._solution.workspaceSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

