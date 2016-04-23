var constants = require('../utils/constants.js'),
    Rule = require('../models/rule.js'),
    ruleExecutor = new (require('../core/ruleExecutor.js'))(),
    rules = {
        stone: new Rule(constants.play.stone, [constants.play.scissor, constants.play.lizzard]),
        paper: new Rule(constants.play.paper, [constants.play.stone, constants.play.spock]),
        scissor: new Rule(constants.play.scissor, [constants.play.paper, constants.play.lizzard]),
        lizzard: new Rule(constants.play.lizzard, [constants.play.paper, constants.play.spock]),
        spock: new Rule(constants.play.spock, [constants.play.stone, constants.play.scissor]),
    };

ruleExecutor.addRules(rules);

module.exports = ruleExecutor;