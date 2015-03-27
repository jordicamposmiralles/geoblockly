/**
 * @fileoverview Generating JavaScript for geogebra blocks.
 * @author info.edulogix@gmail.com (Jordi Campos)
 */
'use strict';

goog.provide('Blockly.JavaScript.geogebra');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['geogebra_circle'] = function(block) {
 var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
 var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
 var r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
 // Draw a circle in geogebra
 var code = 'ggbApplet.evalCommand("Circle[('+x+','+y+'), '+r+']"); ';
 return code;
};

