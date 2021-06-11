import React from 'react'
import { Button, Container, Grid } from '@material-ui/core'
import { IconDemo } from './IconDemo'
import './App.css'

const ENV_API_URL = process.env.REACT_APP_API_URL || '!!! ENV WAS MISSING URL !!!'

function App() {
	return (
		<Container maxWidth="sm" className="app">
			<Container className="header">
				<h2>Simple CRA App</h2>
			</Container>
			<Container>
				<p>Welcome to Anthony and Vinny's Simple CRA App®!</p>
				<Grid container alignItems="center" justify="center" style={{ margin: '0 0 1rem 0' }}>
					<Grid item>
						API
					</Grid>
					<Grid item style={{ margin: '0 1rem 0 1rem' }}>
						<input disabled readOnly value={ENV_API_URL} style={{ }} />
					</Grid>
					<Grid item>
						<Button color="primary" variant="contained" style={{ }}>Test</Button>
					</Grid>
				</Grid>
				<IconDemo/>
			</Container>
			<Container className="footer">
				Anthony Williams, Vincent Leighton
				<br/>
				© 2021, Most rights reserved
			</Container>
		</Container>
	)
}

export default App
