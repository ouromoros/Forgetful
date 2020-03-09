import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { input_value: "" }
    }
    handleChange = (event) => {
        this.setState({ input_value: event.target.value })
    }
    handleListItemClick = () => {

    }
    render() {
        const dummy_documents = [{ name: 'hello', id: 1 }, { name: 'world', id: 2 }]
        for (let i = 0; i < 20; i++) {
            dummy_documents.push({ name: 'hello', id: 2 + i })
        }
        const list_items = dummy_documents.map((document) =>
            <button class="list-group-item list-group-item-action search-result-item" onClick={handleListItemClick} key={document.id}>Hi</button>
        )
        return (
            <React.Fragment>
                <div class="search-input align-middle">
                    <input class="form-control" onchange={this.handleChange} type="text" placeholder="Search" />
                </div>
                <nav class="search-results list-group">
                    {list_items}
                </nav>
            </React.Fragment>
        )
    }
}
