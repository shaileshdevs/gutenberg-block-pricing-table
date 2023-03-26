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
							<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 457.57"><path class="cls-1" d="M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z"/></svg>
							<span className="pricing_table-feature-text">
								{text}
							</span>
						</li>
					)
				)}
			</ul>
			<div className="pricing_table-cta-wrapper">
				<RichText.Content
					className="pricing_table-cta"
					tagName="a"
					value={ ctaText }
				/>
			</div>
		</div>
	);
}
