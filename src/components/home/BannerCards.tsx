const banners = [
	{
		id: 1,
		bg: 'bg-gradient-to-br from-[#00b8a9] to-[#00d4c4]',
		emoji: '🔐',
		emojiSize: 'text-5xl',
		title: 'Защита близких от взлома',
		titleColor: 'text-white',
	},
	{
		id: 2,
		bg: 'bg-gradient-to-br from-[#7b2ff7] to-[#a855f7]',
		emoji: '🍕',
		emojiSize: 'text-5xl',
		title: 'Оформите налоговый вычет',
		titleColor: 'text-white',
	},
	{
		id: 3,
		bg: 'bg-gradient-to-br from-[#f8c8d0] to-[#fad4c0]',
		emoji: '🏠',
		emojiSize: 'text-5xl',
		title: 'Оформление аренды',
		titleColor: 'text-[#7d1729]',
	},
	{
		id: 4,
		bg: 'bg-gradient-to-br from-[#1a2a4a] to-[#1e3460]',
		emoji: '💼',
		emojiSize: 'text-5xl',
		title: 'Начните бизнес онлайн',
		titleColor: 'text-white',
	},
]

export default function BannerCards() {
	return (
		<div className='flex gap-2.5 overflow-x-auto no-scrollbar pl-4 pr-2 py-1'>
			{banners.map((b) => (
				<div
					key={b.id}
					className={`flex-shrink-0 w-[152px] h-[164px] rounded-[18px] ${b.bg} p-4 flex flex-col justify-between cursor-pointer`}
				>
					<div className={b.emojiSize}>{b.emoji}</div>
					<p className={`text-sm font-semibold leading-snug ${b.titleColor}`}>{b.title}</p>
				</div>
			))}
		</div>
	)
}
