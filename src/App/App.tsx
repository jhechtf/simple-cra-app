import { Container } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApiContextConsumer, ApiContextProvider } from '../ApiContext'
import {
	AppTitleContextConsumer,
	AppTitleContextProvider,
} from '../AppTitleContext'
import { ConfigPage } from '../ConfigPage/ConfigPage'
import { Footer } from '../Footer/Footer'
import { Home } from '../Home/Home'
import { IconDemo } from '../IconDemo'
import { Nav } from '../Nav/Nav'
import { PageNotFoundPage } from '../PageNotFoundPage/PageNotFoundPage'
import { SearchUsersPage } from '../SearchUsersPage/SearchUsersPage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<ApiContextProvider>
			<AppTitleContextProvider>
				<Nav />
				<Container maxWidth="sm" className="app">
					<BrowserRouter>
						{/* Content outside of <Switch> renders on every page */}
						<Switch>
							<Route path="/" exact>
								{/* Home page */}
								<AppTitleContextConsumer>
									{(context) => {
										context.setTitle('Home')

										return <Home />
									}}
								</AppTitleContextConsumer>
							</Route>
							<Route path="/config">
							<AppTitleContextConsumer>
									{(context) => {
										context.setTitle('Config Page')

										return <ConfigPage />
									}}
								</AppTitleContextConsumer>
							</Route>
							<Route path="/icons">
								<AppTitleContextConsumer>
									{(context) => {
										context.setTitle('Icon Demo')

										return <IconDemo />
									}}
								</AppTitleContextConsumer>
							</Route>
							<Route path="/search-users" exact>
								<ApiContextConsumer>
									{({ api }) => (
										<AppTitleContextConsumer>
											{(context) => {
												context.setTitle('Search Users')

												return (
													<SearchUsersPage
														api={api}
													/>
												)
											}}
										</AppTitleContextConsumer>
									)}
								</ApiContextConsumer>
							</Route>
							<Route path="/">
								<PageNotFoundPage />
							</Route>
						</Switch>
					</BrowserRouter>
					<Footer />
				</Container>
			</AppTitleContextProvider>
		</ApiContextProvider>
	)
}

export default App
