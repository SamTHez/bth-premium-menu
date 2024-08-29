const ItemBox = ({ name, img }) => {
    return(
        <button className="item-box">
            <h2>{name}</h2>
            <img src={img} alt="name" />
        </button>
    )
}

export default ItemBox;