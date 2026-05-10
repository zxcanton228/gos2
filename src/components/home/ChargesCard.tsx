export default function ChargesCard() {
	return (
		<div className='rounded-2xl bg-[#111827] px-5 py-4 flex items-center justify-between'>
			<div>
				<h3 className='text-white font-bold text-[17px]'>Нет начислений</h3>
				<p className='text-[#5d7290] text-sm mt-0.5'>уточните данные</p>
			</div>
			<svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
				<path
					d='M6 9l6 6 6-6'
					stroke='#5d7290'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}
