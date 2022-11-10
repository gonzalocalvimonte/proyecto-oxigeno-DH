function PanelDetail(props) {
    return (
      <div >
         <h3>{props.title}</h3>
         <p>{props.value}</p>
      </div>
    );
  }
     
  export default PanelDetail;