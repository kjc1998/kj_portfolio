import nextConfig from '@/next.config';

export class AppConfig {
	basePath() {
		return nextConfig.basePath || '';
	}
}
