const emoji = document.getElementById("emoji");
const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const angry = document.getElementById("angry");
const confused = document.getElementById("confused");

happy.addEventListener("click", (e) => {
    store.dispatch({ type: "HAPPY"})
    const state = store.getState()
    emoji.innerText = state.mood
})

sad.addEventListener("click", (e) => {
    store.dispatch({ type: "SAD"})
    const state = store.getState()
    emoji.innerText = state.mood
})

angry.addEventListener("click", (e) => {
    store.dispatch({ type: "ANGRY"})
    const state = store.getState()
    emoji.innerText = state.mood
})

confused.addEventListener("click", (e) => {
    store.dispatch({ type: "CONFUSED"})
    const state = store.getState()
    emoji.innerText = state.mood
})
