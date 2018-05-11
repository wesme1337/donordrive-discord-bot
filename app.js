const Discord = require('discord.js');
const axios = require('axios';);
const client = new Discord.Client();
const config = require('config.json');

client.on('ready', () => {
    console.log('Ready!');
});

if (message.contet === '!topDonations') {

}

client.login(config.token);
