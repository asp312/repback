import React from 'react';
import { JustItem } from "../JustItem"

export const FirstRangItem = ( {FirstRangTitle, ItemArr = [], src} ) => {

    const openInfo = () =>{
        let aa = document.querySelector(`#${FirstRangTitle}`)
            aa.classList.toggle('toggled')
            let bb = document.querySelector(`#${FirstRangTitle}1`)
            bb.classList.toggle('toggled-strelka')
            let cc = document.querySelector(`#${FirstRangTitle}2`)
            cc.classList.toggle('toggled-color')
            let dd = document.querySelector(`#${FirstRangTitle}3`)
            dd.classList.toggle('toggled-border')
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