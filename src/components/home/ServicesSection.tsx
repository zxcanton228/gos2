function HealthIcon() {
	return (
		<svg width='28' height='28' viewBox='0 0 24 24' fill='none'>
			<path
				d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'
				stroke='#7a9ac5'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function AutoIcon() {
	return (
		<svg width='28' height='28' viewBox='0 0 24 24' fill='none'>
			<circle cx='12' cy='12' r='10' stroke='#7a9ac5' strokeWidth='1.8' />
			<circle cx='12' cy='12' r='3' stroke='#7a9ac5' strokeWidth='1.8' />
			<path d='M12 2v3M12 19v3M2 12h3M19 12h3' stroke='#7a9ac5' strokeWidth='1.8' strokeLinecap='round' />
		</svg>
	)
}

function SchoolIcon() {
	return (
		<svg width='28' height='28' viewBox='0 0 24 24' fill='none'>
			<path
				d='M22 10v6M2 10l10-5 10 5-10 5-10-5z'
				stroke='#7a9ac5'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6 12v5c0 2.21 2.686 4 6 4s6-1.79 6-4v-5'
				stroke='#7a9ac5'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function OtherIcon() {
	return (
		<svg width='28' height='28' viewBox='0 0 24 24' fill='none'>
			<rect x='3' y='3' width='7' height='7' rx='1.5' stroke='#7a9ac5' strokeWidth='1.8' />
			<rect x='14' y='3' width='7' height='7' rx='1.5' stroke='#7a9ac5' strokeWidth='1.8' />
			<rect x='3' y='14' width='7' height='7' rx='1.5' stroke='#7a9ac5' strokeWidth='1.8' />
			<rect x='14' y='14' width='7' height='7' rx='1.5' stroke='#7a9ac5' strokeWidth='1.8' />
		</svg>
	)
}

const services = [
	{ id: 'health', label: 'Здоровье', Icon: HealthIcon },
	{ id: 'auto', label: 'Авто', Icon: AutoIcon },
	{ id: 'school', label: 'Моя школа', Icon: SchoolIcon },
	{ id: 'other', label: 'Другие', Icon: OtherIcon },
]

export default function ServicesSection() {
	return (
		<div className='rounded-2xl bg-[#111827] p-4'>
			<h2 className='text-white font-bold text-base mb-4'>Сервисы и приложения</h2>
			<div className='flex justify-between'>
				{services.map(({ id, label, Icon }) => (
					<button key={id} className='flex flex-col items-center gap-2'>
						<div className='w-16 h-16 rounded-[14px] bg-[#1a2540] flex items-center justify-center'>
							<Icon />
						</div>
						<span className='text-white text-xs'>{label}</span>
					</button>
				))}
			</div>
		</div>
	)
}
