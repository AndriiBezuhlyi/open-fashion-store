import './ProductCards.scss'

function ProductCard({ product }) {
	return (
		<article className='productCard'>
			<img className='productCard__img' src={product.image} alt={product.title} />
			<h3 className='productCard__title body-xs'>{product.title}</h3>
			<p className='productCard__price'>${product.price}</p>
		</article>
	)
}

export default ProductCard
