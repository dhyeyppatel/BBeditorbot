/*CMD
  command: /set1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Bot Id

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("botid", message,"string")
Bot.runCommand("/start")
