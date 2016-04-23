function RuleExecutor(){
   var self = this;
   
   self.rules = {};
};

RuleExecutor.prototype.execute = function execute(rule, param){
    var self = this,
        result = null;
        
    if(self.ruleIsValid(rule) && param != null){
        result = self.rules[rule].execute(param);
    }        
        
    return result;
};

RuleExecutor.prototype.addRules = function addRules(rules){
    var self = this;
       
    self.rules = rules;
};

RuleExecutor.prototype.ruleIsValid = function ruleIsValid(rule){
    var self = this,
        result = rule != null && self.rules[rule] != null;
        
    return result;
};

module.exports = RuleExecutor;