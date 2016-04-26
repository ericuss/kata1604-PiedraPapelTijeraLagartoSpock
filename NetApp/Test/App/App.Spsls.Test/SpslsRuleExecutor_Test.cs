using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace App.Spsls.Test
{
    [TestClass]
    public class SpslsRuleExecutor_Test
    {
        SpslsRuleExecutor rule = new SpslsRuleExecutor();

        #region Has correct rules
        [TestMethod]
        public void HasRulesFiveRules()
        {
            Assert.AreEqual(rule.Rules.Count, 5);
        }

        [TestMethod]
        public void HasStoneRule()
        {
            Assert.AreEqual(rule.Rules.ContainsKey("stone"), true);
        }

        [TestMethod]
        public void HasPaperRule()
        {
            Assert.AreEqual(rule.Rules.ContainsKey("paper"), true);
        }

        [TestMethod]
        public void HasScissorRule()
        {
            Assert.AreEqual(rule.Rules.ContainsKey("scissor"), true);
        }

        [TestMethod]
        public void HasLizzardRule()
        {
            Assert.AreEqual(rule.Rules.ContainsKey("lizzard"), true);
        }

        [TestMethod]
        public void HasSpockRule()
        {
            Assert.AreEqual(rule.Rules.ContainsKey("spock"), true);
        }
        #endregion Has correct rules

        #region Stone 
        [TestMethod]
        public void SendStoneAndLizzardReturnWin()
        {
            var result = rule.Execute("stone", "lizzard");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendStoneAndScissorReturnWin()
        {
            var result = rule.Execute("stone", "scissor");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendStoneAndStoneReturnDraw()
        {
            var result = rule.Execute("stone", "stone");
            Assert.AreEqual("draw", result);
        }
        [TestMethod]
        public void SendStoneAndPaperReturnLose()
        {
            var result = rule.Execute("stone", "paper");
            Assert.AreEqual("lose", result);
        }
        [TestMethod]
        public void SendStoneAndSpockReturnLose()
        {
            var result = rule.Execute("stone", "spock");
            Assert.AreEqual("lose", result);
        }
        #endregion Stone 

        #region Paper 
        [TestMethod]
        public void SendPaperAndSpockReturnWin()
        {
            var result = rule.Execute("paper", "spock");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendPaperAndStoneReturnWin()
        {
            var result = rule.Execute("paper", "stone");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendPaperAndPaperReturnDraw()
        {
            var result = rule.Execute("paper", "paper");
            Assert.AreEqual("draw", result);
        }
        [TestMethod]
        public void SendPaperAndLizzardReturnLose()
        {
            var result = rule.Execute("paper", "lizzard");
            Assert.AreEqual("lose", result);
        }
        [TestMethod]
        public void SendPaperAndScissorReturnLosek()
        {
            var result = rule.Execute("paper", "scissor");
            Assert.AreEqual("lose", result);
        }
        #endregion Paper

        #region Scissor
        [TestMethod]
        public void SendScissorAndLizzardReturnWin()
        {
            var result = rule.Execute("scissor", "lizzard");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendScissorAndPaperReturnWin()
        {
            var result = rule.Execute("scissor", "paper");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendScissorAndScissorReturnDraw()
        {
            var result = rule.Execute("scissor", "scissor");
            Assert.AreEqual("draw", result);
        }
        [TestMethod]
        public void SendScissorAndSpockReturnLose()
        {
            var result = rule.Execute("scissor", "spock");
            Assert.AreEqual("lose", result);
        }
        [TestMethod]
        public void SendScissorAndStoneReturnLose()
        {
            var result = rule.Execute("scissor", "stone");
            Assert.AreEqual("lose", result);
        }
        #endregion Scissor

        #region Lizzard
        [TestMethod]
        public void SendLizzardAndPaperReturnWin()
        {
            var result = rule.Execute("lizzard", "paper");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendLizzardAndSpockReturnWin()
        {
            var result = rule.Execute("lizzard", "spock");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendLizzardAndLizzardReturnDraw()
        {
            var result = rule.Execute("lizzard", "lizzard");
            Assert.AreEqual("draw", result);
        }
        [TestMethod]
        public void SendLizzardAndScissorReturnLose()
        {
            var result = rule.Execute("lizzard", "scissor");
            Assert.AreEqual("lose", result);
        }
        [TestMethod]
        public void SendLizzardAndStoneReturnLose()
        {
            var result = rule.Execute("lizzard", "stone");
            Assert.AreEqual("lose", result);
        }
        #endregion Lizzard


        #region Spock
        [TestMethod]
        public void SendSpockAndScissorReturnWin()
        {
            var result = rule.Execute("spock", "scissor");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendSpockAndStoneReturnWin()
        {
            var result = rule.Execute("spock", "stone");
            Assert.AreEqual("win", result);
        }
        [TestMethod]
        public void SendSpockAndSpockReturnDraw()
        {
            var result = rule.Execute("spock", "spock");
            Assert.AreEqual("draw", result);
        }

        [TestMethod]
        public void SendSpockAndLizzardReturnLose()
        {
            var result = rule.Execute("spock", "lizzard");
            Assert.AreEqual("lose", result);
        }

        [TestMethod]
        public void SendSpockAndPaperReturnLose()
        {
            var result = rule.Execute("spock", "paper");
            Assert.AreEqual("lose", result);
        }
        #endregion Lizzard
    }
}
