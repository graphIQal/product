import React, { useEffect, useState } from 'react';

// TypeScript users only add this code

const TitleRotation: React.FC = () => {
	const words = [
		'life',
		'creativity',
		'brain',
		'thoughts',
		'product',
		'wiki',
		'docs',
	];

	const colours = ['#'];

	const [wordIndex, setWordIndex] = useState(2);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('hmm');
			animate(wordIndex);
			setWordIndex((n) => wrapDown(n));
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	// const wrap -= (num: number): => {

	// }

	const wrapDown = (index: number): number => {
		if (index === 0) {
			return words.length - 1;
		}

		return index - 1;
	};

	const wrapUp = (index: number): number => {
		if (index === words.length - 1) {
			return 0;
		}

		return index + 1;
	};

	const calculateDifference = (index2: number): number => {
		if (wordIndex === words.length - 1) {
			if (index2 === 0) return 1;
			return index2 - wordIndex;
		} else if (wordIndex === 0) {
			if (index2 === words.length - 1) return -1;
			return index2 - wordIndex;
		} else {
			return index2 - wordIndex;
		}
	};

	const animate = (index: number): string => {
		if (calculateDifference(index) > 1) {
			return 'absolute -translate-y-14 opacity-0';
		} else if (calculateDifference(index) === 1) {
			return 'text-3xl absolute -translate-y-10 opacity-80';
		} else if (calculateDifference(index) === 0) {
			return 'text-5xl ';
		} else if (calculateDifference(index) === -1) {
			return 'text-3xl absolute translate-y-12 opacity-80';
		} else {
			return 'absolute translate-y-14 opacity-0';
		}
	};

	return (
		<div className='inline-block w-60 relative'>
			{/* <div className='-translate-y-20'>{wordIndex}</div> */}
			{words.map((value, index) => (
				<div
					className={
						'w-60 transition-transform top-0 ' + animate(index)
					}
				>
					{words[index]}
					{/* {index} */}
				</div>
			))}
			{/* <div
				className={
					' text-3xl w-60 transition-transform -translate-y-20 ' +
					animate(wrapUp(2))
				}
			>
				{words[wrapUp(2)]}
			</div>
			<div
				className={
					'absolute text-3xl w-60 transition-transform -translate-y-10 '
				}
			>
				{words[wrapUp(1)]}
			</div>
			<div className={' w-60 transition-transform'}>
				{words[wordIndex]}
			</div>
			<div
				className={
					'absolute text-3xl w-60 transition-transform translate-y-10 '
				}
			>
				{words[wrapDown(1)]}
			</div>
			<div
				className={
					'absolute text-3xl w-60 transition-transform translate-y-20 ' +
					animate(2)
				}
			>
				{words[wrapDown(2)]}
			</div> */}
		</div>
	);
};

export default TitleRotation;
