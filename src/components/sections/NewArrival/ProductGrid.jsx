import ProductCard from '../../common/ProductCard/ProductCard'

function ProductGrid({ products }) {
  
  return (
    <div className="product__grid">
      {
        products.map(product => (
          <ProductCard
            key={product.id}
            product={product} />
        ))
      }
    </div>
  )
}

export default ProductGrid