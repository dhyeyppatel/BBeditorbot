/*CMD
  command: /save_bot_id
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Set/Save

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var botName = User.getProperty("pending_bot_name");
var botId = message;
var account = User.getProperty("current_account");

if (!account) {
  Bot.sendMessage("❌ Please set an account first!");
  return;
}

var accounts = User.getProperty("accounts") || {};
accounts[account].bots = accounts[account].bots || {};
accounts[account].bots[botName] = botId;

User.setProperty("accounts", accounts, "json");
User.setProperty("current_bot", botName, "string");

Bot.sendMessage("✅ *Bot added and set to current: " + botName + "*");
Bot.runCommand("/start");

