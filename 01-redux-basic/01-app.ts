// Acciones

interface Action {
    type: string;
    payload?: any;
}


function reducer(state = 10, action: Action) {
    if (action.type == 'INCREMENTAR') {
        state += 1;
    }
    return state;
}
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

const result = reducer(100, incrementadorAction);
console.log("🚀 ~ file: 01-app.ts ~ line 20 ~ result", result);
