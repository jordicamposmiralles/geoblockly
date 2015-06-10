/**
 * @fileoverview Geogebra Point related blocks for Blockly.
 * @author info.edulogix@gmail.com (Jordi Campos)
 * @author info.edulogix@gmail.com (Manel Martínez)
 */
'use strict';

goog.provide('Blockly.Blocks.ggb_points');

goog.require('Blockly.Blocks');

Blockly.Blocks['ggb_point'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://wiki.geogebra.org/uploads/d/dc/Tool_New_Point.gif", 15, 15, "Point"))
        .appendField("Point:")
    this.appendValueInput("id")
        .setCheck("String")
        .appendField("id");
    this.appendDummyInput()
        .appendField("coordinates");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Create a point');
  }
};

