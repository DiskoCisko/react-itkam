let initState = {
    dataUsers: [
        {
            id: 1,
            name: 'Mik',
            path: "/dialogs/1"
        },
        {
            id: 2,
            name: 'Nik',
            path: "/dialogs/2"
        },
        {
            id: 3,
            name: 'Sam',
            path: "/dialogs/3"
        },
    ],
    dataMessages: [
        {
            id: 1,
            message: 'Hi',
            author: 'Mik',
            path: "/dialogs/1"
        },
        {
            id: 2,
            message: 'Fack is mad',
            author: 'Nik',
            path: "/dialogs/2"
        },
        {
            id: 3,
            message: 'Plan B',
            author: 'Sam',
            path: "/dialogs/3"
        },
    ]
}

export const messagasReducer = (state = initState, actions) => {
    return state
}