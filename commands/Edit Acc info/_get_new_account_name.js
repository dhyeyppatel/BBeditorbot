/*CMD
  command: /get_new_account_name
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

User.setProperty("rename_account_old", params, "string");
Bot.sendMessage("📧 *Send new name for account:*");
Bot.runCommand("/rename_account_save");

