/**
 * @fileoverview Geogebra blocks for Blockly.
 * @author info.edulogix@gmail.com (Jordi Campos)
 */
'use strict';

goog.provide('Blockly.Blocks.geogebra');

goog.require('Blockly.Blocks');

Blockly.Blocks['geogebra_circle'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://wiki.geogebra.org/uploads/e/eb/Tool_Circle_Center_Radius.gif", 15, 15, "Cercle"))
        .appendField("Circle:")
        .appendField("center");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField("radius");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

