const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullname: 'Dmitry', status: 'Iam a boss', location: {city:'Minsk', country: 'Belarus'} },
        { id: 2, followed: true, fullname: 'Alexander', status: 'Iam a boss too', location: {city:'Moscow', country: 'Russia'} },
        { id: 3, followed: false, fullname: 'Andrew', status: 'Iam a engineer', location: {city:'Kovrov', country: 'Russia'} },

    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
     case FOLLOW:  
      let stateCopy = {
          ...state, 
          users: state.users.map(u=>{
              if (u.id ===action.userId) {
                  return {...u, followed:true}
              }
              })
            }
     return stateCopy;
          case UNFOLLOW:
        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) =>({ type: UNFOLLOW, userId})


export default usersReducer;