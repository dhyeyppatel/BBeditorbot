/*CMD
  command: /rename_bot_save
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Edit Bot Info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var newBotName = message;
var oldBotName = User.getProperty("rename_bot_old");

var currentAccount = User.getProperty("current_account");
var accounts = User.getProperty("accounts") || {};
var bots = accounts[currentAccount].bots || {};

if (!bots[oldBotName]) {
  Bot.sendMessage("❌ Bot not found.");
  return;
}

bots[newBotName] = bots[oldBotName];
delete bots[oldBotName];
accounts[currentAccount].bots = bots;
User.setProperty("accounts", accounts, "json");

// Update current if renamed
if (User.getProperty("current_bot") == oldBotName) {
  User.setProperty("current_bot", newBotName, "string");
}

Bot.sendMessage("✅ *Renamed bot to:* `" + newBotName + "`");
Bot.runCommand("/start");

