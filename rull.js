exports.run = function(api, event) {
    var x = Math.floor(Math.random() * (20 - 1)) + 1;
    api.sendMessage('uhh, ya rolled a '+x, event.thread_id);
};
