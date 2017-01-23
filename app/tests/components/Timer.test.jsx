var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('../../../node_modules/jquery/dist/jquery.min.js');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStartCountdown', () => {
    it('should set state to started and timer', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStartCountdown();
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      },1001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStartCountdown();
      timer.handleStatusChange('paused');
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStartCountdown(0);
      timer.handleStatusChange('stopped');
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    })
  });
});
