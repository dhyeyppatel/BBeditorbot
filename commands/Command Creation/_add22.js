/*CMD
  command: /add22
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

User.setProperty("answer", message,"string")
Bot.sendMessage("📣 *If You Want Wait For Answer So Send* `true`*else send* `false`")
Bot.runCommand("/add33")

