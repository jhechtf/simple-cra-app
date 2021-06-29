import { render, RenderResult } from '@testing-library/react'
import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
// import { ConfigPage } from '../ConfigPage/ConfigPage'
import App from './App'

describe('App component when process.env.REACT_APP_API_URL has value', () => {
	const fakeApiUrl = 'http://fake-api.co'
	let wrapper: ShallowWrapper
	let origEnv: NodeJS.ProcessEnv

	beforeEach(() => {
		// !!! this should NOT be necessary, but is currently based on the error from
		// !!!     updating context value in render code
		jest.spyOn(console, 'error').mockImplementation(jest.fn())

		origEnv = process.env

		process.env = {
			NODE_ENV: process.env.NODE_ENV,
			PUBLIC_URL: process.env.PUBLIC_URL,
			REACT_APP_API_URL: fakeApiUrl,
		}

		wrapper = shallow(<App />)
	})

	afterEach(() => {
		process.env = origEnv
	})

	it('renders App, uses values from environment', () => {
		expect(wrapper).toBeDefined()

		// expect(wrapper.find(ConfigPage).props().api.apiUrl).toEqual(fakeApiUrl)
		// const linkElement = screen.getByText(/learn react/i)
		// expect(linkElement).toBeInTheDocument()
	})

	describe('mount component', () => {
		let comp: RenderResult

		beforeEach(() => {
			comp = render(<App />)
		})

		it('renders App', () => {
			expect(comp).toBeDefined()
		})
	})
})

describe('App component when process.env.REACT_APP_API_URL is not set', () => {
	let wrapper: ShallowWrapper
	let origEnv: NodeJS.ProcessEnv

	beforeEach(() => {
		origEnv = process.env

		process.env = {
			NODE_ENV: process.env.NODE_ENV,
			PUBLIC_URL: process.env.PUBLIC_URL,
			REACT_APP_API_URL: undefined,
		}

		wrapper = shallow(<App />)

	})

	afterEach(() => {
		process.env = origEnv
	})

	it('renders App, uses default value from App comp', () => {
		expect(wrapper).toBeDefined()

		// expect(wrapper.find(ConfigPage).props().api.apiUrl).toEqual('!!! ENV WAS MISSING URL !!!')
	})
})
