import './Footer.scss'

function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='footer__social'>
						<li className='footer__social-icon'>
							<a href='/'>
								<img src='/src/assets/icons/twitter.svg' alt='twitter link' />
							</a>
						</li>
						<li className='footer__social-icon'>
							<a href='/'>
								<img
									src='/src/assets/icons/instagram.svg'
									alt='instargam link'
								/>
							</a>
						</li>
						<li className='footer__social-icon'>
							<a href='/'>
								<img src='/src/assets/icons/youtube.svg' alt='youtube link' />
							</a>
						</li>
					</ul>
					<div className='footer__decorLine'>
						<img src='/src/assets/icons/decorLine.svg' alt='' />
					</div>
					<div className='footer__info'>
						<a className='footer__info-item body-md' href='/'>
							support@openui.design
						</a>
						<a className='footer__info-item body-md' href='/'>
							+60 825 876
						</a>
						<p className='footer__info-item body-md'>
							08:00 - 22:00 - Everyday
						</p>
					</div>
					<div className='footer__decorLine'>
						<img src='/src/assets/icons/decorLine.svg' alt='' />
					</div>
					<ul className='footer__nav'>
						<li className='footer__nav-item'>
							<a className='footer__nav-link body-md' href='/'>
								About
							</a>
						</li>
						<li className='footer__nav-item'>
							<a className='footer__nav-link body-md' href='/'>
								Contact
							</a>
						</li>
						<li className='footer__nav-item'>
							<a className='footer__nav-link body-md' href='/'>
								Blog
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer__copyright body-xs'>
				Copyright© OpenUI All Rights Reserved.
			</div>
		</footer>
	)
}

export default Footer
