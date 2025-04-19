/*CMD
  command: /delete_acc
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

var accounts = User.getProperty("accounts") || {};
var keys = Object.keys(accounts);
if (keys.length === 0) {
  Bot.sendMessage("❌ No accounts to delete.");
  return;
}
var buttons = [];
for (var i in keys) {
  buttons.push([{ title: "🗑️ " + keys[i], command: "/confirm_delete_acc " + keys[i] }]);
}
Bot.sendInlineKeyboard(buttons, "⚠️ *Select the account to delete:*");

