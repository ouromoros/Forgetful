import React from 'react'
import { connect } from 'react-redux'
import * as a from '../actions'
import * as d from '../database'

const SearchView = ({keyword, results, onKeyChange, onDocumentSelect}) => {
    const list_items = results.map((document) =>
        <button class="list-group-item list-group-item-action search-result-item" onClick={() => onDocumentSelect(document.id)} key={document.id}>
            {document.name}
        </button>
    )
    return (
        <React.Fragment>
            <div class="search-input align-middle">
                <input class="form-control" onChange={(e) => onKeyChange(e.target.value)} type="text" value={keyword} placeholder="Search" />
            </div>
            <nav class="search-results list-group">
                {list_items}
            </nav>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    keyword: state.search.keyword,
    results: state.search.results
})

const mapDispatchToProps = dispatch => ({
    onKeyChange: (key) => {
        d.searchDocumentInfos(key, (docs) => {
            dispatch(a.set_search_results(docs))
        })
    },
    onDocumentSelect: (id) => {
        d.getDocumentById(id, (doc) => {
            a.set_codeview(doc)
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
