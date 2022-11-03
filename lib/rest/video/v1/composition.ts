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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");



type CompositionFormat = 'mp4'|'webm';

type CompositionStatus = 'enqueued'|'processing'|'completed'|'deleted'|'failed';


/**
 * Options to pass to create a CompositionInstance
 *
 * @property { string } roomSid The SID of the Group Room with the media tracks to be used as composition sources.
 * @property { any } [videoLayout] An object that describes the video layout of the composition in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info. Please, be aware that either video_layout or audio_sources have to be provided to get a valid creation request
 * @property { Array<string> } [audioSources] An array of track names from the same group room to merge into the new composition. Can include zero or more track names. The new composition includes all audio sources specified in &#x60;audio_sources&#x60; except for those specified in &#x60;audio_sources_excluded&#x60;. The track names in this parameter can include an asterisk as a wild card character, which will match zero or more characters in a track name. For example, &#x60;student*&#x60; includes &#x60;student&#x60; as well as &#x60;studentTeam&#x60;. Please, be aware that either video_layout or audio_sources have to be provided to get a valid creation request
 * @property { Array<string> } [audioSourcesExcluded] An array of track names to exclude. The new composition includes all audio sources specified in &#x60;audio_sources&#x60; except for those specified in &#x60;audio_sources_excluded&#x60;. The track names in this parameter can include an asterisk as a wild card character, which will match zero or more characters in a track name. For example, &#x60;student*&#x60; excludes &#x60;student&#x60; as well as &#x60;studentTeam&#x60;. This parameter can also be empty.
 * @property { string } [resolution] A string that describes the columns (width) and rows (height) of the generated composed video in pixels. Defaults to &#x60;640x480&#x60;.  The string\\\&#39;s format is &#x60;{width}x{height}&#x60; where:   * 16 &lt;&#x3D; &#x60;{width}&#x60; &lt;&#x3D; 1280 * 16 &lt;&#x3D; &#x60;{height}&#x60; &lt;&#x3D; 1280 * &#x60;{width}&#x60; * &#x60;{height}&#x60; &lt;&#x3D; 921,600  Typical values are:   * HD &#x3D; &#x60;1280x720&#x60; * PAL &#x3D; &#x60;1024x576&#x60; * VGA &#x3D; &#x60;640x480&#x60; * CIF &#x3D; &#x60;320x240&#x60;  Note that the &#x60;resolution&#x60; imposes an aspect ratio to the resulting composition. When the original video tracks are constrained by the aspect ratio, they are scaled to fit. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { CompositionFormat } [format] 
 * @property { string } [statusCallback] The URL we should call using the &#x60;status_callback_method&#x60; to send status information to your application on every composition event. If not provided, status callback events will not be dispatched.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call &#x60;status_callback&#x60;. Can be: &#x60;POST&#x60; or &#x60;GET&#x60; and the default is &#x60;POST&#x60;.
 * @property { boolean } [trim] Whether to clip the intervals where there is no active media in the composition. The default is &#x60;true&#x60;. Compositions with &#x60;trim&#x60; enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 */
export interface CompositionListInstanceCreateOptions {
  "roomSid": string;
  "videoLayout"?: any;
  "audioSources"?: Array<string>;
  "audioSourcesExcluded"?: Array<string>;
  "resolution"?: string;
  "format"?: CompositionFormat;
  "statusCallback"?: string;
  "statusCallbackMethod"?: string;
  "trim"?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { CompositionStatus } [status] Read only Composition resources with this status. Can be: &#x60;enqueued&#x60;, &#x60;processing&#x60;, &#x60;completed&#x60;, &#x60;deleted&#x60;, or &#x60;failed&#x60;.
 * @property { Date } [dateCreatedAfter] Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only Composition resources created before this ISO 8601 date-time with time zone.
 * @property { string } [roomSid] Read only Composition resources with this Room SID.
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
export interface CompositionListInstanceEachOptions {
  "status"?: CompositionStatus;
  "dateCreatedAfter"?: Date;
  "dateCreatedBefore"?: Date;
  "roomSid"?: string;
  "pageSize"?: number;
  callback?: (item: CompositionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { CompositionStatus } [status] Read only Composition resources with this status. Can be: &#x60;enqueued&#x60;, &#x60;processing&#x60;, &#x60;completed&#x60;, &#x60;deleted&#x60;, or &#x60;failed&#x60;.
 * @property { Date } [dateCreatedAfter] Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only Composition resources created before this ISO 8601 date-time with time zone.
 * @property { string } [roomSid] Read only Composition resources with this Room SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CompositionListInstanceOptions {
  "status"?: CompositionStatus;
  "dateCreatedAfter"?: Date;
  "dateCreatedBefore"?: Date;
  "roomSid"?: string;
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { CompositionStatus } [status] Read only Composition resources with this status. Can be: &#x60;enqueued&#x60;, &#x60;processing&#x60;, &#x60;completed&#x60;, &#x60;deleted&#x60;, or &#x60;failed&#x60;.
 * @property { Date } [dateCreatedAfter] Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only Composition resources created before this ISO 8601 date-time with time zone.
 * @property { string } [roomSid] Read only Composition resources with this Room SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CompositionListInstancePageOptions {
  "status"?: CompositionStatus;
  "dateCreatedAfter"?: Date;
  "dateCreatedBefore"?: Date;
  "roomSid"?: string;
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface CompositionContext {


  /**
   * Remove a CompositionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a CompositionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionInstance
   */
  fetch(callback?: (error: Error | null, item?: CompositionInstance) => any): Promise<CompositionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CompositionContextSolution {
  "sid"?: string;
}

export class CompositionContextImpl implements CompositionContext {
  protected _solution: CompositionContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Compositions/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<CompositionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new CompositionInstance(operationVersion, payload, this._solution.sid));
    

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
export type CompositionStatusCallbackMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';

interface CompositionPayload extends CompositionResource, Page.TwilioResponsePayload {
}

interface CompositionResource {
  account_sid?: string | null;
  status?: CompositionStatus;
  date_created?: Date | null;
  date_completed?: Date | null;
  date_deleted?: Date | null;
  sid?: string | null;
  room_sid?: string | null;
  audio_sources?: Array<string> | null;
  audio_sources_excluded?: Array<string> | null;
  video_layout?: any | null;
  resolution?: string | null;
  trim?: boolean | null;
  format?: CompositionFormat;
  bitrate?: number | null;
  size?: number | null;
  duration?: number | null;
  media_external_location?: string | null;
  status_callback?: string | null;
  status_callback_method?: CompositionStatusCallbackMethod;
  url?: string | null;
  links?: object | null;
}

export class CompositionInstance {
  protected _solution: CompositionContextSolution;
  protected _context?: CompositionContext;

  constructor(protected _version: V1, payload: CompositionPayload, sid?: string) {
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateCompleted = deserialize.iso8601DateTime(payload.date_completed);
    this.dateDeleted = deserialize.iso8601DateTime(payload.date_deleted);
    this.sid = payload.sid;
    this.roomSid = payload.room_sid;
    this.audioSources = payload.audio_sources;
    this.audioSourcesExcluded = payload.audio_sources_excluded;
    this.videoLayout = payload.video_layout;
    this.resolution = payload.resolution;
    this.trim = payload.trim;
    this.format = payload.format;
    this.bitrate = deserialize.integer(payload.bitrate);
    this.size = payload.size;
    this.duration = deserialize.integer(payload.duration);
    this.mediaExternalLocation = payload.media_external_location;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  status?: CompositionStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * Date when the media processing task finished
   */
  dateCompleted?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the composition generated media was deleted
   */
  dateDeleted?: Date | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Group Room that generated the audio and video tracks used in the composition
   */
  roomSid?: string | null;
  /**
   * The array of track names to include in the composition
   */
  audioSources?: Array<string> | null;
  /**
   * The array of track names to exclude from the composition
   */
  audioSourcesExcluded?: Array<string> | null;
  /**
   * An object that describes the video layout of the composition
   */
  videoLayout?: any | null;
  /**
   * The dimensions of the video image in pixels expressed as columns (width) and rows (height)
   */
  resolution?: string | null;
  /**
   * Whether to remove intervals with no media
   */
  trim?: boolean | null;
  format?: CompositionFormat;
  /**
   * The average bit rate of the composition\'s media
   */
  bitrate?: number | null;
  /**
   * The size of the composed media file in bytes
   */
  size?: number | null;
  /**
   * The duration of the composition\'s media file in seconds
   */
  duration?: number | null;
  /**
   * The URL of the media file associated with the composition when stored externally
   */
  mediaExternalLocation?: string | null;
  /**
   * The URL called to send status information on every composition event.
   */
  statusCallback?: string | null;
  /**
   * The HTTP method used to call `status_callback`
   */
  statusCallbackMethod?: CompositionStatusCallbackMethod;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The URL of the media file associated with the composition
   */
  links?: object | null;

  private get _proxy(): CompositionContext {
    this._context = this._context || new CompositionContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CompositionInstance
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
   * Fetch a CompositionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionInstance
   */
  fetch(callback?: (error: Error | null, item?: CompositionInstance) => any): Promise<CompositionInstance>
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
      status: this.status, 
      dateCreated: this.dateCreated, 
      dateCompleted: this.dateCompleted, 
      dateDeleted: this.dateDeleted, 
      sid: this.sid, 
      roomSid: this.roomSid, 
      audioSources: this.audioSources, 
      audioSourcesExcluded: this.audioSourcesExcluded, 
      videoLayout: this.videoLayout, 
      resolution: this.resolution, 
      trim: this.trim, 
      format: this.format, 
      bitrate: this.bitrate, 
      size: this.size, 
      duration: this.duration, 
      mediaExternalLocation: this.mediaExternalLocation, 
      statusCallback: this.statusCallback, 
      statusCallbackMethod: this.statusCallbackMethod, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface CompositionListInstance {
  (sid: string): CompositionContext;
  get(sid: string): CompositionContext;


  /**
   * Create a CompositionInstance
   *
   * @param { CompositionListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionInstance
   */
  create(params: CompositionListInstanceCreateOptions, callback?: (error: Error | null, item?: CompositionInstance) => any): Promise<CompositionInstance>;
  create(params: any, callback?: any): Promise<CompositionInstance>



  /**
   * Streams CompositionInstance records from the API.
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
  each(callback?: (item: CompositionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CompositionInstance records from the API.
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
   * @param { CompositionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: CompositionListInstanceEachOptions, callback?: (item: CompositionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
  /**
   * Retrieve a single target page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
  getPage(params?: any, callback?: any): Promise<CompositionPage>;
  /**
   * Lists CompositionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CompositionInstance[]) => any): Promise<CompositionInstance[]>;
  /**
   * Lists CompositionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CompositionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: CompositionListInstanceOptions, callback?: (error: Error | null, items: CompositionInstance[]) => any): Promise<CompositionInstance[]>;
  list(params?: any, callback?: any): Promise<CompositionInstance[]>;
  /**
   * Retrieve a single page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
  /**
   * Retrieve a single page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CompositionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: CompositionListInstancePageOptions, callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
  page(params?: any, callback?: any): Promise<CompositionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CompositionSolution {
}

interface CompositionListInstanceImpl extends CompositionListInstance {}
class CompositionListInstanceImpl implements CompositionListInstance {
  _version?: V1;
  _solution?: CompositionSolution;
  _uri?: string;

}

export function CompositionListInstance(version: V1): CompositionListInstance {
  const instance = ((sid) => instance.get(sid)) as CompositionListInstanceImpl;

  instance.get = function get(sid): CompositionContext {
    return new CompositionContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Compositions`;

  instance.create = function create(params: any, callback?: any): Promise<CompositionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["roomSid"] === null || params["roomSid"] === undefined) {
      throw new Error('Required parameter "params[\'roomSid\']" missing.');
    }

    let data: any = {};

    
        
    data["RoomSid"] = params["roomSid"];
    if (params["videoLayout"] !== undefined)
    data["VideoLayout"] = serialize.object(params["videoLayout"]);
    if (params["audioSources"] !== undefined)
    data["AudioSources"] = serialize.map(params["audioSources"], (e => (e)));
    if (params["audioSourcesExcluded"] !== undefined)
    data["AudioSourcesExcluded"] = serialize.map(params["audioSourcesExcluded"], (e => (e)));
    if (params["resolution"] !== undefined)
    data["Resolution"] = params["resolution"];
    if (params["format"] !== undefined)
    data["Format"] = params["format"];
    if (params["statusCallback"] !== undefined)
    data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
    data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["trim"] !== undefined)
    data["Trim"] = serialize.bool(params["trim"]);


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new CompositionInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<CompositionPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["status"] !== undefined)
    data["Status"] = params["status"];
    if (params["dateCreatedAfter"] !== undefined)
    data["DateCreatedAfter"] = serialize.iso8601DateTime(params["dateCreatedAfter"]);
    if (params["dateCreatedBefore"] !== undefined)
    data["DateCreatedBefore"] = serialize.iso8601DateTime(params["dateCreatedBefore"]);
    if (params["roomSid"] !== undefined)
    data["RoomSid"] = params["roomSid"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new CompositionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<CompositionPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new CompositionPage(this._version, payload, this._solution));
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


export class CompositionPage extends Page<V1, CompositionPayload, CompositionResource, CompositionInstance> {
/**
* Initialize the CompositionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: CompositionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of CompositionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: CompositionPayload): CompositionInstance {
    return new CompositionInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

