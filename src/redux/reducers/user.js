

const userState = {
    id : "",
    password :"",
    username:"",

}

// Actions

const login = { type :"login" };
const logout = { type :"logout" };


const userReducer = (state = userState , action) => {
    switch (action.type) {
        case "login" : 
            return {
                ...state,
                id :action.id,
                parseFloat :action.password,
            };

        case "logout" :
            return {
                ...state,
                id :"",
                password :"",
            };
    }
    return state;
}

export default userReducer;