import "./stylesSubcomponents/PanelDetail.css"

function PanelDetail(props) {
    return (
      <div className="mainPanelDetail" >
        <h3>{props.title}</h3>
        {props.children}
      </div>
    );
  }

export default PanelDetail;