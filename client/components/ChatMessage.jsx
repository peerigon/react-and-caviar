'use strict';

var React = require('react');
var moment = require('moment');
moment.locale('de');

var ChatMessage = React.createClass({
    render: function () {
        return (

            <p><span>{moment(this.props.message.timestamp).fromNow()}</span>: {this.props.message.text}</p>

        );
    }
});

module.exports = ChatMessage;
