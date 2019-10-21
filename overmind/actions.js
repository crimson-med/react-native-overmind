export const incrementTaps = async ({state}) => {
    console.log("curent val: "+state.taps);
    console.log("putting val: "+state.taps+1);
    state.taps = state.taps+1;
    console.log("new val: "+state.taps);
    return state.taps;
}
export const decrementTaps = async ({state}) => {
    return state.taps--;
}