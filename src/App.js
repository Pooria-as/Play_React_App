import {React,useContext} from 'react';
import Stage1 from './components/Stage1.component';
import Stage2 from './components/Stage2.component';
import { MyContext } from './context/MyProvider';


const App=()=>
{

const context = useContext(MyContext)

    return(
        <div className="wrapper">
        <div className="center-wrapper">
        <h1>Who pays the bill ?</h1>
         {
         context.state.stage===1 ? <Stage1/> : <Stage2/>
            }
        </div> 
        </div>
    )
}


export default App