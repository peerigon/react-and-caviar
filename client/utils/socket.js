'use strict';

var io = require('socket.io-client');
var socket = io('http://localhost:3000');
var messageConstants = require('../../shared/constants/message');
var MessageActions = require('../actions/message');

socket.on(messageConstants.DELIVERED, function(data) {
    MessageActions.messageDelivered(data.ticketID, data.id);
});

module.exports = socket;
