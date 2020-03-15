import React from 'react'
import { connect } from 'react-redux'
import * as a from '../actions'

const CodeView = ({ doc, onAdd, onEdit, onDel }) => {
    return (
        <React.Fragment>
            <div class="code-bar align-middle d-flex justify-content-between">
                <div class="code-title pl-3">
                    {doc.title}
                </div>
                <div class="d-flex">
                    <button class="btn btn-outline-secondary btn-edit float-right" onClick={onDel}>Add</button>
                    <button class="btn btn-outline-secondary btn-edit float-right" onClick={onEdit}>Edit</button>
                    <button class="btn btn-outline-secondary btn-edit float-right" onClick={onAdd}>Delete</button>
                </div>
            </div>
            <div class="code-content pl-2">
                <pre><code>{doc.content}</code></pre>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    doc: state.doc
})

const mapDispatchToProps = dispatch => ({
    onAdd: () => { },
    onDel: () => { },
    onEdit: () => { }
})

export default connect(mapStateToProps, mapDispatchToProps)(CodeView)
