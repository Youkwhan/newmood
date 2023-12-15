import { useEffect } from "react"
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	useLocation,
} from "react-router-dom"
import Home from "./scenes/Home/Home"
import ItemDetails from "./scenes/itemsDetails/ItemDetails"
import Checkout from "./scenes/checkout/Checkout"
import Confirmation from "./scenes/checkout/Confirmation"

// When redirected to a page, start at the top of the page.
const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Home />}>
			<Route path="item/:itemId" element={<ItemDetails />} />
			<Route path="checkout" element={<Checkout />} />
			<Route path="checkout/success" element={<Confirmation />} />
		</Route>
	)
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
