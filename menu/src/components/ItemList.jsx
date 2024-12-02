import { useState, useEffect } from 'react'
import supabase from '../client.js'
import Item from './Item.jsx'

const ItemList = () => {
    const [items, setItems] = useState(false);

    const fetchData = async () => {
        const { data, error } = await supabase
            .from('items')
            .select('*')
            .order('id',{ascending:true})
        
        if(data) {
            // setItems(data.map((item) => <Item key={item.item_name} name={item.item_name} image={item.img_url}/>));
            setItems(data.map((item) => <Item key={item.item_name} name={item.item_name} image={'../assets/IMG_2858.jpg'}/>));

        }
        if(error) {
            console.log(`Error: ${error}`);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div id="item-list">
            {items[0]}
        </div>
    ) 
}

export default ItemList;