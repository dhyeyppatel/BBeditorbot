/*CMD
  command: /switch_account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Switch/Add

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var accounts = User.getProperty("accounts") || {};
var keys = Object.keys(accounts);
if (keys.length == 0) {
  Bot.sendMessage("❌ No accounts saved yet.");
  return;
}
var buttons = [];
for (var i in keys) {
  buttons.push([{ title: keys[i], command: "/set_current_account " + keys[i] }]);
}
Bot.sendInlineKeyboard(buttons, "🔁 *Select account to switch:*");

