#!/usr/bin/env node

const chalk = require('chalk');
const axios = require('axios');

const BORED_API = 'https://boredapi.com/api/activity/';

console.log('i am bored...');

const message = chalk.blue('me too...');

console.log(message);

axios.get(BORED_API)
    .then(printActivity)
    .catch(handleError);

function printActivity(responce) {
    const { activity,
        type,
        accessibility,
        participants,
        price } = responce.data;
    const message = `we could ${activity} which costs $${price} additionaly, this ${type} activity only requires ${participants} ${participants === 1 ? `person` : `people`} and ${accessibility} effort.`;
    console.log(chalk.green.bold(message));
}

function handleError(error) {
    const message = `encontered Error: ${error}`;
    console.log(chalk.red.bold(message));
}