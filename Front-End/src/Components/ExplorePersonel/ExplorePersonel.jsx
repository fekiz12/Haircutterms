import React from 'react'
import "../ExplorePersonel/ExplorePersonel.css"
import {personel_menu} from "../../Assets/calisan"
const ExplorePersonel = ({Kategori,setKategori}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our Employees</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring a array delectable array of Employees</p>
    <div className='explore-menu-list'>
        {personel_menu.map((item,index)=>{
            return(
                <div onClick={()=>setKategori(prev=>prev===item.personel_menu_name?"All":item.personel_menu_name) } key={index} className='explore-menu-list-item'>
               <img className={Kategori===item.personel_menu_name?"active":""} src={item.personel_menu_image}>
                
               </img>
                <p>{item.personel_menu_name}</p>
                </div>
            )
        })}
    </div>

        <hr/>
</div>
  )
}

export default ExplorePersonel