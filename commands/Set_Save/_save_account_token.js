/*CMD
  command: /save_account_token
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

var name = User.getProperty("pending_account_name");
var token = message;

var accounts = User.getProperty("accounts") || {};
accounts[name] = {
  token: token,
  bots: {}
};

User.setProperty("accounts", accounts, "json");
User.setProperty("current_account", name, "string");

Bot.sendMessage("✅ *Account saved successfully! Now set a bot under this account.*");
Bot.runCommand("/start");

