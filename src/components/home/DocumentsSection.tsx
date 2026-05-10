import Image from 'next/image'
import Link from 'next/link'

const documents = [
	{ id: 'passport', label: 'Паспорт', icon: '/passport_icon.jpg', href: '/passport' },
	{ id: 'snils', label: 'СНИЛС', icon: '/snils_icon.jpg', href: '#' },
	{ id: 'inn', label: 'ИНН', icon: '/inn_icon.jpg', href: '#' },
	{ id: 'all', label: 'Все', icon: '/all_icons.jpg', href: '#' },
]

export default function DocumentsSection() {
	return (
		<div className='rounded-2xl bg-[#111827] p-4'>
			<h2 className='text-white font-bold text-base mb-4'>Документы для предъявления</h2>
			<div className='flex justify-between'>
				{documents.map((doc) => (
					<Link key={doc.id} href={doc.href} className='flex flex-col items-center gap-2'>
						<Image
							src={doc.icon}
							alt={doc.label}
							width={64}
							height={64}
							className='rounded-[14px] object-cover'
						/>
						<span className='text-white text-xs'>{doc.label}</span>
					</Link>
				))}
			</div>
		</div>
	)
}
