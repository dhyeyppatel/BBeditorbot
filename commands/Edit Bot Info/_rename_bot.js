/*CMD
  command: /rename_bot
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

var currentAccount = User.getProperty("current_account");
var accounts = User.getProperty("accounts") || {};

if (!accounts[currentAccount]) {
  Bot.sendMessage("❌ Invalid account.");
  return;
}

var bots = accounts[currentAccount].bots || {};
var keys = Object.keys(bots);
if (keys.length === 0) {
  Bot.sendMessage("❌ No bots to rename.");
  return;
}

var buttons = [];
for (var i in keys) {
  buttons.push([{ title: "✏️ " + keys[i], command: "/get_new_bot_name " + keys[i] }]);
}
Bot.sendInlineKeyboard(buttons, "✏️ *Select bot to rename:*");

