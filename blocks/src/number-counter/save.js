import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		alignment,
		prefix,
		startingNumber,
		endNumber,
		suffix,
		duration,
		numberSize,
		numberColor,
		text,
		textSize,
		textColor,
		textGap
	} = attributes;
	const blockProps = useBlockProps.save({
		className: `has-text-align-${alignment}`,
		style: {
			'--number-size': numberSize,
			'--number-color': numberColor,
			'--text-size': textSize,
			'--text-color': textColor,
			'--text-gap': textGap
		}
	});

	return (
		<div { ...blockProps }>
			<span className='number-counter'>{ prefix }</span>
			<span 
				className='number-counter number-counter__number'
				data-start={startingNumber}
				data-end={endNumber}
				data-duration={duration}
			>{ startingNumber }</span>
			<span className='number-counter'>{ suffix }</span>
			<p className='number-counter__text'> { text } </p>
		</div>
	);
}