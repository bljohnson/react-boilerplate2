var React = require('react');

// create Main component
// var Main = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<Nav/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });

// use stateless functional component to create Main component
var Main = (props) => {
	return(
		<div>
			<div>
				<div>
					<p>Main.jsx rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;
