import React from 'react'
import './Menu.css'
import {menu_list} from '../../assets/assets'

const Menu = ({category, setCategory}) => {
  return (
    <div className='menu' id='menu'>
        <h1>Explore Our Menu</h1>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum eaque officiis laboriosam maxime quam animi reiciendis velit recusandae, nesciunt eum dolore soluta pariatur necessitatibus, asperiores cupiditate voluptate! Sequi, repellendus.</p>
        <div className='menu-list'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='menu-item' key={index}>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_img} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Menu