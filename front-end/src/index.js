import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheets/styles.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.js';
import Home from './home/Home.js'
import Events from './events/Events.js'
import Registry from './registry/Registry.js'
import WeddingParty from './weddingparty/WeddingParty.js'
import Travel from './travel/Travel.js'
import ThingsToDo from './thingstodo/ThingsToDo.js'
import Photos from './photos/Photos.js'
import RSVP from './rsvp/RSVP.js'


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Route path="events" component={Events} />
			<Route path="registry" component={Registry} />
			<Route path="weddingparty" component={WeddingParty} />
			<Route path="travel" component={Travel} />
			<Route path="thingstodo" component={ThingsToDo} />
			<Route path="photos" component={Photos} />
			<Route path="rsvp" component={RSVP} />
		</Route>
	</Router>,	
  document.getElementById('root')
);

