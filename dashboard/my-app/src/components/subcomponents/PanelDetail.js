function PanelDetail(props) {
    return (
      <div >
         <h3>{props.title}</h3>
         {props.children}
      </div>
    );
  }
     
  export default PanelDetail;