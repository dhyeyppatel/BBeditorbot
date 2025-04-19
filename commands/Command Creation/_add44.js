/*CMD
  command: /add44
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

User.setProperty("bjs", message, "string");

var Command = User.getProperty("command");
var answer = User.getProperty("answer");
var wait = User.getProperty("on");

var accounts = User.getProperty("accounts") || {};
var currentAccount = User.getProperty("current_account");
var currentBot = User.getProperty("current_bot");

if (!accounts[currentAccount]) {
  Bot.sendMessage("*❌ Invalid account.*");
  return;
}

var token = accounts[currentAccount].token;
var bots = accounts[currentAccount].bots || {};
var id = bots[currentBot];

if (!id) {
  Bot.sendMessage("*❌ Invalid bot selected.*");
  return;
}

try {
  if (wait == "true") {
    HTTP.post({
      url: "https://api.bots.business/v1/bots/" + id + "/commands?api_key=" + token,
      success: '/on1',
      error: '/error',
      body: {
        command: "" + Command + "",
        need_reply: true,
        bjs_mode: true,
        answer: "" + answer + ""
      }
    });
    return;
  }

  HTTP.post({
    url: "https://api.bots.business/v1/bots/" + id + "/commands?api_key=" + token,
    success: '/on1',
    error: '/error',
    body: {
      command: "" + Command + "",
      need_reply: false,
      bjs_mode: true,
      answer: "" + answer + ""
    }
  });

} catch (error) {
  Bot.sendMessage("*Error : " + error + "*");
}

