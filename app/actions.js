const RESET_CODEVIEW = "RESET_CODE_VIEW"
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"
const SET_CODEVIEW = "SET_DOCUMENT"

const reset_codeview = () => ({
    type: RESET_CODEVIEW
})

const set_search_results = (docs) => ({
    type: SET_SEARCH_RESULTS,
    docs
})

const set_codeview = (doc) => ({
    type: TRIGGER_SEARCH,
    doc
})

export {RESET_CODEVIEW, SET_SEARCH_RESULTS, SET_CODEVIEW, reset_codeview, set_codeview, set_search_results}
