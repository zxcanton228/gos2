export const PASSPORT_DATA = {
	issuedBy: 'ГУ МВД РОСИИ ПО МОСКОВСКОЙ ОБЛАСТИ',
	issueDate: '30.01.2022',
	divisionCode: '500-072',
	seriesAndNumber: '4621 455921',
	fullName: 'ПОПОВ ИВАН СЕРГЕЕВИЧ',
	gender: 'МУЖСКОЙ',
	genderDisplay: 'Мужской',
	birthDate: '17.01.2008',
	birthPlace: 'ГОРОД НОВОКУЗНЕЦК КЕМЕРОВСКАЯ ОБЛАСТЬ',
} as const

export type PassportData = typeof PASSPORT_DATA
