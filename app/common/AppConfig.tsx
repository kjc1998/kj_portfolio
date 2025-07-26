import getConfig from 'next/config';

export class AppConfig {
	basePath() {
		const config = getConfig();
		return config?.basePath || '';
	}
}
