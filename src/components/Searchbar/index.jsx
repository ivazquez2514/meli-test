import PropTypes from 'prop-types';

function Searchbar({
    className,
    placeholder,
    onSubmit,
}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const searchInput = form.elements.namedItem('search');
        onSubmit({
            search: searchInput.value
        });
    }

    return (
        <form onSubmit={handleSubmit} className="searchbar-container">
            <div className={`searchbar ${className}`}>
                <input type="text" name="search" placeholder={placeholder} className="searchbar__input" />
                <button type="submit" className="searchbar__submit">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
        </form>
    )
}

Searchbar.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
}

Searchbar.defaultProps = {
    className: '',
    placeholder: 'Ingresa tu búsqueda',
    onSubmit: () => {},
}

export default Searchbar;