var React = require('react');
var ReactDOM = require('react-dom');
// ES6 object destructuring syntax - creates variable called Route and sets it equal to route property of react-router module, and etc.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// load Foundation. use css loader to enable require to load css file. use style loader to inject into html.
require('style!css!foundation-sites/dist/foundation.min.css')
// fire up Foundation
$(document).foundation();

// app custom css - load app styles module using css loader, then pass into style loader which adds it to html so visible in browser
require('style!css!sass!applicationStyles');

ReactDOM.render(
	// set up Router
	<Router history={hashHistory}>
		{/* define individual routes */}
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);
