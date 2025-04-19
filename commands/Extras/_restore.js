/*CMD
  command: /restore
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Extras

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage("📥 Please paste your backup JSON below:\n\n⚠️ Only use data from the /backup command.");
Bot.runCommand("/restore_process");
