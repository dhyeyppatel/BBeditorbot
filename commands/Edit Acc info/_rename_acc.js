/*CMD
  command: /rename_acc
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
  Bot.sendMessage("❌ No accounts to rename.");
  return;
}

var buttons = [];
for (var i in keys) {
  buttons.push([{ title: "✏️ " + keys[i], command: "/get_new_account_name " + keys[i] }]);
}
Bot.sendInlineKeyboard(buttons, "✏️ *Select account to rename:*");

