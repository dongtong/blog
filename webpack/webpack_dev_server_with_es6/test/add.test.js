var describe = require('mocha').describe,
    it  = require('mocha').it,
    expect = require('chai').expect;

import add from '../src/javascripts/add';

describe('Test [add] function', function () {
  it('should add correctly', function () {
    var sum = add(1, 1);
    expect(sum).eql(2);
  });
});
