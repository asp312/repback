import React from 'react';
import { JustItem } from "../JustItem"

export const FirstRangItem = ( {FirstRangTitle, ItemArr = [], src} ) => {

    const openInfo = () =>{
        let menuField = document.querySelector(`#${FirstRangTitle}`)
            menuField.classList.toggle('toggled')
            let arrow = document.querySelector(`#${FirstRangTitle}1`)
            arrow.classList.toggle('toggled-strelka')
            let changeColor = document.querySelector(`#${FirstRangTitle}2`)
            changeColor.classList.toggle('toggled-color')
            let changeBorder = document.querySelector(`#${FirstRangTitle}3`)
            changeBorder.classList.toggle('toggled-border')
        }
    return (
        <li>
            <div className = {"first-rang-item-title"} onClick={openInfo} id={`${FirstRangTitle}3`}>
                <div className="pic"><img src={src} alt="" /></div><h5 id={`${FirstRangTitle}2`}>{FirstRangTitle}</h5><div id={`${FirstRangTitle}1`} className = {"strelka"}></div>
            </div>
                <ul className = {'first-rang-item-list'} id={FirstRangTitle}>
                {
                    ItemArr.map((item) => (
                        <div className={"wrapper-items"}><JustItem Title = { item } key = {item.id} className={"just-item"}/></div>
                    ))
                }
            </ul>
                
         </li>
    )
}