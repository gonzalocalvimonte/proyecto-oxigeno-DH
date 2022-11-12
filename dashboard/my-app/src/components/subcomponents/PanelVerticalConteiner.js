import PanelVerticalProducts from './PanelVerticalProducts'
import PanelVerticalCategories from './PanelVerticalCategories'
import './stylesSubcomponents/PanelVerticalConteiner.css'

function PanelVerticalConteiner() {
   
    return (
      <div id='conteneirPanelVertical'>
            <PanelVerticalProducts/>
            <PanelVerticalCategories/>
      </div>
    );
  }
     
  export default PanelVerticalConteiner;