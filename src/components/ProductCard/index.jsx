function ProductCard() {
    return (
        <div className="product-card">
            <img
                src="https://via.placeholder.com/180"
                alt="Product"
                className="product-card__image" />

            <div className="product-information">
                <h2 className="product-information__price">$ 1000</h2>
                <h3 className="product-information__title">Product name</h3>
                <p className="product-information__place">Place</p>
            </div>
        </div>
    );
}

export default ProductCard;