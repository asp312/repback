import React from 'react';
import { FirstRangItem } from "../CurrentField"
import { JustItem } from "../JustItem"



export const Menu = ({className}) => {
    
    const secondArr = [1026, 57, 88]
    const newsArr = ["Новости региона", "Новости компании", "Новости каталога", "Новости бизнеса"]
    return (
        <div className={className}>
            <ul className={'main-list'}>
                <FirstRangItem FirstRangTitle = {"CMS"} ItemArr = { secondArr } src={"https://cdn.icon-icons.com/icons2/603/PNG/512/book_handbook_manual_bible_icon-icons.com_55989.png"}/>
                <FirstRangItem FirstRangTitle = {"Новости"} ItemArr = { newsArr } src={"https://cdn.icon-icons.com/icons2/504/PNG/512/newspaper_icon-icons.com_49238.png"}/>
                <JustItem Title={"IDM"} className={"just-itemV2"} src={"https://cdn.icon-icons.com/icons2/1572/PNG/512/3592828-general-key-key-lock-lock-office-password-security_107759.png"}/>
                <JustItem Title={"Pay"} className={"just-itemV2"} src={"https://cdn.icon-icons.com/icons2/2248/PNG/512/currency_rub_icon_137704.png"}/>
                <FirstRangItem FirstRangTitle = {"REF"} src={"https://cdn.icon-icons.com/icons2/270/PNG/512/Folder_29922.png"}/>
                <FirstRangItem FirstRangTitle = {"Vremya"} src={"https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564415-globe_81515.png"}/>
                <JustItem Title={"Scheduler"} className={"just-itemV2"} src={"https://cdn.icon-icons.com/icons2/1489/PNG/512/clock_102733.png"}/>
            </ul>
        </div>
    )
}