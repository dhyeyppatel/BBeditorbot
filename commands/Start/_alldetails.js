/*CMD
  command: /alldetails
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var accounts = User.getProperty("accounts") || {};
var message = "*📒 ALL ACCOUNTS & BOTS:*\n\n";

if (Object.keys(accounts).length === 0) {
  Bot.sendMessage("❌ *No accounts saved yet.*");
  return;
}

for (var acc in accounts) {
  message += "👤 *Account:* `" + acc + "`\n";
  message += "🔑 *API Key:* `" + accounts[acc].token + "`\n";
  
  var bots = accounts[acc].bots || {};
  if (Object.keys(bots).length === 0) {
    message += "🤖 Bots: _None Added Yet_\n";
  } else {
    message += "🤖 *Bots:*\n";
    for (var botName in bots) {
      message += "   - `" + botName + "` : `" + bots[botName] + "`\n";
    }
  }
  message += "\n";
}

Bot.sendMessage(message);

