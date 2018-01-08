const fs = require('fs');
const readline = require('readline');
const dns = require('dns');

const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Domain name: ', (answer) => {
    dns.lookup(answer, options, (err, address, family) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('address: %s', address.substring(7));
        }
    });
    rl.close();
});