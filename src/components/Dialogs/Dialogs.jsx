import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
const Dialogs = (props) =>{


    let dialogsElements = props.state.dialogs.
    map( d => <DialogItem name = {d.name} id = {d.id}/>);

    let messageElements = props.state.messages.
    map(m => <Message message={m.message} />)

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