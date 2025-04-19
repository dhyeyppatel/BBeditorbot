/*CMD
  command: /add11
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Command Creation

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("command", message,"string")
Bot.sendMessage("⚠️ *Please Send Me Answer For Command* - `"+message+"`")
Bot.runCommand("/add22")
