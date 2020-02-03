const initialState = {
    user: {
        id: "",
        username: "",
    },
    students: []
}


export const betterProfessorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return {
                ...state.students,
                
            }
    }
}
