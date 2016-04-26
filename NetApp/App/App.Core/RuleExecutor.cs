using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Models; 

namespace App.Core
{
    public class RuleExecutor
    {
        public Dictionary<string, RuleBase> Rules{ get; set; }
        public RuleExecutor()
        {
            this.Rules = new Dictionary<string, RuleBase>();
        }
        public string Execute(string rule, string param)
        {
            string result = string.Empty;

            if (this.Rules.ContainsKey(rule))
            {
                result = this.Rules[rule].Execute(param);
            }

            return result;
        }

        public virtual void AddRule(string rule)
        {
            var ruleObject = new RuleBase(rule);
            this.Rules.Add(rule, ruleObject);
        }
        
    }
}
