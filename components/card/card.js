export default function Card(props){
    return <div className="card">
    <div>
  {/* <h1> {props.name} { props.city}</h1> */}
   <img src={props.pic} /> 
  <div className="price"> Rs. {props.price} </div>


</div>

</div>
}