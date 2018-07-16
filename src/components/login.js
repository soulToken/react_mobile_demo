import React from 'react'
export default function(props){
    return <div>
        <button onClick={
            ()=>{localStorage.setItem("login","1111");
            props.history.push(props.location.state.from)}}>登陆</button>
        <button> 退出</button>
    </div> 
}