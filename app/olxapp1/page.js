import "./olx.css"
import Card from "@/components/card/card"

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
            return  <Card price = {adData.price} pic = {adData.pic}> </Card>
            // <Card name ="Ali" city = "FSD">  </Card>

            // left wali key he uper props me likhne ha 
        })
     }
  </div>  
  </div>
}
   
    //  Card tag must use with return 
    // img is the itself tag not other tag you use  