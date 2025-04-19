/*CMD
  command: /delete_bot
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

if (!currentAccount || !accounts[currentAccount]) {
  Bot.sendMessage("❌ No current account selected.");
  return;
}

var bots = accounts[currentAccount].bots || {};
var keys = Object.keys(bots);
if (keys.length === 0) {
  Bot.sendMessage("❌ No bots to delete under current account.");
  return;
}

var buttons = [];
for (var i in keys) {
  buttons.push([{ title: "🗑️ " + keys[i], command: "/confirm_delete_bot " + keys[i] }]);
}
Bot.sendInlineKeyboard(buttons, "⚠️ *Select a bot to delete:*");

