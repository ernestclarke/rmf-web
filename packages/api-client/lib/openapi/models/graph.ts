/* tslint:disable */
/* eslint-disable */
/**
 * RMF API Server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface Graph
 */
export interface Graph {
  /**
   *
   * @type {string}
   * @memberof Graph
   */
  name?: any;
  /**
   *
   * @type {Array&lt;GraphNode&gt;}
   * @memberof Graph
   */
  vertices?: any;
  /**
   *
   * @type {Array&lt;GraphEdge&gt;}
   * @memberof Graph
   */
  edges?: any;
  /**
   *
   * @type {Array&lt;Param&gt;}
   * @memberof Graph
   */
  params?: any;
}