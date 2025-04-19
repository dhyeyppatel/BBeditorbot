/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start
  answer: *Managed By @dhyeygotyou*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var accounts = User.getProperty("accounts");
var currentAccount = User.getProperty("current_account") || "❌ Not Set";
var currentBot = User.getProperty("current_bot") || "❌ Not Set";

var api = "❌ Not Set";
var botid = "❌ Not Set";

if (accounts && accounts[currentAccount]) {
  api = accounts[currentAccount].token;
  var bots = accounts[currentAccount].bots || {};
  if (bots[currentBot]) {
    botid = bots[currentBot];
  }
}

var button = 
[
  [{ title: "➕ Add Account", command: "/add_account" }, { title: "👥 Switch Account", command: "/switch_account" }],

  [{ title: "⌨️  Add Command", command: "/add" }],
  
  [{ title: "➕ Add Bot", command: "/add_bot" }, { title: "🤖 Switch Bot", command: "/switch_bot" }],
  
  ];

Bot.sendInlineKeyboard(button,
  "*Welcome To Menu Builder Bot*\n\n"+
  "🧪 *Current Account:* `" + currentAccount + "`\n"+
  "⚙️ *Current Bot:* `" + currentBot + "`\n"+
  "⚕️ *Api:* `" + api + "`\n"+
  "🤖 *Bot ID:* `" + botid + "`\n\n"+
  " 😊 *Everything is yours, Just iterations are mine*"
);

