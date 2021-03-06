/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import FormTextInput from 'components/forms/form-text-input';
import Gridicon from 'components/gridicon';

export default React.createClass( {
	displayName: 'JetpackConnectExampleInstall',

	render() {
		return (
			<div className="example-components__main">
				<div className="example-components__browser-chrome example-components__site-url-input-container">
					<div className="example-components__browser-chrome-dots">
						<div className="example-components__browser-chrome-dot"></div>
						<div className="example-components__browser-chrome-dot"></div>
						<div className="example-components__browser-chrome-dot"></div>
					</div>
					<div className="example-components__site-address-container">
						<Gridicon
							size={ 24 }
							icon="globe" />
						<FormTextInput
							className="example-components__browser-chrome-url"
							disabled="true"
							placeholder={ this.props.url } />
					</div>
				</div>
				<div className="example-components__content example-components__install-jetpack">
					<div className="example-components__install-plugin-header"></div>
					<div className="example-components__install-plugin-body"></div>
					<div className="example-components__install-plugin-footer">
						<div className="example-components__install-plugin-footer-button" aria-hidden="true">
							{ this.translate( 'Install Now',
								{
									context: 'Jetpack Connect install plugin instructions, install button'
								}
							) }
						</div>
					</div>
				</div>
			</div>
		);
	}
} );
