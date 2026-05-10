const chips = ['Запись к врачу', 'Карта болельщика', 'Электронная', 'Другие']

export default function ChipsRow() {
	return (
		<div className='flex gap-2 overflow-x-auto no-scrollbar px-4 py-1'>
			{chips.map((chip) => (
				<button
					key={chip}
					className='flex-shrink-0 border border-[#1f2d42] rounded-full px-4 py-2 text-sm text-white/90 whitespace-nowrap bg-[#111827]'
				>
					{chip}
				</button>
			))}
		</div>
	)
}
