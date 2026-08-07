import './JustForYou.scss'
import JustForYouSlider from './JustForYouSlider'

function JustForYou() {
	return (
		<section className='justForYou'>
			<h2 className='justForYou__title subtitle-lg'>Just for You</h2>

			<img
				className='decor-line'
				src='/src/assets/icons/decorLine.svg'
				alt=''
			/>

			<JustForYouSlider />
		</section>
	)
}

export default JustForYou
