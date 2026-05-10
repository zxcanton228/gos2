export default function Header() {
	return (
		<div className='flex items-center gap-3 px-4 pt-5 pb-2'>
			<div className='relative flex-shrink-0'>
				<div className='w-11 h-11 rounded-full bg-gradient-to-br from-[#c0392b] to-[#e74c3c] flex items-center justify-center'>
					<span className='text-white font-bold text-lg'>А</span>
				</div>
				<div className='absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0c1220]' />
			</div>

			<div className='flex items-center gap-1'>
				<span className='text-white font-bold text-lg tracking-wide'>
					Кирилл
				</span>
				<svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
					<path
						d='M9 18l6-6-6-6'
						stroke='#5d7290'
						strokeWidth='2.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>

			<div className='flex-1' />

			<button className='p-1'>
				<svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
					<circle cx='11' cy='11' r='8' stroke='white' strokeWidth='2' />
					<path
						d='M21 21L16.65 16.65'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
					/>
				</svg>
			</button>

			<div className='relative'>
				<button className='p-1'>
					<svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
						<path
							d='M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M13.73 21a2 2 0 01-3.46 0'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
				<div className='absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full' />
			</div>

			<button className='border border-[#374563] rounded-lg px-2.5 py-1 flex-shrink-0'>
				<span className='text-white/80 text-xs font-medium'>[госкан]</span>
			</button>
		</div>
	)
}
