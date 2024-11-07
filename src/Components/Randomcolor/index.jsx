
import { useEffect, useState } from "react"
export default function RandomColor(){
    const [typeOfColor,setTypeOfColor]  = useState('hex')
    const [color,setColor] = useState('#000000')
    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexColor(){
      const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
      let hexColor = "#"
      for(let i=0;i<6;i++){
        hexColor+= hex[randomColorUtility(hex.length)]
      }
     
      setColor(hexColor)
    }
      useEffect(()=>{
        if(typeOfColor==='rgb')handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
      },[typeOfColor]);
     function handleCreateRandomRgbColor(){
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)
    }
    return(
        <div style={{
            width:'100vw',
            height:'100vh',
            backgroundColor:color,
            margin:0,
            padding:0,
            overflow:"hidden",
            flexDirection:'column',
            gap:'20px'
        }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor:handleCreateRandomRgbColor}>Generate Random Color</button>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color:'#fff',
                fontSize:'60px',
                marginTop:'50px'
            }}><h1>{color}</h1><h3>{typeOfColor==="rgb"?"RGB Color":"HEX Color"}</h3></div>
        </div>
    )
}