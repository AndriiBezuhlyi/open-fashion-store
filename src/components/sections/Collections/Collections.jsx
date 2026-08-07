import { useRef, useState } from 'react'
import './Collections.scss'

function Collections() {
	const videoRef = useRef(null)

	const [isPlaying, setIsPlaying] = useState(false)

	const handlePlay = () => {
		videoRef.current.play()
		setIsPlaying(true)
	}

	return (
		<section className='collections'>
			<h2 className='collections__title heading-md'>Collections</h2>

			<article className='collections__october'>
				<img
					src='/src/assets/images/collection-1.png'
					alt='October Collection'
					className='collections__october-img'
				/>

				<span className='collections__october-number'>10</span>

				<h3 className='collections__october-title'>
					<span className='heading-italic'>October</span>
					<span className='body-xs text-uppercase'>Collection</span>
				</h3>
			</article>

			<div className='container'>
				<article className='collections__autumn'>
					<img
						src='/src/assets/images/collection-2.png'
						alt='Autumn Collection'
						className='collections__autumn-img'
					/>
					<h3 className='collections__autumn-title'>
						<span className='heading-italic'>Autumn</span>
						<span className='body-xs text-uppercase'>Collection</span>
					</h3>
				</article>
			</div>

			<div className='collections__video'>
				<video
					className='collections__video-player'
					ref={videoRef}
					playsInline
					preload='metadata'
					onEnded={() => setIsPlaying(false)}
				>
					<source
						src='/src/assets/videos/collectionsVideo.mp4'
						type='video/mp4'
					/>
				</video>

				{!isPlaying && (
					<button onClick={handlePlay} className='collections__video-play'>
						<img src='/src/assets/icons/play.svg' alt='Play video' />
					</button>
				)}
			</div>
		</section>
	)
}

export default Collections
