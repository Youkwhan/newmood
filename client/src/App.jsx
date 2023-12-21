import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./scenes/Home/Home"
import ItemDetails from "./scenes/itemsDetails/ItemDetails"
import Checkout from "./scenes/checkout/Checkout"
import Confirmation from "./scenes/checkout/Confirmation"
import Navbar from "./scenes/global/Navbar"
import CartMenu from "./scenes/global/CartMenu"
// When redirected to a page, start at the top of the page.
const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="item/:itemId" element={<ItemDetails />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="checkout/success" element={<Confirmation />} />
				</Routes>
				<CartMenu />
			</BrowserRouter>
		</div>
	)
}

export default App
