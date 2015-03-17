"use strict";

var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var EventEmitter = require("events");
var message = require("../actions/message.js");

var handlers = {};
var messages = {};
var MessageStore = new EventEmitter();
var nextTempId = 0;

function getNextTempId() {
    return "message-temp-" + nextTempId++;
}

handlers[message.SEND] = function (action) {
    messages[getNextTempId()] = {

    };
};

MessageStore.EVENTS = {
    DRAFT: "draft"
};

MessageStore.dispatchToken = AppDispatcher.register(function (action) {
    var handler = handlers[action.actionType];

    if (handler) {
        handler(action);
    }
});

module.exports = MessageStore;
