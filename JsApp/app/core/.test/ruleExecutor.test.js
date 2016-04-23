var expect = require('chai').expect,
    RuleExecutor = require('../ruleExecutor.js');


 describe('Rule Executor tests', function (){
     describe('Validating rules', function (){
        it('Call to validate when the rules is empty', function (){
           var ruleExecutor = new RuleExecutor();
           expect(ruleExecutor.ruleIsValid('ruleTest')).to.equal(false); 
        }); 
        it('Call to validate passing a null parameter', function (){
           var ruleExecutor = new RuleExecutor();
           ruleExecutor.addRules({ruleTest:true});
           expect(ruleExecutor.ruleIsValid(null)).to.equal(false); 
        }); 
        it('Call to validate passing a valid parameter', function (){
           var ruleExecutor = new RuleExecutor();
           ruleExecutor.addRules({ruleTest:true});
           expect(ruleExecutor.ruleIsValid('ruleTest')).to.equal(true); 
        }); 
     });
     
    describe('Adding rules', function (){
        it('I add rule and I can access', function (){
            var ruleExecutor = new RuleExecutor();
            
            ruleExecutor.addRules({
                ruleTest: true 
            });
                    
            expect(ruleExecutor.rules['ruleTest']).to.equal(true); 
        });    
    });     
    
    describe('Executing rules', function (){
       it('Executing a non existing rule', function (){
            var ruleExecutor = new RuleExecutor();
          
            expect(ruleExecutor.execute(null, null)).to.equal(null);
       });
        it('Executing an existing rule but sending a null parameter', function (){
           var ruleExecutor = new RuleExecutor();
           
           ruleExecutor.addRules({
              ruleTest: {
                  execute: function (param){return true;}
              } 
           });
           
           expect(ruleExecutor.execute('ruleTest')).to.equal(null);
        });
        it('Executing an existing rule with a valid parameter', function (){
           var ruleExecutor = new RuleExecutor();
           
           ruleExecutor.addRules({
              ruleTest: {
                  execute: function (param){return 'ruleTest';}
              } 
           });
           
           expect(ruleExecutor.execute('ruleTest', 'ruleTest')).to.equal('ruleTest');
        });
    });
     
 });

