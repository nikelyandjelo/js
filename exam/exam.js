'use strict';

const string = 'lyylyyylyyl rfjdjdjfjn-7443@yopmail.com lalalall emepakaca-7876@yopmail.com js please xullazorrope-6242@yopmail.com lolololo';

const getEmail = (string) => {
    const emails = []; 
    const array = string.split(' '); 
    for (const word of array) {
        if (isEmail(word)) {
            emails.push(word);
        }
    }
    return emails;
}

const isEmail = (email) => {
    const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExEmail.test(email.toLowerCase());
}

console.log(getEmail(string));