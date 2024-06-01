import React, { useContext } from 'react'
import "../PersonelDisplay/PersonelDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import PersonelItem from '../../Components/PersonelItem/PersonelItem'

const PersonelDisplay = ({Kategori}) => {
  const{ personel_list}=useContext(StoreContext)
  return (
    <div className='personel-display' id='personel-display'>
        <h2></h2>
        <div className='personel-display-list'>
        {personel_list.map((item,index)=>{
          if(Kategori==="All" || Kategori===item.Kategori){
            return <PersonelItem key={index} id={item.id} name={item.name}
             image={item.image} description={item.description}/>
          }
        })}

        </div>
    </div>
  )
}

export default PersonelDisplay