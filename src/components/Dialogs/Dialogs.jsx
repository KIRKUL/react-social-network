import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
 </div>
}

const Message = (props) =>{
    return (
        <div className={s.dialog}>{props.message}</div>
    ) 
}


const Dialogs = (props) =>{
    let dialogsData = [
        {id:1, name:'Dmitry'},
        {id:2, name:'Andrew'},
        {id:3, name:'Svetlana'},
        {id:4, name:'Alexandra'},
        {id:5, name:'Valery'}
    ]

    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'How is your car?'},
        {id:3, message:'YO'},
        {id:4, message:'Very Well'},
        {id:5, message:'Cool'}
    ]

    let dialogsElements = dialogsData.
    map( d => <DialogItem name = {d.name} id = {d.id}/>);

    let messageElements = messagesData
    .map(m => <Message message={m.message} />)

    return (
        <div className = {s.dialogs}>
            <div className= {s.dialogsItems}>
                {/* <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>                
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>                
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>                
                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>                
                <DialogItem name = {dialogsData[4].name} id = {dialogsData[4].id}/>                 */}
                {dialogsElements}
                </div>
            <div className={s.messages}>
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message}/> */}
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;