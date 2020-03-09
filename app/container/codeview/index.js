import React, { Component } from 'react'

export default class CodeView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: props.document.title,
            code: props.document.code
        }
    }
    render() {
        return (
            <React.Fragment>
                <div class="code-bar align-middle d-flex justify-content-between">
                    <div class="code-title pl-3">
                        {this.state.title}
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-outline-secondary btn-edit float-right">Add</button>
                        <button class="btn btn-outline-secondary btn-edit float-right">Edit</button>
                        <button class="btn btn-outline-secondary btn-edit float-right">Delete</button>
                    </div>
                </div>
                <div class="code-content pl-2">
                    <pre><code>{this.state.code}</code></pre>
                </div>
            </React.Fragment>
        )
    }
}
