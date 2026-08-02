function CategoryTabs({ categories, activeCategory, onChange }) {
	return (
		<div className='tabs'>
			{categories.map(category => (
				<button
					key={category}
					className={activeCategory === category ? 'active' : ''}
					onClick={() => onChange(category)}
				>
					{category}
				</button>
			))}
		</div>
	)
}

export default CategoryTabs