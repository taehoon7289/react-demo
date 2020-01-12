import React, { Component } from 'react'
import axios from 'axios'

class TestComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'testComponent',
            desc: 'testComponenttestComponenttestComponent!!',
        }
        // this._callApi = this.callApi.bind(this)
    }
    callApi() {
        axios.get('/').then(res => {
            console.log('res', res)
        })
        console.log('!!')
    }
    render() {
        return (
            <div className="testDiv" onClick={() => this.callApi()}>
                TestComponentTestComponentTestComponentTestComponent
            </div>
        )
    }
}

export default TestComponent
