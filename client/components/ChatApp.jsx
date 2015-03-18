'use strict';

var React = require('react');
var ChatHistory = require('./ChatHistory.jsx');
var MessageStore = require('../stores/MessageStore');
var MessageInput = require('./MessageInput.jsx');



var ChatApp = React.createClass({
    getInitialState: function () {
        return {
            messages: MessageStore.getAll()
        };
    },
    componentDidMount: function() {
        MessageStore.on(MessageStore.EVENTS.CHANGE, this._onChange);
    },
    componentWillUnmount: function() {
        MessageStore.removeListener(MessageStore.EVENTS.CHANGE, this._onChange);
    },
    render: function () {
        return (
            <div>
                <h1>Sepp Chat</h1>
                <h2>From the creators of servus.js</h2>
                <ChatHistory messages={this.state.messages} />
                <MessageInput/>
            </div>
        );
    },
    _onChange: function() {
        this.setState({ messages: MessageStore.getAll() });
    }

});

module.exports = ChatApp;
