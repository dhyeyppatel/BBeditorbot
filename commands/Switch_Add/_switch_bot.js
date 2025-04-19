/*CMD
  command: /switch_bot
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

var account = User.getProperty("current_account");
var accounts = User.getProperty("accounts") || {};

if (!accounts[account]) {
  Bot.sendMessage("❌ No bots found for current account.");
  return;
}

var bots = accounts[account].bots || {};
var keys = Object.keys(bots);

if (keys.length == 0) {
  Bot.sendMessage("❌ No bots added under this account.");
  return;
}

var buttons = [];
for (var i in keys) {
  buttons.push([{ title: keys[i], command: "/set_current_bot " + keys[i] }]);
}

Bot.sendInlineKeyboard(buttons, "🤖 *Select a bot to switch:*");

