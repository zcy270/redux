import React, { Component } from 'react'
class FlavorForm extends Component {
    
    render() { 
        return (
            <form onSubmit={this.props.handleSubmit}>
              <label>
                选择你喜欢的风味:
                <select value={this.props.value} onChange={this.props.handleChange}>
                  <option value="grapefruit">葡萄柚</option>
                  <option value="lime">酸橙</option>
                  <option value="coconut">椰子</option>
                  <option value="mango">芒果</option>
                </select>
              </label>
              <input type="submit" value="提交" />
            </form>
          );
    }
}
 
export default FlavorForm;