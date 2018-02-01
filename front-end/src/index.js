import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheets/styles.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.js';
import Home from './home/Home.js'
import About from './about/About.js'
import Services from './services/Services.js'
import Process from './process/Process.js'
import Gallery from './gallery/Gallery.js'
import Onlineshop from './onlineshop/Onlineshop.js'
import Blog from './blog/Blog.js'
import Contact from './contact/Contact.js'


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="services" component={Services} />
			<Route path="process" component={Process} />
			<Route path="gallery" component={Gallery} />
			<Route path="onlineshop" component={Onlineshop} />
			<Route path="blog" component={Blog} />
			<Route path="contact" component={Contact} />
		</Route>
	</Router>,	
  document.getElementById('root')
);

