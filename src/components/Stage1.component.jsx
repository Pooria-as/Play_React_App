import {React,useRef,useContext,useState} from 'react';
import { Alert, Button , Form }  from "react-bootstrap"
import {MyContext} from "../context/MyProvider"
import { toast } from 'react-toastify';



const Stage1 =()=>
{
    const PlayerValue=useRef();
    const context = useContext(MyContext);
    const [error,setError]=useState([false,''])
    const PlayerName=context.state.players
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const value=PlayerValue.current.value
        const validated=ValidateInput(value)

        if(validated)
        {
            setError([false,''])
            context.addPlayer(value)
            PlayerValue.current.value=''



        }
     

    }

    const ValidateInput=(value)=>
    {
        if(value==='')
        {
            setError([true,'Player Name is Required !'])
            return false;
        }
        if(value.length <= 3)
        {
            setError([true,'Player Name Most 3 char at least!'])
            return false;
        }
        return true;
        

    }

    return(
        <>
          <Form onSubmit={handleSubmit} className='mt-4'>
            <Form.Group>
            <Form.Control ref={PlayerValue}  type="text" placeholder='Enter Player Name' name="PlayerName" />
            </Form.Group>
            
            {
                error[1] 
                ?
                <Alert variant='danger'>
                    {error[1]}
                </Alert>
                :
                null
            }
            <br/>
            <Button variant="primary" type="submit">
                Add Player
            </Button>

            {
                PlayerName && PlayerName.length > 0 ?
               <>

               <hr/> 
                <div>
                    <ul className="list-group">
                    {
                        PlayerName.map((player,idx)=>(
                            <li kye={idx} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                           <h5>
                           {
                                player
                            }
                           </h5>
                            <span  className="btn btn-sm btn-danger" onClick={()=>(
                                context.removePlayer(idx)
                            )}>
                            
                            <i class="fa fa-trash" aria-hidden="true"></i>

                            
                            </span>
                            </li>
                        ))
                    }
                    </ul>


                    <div className="action_button" 
                    onClick={()=>context.Next()}
                    >
                    Next
                    </div>

                </div> 












               </>
               :
               null

            }



          </Form>
        </>
    )
}



export default Stage1