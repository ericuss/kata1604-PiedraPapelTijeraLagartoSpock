var expect = require('chai').expect,
    Rule = require('../Rule.js');


 describe('Rule model tests', function (){
     describe('Validate constructor', function (){
        it('Sending valid property', function (){
           var rule = new Rule('Property1');
           
           expect(rule.property).to.equal('Property1'); 
        }); 
        
        it('Sending a win parameter', function (){
           var rule = new Rule('Property1', true);
           
           expect(rule.win).to.equal(true); 
        }); 
        
        it('Sending a win array parameter', function (){
           var rule = new Rule('Property1', [1, 2]);
           
           expect(rule.win).to.have.length(2); 
        }); 
     });   
     
     describe('To string function', function (){
         it('Verify that toString is the property value', function (){
            var rule = new Rule('test');
            expect(rule.toString()).to.equal('test');
         }); 
     });
     
     describe('Executing rule', function(){
        var rule = null; 
        beforeEach(function (){
            rule = new Rule('Value1', ['Value2']);
        });
        it('Sending a lose play', function(){
            expect(rule.execute('lose')).to.equal('lose');              
        }); 
        it('Sending a draw play', function(){
            expect(rule.execute('Value1')).to.equal('draw');              
        });
        it('Sending a win play', function(){
            expect(rule.execute('Value2')).to.equal('win');              
        }); 
     });
 });

