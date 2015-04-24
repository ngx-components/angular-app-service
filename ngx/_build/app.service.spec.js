'use strict';

describe('App service', function() {

  var app;

  beforeEach(module('app'));

  beforeEach(inject(function(_app_){
    app = _app_;
  }));

  it('should exist', function(){
    expect(app).to.be.an('object');
  });

});
