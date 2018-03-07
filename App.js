import React from 'react'
import { Provider } from 'react-redux'
import { NativeRouter } from 'react-router-native'
import createStore from './src/store'
import { Font } from 'expo'

import TheUsual from './src/containers/Usual';

const store = createStore();

export default class App extends React.Component {
	render() {
		return (
			<NativeRouter>
				<Provider store={ store }>
					<TheUsual />
				</Provider>
			</NativeRouter>
		);
	}
}
