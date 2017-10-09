// Import React/Redux stuff
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store';
import routes from './routes';
import $ from 'jquery';

// Import css
// import 'admin-lte/dist/css/skins/skin-purple.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'admin-lte/dist/css/AdminLTE.min.css';
// import 'ionicons/css/ionicons.min.css';

window.jQuery = window.$ = $;
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');

let rootElement = document.getElementById('wrapper');
render((
	<Provider store={store}>
		{routes}
	</Provider>
), rootElement);
registerServiceWorker();
