'use strict';

goog.provide('Blockly.Blocks.edek');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['edek_move_forward'] = {
  init: function() {
    this.jsonInit({
      "message0": "Do przodu o  %1 %2 z prędkością %3",
      "args0": [
        {
          "type": "field_number",
          "name": "DISTANCE",
          "value": 1,
          "min": 1
        },
        {
          "type": "field_dropdown",
          "name": "UNIT",
          "options": [
            [
              "cm",
              "CENTIMETERS"
            ],
            [
              "seconds",
              "SECONDS"
            ]
          ]
        },
        {
          "type": "field_number",
          "name": "SPEED",
          "value": 5,
          "min": 1,
          "max": 10
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Rusz do przodu",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['edek_led_on_off'] = {
  init: function() {
    this.jsonInit({
      "message0": "LED %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "STATE",
          "options": [
            [
              "włącz",
              "ON"
            ],
            [
              "wyłącz",
              "OFF"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 135,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};
