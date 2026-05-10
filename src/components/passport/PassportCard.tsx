import Image from 'next/image'
import Link from 'next/link'
import { PASSPORT_DATA } from '@/constants/passport.constant'

function CopyIcon() {
	return (
		<svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
			<rect x='9' y='9' width='13' height='13' rx='2' stroke='#7d1729' strokeWidth='2' />
			<path
				d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'
				stroke='#7d1729'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	)
}

export default function PassportCard() {
	return (
		<div className='rounded-3xl overflow-hidden mx-4 shadow-2xl'>
			{/* Crimson header */}
			<div className='bg-[#7d1729] py-3 px-4 text-center'>
				<span className='text-white text-[11px] font-semibold tracking-[0.3em] uppercase'>
					РОССИЙСКАЯ ФЕДЕРАЦИЯ
				</span>
			</div>

			{/* Card body */}
			<div className='bg-[#fce8e8] p-4 space-y-3.5'>
				{/* Upper info */}
				<div className='bg-white/60 rounded-2xl p-4 relative overflow-hidden min-h-[130px]'>
					{/* Emblem watermark */}
					<div className='absolute right-[-10px] bottom-[-10px] w-44 h-44 opacity-25 pointer-events-none'>
						<Image src='/emblem.jpg' alt='' fill className='object-cover' />
					</div>

					<p className='text-[#9b8585] text-[11px]'>Кем выдан</p>
					<p className='text-[#1a1a2e] text-[13px] font-medium mt-0.5 leading-snug'>
						{PASSPORT_DATA.issuedBy}
					</p>

					<div className='flex gap-8 mt-3'>
						<div>
							<p className='text-[#9b8585] text-[11px]'>Дата выдачи</p>
							<p className='text-[#1a1a2e] text-[13px] font-medium mt-0.5'>
								{PASSPORT_DATA.issueDate}
							</p>
						</div>
						<div>
							<p className='text-[#9b8585] text-[11px]'>Код подразделения</p>
							<p className='text-[#1a1a2e] text-[13px] font-medium mt-0.5'>
								{PASSPORT_DATA.divisionCode}
							</p>
						</div>
					</div>
				</div>

				{/* Series & number */}
				<div className='flex items-center gap-2.5 px-1 pb-1'>
					<span className='text-[#7d1729] text-[26px] font-bold tracking-wide'>
						{PASSPORT_DATA.seriesAndNumber}
					</span>
					<button>
						<CopyIcon />
					</button>
				</div>

				{/* Dashed separator */}
				<div className='border-t-2 border-dashed border-[#7d1729]/70 mx-1' />

				{/* Personal info */}
				<div className='bg-white/60 rounded-2xl p-4 flex gap-3'>
					<div className='flex-shrink-0 w-[80px] h-[100px] rounded-xl overflow-hidden'>
						<Image
							src='/passport_human.jpg'
							alt='Фото'
							width={80}
							height={100}
							className='object-cover w-full h-full'
						/>
					</div>

					<div className='flex-1 min-w-0'>
						<p className='text-[#9b8585] text-[11px]'>ФИО</p>
						<p className='text-[#1a1a2e] text-[13px] font-medium mt-0.5 leading-snug'>
							{PASSPORT_DATA.fullName}
						</p>

						<div className='flex gap-5 mt-3'>
							<div>
								<p className='text-[#9b8585] text-[11px]'>Пол</p>
								<p className='text-[#1a1a2e] text-[13px] font-medium mt-0.5'>
									{PASSPORT_DATA.gender}
								</p>
							</div>
							<div>
								<p className='text-[#9b8585] text-[11px]'>Дата рождения</p>
								<p className='text-[#1a1a2e] text-[13px] font-medium mt-0.5'>
									{PASSPORT_DATA.birthDate}
								</p>
							</div>
						</div>

						<div className='mt-3'>
							<p className='text-[#9b8585] text-[11px]'>Место рождения</p>
							<p className='text-[#1a1a2e] text-[13px] font-medium mt-0.5 leading-snug'>
								{PASSPORT_DATA.birthPlace}
							</p>
						</div>

						<Link
							href='/passport/details'
							className='text-[#2563eb] text-[13px] mt-3 inline-block font-medium'
						>
							детали документа
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
