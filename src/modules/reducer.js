import { setText } from './action';

const initState = () => {
    return {
        text: "これはサンプルです。\nこんな感じで画像とテキストが組み合わされます。\n下のボタンを押して、画像をアップロードしてください。\nその写真だけのエモい文章が創り出されます"
    }
}

export const textReducer = (state = initState(), action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                text: action.payload.text
            }
        default:
            return state;
    }
}