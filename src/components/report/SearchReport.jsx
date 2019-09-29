import React from 'react';
//material ui
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


class SearchReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.searchValue);
        this.setState({
            searchValue: ''
        });
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    placeholder="Search…"
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                />
                <SearchIcon onClick={this.handleSubmit} />
            </form>
        );
    }
}


export default SearchReport;