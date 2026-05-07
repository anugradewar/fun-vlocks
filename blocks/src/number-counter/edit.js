import { __ } from '@wordpress/i18n';
import { AlignmentControl, BlockControls, InspectorControls, useBlockProps, useSettings } from '@wordpress/block-editor';
import { __experimentalNumberControl, __experimentalUnitControl, BaseControl, ColorPalette, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';
import { useEffect, useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
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
	const [colors]							= useSettings('color.palette');
	const [currentNumber, setCurrentNumber]	= useState(startingNumber);
	const blockProps						= useBlockProps({
		className: `has-text-align-${alignment}`,
		style: {
			'--number-size': numberSize,
			'--number-color': numberColor,
			'--text-size': textSize,
			'--text-color': textColor,
			'--text-gap': textGap
		}
	});

	useEffect(() => {
		let start 		= startingNumber;
		const startTime	= performance.now();

		function animate(time) {
			const progress	= Math.min((time - startTime) / duration, 1);
			const value		= Math.floor(start + (endNumber - start) * progress);

			setCurrentNumber(value);

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		}

		requestAnimationFrame(animate);
	}, [startingNumber, endNumber]);

	return (
		<>
			<BlockControls>
				<AlignmentControl
					value={alignment}
					onChange={(value) => setAttributes({ alignment: value })}
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody title='Settings'>
					<TextControl
						label='Prefix'
						value={ prefix || '' }
						onChange={(value) => setAttributes({ prefix : value })}
					/>
					<__experimentalNumberControl
						label='Starting Number'
						value={ startingNumber || '' }
						onChange={(value) => setAttributes({ startingNumber : value })}
					/>
					<__experimentalNumberControl
						label='End Number'
						value={ endNumber || '' }
						onChange={(value) => setAttributes({ endNumber : value })}
					/>
					<TextControl
						label='Suffix'
						value={ suffix || '' }
						onChange={(value) => setAttributes({ suffix : value })}
					/>
					<__experimentalNumberControl
						label='Duration (in ms)'
						value={ duration || '' }
						onChange={(value) => setAttributes({ duration : value })}
					/>
					<BaseControl label='Number Size'>
						<__experimentalUnitControl
							value={numberSize}
							onChange={(value) => setAttributes({ numberSize: value})}
						/>
					</BaseControl>
					<BaseControl label='Number Color'>
						<ColorPalette
							colors={colors}
							value={numberColor}
							onChange={(color) => setAttributes({ numberColor: color })}
						/>
					</BaseControl>
					<TextControl
						label='Text'
						value={ text || '' }
						onChange={(value) => setAttributes({ text : value })}
					/>
					<BaseControl label='Text Size'>
						<__experimentalUnitControl
							value={textSize}
							onChange={(value) => setAttributes({ textSize: value})}
						/>
					</BaseControl>
					<BaseControl label='Text Color'>
						<ColorPalette
							colors={colors}
							value={textColor}
							onChange={(color) => setAttributes({ textColor: color})}
						/>
					</BaseControl>
					<BaseControl label='Text Gap'>
						<__experimentalUnitControl
							value={textGap}
							onChange={(value) => setAttributes({ textGap: value})}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<p className='number-counter'> { prefix }{ currentNumber }{ suffix }</p>
				<p className='number-counter__text'> { text } </p>
			</div>
		</>
	);
}
