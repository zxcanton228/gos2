import Link from 'next/link'
import { PASSPORT_DATA } from '@/constants/passport.constant'

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

function DotsIcon() {
	return (
		<svg width='5' height='22' viewBox='0 0 5 22' fill='none'>
			<circle cx='2.5' cy='2.5' r='2.5' fill='white' />
			<circle cx='2.5' cy='11' r='2.5' fill='white' />
			<circle cx='2.5' cy='19.5' r='2.5' fill='white' />
		</svg>
	)
}

function PaperclipIcon() {
	return (
		<svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
			<path
				d='M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48'
				stroke='#3b82f6'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

const fields = [
	{ label: 'ФИО', value: PASSPORT_DATA.fullName },
	{ label: 'Пол', value: PASSPORT_DATA.genderDisplay },
	{ label: 'Дата рождения', value: PASSPORT_DATA.birthDate },
	{ label: 'Место рождения', value: PASSPORT_DATA.birthPlace },
	{ label: 'Серия и номер', value: PASSPORT_DATA.seriesAndNumber },
	{ label: 'Дата выдачи', value: PASSPORT_DATA.issueDate },
	{ label: 'Код подразделения', value: PASSPORT_DATA.divisionCode },
	{ label: 'Кем выдан', value: PASSPORT_DATA.issuedBy },
]

export default function PassportDetailsPage() {
	return (
		<div className='min-h-screen bg-[#0c1220] text-white pb-8'>
			<div className='flex items-center justify-between px-4 pt-5 pb-4'>
				<div className='flex items-center gap-3'>
					<Link href='/passport'>
						<BackArrow />
					</Link>
					<h1 className='text-xl font-bold'>Паспорт РФ</h1>
				</div>
				<button className='p-1'>
					<DotsIcon />
				</button>
			</div>

			{/* Fields card */}
			<div className='mx-4 rounded-2xl bg-[#131d2e] px-5 py-2'>
				{fields.map((field, i) => (
					<div key={field.label} className={`py-4 ${i < fields.length - 1 ? 'border-b border-[#1e2d42]' : ''}`}>
						<p className='text-[#5d7290] text-[13px] mb-1'>{field.label}</p>
						<p className='text-white text-[16px]'>{field.value}</p>
					</div>
				))}
			</div>

			{/* Upload card */}
			<div className='mx-4 mt-3 rounded-2xl bg-[#131d2e] p-4'>
				<h2 className='text-white font-bold text-base mb-4'>Фото, сканы или pdf</h2>
				<button className='w-full border-2 border-dashed border-[#3b82f6]/40 rounded-2xl py-5 flex items-center justify-center gap-2.5'>
					<PaperclipIcon />
					<span className='text-[#3b82f6] text-base font-medium'>Добавить</span>
				</button>
			</div>
		</div>
	)
}
