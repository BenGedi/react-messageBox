var React = require('react'),
	MessageBox = require('./MessageBox');

var reactComponent = React.render(
	<MessageBox />,
	document.getElementById('app')
);
