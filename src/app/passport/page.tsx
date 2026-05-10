import Link from 'next/link'
import PassportCard from '@/components/passport/PassportCard'

function BackArrow() {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
			<path
				d='M19 12H5M5 12L12 19M5 12L12 5'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function ShareIcon() {
	return (
		<svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
			<path
				d='M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default function PassportPage() {
	return (
		<div className='min-h-screen bg-black text-white'>
			<div className='flex items-center justify-between px-4 pt-5 pb-4'>
				<div className='flex items-center gap-3'>
					<Link href='/'>
						<BackArrow />
					</Link>
					<h1 className='text-xl font-bold'>Паспорт РФ</h1>
				</div>
				<button>
					<ShareIcon />
				</button>
			</div>

			<div className='mt-2'>
				<PassportCard />
			</div>
		</div>
	)
}
