var React = require('react');

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchBox.value;

    this.props.onSearch(showCompleted, searchText);
  };

  render() {
    return (
      <div>
        <div>
          <input type="search" ref="searchBox" placeholder="Search Todo's" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed Todos
          </label>
        </div>
      </div>
    )
  };
};

module.exports = TodoSearch;
