"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"


export default () =>{

    let meraData = useParams();
    let [ad, setAd] = useState({})

    useEffect(()=>{
        async  function loadAd(){
            let resp = await axios.get('https://fakestoreapi.com/products/'+ meraData);
            console.log(resp.data);
            setAd(resp.data)
        }
        loadAd();
    },[])
    
    return <div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
  
</div>


}

