const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dmitry' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Alexandra' },
        { id: 5, name: 'Valery' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your car?' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'Very Well' },
        { id: 5, message: 'Cool' }
      ],
      newMessageText: " "
    };

 const dialogsReducer = (state = initialState, action) => {
      switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
        return{
            ...state,
            newMessageText : action.body
          };

        case SEND_MESSAGE:
          let body = state.newMessageText;
          return  {
            ...state,
            newMessageText : ' ',
            messages: [...state.messages, {id: 6, message: body} ]
          };
        default:
            return state;
    }
 }

 export const sendMessageCreator = () => ({type: SEND_MESSAGE})
 export const updateNewMessageBodyCreator = (body) => 
 ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })
 

export default dialogsReducer;