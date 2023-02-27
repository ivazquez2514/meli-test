import { Fragment, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    Loader,
    ProductCard,
} from '../../components';
import { ApiContext } from '../../context/api';

function List() {
    const { products, getProducts, isLoading } = useContext(ApiContext);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect(() => {
        getProducts(search);
    }, [search])

    if (isLoading) return <Loader />;

    return (
        <section className="products-list">
            {
                products?.map(({
                    id,
                    picture,
                    title,
                    condition,
                    free_shipping,
                    price: { currency, amount },
                    address: { state_name }
                }, index) => (
                    <Fragment key={id}>
                        <ProductCard
                            id={id}
                            picture={picture}
                            name={title}
                            price={amount}
                            currency={currency}
                            condition={condition}
                            place={state_name}
                            freeShipping={free_shipping} />
                        
                        {index !== (products.length - 1) && <div className="products-list__divider" />}
                    </Fragment>
                ))
            }
        </section>
    )
}

export default List;