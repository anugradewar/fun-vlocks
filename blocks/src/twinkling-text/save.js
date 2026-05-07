import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { 
		justifyContent, 
		text, 
		dotColor,
		dotSize, 
		columnGap 
	} = attributes;
	const blockProps	= useBlockProps.save({
		className: `twinkling-text ${justifyContent}`,
		style: {
			'--column-gap': columnGap,
			'--dot-color': dotColor,
			'--dot-size': dotSize
		}
	});

	return (
		<div className='twinkling-text-container'>
			<div { ...blockProps }>
				<span className='dot'></span>
				<p> { text } </p>
			</div>
		</div>
	);
}
