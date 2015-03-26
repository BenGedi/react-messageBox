var React = require('react');

var SubMessage = React.createClass({displayName: "SubMessage",

	handleDelete: function (e){
		console.log(this.props);
		console.log(this.props.onDelete());
		this.props.onDelete(this.props.message);
	},

	// set a required PropType
	propTypes: {
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function () {
		return {
			message: 'Its good to see you'
		};
	},

	render: function() {
		return (
			<div key="SubMessage">
				{this.props.message}
				<button onClick={this.handleDelete} className="btn btn-danger">x</button>
			</div>
		);
	}
});

module.exports = SubMessage;
