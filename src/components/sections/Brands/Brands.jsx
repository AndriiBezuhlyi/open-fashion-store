import './Brands.scss'

function Brands() {
	return (
		<div className='brands'>
			<div className='container'>
				<img
					className='decor-line'
					src='/src/assets/icons/decorLine.svg'
					alt=''
				/>

				<div className='brands__grid'>
					<img
						src='/src/assets/icons/prada.svg'
						alt=''
						className='brands__logo'
					/>
					<img
						src='/src/assets/icons/burberry.svg'
						alt=''
						className='brands__logo'
					/>
					<img
						src='/src/assets/icons/boss.svg'
						alt=''
						className='brands__logo'
					/>
					<img
						src='/src/assets/icons/cartier.svg'
						alt=''
						className='brands__logo'
					/>
					<img
						src='/src/assets/icons/gucci.svg'
						alt=''
						className='brands__logo'
					/>
					<img
						src='/src/assets/icons/tiffany.svg'
						alt=''
						className='brands__logo'
					/>
				</div>

				<img
					className='decor-line'
					src='/src/assets/icons/decorLine.svg'
					alt=''
				/>
			</div>
		</div>
	)
}

export default Brands