import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../context/api';
import { Loader } from '../../components';

function Detail() {
    const { productId } = useParams();
    const { getProductById, selectedProduct, isLoading } = useContext(ApiContext);

    useEffect(() => {
        if (productId) {
            getProductById(productId);
        }
    }, [])

    if (isLoading || !selectedProduct) return <Loader />;

    return (
        <section className="product-detail">
            <div className="information-container">
                <img
                    className="information-container__picture"
                    alt="hkjh"
                    src={selectedProduct?.picture} />
                <div className="information-container__information">
                    <p className="product-status">{selectedProduct?.condition} - {selectedProduct?.sold_quantity} vendidos</p>
                    <h3 className="title">{selectedProduct?.title}</h3>
                    <div className="price">$ {selectedProduct?.price?.amount} {selectedProduct?.price?.currency}</div>

                    <button type="button" className="buy-button">Comprar</button>
                </div>
            </div>
            <div className="product-detail__description-container">
                <h4 className="title">Descripción del producto</h4>
                <p className="description">{selectedProduct?.description}</p>
            </div>
        </section>
    )
}

export default Detail;