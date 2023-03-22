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
	Button,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
	const { price, features, ctaText } = attributes;

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
				/>
			</div>
			<ul className="pricing_table-features-wrapper">
				{ features.map(
					( { text }, index) => (
						<RichText
							key={index}
							className="pricing_table-feature-li"
							tagName="li"
							value={ text }
							onChange={ ( text ) => onFeatureChange("text", text, index) }
						>
						</RichText>
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
			<div className="pricig_table-cta-wrapper">
				<RichText
					className="pricing-table-cta"
					tagName="a"
					placeholder={ __( 'Buy Now' ) }
					value={ ctaText }
					onChange={ ( ctaText ) => setAttributes( { ctaText } ) }
				/>
			</div>
		</div>
	);
}
