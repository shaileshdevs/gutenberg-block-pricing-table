import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	BaseControl,
	ColorPalette,
	ColorControl
} from '@wordpress/components';

/**
 * The SettingsPane contains a panel with block's settings.
 * It needs block's attributes to be proxied make use of
 * attributes property and setAttributes setter.
 *
 * @param {Object} props       Block properties
 * @param {Object} props.props Block properties.
 *
 * @return {WPElement} Element to render.
 */
export default function SettingsPane( { props } ) {
	const { attributes, setAttributes } = props;
	const {
		priceTextColor,
		featureTextColor,
		featureTickColor,
		buyNowTextColor,
		buyNowBgColor
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				className="pricing_table-settings-panel-body"
				title={ __( 'Color Settings', 'shailesh-gutenberg-blocks' ) }
			>
				<div>
					<h3 className='pricing_table-price-text-color-settings-label'>
						{ __( 'Price Text Color', 'essential-block' ) }
					</h3>
					<ColorPalette
						value={ priceTextColor }
						onChange={ ( priceTextColor ) => setAttributes( { priceTextColor: priceTextColor } ) }
					/>
				</div>
				<div>
					<h3 className='pricing_table-feature-text-color-settings-label'>
						{ __( 'Feature Text Color', 'essential-block' ) }
					</h3>
					<ColorPalette
						value={ featureTextColor }
						onChange={ ( featureTextColor ) => setAttributes( { featureTextColor: featureTextColor } ) }
					/>
				</div>
				<div>
					<h3 className='pricing_table-feature-tick-color-settings-label'>
						{ __( 'Feature Tick Color', 'essential-block' ) }
					</h3>
					<ColorPalette
						value={ featureTickColor }
						onChange={ ( featureTickColor ) => setAttributes( { featureTickColor: featureTickColor } ) }
					/>
				</div>
				<div>
					<h3 className='pricing_table-buynow-text-color-settings-label'>
						{ __( 'Buy Now Text Color', 'essential-block' ) }
					</h3>
					<ColorPalette
						value={ buyNowTextColor }
						onChange={ ( buyNowTextColor ) => setAttributes( { buyNowTextColor: buyNowTextColor } ) }
					/>
				</div>
				<div>
					<h3 className='pricing_table-buynow-bg-color-settings-label'>
						{ __( 'Buy Now Background Color', 'essential-block' ) }
					</h3>
					<ColorPalette
						value={ buyNowBgColor }
						onChange={ ( buyNowBgColor ) => setAttributes( { buyNowBgColor: buyNowBgColor } ) }
					/>
				</div>
			</PanelBody>
		</InspectorControls>
	);
}
