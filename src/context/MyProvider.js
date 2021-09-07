import React from 'react';

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



    
    render() { 
        return (
            <div>
                <MyContext.Provider 
                
                value={{
                state: this.state,
                addPlayer:this.addPlayerHandler,
                removePlayer:this.RemovePlayerHandler
            }} >
                    {this.props.children}
                </MyContext.Provider>
            </div>
        );
    }
}
 
export {MyProvider,MyContext} ;