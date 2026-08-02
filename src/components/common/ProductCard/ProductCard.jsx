function ProductCard({ product }) {
	return (
		<article className='product__card'>
			<img src={product.image} alt={product.title} />
			<h3>{product.title}</h3>
			<p>{product.price}</p>
		</article>
	)
}

export default ProductCard
