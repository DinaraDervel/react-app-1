let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: "Sweet! So, what do you wanna do today?",
                likesCount: 12,
            },
            { id: 2, message: "Hi! It's my first post", likesCount: 11 },
        ],
    },

    dialogsPage: {
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
        ],
    },
    sidebar: {
        friends: [
            { id: 1, name: "Betty" },
            { id: 2, name: "Alex" },
            { id: 3, name: "Katrine" },
            { id: 4, name: "Juan" },
            { id: 5, name: "Valery" },
        ],
    }
}

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
}

export default state;