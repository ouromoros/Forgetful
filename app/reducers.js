import * as a from './actions'

const init_state = {
    search: {
        keyword: '',
        results: []
    },
    code: {
        title: 'Hi',
        code: 'Start Now'
    }
}
export default function reducer(state = init_state, action){
    switch (action.type) {
        case a.RESET_CODEVIEW:
            return Object.assign({}, state, {
                code: init_state.code
            })
        case a.SELECT_DOCUMENT:
            // search database for code info
            return Object.assign({}, state, {
                code: {
                    title: 'demo',
                    code: "didn't really look"
                }
            })
        case a.TRIGGER_SEARCH:
            const dummy_results = []
            for (let i = 0; i < 20; i++) {
                dummy_results.push({
                    id: i,
                    name: 'dummy' + i
                })
            }
            // search index for results
            return Object.assign({}, state, {
                search: {
                    keyword: action.key,
                    results: dummy_results
                }
            })
        default:
            return state
    }
}
