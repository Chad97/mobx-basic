import { observable, autorun, computed, action, configure} from "mobx"
configure(true)//开启严格模式

class MyState {
    @observable num1 = 0;
    @observable num2 = 100;
  
    @action addNum1 = () => {
      this.num1 ++;
    }

    @action addNum2 = () => {
      this.num2 ++;
    }

    @action empty = () => {
        this.num1 = 0
        this.num2 = 0
    }

    @computed get total() {
      return this.num1 + this.num2;
    }
  }

  const newState = new MyState();


  
export default newState 

