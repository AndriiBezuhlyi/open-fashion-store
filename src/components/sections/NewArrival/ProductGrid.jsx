import ProductCard from '../../common/ProductCard/ProductCard'
import './ProductGrid.scss'

function ProductGrid({ products }) {
  
  return (
    <div className="productGrid">
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