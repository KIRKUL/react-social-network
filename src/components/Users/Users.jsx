import React from "react";
import styles from "./users.module.css"

let Users = (props) => {
    if (props.users.length ===0) {

    
    props.setUsers (  [
        { id: 1, photoUrl:'https://img2.freepng.ru/20180625/ztq/kisspng-user-royalty-free-laptop-clip-art-office-suit-5b31ad8c60fa86.5587156515299823483972.jpg', followed: false, fullname: 'Dmitry', status: 'Iam a boss', location: {city:'Minsk', country: 'Belarus'} },
        { id: 2, photoUrl:'https://e7.pngegg.com/pngimages/620/285/png-clipart-computer-icons-computer-operator-child-hand.png',followed: true, fullname: 'Alexander', status: 'Iam a boss too', location: {city:'Moscow', country: 'Russia'} },
        { id: 3, photoUrl:'https://st3.depositphotos.com/1007566/13792/v/950/depositphotos_137920280-stock-illustration-businessman-working-in-computer.jpg',followed: false, fullname: 'Andrew', status: 'Iam a engineer', location: {city:'Kovrov', country: 'Russia'} }

    ]
    )
}
    return <div>{
        props.users.map( u=> <div key= {u.id}> 
        <span>
            <div>
                <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
                {u.followed 
                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
            </span>
            <span>
            <div>{u.location.country}</div>

                <div>{u.location.city}</div>
            </span>
        </span>

        </div>)
}
            </div>
        
}

export default Users;