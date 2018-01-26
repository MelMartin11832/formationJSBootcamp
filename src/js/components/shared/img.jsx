import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

function Img({ path, label, bigSize, toggleSize }) {
	const style = bigSize ? 'big' : 'std';
	return (
		<div className="centered">
			<div className="row ">
				<Checkbox checked={bigSize} onClick={toggleSize}>
					{"Agrandir l'image :"}
				</Checkbox>
			</div>
			<div className="row">
				<img src={path} alt={label} className={`img-${style}`} />
			</div>
		</div>
	);
}

Img.propTypes = {
	path: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	bigSize: PropTypes.bool.isRequired,
	toggleSize: PropTypes.func.isRequired,
};

export default Img;
