import React, { Component } from 'react'
import SearchBar from '../searchBar'
import CodeView from '../codeview'

import { CssBaseline } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

export default class App extends Component {
    render() {
        let dummy_document = {
            title: "example.py",
            code: "print 'Hello, World!'\n"
        }
        return (
            <Container>
                <CssBaseline />
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <SearchBar />
                    </Grid>
                    <Grid item xs={9}>
                        <CodeView document={dummy_document}></CodeView>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
