/*jslint node: true*/
/*jslint asi: true */
/*global describe:true, it:true*/
"use strict";

var assert = require('assert')
var seneca = require('seneca')
var async = require('async')

var shared = require('seneca-store-test')


var config = {
  log:'debug'
};
var si = seneca();
si.use(require('..'), {
  name: 'test',
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'root'
})

si.__testcount = 0
var testcount = 0


describe('orientdb', function () {
  it('basic', function (done) {
    testcount++
    shared.basictest(si, done)
  })

  it('save with passing an id$', function(done) {

    var product = si.make('foo')

    product.id$ = '12345'
    product.p1 = 'pear'

    si.act(
      { role:'entity', cmd:'save', ent: product},
      function( err, product ) {
        console.log(arguments)
        assert(!err)
        assert.equal(product.id, '12345')
        done()
      })
  })


  it('sqltest', function (done) {
    testcount++
    shared.sqltest(si, done)
  })

  it('close', function (done) {
    shared.closetest(si, testcount, done)
  })


})

