const RESET_CODEVIEW = "RESET_CODE_VIEW"
const SELECT_DOCUMENT = "SELECT_DOCUMENT"
const TRIGGER_SEARCH = "TRIGGER_SEARCH"

const reset_codeview = () => ({
    type: RESET_CODEVIEW
})

const select_document = (id) => ({
    type: SELECT_DOCUMENT,
    id
})

const trigger_search = (key) => ({
    type: TRIGGER_SEARCH,
    key
})

export {RESET_CODEVIEW, SELECT_DOCUMENT, TRIGGER_SEARCH, reset_codeview, select_document, trigger_search}
