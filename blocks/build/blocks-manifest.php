<?php
// This file is generated. Do not modify it manually.
return array(
	'number-counter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/number-counter',
		'version' => '0.1.0',
		'title' => 'Number Counter',
		'category' => 'widgets',
		'icon' => 'sort',
		'description' => 'A block to count up or down the number displayed',
		'example' => array(
			
		),
		'supports' => array(
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'width' => true,
				'style' => true
			),
			'html' => false,
			'color' => array(
				'background' => true,
				'gradients' => true,
				'text' => false
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => false
			)
		),
		'attributes' => array(
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'prefix' => array(
				'type' => 'string'
			),
			'startingNumber' => array(
				'type' => 'number',
				'default' => 0
			),
			'endNumber' => array(
				'type' => 'number',
				'default' => 100
			),
			'suffix' => array(
				'type' => 'string',
				'default' => '+'
			),
			'duration' => array(
				'type' => 'number',
				'default' => '1500'
			),
			'numberSize' => array(
				'type' => 'string',
				'default' => '40px'
			),
			'numberColor' => array(
				'type' => 'string'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Your Text'
			),
			'textSize' => array(
				'type' => 'string',
				'default' => '1rem'
			),
			'textColor' => array(
				'type' => 'string'
			),
			'textGap' => array(
				'type' => 'string',
				'default' => '0px'
			)
		),
		'textdomain' => 'number-counter',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'twinkling-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/twinkling-text',
		'version' => '0.1.0',
		'title' => 'Twinkling Text',
		'category' => 'widgets',
		'icon' => 'marker',
		'description' => 'Create a twinkling point beside the text.',
		'example' => array(
			
		),
		'supports' => array(
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'width' => true,
				'style' => true
			),
			'html' => false,
			'color' => array(
				'background' => true,
				'gradients' => true,
				'text' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => false
			),
			'typography' => array(
				'fontSize' => true
			)
		),
		'attributes' => array(
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'columnGap' => array(
				'type' => 'string',
				'default' => 0
			),
			'dotColor' => array(
				'type' => 'string'
			),
			'dotSize' => array(
				'type' => 'string',
				'default' => '8px'
			),
			'justifyContent' => array(
				'type' => 'string',
				'default' => 'left-aligned'
			),
			'text' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'twinkling-text',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
