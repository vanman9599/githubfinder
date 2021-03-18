import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onSubmit = (e) => {
            e.preventDefault()
            this.props.searchUsers(this.state.text)
            this.setState({ text: ''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="search uers..." />
                    <input type="submit" value="search" className="btn btn-dark btn-block" />
                </form>
                <button className="btn btn-light btn-block" onCLick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
}

export default Search
