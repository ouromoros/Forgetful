import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
            dummy_documents.push({name: 'hello', id: 2+i})
        }
        const list_items = dummy_documents.map((document) =>
            <ListItem button
                onClick={this.handleListItemClick(document.id)} key={document.id}>
                <ListItemText primary={document.name} />
            </ListItem>
        )
        return (
            <Grid container item spaceing={2}>
                <Grid container item xs={12} spacing={1} alignItems="flex-end">
                    <Grid item> <SearchIcon /> </Grid>
                    <Grid item>
                        <TextField value={this.state.input_value} id="search_input" label="Search" onChange={this.handleChange} />
                    </Grid>
                </Grid>
                <Divider />
                <Grid item xs={12}>
                    <List component="nav">
                        {list_items}
                    </List>
                </Grid>
            </Grid>
        )
    }
}
