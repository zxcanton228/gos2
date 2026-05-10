import Link from 'next/link'
import PassportCard from '@/components/passport/PassportCard'

export default function PassportPage() {
	return (
		<div className='min-h-screen bg-black text-white'>
			{/* Header */}
			<div className='flex items-center justify-between px-5 pt-14 pb-5'>
				<div className='flex items-center gap-4'>
					<Link href='/' className='flex items-center'>
						<svg width='26' height='26' viewBox='0 0 24 24' fill='none'>
							<path
								d='M19 12H5M5 12L12 19M5 12L12 5'
								stroke='white'
								strokeWidth='2.2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</Link>
					<h1 className='text-[22px] font-bold text-white'>Паспорт РФ</h1>
				</div>

				<button>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
						<path
							d='M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13'
							stroke='white'
							strokeWidth='2.2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>

			{/* Passport card */}
			<PassportCard />
		</div>
	)
}
