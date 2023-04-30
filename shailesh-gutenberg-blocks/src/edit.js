/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';



import {
	Button
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Internal dependencies.
 */
import SettingsPane from './edit-settings-pane';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { price, features, ctaText, priceTextColor, featureTextColor, featureTickColor, buyNowTextColor, buyNowBgColor } = attributes;

	const onFeatureAdd = () => {
		const count = attributes.features.length + 1;
		const features = [
			...attributes.features,
			{
				icon: "fas fa-check",
				text: `Feature ${count}`,
				color: "#03bb89",
			},
		];

		setAttributes({ features });
	};

	const onFeatureChange = (key, value, position) => {
		const newFeatureList = attributes.features;
		newFeatureList[position][key] = value;

		setAttributes({ features: newFeatureList });
	};

	return (
		<div {...blockProps}>
			<div className="pricing_table-price-wrapper">
				<RichText
					className="pricing_table-price"
					tagName="h2"
					placeholder={ __('$50') }
					value={ price }
					onChange={ ( price ) => setAttributes( { price } ) }
					style={{ color: priceTextColor }}
				/>
			</div>
			<ul className="pricing_table-features-wrapper">
				{ features.map(
					( { text }, index) => (
						<li className="pricing_table-feature-li" key={index}>
							<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 457.57" style={{ fill: featureTickColor }}><path className="cls-1" d="M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z"/></svg>
							<RichText
								key={index}
								tagName="span"
								value={ text }
								onChange={ ( text ) => onFeatureChange("text", text, index) }
								style={{ color: featureTextColor }}
							>
							</RichText>
						</li>
					)
				)}
			</ul>
			<div className="pricing_table-add-feature-wrapper">
				<Button
					className="pricing_table-add-feature-button"
					label={ __("Add feature" ) }
					icon="plus-alt"
					onClick={onFeatureAdd}
				></Button>
				<span className="pricing_table-add-feature-text">
					{ __("Add Feature" ) }
				</span>
			</div>
			<div className="pricing_table-cta-wrapper">
				<RichText
					className="pricing_table-cta"
					tagName="a"
					placeholder={ __( 'Buy Now' ) }
					value={ ctaText }
					onChange={ ( ctaText ) => setAttributes( { ctaText } ) }
					style={{ color: buyNowTextColor, backgroundColor: buyNowBgColor, borderColor: buyNowBgColor }}
				/>
			</div>
			<SettingsPane {
				...{ props }
			} />
		</div>
	);
}
