/*CMD
  command: /confirm_delete_acc
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Edit Acc info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let account = params;
var accounts = User.getProperty("accounts") || {};

if (!accounts[account]) {
  Bot.sendMessage("❌ Account not found.");
  return;
}

delete accounts[account];
User.setProperty("accounts", accounts, "json");

// If deleted account was current
if (User.getProperty("current_account") == account) {
  User.setProperty("current_account", "", "string");
  User.setProperty("current_bot", "", "string");
}

Bot.sendMessage("✅ *Deleted account:* `" + account + "`");
Bot.runCommand("/start");

