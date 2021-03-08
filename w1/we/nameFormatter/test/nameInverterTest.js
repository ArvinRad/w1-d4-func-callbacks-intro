const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name', function() {
    const inputName = "Thomas";
    const expectedOutput = "Thomas";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name with an extra space', function() {
    const inputName = " Thomas";
    const expectedOutput = "Thomas";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a last-name, first-name when passed a first-name, last-name', function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});