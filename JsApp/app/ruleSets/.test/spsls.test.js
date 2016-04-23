var expect = require('chai').expect,
    should = require('chai').should(),
    spsls = require('../spsls.js');


 describe('spsls tests - rules for stone, paper, scissor, lizzard and spock', function (){
     describe('Verify the rule array', function (){
        it('Has the right length rules', function (){
           expect(Object.keys(spsls.rules).length).to.equal(5); 
        }); 
        it('Has the stone rule', function (){
           should.exist(spsls.rules['stone']); 
        }); 
        it('Has the paper rule', function (){
           should.exist(spsls.rules['paper']); 
        }); 
        it('Has the scissor rule', function (){
           should.exist(spsls.rules['scissor']); 
        }); 
        it('Has the lizzard rule', function (){
           should.exist(spsls.rules['lizzard']); 
        }); 
        it('Has the spock rule', function (){
           should.exist(spsls.rules['spock']); 
        }); 
     });
     describe('Executing rules', function (){
         describe('Stone', function (){
            it('Sending a win  parameter value (scissor)', function (){
                expect(spsls.execute('stone', 'scissor')).to.equal('win'); 
            }); 
            it('Sending a win  parameter value (lizzard)', function (){
                expect(spsls.execute('stone', 'lizzard')).to.equal('win'); 
            }); 
            it('Sending a draw parameter value (stone)', function (){
                expect(spsls.execute('stone', 'stone')).to.equal('draw'); 
            }); 
            it('Sending a lose parameter value (paper)', function (){
                expect(spsls.execute('stone', 'paper')).to.equal('lose'); 
            }); 
            it('Sending a lose parameter value (spock)', function (){
                expect(spsls.execute('stone', 'spock')).to.equal('lose'); 
            }); 
        });
        describe('Paper', function (){
            it('Sending a win  parameter value (stone)', function (){
                expect(spsls.execute('paper', 'stone')).to.equal('win'); 
            }); 
            it('Sending a win  parameter value (spock)', function (){
                expect(spsls.execute('paper', 'spock')).to.equal('win'); 
            }); 
            it('Sending a draw parameter value (paper)', function (){
                expect(spsls.execute('paper', 'paper')).to.equal('draw'); 
            }); 
            it('Sending a lose parameter value (scissor)', function (){
                expect(spsls.execute('paper', 'scissor')).to.equal('lose'); 
            }); 
            it('Sending a lose parameter value (lizzard)', function (){
                expect(spsls.execute('paper', 'lizzard')).to.equal('lose'); 
            }); 
        });
        describe('scissor', function (){
            it('Sending a win  parameter value (paper)', function (){
                expect(spsls.execute('scissor', 'paper')).to.equal('win'); 
            }); 
            it('Sending a win  parameter value (lizzard)', function (){
                expect(spsls.execute('scissor', 'lizzard')).to.equal('win'); 
            }); 
            it('Sending a draw parameter value (scissor)', function (){
                expect(spsls.execute('scissor', 'scissor')).to.equal('draw'); 
            }); 
            it('Sending a lose parameter value (stone)', function (){
                expect(spsls.execute('scissor', 'stone')).to.equal('lose'); 
            }); 
            it('Sending a lose parameter value (spock)', function (){
                expect(spsls.execute('scissor', 'spock')).to.equal('lose'); 
            }); 
        }); 
        describe('lizzard', function (){
            it('Sending a win  parameter value (paper)', function (){
                expect(spsls.execute('lizzard', 'paper')).to.equal('win'); 
            }); 
            it('Sending a win  parameter value (spock)', function (){
                expect(spsls.execute('lizzard', 'spock')).to.equal('win'); 
            }); 
            it('Sending a draw parameter value (lizzard)', function (){
                expect(spsls.execute('lizzard', 'lizzard')).to.equal('draw'); 
            }); 
            it('Sending a lose parameter value (stone)', function (){
                expect(spsls.execute('lizzard', 'stone')).to.equal('lose'); 
            }); 
            it('Sending a lose parameter value (scissor)', function (){
                expect(spsls.execute('lizzard', 'scissor')).to.equal('lose'); 
            }); 
        }); 
        describe('spock', function (){
            it('Sending a win  parameter value (stone)', function (){
                expect(spsls.execute('spock', 'stone')).to.equal('win'); 
            }); 
            it('Sending a win  parameter value (scissor)', function (){
                expect(spsls.execute('spock', 'scissor')).to.equal('win'); 
            }); 
            it('Sending a draw parameter value (spock)', function (){
                expect(spsls.execute('spock', 'spock')).to.equal('draw'); 
            }); 
            it('Sending a lose parameter value (paper)', function (){
                expect(spsls.execute('spock', 'paper')).to.equal('lose'); 
            }); 
            it('Sending a lose parameter value (lizzard)', function (){
                expect(spsls.execute('spock', 'lizzard')).to.equal('lose'); 
            }); 
        }); 
     });
             
 });

