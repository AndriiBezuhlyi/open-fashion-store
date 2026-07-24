import './Header.scss'

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__burger'>
						<div className='header__burger-icon'>
							<img src='/src/assets/icons/Menu.svg' alt='menu' />
						</div>
					</div>
					<div className='header__logo'>
						<a href='/' className='header__logo-link'>
							<img src='/src/assets/images/logo-svg.svg' alt='logo' />
						</a>
					</div>
					<div className='header__nav'>
						<div className='header__nav-search'>
							<img src='/src/assets/icons/search.svg' alt='search' />
						</div>
						<div className='header__nav-cart'>
							<img src='/src/assets/icons/cart.svg' alt='cart' />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
