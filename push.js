var apitoken = process.env.APITOKEN;
var userkey = process.env.USERKEY;

var xhr = new XMLHttpRequest();
xhr.open("POST", https://api.pushover.net/1/messages.json, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    message: "This is a test message"
    token: apitoken
    user: userkey
}));
