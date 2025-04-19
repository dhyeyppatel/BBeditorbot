/*CMD
  command: /api1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: API

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("apitoken", message,"string")
Bot.runCommand("/start")
