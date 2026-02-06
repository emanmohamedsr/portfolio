import type { JSX } from "react";

export const getTheHighlitedWord = (text: string, wordToHighlight: string) => {
	const parts = text.split(" ");
	const jsxParts: JSX.Element[] = parts.map((part, index) => {
		if (part.toLowerCase() === wordToHighlight.toLowerCase()) {
			return (
				<span key={index} className='text-cyan-400'>
					{part}
				</span>
			);
		} else {
			return <span key={index}>{part} </span>;
		}
	});
	return jsxParts;
};
