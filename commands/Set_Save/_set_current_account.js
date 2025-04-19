/*CMD
  command: /set_current_account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Set/Save

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let name = params;
User.setProperty("current_account", name, "string");
User.setProperty("current_bot", "", "string");
Bot.sendMessage("✅ *Switched to account:* `" + name + "`");
Bot.runCommand("/start");

