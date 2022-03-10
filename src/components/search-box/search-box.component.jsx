import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler}) => {
    return(
        <input
            className={`search-box ${className}`}
            className={className}
            tpe="search"
            placeholder={placeholder}
            onChange={onChangeHandler}/>
    );

}

export default SearchBox;