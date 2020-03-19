import React from 'react'
import { connect } from 'react-redux'
import * as a from '../actions'

class CodeView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'view',
            editTitle: '',
            editContent: ''
        }
    }
    onAdd = () => {
        this.setState({
            mode: 'add'
        })
    }
    onEdit = () => {
        this.setState({
            mode: 'edit',
            editTitle: this.props.doc.title,
            editContent: this.props.doc.content
        })
    }
    onSave = () => {
        if (this.state.mode == 'edit') {
            this.props.editDoc({
                title: this.state.editTitle,
                content: this.state.editContent
            })
        } else {
            this.props.addDoc({
                title: this.state.editTitle,
                content: this.state.editContent
            })
        }
        this.setState({ mode: 'view' })
    }

    render() {
        if (this.state.mode == 'view') return (
            <React.Fragment>
                <div class="code-bar align-middle d-flex justify-content-between">
                    <div class="code-title pl-3">
                        {this.props.doc.title}
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-outline-secondary btn-edit float-right" onClick={this.onAdd}>Add</button>
                        <button class="btn btn-outline-secondary btn-edit float-right" onClick={this.onEdit}>Edit</button>
                        <button class="btn btn-outline-secondary btn-edit float-right" onClick={this.props.delDoc}>Delete</button>
                    </div>
                </div>
                <div class="code-content pl-2">
                    <pre><code>{this.props.doc.content}</code></pre>
                </div>
            </React.Fragment>
        )
        else return (
            <React.Fragment>
                <div class="code-bar align-middle d-flex justify-content-between">
                    <div class="code-title pl-3">
                        <input type="text" class="form-control" id="code-title" placeholder="title" value={this.state.editTitle} onChange={(e) => this.setState({ 'editTitle': e.target.value })}></input>
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-outline-secondary btn-edit float-right" onClick={this.onSave}>Save</button>
                    </div>
                </div>
                <div class="code-content pl-2">
                    <textarea class="form-control" id="code-content" rows="15" value={this.state.editContent} onChange={(e) => this.setState({ 'editContent': e.target.content })}></textarea>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    doc: state.doc
})

const mapDispatchToProps = dispatch => ({
    addDoc: () => { },
    delDoc: () => { },
    editDoc: () => { }
})

export default connect(mapStateToProps, mapDispatchToProps)(CodeView)
