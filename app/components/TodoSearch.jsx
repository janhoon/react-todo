var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

class TodoSearch extends React.Component {
  render() {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchBox" value={searchText} placeholder="Search Todo's" onChange={() => {
            var searchText = this.refs.searchBox.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={showCompleted} ref="showCompleted" onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show completed Todos
          </label>
        </div>
      </div>
    )
  };
};

module.exports =  connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
