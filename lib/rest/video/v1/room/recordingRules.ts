/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
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


export class VideoV1RoomRoomRecordingRuleRules {
  "type"?: string;
  "all"?: boolean;
  "publisher"?: string;
  "track"?: string;
  "kind"?: string;
}



/**
 * Options to pass to update a RecordingRulesInstance
 *
 * @property { any } [rules] A JSON-encoded array of recording rules.
 */
export interface RecordingRulesListInstanceUpdateOptions {
  "rules"?: any;
}

export interface RecordingRulesListInstance {


  /**
   * Fetch a RecordingRulesInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingRulesInstance
   */
  fetch(callback?: (error: Error | null, item?: RecordingRulesInstance) => any): Promise<RecordingRulesInstance>


  /**
   * Update a RecordingRulesInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingRulesInstance
   */
  update(callback?: (error: Error | null, item?: RecordingRulesInstance) => any): Promise<RecordingRulesInstance>;
  /**
   * Update a RecordingRulesInstance
   *
   * @param { RecordingRulesListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingRulesInstance
   */
  update(params: RecordingRulesListInstanceUpdateOptions, callback?: (error: Error | null, item?: RecordingRulesInstance) => any): Promise<RecordingRulesInstance>;
  update(params?: any, callback?: any): Promise<RecordingRulesInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingRulesSolution {
  roomSid?: string;
}

interface RecordingRulesListInstanceImpl extends RecordingRulesListInstance {}
class RecordingRulesListInstanceImpl implements RecordingRulesListInstance {
  _version?: V1;
  _solution?: RecordingRulesSolution;
  _uri?: string;

}

export function RecordingRulesListInstance(version: V1, roomSid: string): RecordingRulesListInstance {
  const instance = {} as RecordingRulesListInstanceImpl;

  instance._version = version;
  instance._solution = { roomSid };
  instance._uri = `/Rooms/${roomSid}/RecordingRules`;

  instance.fetch = function fetch(callback?: any): Promise<RecordingRulesInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new RecordingRulesInstance(operationVersion, payload, this._solution.roomSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<RecordingRulesInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["rules"] !== undefined)
    data["Rules"] = serialize.object(params["rules"]);


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new RecordingRulesInstance(operationVersion, payload, this._solution.roomSid));
    

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

interface RecordingRulesPayload extends RecordingRulesResource{
}

interface RecordingRulesResource {
  room_sid?: string | null;
  rules?: Array<VideoV1RoomRoomRecordingRuleRules> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class RecordingRulesInstance {

  constructor(protected _version: V1, payload: RecordingRulesPayload, roomSid?: string) {
    this.roomSid = payload.room_sid;
    this.rules = payload.rules;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

  }

  /**
   * The SID of the Room resource for the Recording Rules
   */
  roomSid?: string | null;
  /**
   * A collection of recording Rules that describe how to include or exclude matching tracks for recording
   */
  rules?: Array<VideoV1RoomRoomRecordingRuleRules> | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      roomSid: this.roomSid, 
      rules: this.rules, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


