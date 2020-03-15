import * as a from './actions'

const init_state = {
    search: {
        keyword: '',
        results: []
    },
    doc: {
        title: 'Hi',
        content: 'Start Now'
    }
}
export default function reducer(state = init_state, action){
    switch (action.type) {
        case a.RESET_CODEVIEW:
            return Object.assign({}, state, {
                code: init_state.code
            })
        case a.SET_CODEVIEW:
            // search database for code info
            const doc = action.doc
            return Object.assign({}, state, {
                doc: {
                    title: doc.title,
                    content: doc.content 
                }
            })
        case a.SET_SEARCH_RESULTS:
            const docs = action.docs
            // search index for results
            return Object.assign({}, state, {
                search: {
                    keyword: action.key,
                    results: docs
                }
            })
        default:
            return state
    }
}
