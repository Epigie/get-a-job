export function checkImageURL(url) {
	if (!url) return false;
	else {
		const pattern = new RegExp(
			"^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
			"i"
		);
		return pattern.test(url);
	}
}

export function capitalize(sentence) {
	if (!sentence) return "";
	const words = sentence.split(" ");

	return words
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(" ");
}
