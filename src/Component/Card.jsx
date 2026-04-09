import "../DashBoard.css"
function Card(props){

return(

    <div className={props.className}>
      <img src={props.image} alt={props.alt} />
      <h5>{props.desc}</h5>
      <p>{props.donnee}</p>
    </div>

)

}
export default Card;