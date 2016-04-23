var constants = require('../utils/constants.js');

function Rule(property, win){
    var self = this;
    self.property = property;
    self.win = win;
};

Rule.prototype.execute = function execute(play){
    var self = this, 
        result = constants.results.lose;
    
    if (self.property === play){
        result = constants.results.draw;    
    }else if (self.win.some(function (p){ return p === play;})){
        result = constants.results.win;
    }
    
    return result;    
};

Rule.prototype.toString = function toString(){
  var self = this;
  return self.property;  
};

module.exports = Rule;