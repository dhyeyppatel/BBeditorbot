/*CMD
  command: /add_account
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

Bot.sendMessage("📧 *Send me account name (like your email)*:");
Bot.runCommand("/save_account_name");

