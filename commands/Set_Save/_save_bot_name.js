/*CMD
  command: /save_bot_name
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Set/Save

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("pending_bot_name", message, "string");
Bot.sendMessage("🔢 *Now enter the numeric Bot ID:*");
Bot.runCommand("/save_bot_id");

