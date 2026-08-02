import { useState } from 'react'
import { products } from '../../../data/products'
import CategoryTabs from './CategoryTabs'
import ProductGrid from './ProductGrid'

function NewArrivals() {
	const [category, setCategory] = useState('All')

	const categories = ['All', 'Apparel', 'Dress', 'Tshirt', 'Bag']

	const filteredProducts =
		category === 'All'
			? products
			: products.filter(product => product.category === category)

	return (
		<section className='newArrivals'>
			<h2>New Arrival</h2>

			<CategoryTabs
				categories={categories}
				activeCategory={category}
				onChange={setCategory}
			/>

			<ProductGrid products={filteredProducts} />
		</section>
	)
}

export default NewArrivals
