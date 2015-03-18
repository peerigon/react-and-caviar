'use strict';

var React = require('react');
var MessageActions = require('../actions/message');

var ENTER_KEY_CODE = 13;

var MessageInput = React.createClass({

    render: function() {
        return (
            <div>
                <input type="text" ref="input" onKeyDown={this._onKeyDown}/>
            </div>
        );
    },

    _onKeyDown: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._submit(event.target.value);
        }
    },

    _submit: function(text) {
        MessageActions.sendMessage(text);
        this.refs.input.getDOMNode().value = '';
    }

});

module.exports = MessageInput;
