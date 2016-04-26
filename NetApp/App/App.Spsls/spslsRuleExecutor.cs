using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Core;
using App.Models;
using App.Common;

namespace App.Spsls
{
    public class SpslsRuleExecutor : RuleExecutor
    {
        public SpslsRuleExecutor()
        {
            this.Rules = new Dictionary<string, RuleBase>();

            this.AddRule(TypesConstants.Stone,   new string[]{ TypesConstants.Scissor, TypesConstants.Lizzard});
            this.AddRule(TypesConstants.Paper,   new string[]{ TypesConstants.Stone, TypesConstants.Spock});
            this.AddRule(TypesConstants.Scissor, new string[]{ TypesConstants.Paper, TypesConstants.Lizzard});
            this.AddRule(TypesConstants.Lizzard, new string[]{ TypesConstants.Paper, TypesConstants.Spock});
            this.AddRule(TypesConstants.Spock,   new string[]{ TypesConstants.Stone, TypesConstants.Scissor});
        }

        public void AddRule(string rule, string[] winValues)
        {
            var ruleObject = new RuleModel(rule, winValues.ToList());
            this.Rules.Add(rule, ruleObject);
        }

    }
}
