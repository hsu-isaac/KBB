/*
 * DealersAndVehicles
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DealersAndVehicles) {
      root.DealersAndVehicles = {};
    }
    root.DealersAndVehicles.DealersResponse = factory(root.DealersAndVehicles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DealersResponse model module.
   * @module model/DealersResponse
   * @version v1
   */

  /**
   * Constructs a new <code>DealersResponse</code>.
   * @alias module:model/DealersResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DealersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DealersResponse} obj Optional instance to populate.
   * @return {module:model/DealersResponse} The populated <code>DealersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dealerId'))
        obj.dealerId = ApiClient.convertToType(data['dealerId'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} dealerId
   */
  exports.prototype.dealerId = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
