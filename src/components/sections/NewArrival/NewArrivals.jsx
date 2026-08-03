import { useState } from 'react'
import { products } from '../../../data/products'
import CategoryTabs from './CategoryTabs'
import './NewArrivals.scss'
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
			<div className='container'>
				<h2 className='newArrivals__title subtitle-lg'>New Arrival</h2>
				<img className='newArrivals__img' src='/src/assets/icons/decorLine.svg' alt='' />

				<CategoryTabs
					categories={categories}
					activeCategory={category}
					onChange={setCategory}
				/>

				<ProductGrid products={filteredProducts} />
			</div>
		</section>
	)
}

export default NewArrivals
