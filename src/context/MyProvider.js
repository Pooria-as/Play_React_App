import React from 'react';
import { toast } from 'react-toastify';

const MyContext=React.createContext()


class MyProvider extends React.Component {
    
        state=
        {
            stage:1,
            players:[],
            result:''
        }
    

        addPlayerHandler=(PlayerName)=>
        (
            this.setState((prevState)=>({
                players:[
                    ...prevState.players,
                    PlayerName
                ]
            }))
        )
        RemovePlayerHandler =(idx)=>
        
        {
            let NewPlayer= this.state.players
            NewPlayer.splice(idx,1)
            this.setState({players:NewPlayer})

        }
        nextHandler = ()=>
        {
            
            if(this.state.players.length > 2)
            {
                console.log("move to stage 2");
            }
            else
            {
                toast.error("You most create 3 person at least", {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "dark"
                  });
            }
        }


    
    render() { 
        return (
            <div>
                <MyContext.Provider 
                
                value={{
                state: this.state,
                addPlayer:this.addPlayerHandler,
                removePlayer:this.RemovePlayerHandler,
                Next:this.nextHandler
            }} >
                    {this.props.children}
                </MyContext.Provider>
            </div>
        );
    }
}
 
export {MyProvider,MyContext} ;