import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header'
import ItemBox from './components/itemBox'
import './index.css'

/* 
Example Data
Name: Ninja Star
Desc: Small paragraph about the item
Tips: List of strings to be put in bulletted list as tips to throw
Image: Image of item
Gif: Gif of the item being thrown
*/

const throwingObjects = [
  {name: "hatchet", img: "https://i.imgur.com/rPCzQsg.png"},
  {name: "throwing knife", img: "https://imgur.com/iYenh11.png"},
  {name: "throwing star", img: "https://imgur.com/2r05gB3.png"},
  {name: "tomahawk", img: "https://imgur.com/q84oymI.png"},
  {name: "machete", img: "https://imgur.com/0cIckMi.png"},
  {name: "small axe", img: "https://imgur.com/OBJ1MuY.png"},
  {name: "shovel", img: "https://imgur.com/OmFJWaS.png"},
  {name: "pickaxe", img: "https://imgur.com/J4AhU6E.png"},
  {name: "cleaver", img: "https://i.imgur.com/DiBBexT.png"},
  {name: "spear", img: "https://i.imgur.com/h1YtL5y.png"},
  {name: "bolo", img: "https://i.imgur.com/wTyV6WJ.png"},
  {name: "kukri", img: "https://i.imgur.com/EHQ3oX2.png"},
  {name: "boomerang", img: "https://i.imgur.com/g2zYvWZ.png"},
  {name: "throwing axe", img: "https://i.imgur.com/5GgtIup.png"},
  {name: "battle axe", img: "https://i.imgur.com/P9UgLJX.png"},
  {name: "dagger", img: "https://i.imgur.com/BqCvVGH.png"},
  {name: "war hammer", img: "https://i.imgur.com/3MBzBOL.png"},
  {name: "ninja star", img: "https://i.imgur.com/JkMZVqO.png"},
  {name: "throwing spike", img: "https://i.imgur.com/bkWf8EY.png"},
  {name: "harpoon", img: "https://i.imgur.com/PnI4Gjp.png"}
];

const ItemBoxes =  throwingObjects.map(({name, img}) => <ItemBox name={name} img={img} />)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div id='item-grid'>
      {ItemBoxes}
    </div>
  </StrictMode>,
)
