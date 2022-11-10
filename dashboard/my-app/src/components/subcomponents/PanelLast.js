function PanelLast(props) {
    return (
      <div >
         <h3>{props.title}</h3>
         
         <p>{props.id}</p>
         <p>{props.image}</p>
         <p>{props.name}</p>
         <p>{props.price}</p>
         
      </div>
    );
  }
     
  export default PanelLast;