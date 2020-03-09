import React, { Component } from 'react'
import SearchView from '../searchView'
import CodeView from '../codeview'

export default class App extends Component {
    onDocumentSelect() {

    }
    onAddDocumentClick() {

    }
    onDeleteDocumentClick() {

    }
    onEditDocumentClick() {

    }
    render() {
        let dummy_document = {
            title: "example.py",
            code: "print 'Hello, World!'\n"
        }
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-xl-2">
                        <SearchView/>
                    </div>
                    <div class="col-md-9 col-xl-10">
                        <CodeView/>
                    </div>
                </div>
            </div>
        )
    }
}
