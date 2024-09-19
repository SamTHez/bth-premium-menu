import { useState, useEffect } from 'react';
import supabase from '../client.js';

const Table = (location) => {
    const [loaded, setLoaded] = useState(false);
    const [curLocation, setCurLocation] = useState('none');

    const fetchData = async () => {
        const { data, error } = await supabase
            .from('items')
            .select('*')
        
        if(data) {
            tableRows = data.map(({ id, item_name, img_url, item_available, item_is_favorite }) => {
                let available, favorite;
                if(location==='none'){available="---"; favorite="---"}
                else {
                    available = item_available[location];
                    favorite = item_is_favorite[location];
                }
                return(
                    <tr>
                        <td><h3>{item_name}</h3></td>
                        <td><h3>{available}</h3></td>
                        <td><h3>{favorite}</h3></td>
                    </tr>
                )
            })
            console.log(tableRows)
            setLoaded(true);
        }
        if(error) {
            console.log(`Error: ${error}`);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Mark As Available</th>
                    <th>Mark As Favorite</th>
                </tr>
            </thead>
            <tbody>
                {loaded&&tableRows}
            </tbody>
        </table>
    )
};

export default Table;