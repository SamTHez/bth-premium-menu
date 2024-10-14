import { useState, useEffect } from 'react'
import supabase from '../client.js'

const ItemBox = () => {
    return(
        <div className='item-box'>
        
        </div>
    )
}

const ItemList = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        const { data, error } = await supabase
            .from('items')
            .select('*')
            .order('id',{ascending:true})
        
        if(data) {
            setData(data);
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

        </div>
    ) 
}

export default ItemList;