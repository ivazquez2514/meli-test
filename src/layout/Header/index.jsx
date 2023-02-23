import {
    Searchbar
} from '../../components';

function Header() {

    const onSearchSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="header">
            <a className="header__logo" href="/">Mercado Libre México - Donde comprar y vender de todo</a>
            <Searchbar
                placeholder="Nunca dejes de buscar"
                onSubmit={onSearchSubmit} />
        </div>
    );
}

export default Header;