'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function HomeIcon() {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
			<path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
		</svg>
	)
}

function GridIcon() {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
			<rect x='3' y='3' width='8' height='8' rx='1.5' stroke='currentColor' strokeWidth='2' />
			<rect x='13' y='3' width='8' height='8' rx='1.5' stroke='currentColor' strokeWidth='2' />
			<rect x='3' y='13' width='8' height='8' rx='1.5' stroke='currentColor' strokeWidth='2' />
			<rect x='13' y='13' width='8' height='8' rx='1.5' stroke='currentColor' strokeWidth='2' />
		</svg>
	)
}

function WalletIcon() {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
			<rect x='2' y='5' width='20' height='15' rx='2' stroke='currentColor' strokeWidth='2' />
			<path d='M2 10h20' stroke='currentColor' strokeWidth='2' />
			<circle cx='17' cy='15' r='1.5' fill='currentColor' />
		</svg>
	)
}

function DocIcon() {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
			<path
				d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<polyline points='14 2 14 8 20 8' stroke='currentColor' strokeWidth='2' strokeLinejoin='round' />
		</svg>
	)
}

const navItems = [
	{ id: 'home', label: 'главная', href: '/', Icon: HomeIcon },
	{ id: 'services', label: 'услуги', href: '/services', Icon: GridIcon },
	{ id: 'payments', label: 'платежи', href: '/payments', Icon: WalletIcon },
	{ id: 'documents', label: 'документы', href: '/documents', Icon: DocIcon },
]

export default function BottomNav() {
	const pathname = usePathname()

	return (
		<nav className='fixed bottom-0 left-0 right-0 bg-[#0c1220] border-t border-[#1a2540] z-50'>
			<div className='flex items-center h-16'>
				{navItems.slice(0, 2).map(({ id, label, href, Icon }) => {
					const active = pathname === href
					return (
						<Link
							key={id}
							href={href}
							className={`flex-1 flex flex-col items-center gap-0.5 ${active ? 'text-[#f97316]' : 'text-[#4a5e7a]'}`}
						>
							<Icon />
							<span className='text-[10px] font-medium'>{label}</span>
						</Link>
					)
				})}

				<Link href='#' className='flex-1 flex flex-col items-center -mt-4'>
					<Image
						src='/bot_icon.jpg'
						alt='Ассистент'
						width={52}
						height={52}
						className='rounded-full'
					/>
				</Link>

				{navItems.slice(2).map(({ id, label, href, Icon }) => {
					const active = pathname === href
					return (
						<Link
							key={id}
							href={href}
							className={`flex-1 flex flex-col items-center gap-0.5 ${active ? 'text-[#f97316]' : 'text-[#4a5e7a]'}`}
						>
							<Icon />
							<span className='text-[10px] font-medium'>{label}</span>
						</Link>
					)
				})}
			</div>
		</nav>
	)
}
