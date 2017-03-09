const assert = require('assert');
const index = require('./../');
const express = require('express');

describe('test', () => {
  it('test', () => {
    var app = express();
    console.log("env: " + app.get('env'));
    assert.equal(index(2), 4);
//    assert.equal(index(2), 5);
  });
});

