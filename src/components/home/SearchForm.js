import React, { Component } from 'react'
import { searchMovie,fetchMovies,setLoading } from '../../actions/searchActions'
import {connect} from 'react-redux'
export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value)
    }

    onSubmit = e =>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }

    render() {
        return (
            <div>
                <div class="p-5 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="display-5 fw-bold">Search a movie</h1>
                        <form className="d-flex" id="searchForm" onSubmit={this.onSubmit}>
                            <input className="form-control me-2" type="text" onChange={this.onChange} name='searchText' placeholder="Search your movie here.." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    text : state.movies.text
})

export default connect(mapStateToProps, {searchMovie,fetchMovies,setLoading})(SearchForm)
