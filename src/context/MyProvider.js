import React from 'react';

const MyContext=React.createContext()


class MyProvider extends React.Component {
    
        state=
        {
            stage:2,
            players:[],
            result:''
        }
    
    
    render() { 
        return (
            <div>
                <MyContext.Provider value={this.state}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        );
    }
}
 
export {MyProvider,MyContext} ;