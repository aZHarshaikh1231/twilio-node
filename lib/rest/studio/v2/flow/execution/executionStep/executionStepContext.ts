/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V2 from "../../../../V2";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");




export interface ExecutionStepContextContext {


  /**
   * Fetch a ExecutionStepContextInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionStepContextInstance
   */
  fetch(callback?: (error: Error | null, item?: ExecutionStepContextInstance) => any): Promise<ExecutionStepContextInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionStepContextContextSolution {
  "flowSid"?: string;
  "executionSid"?: string;
  "stepSid"?: string;
}

export class ExecutionStepContextContextImpl implements ExecutionStepContextContext {
  protected _solution: ExecutionStepContextContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, flowSid: string, executionSid: string, stepSid: string) {
    this._solution = { flowSid, executionSid, stepSid };
    this._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps/${stepSid}/Context`;
  }

  fetch(callback?: any): Promise<ExecutionStepContextInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new ExecutionStepContextInstance(operationVersion, payload, this._solution.flowSid, this._solution.executionSid, this._solution.stepSid));
    

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

interface ExecutionStepContextPayload extends ExecutionStepContextResource{
}

interface ExecutionStepContextResource {
  account_sid?: string | null;
  context?: any | null;
  execution_sid?: string | null;
  flow_sid?: string | null;
  step_sid?: string | null;
  url?: string | null;
}

export class ExecutionStepContextInstance {
  protected _solution: ExecutionStepContextContextSolution;
  protected _context?: ExecutionStepContextContext;

  constructor(protected _version: V2, payload: ExecutionStepContextPayload, flowSid: string, executionSid: string, stepSid?: string) {
    this.accountSid = payload.account_sid;
    this.context = payload.context;
    this.executionSid = payload.execution_sid;
    this.flowSid = payload.flow_sid;
    this.stepSid = payload.step_sid;
    this.url = payload.url;

    this._solution = { flowSid, executionSid, stepSid: stepSid || this.stepSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The current state of the flow
   */
  context?: any | null;
  /**
   * The SID of the Execution
   */
  executionSid?: string | null;
  /**
   * The SID of the Flow
   */
  flowSid?: string | null;
  /**
   * Step SID
   */
  stepSid?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): ExecutionStepContextContext {
    this._context = this._context || new ExecutionStepContextContextImpl(this._version, this._solution.flowSid, this._solution.executionSid, this._solution.stepSid);
    return this._context;
  }

  /**
   * Fetch a ExecutionStepContextInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionStepContextInstance
   */
  fetch(callback?: (error: Error | null, item?: ExecutionStepContextInstance) => any): Promise<ExecutionStepContextInstance>
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
      accountSid: this.accountSid, 
      context: this.context, 
      executionSid: this.executionSid, 
      flowSid: this.flowSid, 
      stepSid: this.stepSid, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ExecutionStepContextListInstance {
  (): ExecutionStepContextContext;
  get(): ExecutionStepContextContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionStepContextSolution {
  flowSid?: string;
  executionSid?: string;
  stepSid?: string;
}

interface ExecutionStepContextListInstanceImpl extends ExecutionStepContextListInstance {}
class ExecutionStepContextListInstanceImpl implements ExecutionStepContextListInstance {
  _version?: V2;
  _solution?: ExecutionStepContextSolution;
  _uri?: string;

}

export function ExecutionStepContextListInstance(version: V2, flowSid: string, executionSid: string, stepSid: string): ExecutionStepContextListInstance {
  const instance = (() => instance.get()) as ExecutionStepContextListInstanceImpl;

  instance.get = function get(): ExecutionStepContextContext {
    return new ExecutionStepContextContextImpl(version, flowSid, executionSid, stepSid);
  }

  instance._version = version;
  instance._solution = { flowSid, executionSid, stepSid };
  instance._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps/${stepSid}/Context`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



