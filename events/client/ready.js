const config = require("../../config.json");
module.exports = async client => {
  console.log(`Bot: ${client.user.tag}\nChannels: ${client.channels.cache.size}\nServers: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}`);
}
