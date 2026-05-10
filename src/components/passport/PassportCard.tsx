import { PASSPORT_DATA } from '@/constants/passport.constant'
import Image from 'next/image'
import Link from 'next/link'

function CopyIcon() {
	return (
		<svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
			<rect
				x='9'
				y='9'
				width='13'
				height='13'
				rx='2'
				stroke='#8b1b2c'
				strokeWidth='2'
			/>
			<path
				d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'
				stroke='#8b1b2c'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	)
}

function Label({ children }: { children: string }) {
	return <p className='text-[#9b7272] text-[11px] leading-none'>{children}</p>
}

function Value({ children }: { children: string }) {
	return (
		<p className='text-[#1c1010] text-[13px] font-medium mt-[5px] leading-snug'>
			{children}
		</p>
	)
}

export default function PassportCard() {
	return (
		/* Outer card = crimson border */
		<div className='mx-4 rounded-[18px] overflow-hidden  bg-[#8b1b2c]'>
			{/* ── Header ── */}
			<div className='py-[14px] px-4 text-center'>
				<span
					className='text-white text-[11px] font-bold tracking-[0.26em]'
					style={{ fontFamily: "'Times New Roman', Times, serif" }}
				>
					РОССИЙСКАЯ ФЕДЕРАЦИЯ
				</span>
			</div>

			{/* px-2 pb-2 → crimson shows as thin border on left / right / bottom */}
			<div className='px-1 pb-1'>
				{/* Rose frame — relative so circles are anchored to it */}
				<div className='bg-[#f7e5e6] rounded-[14px] relative'>
					{/* ── Upper inner card ── */}
					<div className=' rounded-[14px] mx-2 mt-2 px-4 pt-4 pb-4 relative overflow-hidden'>
						{/* Coat of arms watermark */}
						<div className='absolute right-0 top-0 w-[52%] h-full pointer-events-none select-none overflow-hidden'>
							<Image
								src='/emblem.jpg'
								alt=''
								fill
								className='object-cover object-left-top  opacity-[0.45]'
							/>
						</div>

						<div className='relative z-10'>
							<Label>Кем выдан</Label>
							<Value>{PASSPORT_DATA.issuedBy}</Value>

							<div className='flex gap-8 mt-[14px]'>
								<div>
									<Label>Дата выдачи</Label>
									<Value>{PASSPORT_DATA.issueDate}</Value>
								</div>
								<div>
									<Label>Код подразделения</Label>
									<Value>{PASSPORT_DATA.divisionCode}</Value>
								</div>
							</div>

							{/* Breathing room for emblem */}
							<div className='h-[40px]' />

							<div className='flex items-center gap-[9px]'>
								<span className='text-[#8b1b2c] text-[20px] font-bold tracking-[0.1em]'>
									{PASSPORT_DATA.seriesAndNumber}
								</span>
								<CopyIcon />
							</div>
						</div>
					</div>

					{/* ── Book-spine separator ─────────────────────────────────── */}
					{/* Circles are centered on the left/right edges of the rose   */}
					{/* frame → half is crimson-on-crimson (invisible), half shows  */}
					{/* as crimson bump against the rose frame = binding circles    */}
					<div className='relative h-[22px]'>
						<svg
							className='absolute inset-0 w-full h-full'
							preserveAspectRatio='none'
						>
							{[3, 7, 11, 15].map(y => (
								<line
									key={y}
									x1='0'
									y1={y}
									x2='100%'
									y2={y}
									stroke='rgba(139,27,44,0.32)'
									strokeWidth='1'
								/>
							))}
						</svg>
					</div>
					{/* ─────────────────────────────────────────────────────────── */}

					{/* ── Lower inner card ── */}
					<div className='bg-[#f2e0e0] rounded-[14px] mx-2 mb-2 p-4 flex gap-3'>
						<div className='shrink-0 w-[72px] h-[94px] rounded-[10px] overflow-hidden'>
							<Image
								src='/passport_human.jpg'
								alt='Фото'
								width={72}
								height={94}
								className='w-full h-full object-cover'
							/>
						</div>

						<div className='flex-1 min-w-0'>
							<Label>ФИО</Label>
							<Value>{PASSPORT_DATA.fullName}</Value>

							<div className='flex gap-5 mt-[10px]'>
								<div>
									<Label>Пол</Label>
									<Value>{PASSPORT_DATA.gender}</Value>
								</div>
								<div>
									<Label>Дата рождения</Label>
									<Value>{PASSPORT_DATA.birthDate}</Value>
								</div>
							</div>

							<div className='mt-[10px]'>
								<Label>Место рождения</Label>
								<Value>{PASSPORT_DATA.birthPlace}</Value>
							</div>

							<Link
								href='/passport/details'
								className='text-[#2563eb] text-[13px] mt-[14px] inline-block'
							>
								детали документа
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
