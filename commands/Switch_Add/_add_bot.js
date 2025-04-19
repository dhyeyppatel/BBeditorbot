/*CMD
  command: /add_bot
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

Bot.sendMessage("✏️ *Enter a name for your bot (example: MyShopBot)*");
Bot.runCommand("/save_bot_name");

