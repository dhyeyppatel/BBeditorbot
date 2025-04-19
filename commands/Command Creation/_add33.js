/*CMD
  command: /add33
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

if (message == "true"){
User.setProperty("on","true","string")
Bot.sendMessage("*Please Send Me Bjs Like -* Bot.sendMessage('hello')")
Bot.runCommand("/add44")
return}
if (message == "false"){
User.setProperty("on","false","string")
Bot.sendMessage("*Please Send Me Bjs Like -* Bot.sendMessage('hello')")
Bot.runCommand("/add44")
}else{
Bot.sendMessage("*Error Happen*")
}
