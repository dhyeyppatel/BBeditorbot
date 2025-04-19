/*CMD
  command: /save_account_name
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

User.setProperty("pending_account_name", message, "string");
Bot.sendMessage("🔑 *Now send the API key for this account:*");
Bot.runCommand("/save_account_token");

