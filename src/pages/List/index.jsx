import {
    ProductCard,
} from '../../components';

function List() {
    return (
        <section className="products-list">
            <ProductCard />
            <div className="products-list__divider" />
            <ProductCard />
            <div className="products-list__divider" />
            <ProductCard />
            <div className="products-list__divider" />
            <ProductCard />
        </section>
    )
}

export default List;