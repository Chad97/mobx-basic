import React from 'react';
import { observer } from "mobx-react"

const AllNum = observer((props) => <div>num1 + num2 = {props.store.total}</div>);

export default AllNum