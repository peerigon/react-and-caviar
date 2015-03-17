"use strict";

var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var EventEmitter = require("events");
var messageConstants = require("../../shared/constants/message.js");

var handlers = {};
var messages = {};
var MessageStore = new EventEmitter();


handlers[messageConstants.SEND] = function (action) {
    messages['temp-'+action.ticketID] = {
        id: 'temp-'+action.ticketID,
        text: action.text,
        timestamp: action.timestamp
    };
    MessageStore.emit(MessageStore.EVENTS.CHANGE);
};

handlers[messageConstants.DELIVERED] = function (action) {
    var message = messages['temp-'+action.ticketID];
    message.id = action.id;
    delete messages['temp-'+action.ticketID];
    messages[action.id] = message;

    MessageStore.emit(MessageStore.EVENTS.CHANGE);
};

MessageStore.EVENTS = {
    CHANGE: "change"
};

MessageStore.getAll = function() {
    return Object.keys(messages).map(function(key) {
        return messages[key];
    });
}

MessageStore.dispatchToken = AppDispatcher.register(function (action) {
    var handler = handlers[action.actionType];

    if (handler) {
        handler(action);
    }
});

module.exports = MessageStore;
