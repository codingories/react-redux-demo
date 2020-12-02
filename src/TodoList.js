import React, {Component} from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue} onChange={this.props.inputChange}
          />
          <button onClick={this.props.clickButton}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index)=>{
              return (<li key={index}>{item}</li>)
            })
          }
        </ul>
      </div>
    );
  }
}

const stateToProps = (state)=> {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  const inputChange = (e)=>{
    let action = {
      type: 'change_input',
      value: e.target.value
    }
    dispatch(action)
  }

  const clickButton = ()=>{
    let action = {type: 'add_item'}
    dispatch(action)
  }
  return {
    inputChange, clickButton
  }
}


// connect高阶函数，返回一个高阶组件
// 第二个参数是mapDispatchToProps映射方法的
// 使用提供器provider,组件其他所有组件可以使用store
// connect 有两个参数第一个是映射store的数据到props第二个是触发dispatch,第二个可以不传
export default connect(stateToProps, dispatchToProps)(TodoList);
