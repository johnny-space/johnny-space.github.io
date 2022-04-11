// send notification to all instances of pushover adapter
sendTo("pushover", "message body");

// send notification to specific instance of pushover adapter
sendTo("pushover.1", "message body");

// To specify subject or other options
sendTo("pushover", {
   message:  'Test text', // mandatory - your text message
   title:    'SweetHome', // optional  - your message's title, otherwise your app's name is used
   sound:    'magic',     // optional  - the name of one of the sounds supported by device clients to override the user's default sound choice
                          //    pushover, bike, bugle, cashregister, classical, cosmic, falling,
                          //    gamelan, incoming, intermission, magic, mechanical, pianobar, siren,
                          //    spacealarm, tugboat, alien, climb, persistent, echo, updown, none
   priority: -1,          // optional
                          //    -1 to always send as a quiet notification,
                          //    1 to display as high-priority and bypass the user's quiet hours, or
                          //    2 to also require confirmation from the user
   token: 'API/KEY token' // optional
                          // add other than configured token to the call  
   url,                   // optional  - a supplementary URL to show with your message
   url_title,             // optional  - a title for your supplementary URL, otherwise just the URL is shown
   device,                // optional  - your user's device name to send the message directly to that device, rather than all of the user's devices
   timestamp              // optional  - a Unix timestamp of your message's date and time to display to the user, rather than the time your message is received by our API
   html                   // optional  - 1 to enable parsing of HTML formatting for bold, italic, underlined and font color
   monospace              // optional  - 1 to display the message in monospace font
                          //    either html or monospace is allowed
   file:                  '/opt/picture.png', // optional - attachment 
   file:                  { name: '/opt/picture.png', data: fs.readFileSync('/opt/picture.png') }, // optional - attachment 
});

// Example for HTML format in the message
sendTo("pushover", {
    message: 'This message includes <b>bold</b>, <i>italic</i> and <u>underlined</u> text <font color=green>in</font> <font color=#ffa500>different</font> <font color=red>colors</font>.',
    html:    1
});

// Example for monospace font in the message
sendTo("pushover", {
    message:   'This message is in monospace font.',
    monospace: 1
});
