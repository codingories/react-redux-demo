import React, {Component} from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue}/>
          <button>提交</button>
        </div>
        <ul>
          <li>hi</li>
        </ul>
      </div>
    );
  }
}

const stateToProps = (state)=> {
  return {
    inputValue: state.inputValue
  }
}

// connect高阶函数，返回一个高阶组件
// 第二个参数是mapDispatchToProps映射方法的
// 使用提供器provider,组件其他所有组件可以使用store
// connect 有两个参数第一个是映射store的数据到props第二个是触发dispatch,第二个可以不传
export default connect(stateToProps, null)(TodoList);
