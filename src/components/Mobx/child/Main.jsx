import React from 'react';
import { observer } from 'mobx-react';

const Main = observer((props) => (
    <div>
      <p>num1 = {props.store.num1}</p>
      <p>num2 = {props.store.num2}</p>
      <div>
        <button style={{marginRight:'5em'}} onClick={props.store.addNum1}>num1 + 1</button>
        <button onClick={props.store.addNum2}>num2 + 1</button>
      </div>
    </div>
  ));

export default Main