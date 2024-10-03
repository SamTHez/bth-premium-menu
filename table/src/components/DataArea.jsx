import { useState, useEffect } from 'react';
import supabase from '../client.js';

const PopulatedTable = ({data, location, updateData}) => {
    let tableRows
    
    const handleToggle = (item_name, column) => {
        updateData(item_name, location, column);
    }

    if(data){
        tableRows = data.map(({ id, item_name, item_available, item_is_favorite }) => {
            let available, favorite;
            if(location==='none'){available="---"; favorite="---"}
            else {
                available = item_available[location];
                favorite = item_is_favorite[location];
            }
            return(
                <tr key={id}>
                    <td className='table-item-name'>{item_name}</td>
                    <td><button className={(available) ? "toggle-yes" : "toggle-no"} onClick={() => {handleToggle(item_name, 'available')}}>{(available) ? "yes" : "no"}</button></td>
                    <td><button className={(favorite) ? "toggle-yes" : "toggle-no"} onClick={() => {handleToggle(item_name, 'favorite')}}>{(favorite) ? "yes" : "no"}</button></td>
                </tr>
            )
        }) 
    }

    return(
        <table id='data-table'>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Visible</th>
                    <th>Favorite</th>
                </tr>
            </thead>
            <tbody>
                {(data) && tableRows}
            </tbody>
        </table>
    )
}

const DataArea = () => {
    const [data, setData] = useState();
    const [isChanged, setIsChanged] = useState(false);
    const [location, setlocation] = useState('Horsham');

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

    const saveData = async () => {
        console.log("Start Saving");
        const numItems = data.length;
        for(let i=0;i<numItems;i++) {
            const { error } = await supabase
            .from('items')
            .update({item_available: data[i].item_available, item_is_favorite: data[i].item_is_favorite})
            .eq('id', i+1)
            if(error) {
                console.log(error);
            }
        }
        setIsChanged(false);
    }

    useEffect(() => {
        fetchData();
    }, [])
 
    const updateData = (target_item_name, target_location, column) => {
        let updatedData = data.map((item) => {
            if(item.item_name === target_item_name) {
                switch(column) {
                    case 'available':
                        let newAvailable = item.item_available;
                        newAvailable[target_location] = !(item.item_available[target_location]);
                        return({...item, item_available: newAvailable});
                    case 'favorite':
                        let newFavorite = item.item_is_favorite;
                        newFavorite[target_location] = !(item.item_is_favorite[target_location]);
                        return({...item, item_is_favorite: newFavorite})
                    default:
                        console.log(`ERROR: |${column}| is an invalid value for column in updateData`)
                }
            }
            return item;
        })
        setData(updatedData);
        if(!isChanged) {setIsChanged(true)};
    }

    return(
    <div id='data-area'>
        <div id='data-controls'>
            <label htmlFor="location-select">Select your location:</label>
            <select name='location' id='location-select' value={location} onChange={(e) => {setlocation(e.target.value)}}>
                <option value="Horsham">Horsham</option>
                <option value="Paramus">Paramus</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Freehold">Freehold</option>
                <option value="Bloomfield">Bloomfield</option>
                <option value="Old Bridge">Old Bridge</option>
                <option value="Toms River">Toms River</option>
                <option value="Woodbridge">Woodbridge</option>
                <option value="Cherry Hill">Cherry Hill</option>
                <option value="Bucks County">Bucks County</option>
                <option value="Philadelphia">Philadelphia</option>
                <option value="King of Prussia">King of Prussia</option>
            </select>
            <button disabled={!isChanged} onClick={() => {if(isChanged){saveData();}}}>Save</button>
        </div>
        {(data) && <PopulatedTable data={data} location={location} updateData={updateData}/>}
    </div>
    )
};

export default DataArea;