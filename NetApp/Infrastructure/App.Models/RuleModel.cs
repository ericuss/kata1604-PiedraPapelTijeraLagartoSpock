using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using App.Common;

namespace App.Models
{
    public class RuleModel : RuleBase
    {
        public RuleModel()
        {
            this.WinValues = new List<string>();
        }
        public RuleModel(string property, List<string> winValues):base(property)
        {
            this.WinValues = winValues;
        }

        public List<string> WinValues { get; set; }


        public override string Execute(string value)
        {
            var result = ResultConstants.Lose;

            if (this.PropertyName == value)
            {
                result = ResultConstants.Draw;
            }
            else if (this.WinValues.Contains(value))
            {
                result = ResultConstants.Win;
            }

            return result;
        }
    }
}
