import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ShippingIndicator from '../ShippingIndicator';

function ProductCard({
    id,
    name,
    price,
    currency,
    picture,
    freeShipping,
    condition,
    place,
}) {
    const navigate = useNavigate();

    const onProductClick = () => {
        navigate(`/items/${id}`);
    }

    return (
        <div className="product-card" role="button" onClick={onProductClick}>
            <img
                src={picture}
                alt={name}
                className="product-card__picture" />

            <div className="product-information">
                <div className="product-information__price-container">
                    <h2 className="product-information__price">$ {price} {currency}</h2>
                    {freeShipping && <ShippingIndicator />}
                </div>
                <h3 className="product-information__title">{name}</h3>
                <p className="product-information__place">{place}</p>
                <p className="product-information__condition">{condition}</p>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    freeShipping: PropTypes.bool.isRequired,
    condition: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
}

export default ProductCard;