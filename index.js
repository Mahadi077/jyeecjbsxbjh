const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1203567972988362792')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/@ELITE-TRUCKER_OG') //Must be a youtube video link 
    .setState('🔶 | ETL VTC CEO')
    .setName('EL!TE')
    .setDetails(`🪐 | PLAY WITH US!`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/icons/1066109573544554647/a_f163b60f58c046aab1016f0c18ed565e.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('ELITE TRUCKERS LOGISTICS') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1153277068797292567/1203638200451596288/1707040109579.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('ETS2 with Elite Truckers!') //Text when you hover the Small image
    .addButton('TRUCKERSMP', 'https://truckersmp.com/vtc/60317')
    .addButton('TRUCKSBOOK', 'https://trucksbook.eu/company/167843')
    .addButton('ETL VTC 🧡', 'https://elitetruckerslogistics.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
