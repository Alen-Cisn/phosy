
export default function loadTranslation(locale) {
	switch (locale) {
		case "de":
			return import('./de').then((module) => module.translation);
		case "es":
			return import('./es').then((module) => module.translation);
		default: //en
		return import('./en').then((module) => module.translation);
	}
}