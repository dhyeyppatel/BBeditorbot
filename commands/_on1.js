/*CMD
  command: /on1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var command_id = JSON.parse(content);
var id = command_id.id;
var bjs_code = User.getProperty("bjs");

var accounts = User.getProperty("accounts") || {};
var currentAccount = User.getProperty("current_account");
var currentBot = User.getProperty("current_bot");

if (!accounts[currentAccount]) {
  Bot.sendMessage("*❌ Invalid account.*");
  return;
}

var token = accounts[currentAccount].token;
var bots = accounts[currentAccount].bots || {};
var botid = bots[currentBot];

try {
  HTTP.put({
    url: "https://api.bots.business/v1/bots/" + botid + "/commands/" + id + "/code/?api_key=" + token,
    success: '/onBJS',
    body: {
      code: "" + bjs_code + ""
    }
  });
  Bot.sendMessage("✅ *Successfully Created Command*");
} catch (error) {
  Bot.sendMessage("*Error:* " + error + "");
}

