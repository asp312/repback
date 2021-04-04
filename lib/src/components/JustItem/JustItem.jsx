import React from 'react';

export const JustItem = ({Title, className, src=''}) => {
    const empty = [1];
    const notempty = src.split('/');
    console.log(notempty)
    return(
    <li className={className}>
      <img src={src} alt="" className={ notempty.length > empty.length ? "pic":"pic-block"}/> <h5>{Title}</h5>
    </li>
    )
}