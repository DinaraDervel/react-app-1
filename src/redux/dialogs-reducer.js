const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: "Betty" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Katrine" },
        { id: 4, name: "Juan" },
        { id: 5, name: "Valery" },
    ],
    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How is your day?!" },
        { id: 3, message: "Yo" },
    ]
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            };

        default: return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
