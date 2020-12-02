import React from 'react';
import { connect } from 'react-redux'

// 有状态组件变为无状态组件,提升性能
const TodoList = (props)=>{
  let { inputValue, inputChange, clickButton, list } = props
  return (
    <div>
      <div>
        <input
          value={inputValue} onChange={inputChange}
        />
        <button onClick={clickButton}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index)=>{
            return (<li key={index}>{item}</li>)
          })
        }
      </ul>
    </div>
  );
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
// 大型项目 stateToProps, dispatchToProps可以拆分成两个文件
export default connect(stateToProps, dispatchToProps)(TodoList);
