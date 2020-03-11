import React from 'react'
import { connect } from 'react-redux'
import * as a from '../actions'

const CodeView = ({ title, code, onAdd, onEdit, onDel }) => {
    return (
        <React.Fragment>
            <div class="code-bar align-middle d-flex justify-content-between">
                <div class="code-title pl-3">
                    {title}
                </div>
                <div class="d-flex">
                    <button class="btn btn-outline-secondary btn-edit float-right" onClick={onDel}>Add</button>
                    <button class="btn btn-outline-secondary btn-edit float-right" onClick={onEdit}>Edit</button>
                    <button class="btn btn-outline-secondary btn-edit float-right" onClick={onAdd}>Delete</button>
                </div>
            </div>
            <div class="code-content pl-2">
                <pre><code>{code}</code></pre>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    title: state.code.title,
    code: state.code.code
})

const mapDispatchToProps = dispatch => ({
    onAdd: () => { },
    onDel: () => { },
    onEdit: () => { }
})

export default connect(mapStateToProps, mapDispatchToProps)(CodeView)
