import PropTypes from 'prop-types';

function Breadcrumb({
    items = [],
}) {
    return (
        <div className="breadcrumb">
            {items.map((item, index) => <p key={`${item.toLowerCase().replace(' ', '_')}_${index}`}>{item}&nbsp;&nbsp;{'>'}&nbsp;&nbsp;</p>)}
        </div>
    );
}

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Breadcrumb;