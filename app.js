const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!topDonations') {
		axios({
			method: 'get',
			url: 'https://try.donordrive.com/api/participants'
		}).then(function(response){
			// log call in db
			message.channel.send({embed : {
				color: 3447003,
				description:
			}})
		})
	}
})

client.login(config.token);
