export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing
    token:"BQCTCejtkOYBWyCZEyNIArHNzvJ_xdpf4NqMYg_MRLGB3DDtEq_jjjIiCWU09Pf3N4qPwVESIZNcdKm8QBItTVO7Yfru_zgxkETYg2QjDQG_At-0r-IlADfsu4plBAQvzuw5hOHEuoYcr6VbFiryitfVZu4NnH9pD5D9zOFBMylgv5ok2jTp6GwnjOHQ3D2X2SKoos9Feq22btdzcL8Z86py",
}

const reducer = (state, action) => {
    console.log(action)

    //Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token
            }
            
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        default: return state

    }
}

export default reducer