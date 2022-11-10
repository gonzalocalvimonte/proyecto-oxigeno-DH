import PanelDetail from './subcomponents/PanelDetail'
import PanelLast from './subcomponents/PanelLast'
import PanelVerticalConteiner from './subcomponents/PanelVerticalConteiner'


function Main() {
  return (
    <div >
        <PanelDetail title='asdasd' value='13213'/>
        <PanelDetail title='asdasd' value='13213'/>
        <PanelDetail title='asdasd' value='13213'/>

        <PanelLast title='soy un titulo' id='12' name='asdasd' price='123132' image='image'/>

        <PanelVerticalConteiner/>
        
    </div>
  );
}

export default Main;