import './CategoryTabs.scss'

function CategoryTabs({ categories, activeCategory, onChange }) {
	return (
		<div className='tabs'>
			{categories.map(category => (
				<button
					key={category}
					className={`tabs__button body-sm ${activeCategory === category ? 'tabs__button-active' : ''}`}
					onClick={() => onChange(category)}
				>
					{category}
				</button>
			))}
		</div>
	)
}

export default CategoryTabs
