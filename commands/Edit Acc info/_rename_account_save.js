/*CMD
  command: /rename_account_save
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Edit Acc info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var newName = message;
var oldName = User.getProperty("rename_account_old");

var accounts = User.getProperty("accounts") || {};
if (!accounts[oldName]) {
  Bot.sendMessage("❌ Old account not found.");
  return;
}

accounts[newName] = accounts[oldName];
delete accounts[oldName];

User.setProperty("accounts", accounts, "json");

// Update current if renamed
if (User.getProperty("current_account") == oldName) {
  User.setProperty("current_account", newName, "string");
}

Bot.sendMessage("✅ *Renamed account to:* `" + newName + "`");
Bot.runCommand("/start");

