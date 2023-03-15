const Cryptr = require('cryptr');
const cryptTech = new Cryptr('unicodezSeceretKey');

export const encrypt = (str) => { return cryptTech.decrypt(str) }
export const filterSlug = (str) => {
    let slug = str.split('@');
    if (slug[1] === 'hotmail.com' || slug[1] === 'live.com') {
        return false;
    }
    return true;
}
