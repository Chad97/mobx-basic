import React from 'react';
import { observer } from 'mobx-react';

import newState from './state'

import AllNum from './child/AllNum'
import Main from './child/Main'






@observer
class Mobx extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }

    render() {
        return (
            <> 
                <AllNum store={newState} />
                <br /><hr />
                <Main store={newState} />
                <br /><hr />
                <button onClick={newState.empty}>清零</button>
            </>
        );
    }
}




export default Mobx;