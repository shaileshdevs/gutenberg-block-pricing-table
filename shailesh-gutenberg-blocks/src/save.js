/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const blockProps = useBlockProps.save();
	const { attributes, setAttributes } = props;
	// const { price, description, ctaText, ctaLink, showCTALink } = attributes;
	const { price, features, ctaText } = attributes;

	return (
		<div {...blockProps}>
			<div className="pricing_table-price-wrapper">
				<RichText.Content
					className="pricing_table-price"
					tagName="h2"
					value={ price }
				/>
			</div>
			<ul className="pricing_table-features-wrapper">
				{ features.map(
					( { text }, index) => (
						<li
							key={index}
							className="pricing_table-feature-li"
						>
							<>
								<span className="pricing_table-feature-text">
									{text}
								</span>
							</>
						</li>
					)
				)}
			</ul>
			<div className="pricig_table-cta-wrapper">
				<RichText.Content
					className="pricing-table-cta"
					tagName="a"
					value={ ctaText }
				/>
			</div>
		</div>
	);
}
