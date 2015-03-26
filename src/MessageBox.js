var React = require('react');
var SubMessage = require('./SubMessage');

var MessageBox = React.createClass({displayName: "MessageBox",

	getInitialState: function () {
		return {
			messages: 	[
							'I like the world',
							'Coffee flavored ice cream is highly underrated',
							'My spoon is too big',
							'Tuesday is coming. did you bring your coat?',
							'I am a banana'
						],
			value: ''
		};
	},

	deleteMessage: function (msg) {
		// using Lodash lib to remove a specific 'message' form the state 'messages' array
		var newMessages = _.without(this.state.messages, msg);

		// after changing the messages state we need to rerender virtual node
		//  to present the new state of the 'messages' array.
		this.setState({
			messages: newMessages
		});
	},

	handleAdd: function(e) {
		var newMessage = this.refs.newMessage.getDOMNode().value;

		if(newMessage === ''){
			return;
		}

		// contact create new Array (based on the current state) with the current Array 'messages'
		// and the new message from the input.
		var newMessages = this.state.messages.concat([newMessage]);

		// setState rerender the page
		this.setState({
			// initial the messages state with the newMessages array
			messages: newMessages,
			// reset the input value state
			value: ''
		});

		// focus on input after adding new message
		this.refs.newMessage.getDOMNode().focus();
	},

	// rerender the virtual DOM each type
	handleChange: function(evt) {
		this.setState({
			value: evt.target.value
		});
	},

	render: function() {

		/** Child Reconciliation
		* Reconciliation is the process by which React updates the DOM
		* with each new render pass.
		* children are reconciled according to the order in which they are rendered.
		*
		* Basically it create new virtual DOM node and compered to the current one
		* and render only the difference between them.
		*/

		var messages = this.state.messages.map(function(msg) {
			return <SubMessage message={msg} onDelete={this.deleteMessage}/>
		}.bind(this));
		// bind 'this' to the component
		//(without the bind function 'this' is referred to the window)

		return (
			<div className="container jumbotron" key="MessageBox" >
				<h2>Hello, World</h2>
				<input type="text" ref="newMessage" value={this.state.value} onChange={this.handleChange} />
				<button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
				{ messages }
			</div>
		);
	}
});

module.exports = MessageBox;
