// Acciones

interface Action {
    type: string;
    payload?: any;
}


function reducer(state = 10, action: Action) {
    switch(action.type){
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state *= action.payload;
        case 'DIVIDIR':
            return state /= action.payload;
        default:
            return state;
    }
}
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

const decrementarAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}
const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 10
}

const result = reducer(100, incrementadorAction);
console.log("🚀 ~ file: 01-app.ts ~ line 20 ~ result", result);

const result1 = reducer(100, decrementarAction);
console.log("🚀 ~ file: 01-app.ts ~ line 30 ~ result1", result1);

const result2 = reducer(100, multiplicarAction);
console.log("🚀 ~ file: 01-app.ts ~ line 40 ~ result2", result2);

const result3 = reducer(100, dividirAction);
console.log("🚀 ~ file: 01-app.ts ~ line 50 ~ result3", result3);