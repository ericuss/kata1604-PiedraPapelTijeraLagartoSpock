using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using App.Common;

namespace App.Models
{
    public class RuleBase
    {
        public RuleBase()
        {
        }
        public RuleBase(string property)
        {
            this.PropertyName = property;
        }

        public string PropertyName { get; set; }

        public virtual string Execute(string value)
        {
            throw new NotImplementedException();
        }

        public override string ToString()
        {
            return this.PropertyName;
        }

    }
}
