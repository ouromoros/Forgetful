import React from 'react'
import SearchView from './searchView'
import CodeView from './codeview'

const App = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-xl-2">
                    <SearchView />
                </div>
                <div class="col-md-9 col-xl-10">
                    <CodeView />
                </div>
            </div>
        </div>
    )
}

export default App
