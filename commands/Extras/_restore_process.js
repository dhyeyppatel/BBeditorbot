/*CMD
  command: /restore_process
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Extras

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

try {
  var data = JSON.parse(message);

  if (!data.accounts || typeof data.accounts !== "object") {
    Bot.sendMessage("❌ Invalid backup format. Please use a valid backup.");
    return;
  }

  var version = data.version || "unknown";

  if (version !== "1.0") {
    Bot.sendMessage("⚠️ Warning: Backup version is '" + version + "'. Expected '1.0'. Trying to restore anyway...");
  }

  // Normalize accounts
  var fixedAccounts = {};
  for (var acc in data.accounts) {
    var accData = data.accounts[acc];
    if (!accData.bots || typeof accData.bots !== "object") {
      accData.bots = {};
    }
    fixedAccounts[acc] = {
      token: accData.token,
      bots: accData.bots
    };
  }

  User.setProperty("accounts", fixedAccounts, "json");
  User.setProperty("current_account", data.current_account || "", "string");
  User.setProperty("current_bot", data.current_bot || "", "string");

  Bot.sendMessage("✅ Backup (v" + version + ") restored successfully!\n\nUse /alldetails or /start to verify.");
} catch (err) {
  Bot.sendMessage("❌ Error parsing JSON:\n" + err.message);
}

