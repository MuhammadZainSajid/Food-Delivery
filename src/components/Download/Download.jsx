import React from 'react'
import './Download.css'
import {assets} from '../../assets/assets'

const Download = () => {
  return (
    <div className="download">
        <p>For Better Experiance Download our Mobile App</p>
        <div className="download-btn">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Download