export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    // Remove after finished developing
    // token:"BQCTCejtkOYBWyCZEyNIArHNzvJ_xdpf4NqMYg_MRLGB3DDtEq_jjjIiCWU09Pf3N4qPwVESIZNcdKm8QBItTVO7Yfru_zgxkETYg2QjDQG_At-0r-IlADfsu4plBAQvzuw5hOHEuoYcr6VbFiryitfVZu4NnH9pD5D9zOFBMylgv5ok2jTp6GwnjOHQ3D2X2SKoos9Feq22btdzcL8Z86py",
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
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };



        default: return state

    }
}

export default reducer