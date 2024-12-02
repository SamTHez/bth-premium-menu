const Item = ({name, image}) => {
    return(
        <div className="Item">
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    )
};

export default Item;