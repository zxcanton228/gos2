import Header from '@/components/home/Header'
import ChipsRow from '@/components/home/ChipsRow'
import BannerCards from '@/components/home/BannerCards'
import ChargesCard from '@/components/home/ChargesCard'
import DocumentsSection from '@/components/home/DocumentsSection'
import ServicesSection from '@/components/home/ServicesSection'
import BottomNav from '@/components/BottomNav'

export default function Home() {
	return (
		<div className='min-h-screen bg-[#0c1220] text-white overflow-x-hidden pb-20'>
			<Header />

			<div className='mt-3'>
				<ChipsRow />
			</div>

			<div className='mt-4'>
				<BannerCards />
			</div>

			<div className='mt-4 px-4'>
				<ChargesCard />
			</div>

			<div className='mt-3 px-4'>
				<DocumentsSection />
			</div>

			<div className='mt-3 px-4'>
				<ServicesSection />
			</div>

			<BottomNav />
		</div>
	)
}
