const Cryptr = require('cryptr');
const cryptTech = new Cryptr('unicodezSeceretKey');

export const encrypt = (str) => { return cryptTech.decrypt(str) }
