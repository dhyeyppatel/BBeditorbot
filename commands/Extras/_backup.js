/*CMD
  command: /backup
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Extras

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var accounts = User.getProperty("accounts") || {};

if (Object.keys(accounts).length === 0) {
  Bot.sendMessage("❌ No data to backup.");
  return;
}

var backup = {
  version: "1.0",
  accounts: accounts,
  current_account: User.getProperty("current_account") || null,
  current_bot: User.getProperty("current_bot") || null
};

var backupText = JSON.stringify(backup, null, 2);

// Send backup using Api.sendMessage to get message_id
Api.sendMessage({
  chat_id: user.telegramid,
  text: "*📦 Your Full Backup (v1.0):*\n\n" +
        "🔐 This is your personal export of all saved accounts and bots.\n" +
        "⚠️ Keep this safe and do not share it.\n\n" +
        "🗂️ Backup Data ↓\n" +
        "```json\n" + backupText + "\n```",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🗑 Delete Now", callback_data: "/delete_this_backup" }]
    ]
  }
});

