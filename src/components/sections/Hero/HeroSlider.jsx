import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import Photo from '../../../assets/images/home-hero.png'
import './HeroSlider.scss'

function HeroSlider() {
	const slides = [
		{
			id: 1,
			image: Photo,
			title: 'New Collection',
		},
		{
			id: 2,
			image: Photo,
			title: 'New Collection',
		},
		{
			id: 3,
			image: Photo,
			title: 'New Collection',
		},
	]

	return (
		<Swiper
			className='hero-slider'
			modules={[Autoplay, Pagination]}
			autoplay={{
				delay: 5000,
			}}
			pagination={{
				clickable: true,
			}}
			loop
		>
			{slides.map(slide => (
				<SwiperSlide key={slide.id}>
					<img src={slide.image} alt={slide.title} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default HeroSlider
