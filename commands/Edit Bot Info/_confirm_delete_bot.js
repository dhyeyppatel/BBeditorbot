/*CMD
  command: /confirm_delete_bot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Edit Bot Info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let botName = params;
var currentAccount = User.getProperty("current_account");
var accounts = User.getProperty("accounts") || {};

if (!accounts[currentAccount]) {
  Bot.sendMessage("❌ Invalid account.");
  return;
}

var bots = accounts[currentAccount].bots || {};
delete bots[botName];

accounts[currentAccount].bots = bots;
User.setProperty("accounts", accounts, "json");

if (User.getProperty("current_bot") == botName) {
  User.setProperty("current_bot", "", "string");
}

Bot.sendMessage("✅ *Deleted bot:* `" + botName + "`");
Bot.runCommand("/start");

