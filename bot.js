const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'You will die',
     details: `Fuck You`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `I'm Alone`,
    application_id: '350547695569600522',
     assets: {
        small_image: `515716252099149829`,
        small_text: 'هاي يوتيوب',
        large_image: `517118333817192468`,
        large_text: `هاي يوتيوب` }

  }
    });
});
اقولها

client.login(process.env.TOKEN4);// لا تغير فيها شيء
