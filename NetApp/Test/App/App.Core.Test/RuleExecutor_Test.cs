using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace App.Core.Test
{
    [TestClass]
    public class RuleExecutor_Test
    {
        [TestMethod]
        public void ExecutingNonExistingRule()
        {
            var ruleExecuter = new RuleExecutor();

            Assert.AreEqual(ruleExecuter.Execute(string.Empty, string.Empty), string.Empty);
        }

    }
}
