"use client";
import { useState } from "react";
export default ()=>{

    let [status, setStatus] = useState("off");

return <div>

    <div>

        <button onClick={function(){
          setStatus("off");
        }}>OFF</button>

        <button onClick={function(){
          setStatus("on");
        }} >ON</button>


    </div>

    <img width={'300px'} src={'/testing/'+ status + '.jpg'}/>

</div>

}

// export default ()=>{

//   let [status, setStatus] = useState('');
//   return <div>

//     <div>

//    <button style={{'width':'100px'}}
//    onClick={function(){
//     setStatus("apple");
//    }}>Apple</button>

//    <button style={{'width':'100px'}} 
//    onClick={function(){
//     setStatus("mango");
//    }}>Mango</button>

//    </div>
// <img width={'300px'} src={'/testing/' + status + '.jpg'} > </img>
//   </div>
// }


// =>  ye import ku ne hta main py 