


import './GoTopage.css'


import React, { useEffect, useState } from 'react'

export default function GoTopage() {

    let [isVisiable , setIsvisiAble] = useState(false);

    console.log(isVisiable);

    const GoTopGGe = () =>{
        window.scrollTo({top:'0' , left:'0' , behavior:'smooth'})
    }

    let heightToScrool = 300;

    const ListionToScrol = () =>{
        
        const WinScrool = document.body.scrollTop || document.documentElement.scrollTop;

            
            // console.log(WinScrool);

            if(WinScrool > heightToScrool){
                setIsvisiAble(true)
            }else{
                setIsvisiAble(false)
            }
            
    }
 

    useEffect(()=>{
        window.addEventListener('scroll' , ListionToScrol);
    },[])

  return (
    <div>
        {isVisiable ? 
        <button className='gotoTopBtn' onClick={GoTopGGe}>
        <i  class="fa-solid gotoTopBtn-icon-arro fa-arrow-up"></i>
        </button>
        :null}
    </div>
  )
}
