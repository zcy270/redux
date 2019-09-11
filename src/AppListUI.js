import React from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from "antd"

const AppUi = (props)=>{
    return ( 
        <div>
            <div style={{margin:'20px'}}>
            <Input
                style={{width:'240px',marginRight:'10px'}}
                placeholder={props.placeholder}
                onChange={props.changeValue}
                value={props.inputValue}
                />
            <Button
            type="primary"
            onClick={props.addList}
            >click</Button>
            <div style={{width:"300px",margin:"20px 0px"}}>
                <List
                bordered
                dataSource={props.list}
                renderItem={(item,index)=>(
                <List.Item
                    onClick={()=>{
                        props.deleteItem(index)
                    }}
                >{item}</List.Item>)}
                />
            </div>

            <Button
                type='danger'
                onClick={props.ctnToggle}
            >click1</Button>
            <div className={props.isShow?'show':'hide'}>123321</div>
            </div>
        </div>
     );
}

// class AppUi extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <div style={{margin:'20px'}}>
//                 <Input
//                     style={{width:'240px',marginRight:'10px'}}
//                     placeholder={props.inputValue}
//                     onChange={props.changeValue}
//                     value={props.inputValue}
//                     />
//                 <Button
//                 type="primary"
//                 onClick={props.addList}
//                 >click</Button>
//                 <div style={{width:"300px",margin:"20px 0px"}}>
//                     <List
//                     bordered
//                     dataSource={props.list}
//                     renderItem={(item,index)=>(
//                     <List.Item
//                         onClick={()=>{
//                             props.deleteItem(index)
//                         }}
//                     >{item}</List.Item>)}
//                     />
//                 </div>

//                 <Button
//                     type='danger'
//                     onClick={props.ctnToggle}
//                 >click1</Button>
//                 <div className={props.isShow?'show':'hide'}>123321</div>
//                 </div>
//             </div>
//          );
//     }
// }
 
export default AppUi;