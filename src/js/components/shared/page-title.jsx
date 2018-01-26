import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ title }) {
	return (
		<div className="row">
			<div className="col-md-10 centered col-md-offset-1">
				<h1>{title}</h1>
			</div>
		</div>
	);
}

PageTitle.proptTypes = {
	title: PropTypes.string.isRequired,
};

export default PageTitle;
