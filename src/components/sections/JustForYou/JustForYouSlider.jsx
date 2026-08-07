import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { products } from '../../../data/products'
import ProductCard from '../../common/ProductCard/ProductCard'

import 'swiper/css'
import 'swiper/css/pagination'
import './JustForYouSlider.scss'

function JustForYouSlider() {
	return (
		<Swiper
			className='justForYou-slider'
			modules={[Autoplay, Pagination]}
			autoplay={{
				delay: 5000,
			}}
			pagination={{
				clickable: true,
			}}
			loop
		>
			{products.map(product => (
				<SwiperSlide key={product.id}>
					<ProductCard key={product.id} product={product} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default JustForYouSlider
