// commands/ping.js
module.exports = () => ({
  name: "ping",
  description: "Ping!",
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
});
