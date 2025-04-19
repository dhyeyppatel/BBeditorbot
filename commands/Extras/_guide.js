/*CMD
  command: /guide
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

Bot.sendMessage(
"*📘 HOW TO USE THIS BOT:*\n\n" +
"1️⃣ /add_account — Add your BB App API Key (give it a name, like email)\n" +
"2️⃣ /add_bot — Add a bot under that account (give it a name and bot ID)\n" +
"3️⃣ /switch_account — Switch between saved accounts\n" +
"4️⃣ /switch_bot — Switch between bots under the selected account\n\n" +
"5️⃣ /add — Add new commands to the currently selected bot\n" +
"      ↳ You’ll enter command name, answer, wait (true/false), and BJS code\n\n" +
"6️⃣ /current — View your currently selected account and bot\n" +
"7️⃣ /alldetails — See all saved accounts and their bots\n\n" +
"🗑️ /delete_acc — Delete a saved account\n" +
"🗑️ /delete_bot — Delete a saved bot\n" +
"✏️ /rename_acc — Rename account name\n" +
"✏️ /rename_bot — Rename bot name\n\n" +
"🛡️ /privacy — View privacy info\n\n" +
"🎯 All commands are added to Bots.Business using your API key.\n" +
"Make sure your keys are correct. We never share your data 🔐"
);

