const INITIAL_STATE = {mood: "ʘ‿ʘ"}

const moodReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HAPPY':
            return { ...state, mood: "ʘ‿ʘ" }
        case 'SAD':
            return { ...state, mood: "Q_Q" }
        case 'ANGRY':
            return { ...state, mood: "（πーπ）" }
        case 'CONFUSED':
            return { ...state, mood: "o.O" }
        default:
            return state
    }
}

const store = Redux.createStore(moodReducer);