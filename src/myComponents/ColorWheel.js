import React from 'react'


export default function ColorWheel() {
    function pickColor(event){
        console.log(event.target.style.background);
    }
    let arr=[];
for(let i=0; i<=360; i++){
    arr.push(`hsl(${i},100%,50% )`)
}
  return (
    <div className='color-picker' style={{background: `conic-gradient(${arr.join()})`}} onClick={pickColor}>
      
    </div>
  )
}
