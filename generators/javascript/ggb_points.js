/**
 * @fileoverview Generating JavaScript for Geogebra Point related blocks.
 * @author info.edulogix@gmail.com (Jordi Campos)
 * @author info.edulogix@gmail.com (Manel Martínez)
 */
'use strict';

goog.provide('Blockly.JavaScript.ggb_points');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['ggb_point'] = function(block) {
 var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
 id = id.replace(/'/g, "")
 var x  = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
 var y  = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
 // Create a Point in Geogebra
 var code = 'ggbApplet.evalCommand("'+id+' = Point[{'+x+','+y+'}]");\n';
 return code;
};

