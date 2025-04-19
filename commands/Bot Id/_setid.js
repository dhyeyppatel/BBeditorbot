/*CMD
  command: /setid
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Bot Id

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var api = User.getProperty("apitoken")
if (!api){
Bot.sendMessage("*Please Set First Api Key!*")
Bot.runCommand("/start")
return}
Bot.sendMessage("➡️ *Please Send Me Your Bot Id*")
Bot.runCommand("/set1")
