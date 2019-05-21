﻿//// testing the 'webmidi' engine

var JZZ = require('..');
var WMT = require('web-midi-test');

WMT.sysex = false;
global.navigator = WMT;

var test = require('./tests.js')(JZZ, { engine: 'webmidi', sysex: true, degrade: true }, WMT);

describe('Engine: webmidi', function() {
  test.engine_name('webmidi', false);
  test.non_existent_midi_in();
  test.non_existent_midi_out();
  test.widget_midi_in();
  test.widget_midi_out();
  test.virtual_midi_in();
  test.virtual_midi_out();
});
