import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
import Brands from './components/sections/Brands/Brands'
import Collections from './components/sections/Collections/Collections'
import Hero from './components/sections/Hero/Hero'
import NewArrivals from './components/sections/NewArrival/NewArrivals'

function App() {
	return (
		<>
			<Header />
			<Hero />
			<NewArrivals />
			<Brands />
			<Collections />
			<Footer />
		</>
	)
}

export default App
