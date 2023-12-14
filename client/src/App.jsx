import { useEffect } from "react"
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	useLocation,
} from "react-router-dom"

// When redirected to a page, start at the top of the page.
const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Home />} />)
)

function App() {
	return (
		<div className="app">
			<ScrollToTop />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
