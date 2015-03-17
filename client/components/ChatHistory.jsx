var React = require("react");
var ChatMessage = require("./ChatMessage.jsx");

var ChatHistory = React.createClass({
    render: function () {
        var history = this.props.messages.map(function (message) {
            return <li key={message.id}><ChatMessage message={message}/></li>;
        });

        return (
            <ol>{history}</ol>
        );
    }
});

module.exports = ChatHistory;
