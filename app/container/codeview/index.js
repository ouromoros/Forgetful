import React, { Component } from 'react'
import hljs from 'highlight.js'
// import 'highlight.js/styles/default.css';
import '../../res/highlight.js/styles/default.css'
import Paper from '@material-ui/core/Paper'

export default class CodeView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: props.document.title,
            code: props.document.code
        }
    }
    componentDidMount() {
        hljs.highlightBlock(document.getElementById("code_box"))
    }
    render() {
        return <div>
            <h2>{this.state.title}</h2>
            <Paper id="code_box" height="auto">
                {this.state.code}
            </Paper>
        </div>
    }
}
