var React = require("react");
var ChatHistory = require("./ChatHistory.jsx");

var ChatApp = React.createClass({
    getInitialState: function () {
        return {
            messages: [
                { id: "bla", text: "Hello" }
            ]
        };
    },
    render: function () {
        return (
            <div>
                <h1>Sepp Chat</h1>
                <h2>From the creators of servus.js</h2>
                <ChatHistory messages={this.state.messages} />
            </div>
        );
    }
});

module.exports = ChatApp;
