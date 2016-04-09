var request = require('request')
var expect = require('chai').expect

const spawn = require('child_process').spawn

 // var app = require('../app').getApp

describe('Server response', function () {
  var server = spawn('../index.js')
  it('should return 200 and body must be the expected one', function (done) {
    request.get('http://localhost:8080/', function (err, res, body) {
      if (err) throw err
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.equal('root path of the project!\n')
      done()
      server.kill()
    })
  })
})
