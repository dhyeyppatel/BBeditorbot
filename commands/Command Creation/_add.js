/*CMD
  command: /add
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Command Creation

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
  });
}

var accounts = User.getProperty("accounts") || {};
var currentAccount = User.getProperty("current_account");
var currentBot = User.getProperty("current_bot");

if (!currentAccount || !accounts[currentAccount]) {
  Bot.sendMessage("*❌ Please switch to a valid account first*");
  return;
}

var token = accounts[currentAccount].token;
var bots = accounts[currentAccount].bots || {};
var botid = bots[currentBot];

if (!botid) {
  Bot.sendMessage("*❌ Please switch to a valid bot under your account first*");
  return;
}

Bot.sendMessage("*Please Enter Command Name For Create*");
Bot.runCommand("/add11");

