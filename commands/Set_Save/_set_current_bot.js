/*CMD
  command: /set_current_bot
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

let botName = params;
User.setProperty("current_bot", botName, "string");
Bot.sendMessage("✅ *Switched to bot:* `" + botName + "`");
Bot.runCommand("/start");

