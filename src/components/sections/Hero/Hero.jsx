import './Hero.scss'

import HeroSlider from './HeroSlider'

function Hero() {
	return (
		<section className='hero'>
			<HeroSlider />

			<div className='hero__content'>
				<h1 className='hero__title heading-italic'>
					<span>Luxury</span>
					<span>Fashion</span>
					<span>
						<span>&</span>Accessories
					</span>
				</h1>

				<a href='/' className='hero__explore subtitle-sm'>
					Explore Collection
				</a>
			</div>
		</section>
	)
}

export default Hero
