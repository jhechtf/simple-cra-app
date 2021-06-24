import { Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ConfigPage } from '../ConfigPage/ConfigPage'
import { IconDemo } from '../IconDemo'
import { Nav } from '../Nav/Nav'
import { PageNotFoundPage } from '../PageNotFoundPage/PageNotFoundPage'
import { ApiService } from '../services/ApiService'
import './App.css'

function App() {
	const ENV_API_URL =
		process.env.REACT_APP_API_URL || '!!! ENV WAS MISSING URL !!!'

	const [api, setApi] = useState(new ApiService(ENV_API_URL))
	const ApiContext = React.createContext(api)

	useEffect(() => {
		setApi(new ApiService(ENV_API_URL))
	}, [ENV_API_URL])

	return (
		<ApiContext.Provider value={api}>
			<Container maxWidth="sm" className="app">
				<BrowserRouter>
					<Container className="header">
						<Typography variant="h2" align="center" gutterBottom>
							Simple CRA App
						</Typography>
						<Nav />
					</Container>
					{/* Content outside of <Switch> renders on every page */}
					<Switch>
						<Route path="/" exact>
							{/* Home page */}
							<Container>
								<Typography variant="body1" align="center" gutterBottom>
									Welcome to Anthony and Vinny's Simple CRA App®!
								</Typography>
							</Container>
						</Route>
						<Route path="/config">
							{/* Config page */}
							<ConfigPage api={api} />
						</Route>
						<Route path="/icons">
							{/* Icon demo page */}
							<IconDemo />
						</Route>
						<Route path="/">
							{/* Not Found page */}
							<PageNotFoundPage />
						</Route>
					</Switch>
				</BrowserRouter>
				<Container className="footer">
					<Typography variant="body2" align="center" gutterBottom>
						Anthony Williams, Vincent Leighton
						<br />© 2021, Most rights reserved
					</Typography>
				</Container>
			</Container>
		</ApiContext.Provider>
	)
}

export default App
