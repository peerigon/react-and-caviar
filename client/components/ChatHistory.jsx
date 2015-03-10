var React = require("react");
var ChatMessage = require("./ChatMessage.jsx");

var ChatHistory = React.createClass({
    render: function () {
        var history = this.props.messages.map(function (message) {
            return <li key={message.id}><ChatMessage message={message.text}/></li>;
        });

        return (
            <ol>{history}</ol>
        );
    }
});

module.exports = ChatHistory;
