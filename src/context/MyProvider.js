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
                

                this.setState({
                    stage:2
                },()=>{
                    setTimeout(()=>{
                         this.LooserHandler()
                    },2000)
                })






            }

            else
            {
                toast.error("You most create 3 person at least", {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "dark"
                  });
            }
        }


        StartOverHandler=()=>
        {
            this.setState(
                {
                    stage:1,
                    players:[],
                    result:''
                }
            )
        }



        LooserHandler =()=>
        {
            let {players}=this.state
            
            this.setState(
                {
                    result:players[Math.floor(Math.random() * players.length)]
                }
            )
        }


    
    render() { 
        return (
            <div>
                <MyContext.Provider 
                
                value={{
                state: this.state,
                addPlayer:this.addPlayerHandler,
                removePlayer:this.RemovePlayerHandler,
                Next:this.nextHandler,
                StartOverHandler:this.StartOverHandler,
                LooserHandler:this.LooserHandler
            }} >
                    {this.props.children}
                </MyContext.Provider>
            </div>
        );
    }
}
 
export {MyProvider,MyContext} ;