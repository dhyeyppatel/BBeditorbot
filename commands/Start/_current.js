/*CMD
  command: /current
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var accounts = User.getProperty("accounts") || {};
var currentAccount = User.getProperty("current_account");
var currentBot = User.getProperty("current_bot");

if (!currentAccount || !accounts[currentAccount]) {
  Bot.sendMessage("❌ *No current account selected.*");
  return;
}

var token = accounts[currentAccount].token || "❌ Not Found";
var bots = accounts[currentAccount].bots || {};
var botid = bots[currentBot] || "❌ Not Selected";

Bot.sendMessage(
  "*📍 CURRENT DETAILS:*\n\n" +
  "👤 *Account:* `" + currentAccount + "`\n" +
  "🔑 *API Key:* `" + token + "`\n\n" +
  "🤖 *Bot Name:* `" + currentBot + "`\n" +
  "🆔 *Bot ID:* `" + botid + "`"
);

