import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
const Dialogs = (props) =>{
    return (
        <div className = {s.dialogs}>
            <div className= {s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/dialogs/1">Dmitry</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/2">Andrey</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3">Svetlana</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4">Alexandra</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5">Valery</NavLink> 
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your car?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;