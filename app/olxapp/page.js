import "./page.css"
export default ()=>{
    
    let meraData = [
        {pic:'https://images.olx.com.pk/thumbnails/473082962-800x600.webp', price: 100000},
        {pic: 'https://images.olx.com.pk/thumbnails/473083497-800x600.webp', price:200000},
        {pic: 'https://images.olx.com.pk/thumbnails/473085238-240x180.webp', price: 20000},
        {pic: 'https://images.olx.com.pk/thumbnails/473056638-800x600.webp', price:3000000}
   
    ]


    return <div>
        <div className="flex">
     {
        meraData.map(function(adData){
            return <div className="card">
                <div>

               <img src={adData.pic} /> 
              <div className="price"> Rs. {adData.price} </div>
            

            </div>

            </div>
        })
     }
  </div> 
  </div>
}


   /* img is the itself tag not other tag you use  */