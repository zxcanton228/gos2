import type { NextConfig } from 'next'
import withSerwist from '@serwist/next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	turbopack: {},
}

export default withSerwist({
	swSrc: 'src/sw.ts',
	swDest: 'public/sw.js',
})(nextConfig)
