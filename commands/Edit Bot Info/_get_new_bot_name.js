/*CMD
  command: /get_new_bot_name
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

User.setProperty("rename_bot_old", params, "string");
Bot.sendMessage("✏️ *Send new name for bot:*");
Bot.runCommand("/rename_bot_save");

