import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps, useSettings } from '@wordpress/block-editor';
import { __experimentalUnitControl as UnitControl, BaseControl, ColorPalette, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { 
		columnGap, 
		dotColor,
		dotSize, 
		justifyContent, 
		text 
	} = attributes;
	const blockProps	= useBlockProps({
		className: `twinkling-text ${justifyContent}`,
		style: {
			'--column-gap': columnGap,
			'--dot-color': dotColor,
			'--dot-size': dotSize
		}
	});
	const [colors]		= useSettings('color.palette');

	return (
		<>
			<InspectorControls>
				<PanelBody title='Settings'>
					<TextControl 
						label='Text' 
						value={ text || ''}
						onChange={ (value) => setAttributes({ text: value })						}
					/>
					<SelectControl
						label="Position"
						value={justifyContent}
						options={[
							{ label: 'Left', value: 'left-aligned' },
                            { label: 'Center', value: 'center-aligned' },
                            { label: 'Right', value: 'right-aligned' }
						]}
						onChange={(value) => setAttributes({ justifyContent: value })}
					/>
					<BaseControl label='Dot Size'>
						<UnitControl
							value={dotSize}
							onChange={(value) => setAttributes({ dotSize: value})}
						/>
					</BaseControl>
					<BaseControl label='Dot Color'>
						<ColorPalette
							colors={colors}
							value={dotColor}
							onChange={(color) => setAttributes({ dotColor: color})}
						/>
					</BaseControl>
					<BaseControl label='Column Gap'>
						<UnitControl
							value={columnGap}
							onChange={(value) => setAttributes({ columnGap: value})}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			
			<div className='twinkling-text-container'>
				<div { ...blockProps }>
					<span className='dot'></span>
					<p> { text } </p>
				</div>
			</div>
		</>
	);
}
