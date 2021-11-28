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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DealersAndVehicles);
  }
}(this, function(expect, DealersAndVehicles) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('VehicleAnswer', function() {
      beforeEach(function() {
        instance = new DealersAndVehicles.VehicleAnswer();
      });

      it('should create an instance of VehicleAnswer', function() {
        // TODO: update the code to test VehicleAnswer
        expect(instance).to.be.a(DealersAndVehicles.VehicleAnswer);
      });

      it('should have the property vehicleId (base name: "vehicleId")', function() {
        // TODO: update the code to test the property vehicleId
        expect(instance).to.have.property('vehicleId');
        // expect(instance.vehicleId).to.be(expectedValueLiteral);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property make (base name: "make")', function() {
        // TODO: update the code to test the property make
        expect(instance).to.have.property('make');
        // expect(instance.make).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

    });
  });

}));
