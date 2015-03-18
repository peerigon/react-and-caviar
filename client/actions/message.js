'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var socket = require('../utils/socket');
var constants = require('../../shared/constants/message');

var ticketID = 0;

function getNextTicketID() {
    return ticketID++;
}

exports.sendMessage = function (text) {
    var timestamp = Date.now();
    var ticketID = getNextTicketID();
    AppDispatcher.dispatch({
        actionType: constants.SEND,
        text: text,
        timestamp: timestamp,
        ticketID: ticketID
    });
    socket.emit(constants.SEND, {
        text: text,
        timestamp: timestamp,
        ticketID: ticketID
    });
};

exports.messageDelivered = function(ticketID, id) {
    AppDispatcher.dispatch({
        actionType: constants.DELIVERED,
        ticketID: ticketID,
        id: id
    });
};
