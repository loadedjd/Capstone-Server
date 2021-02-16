class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [,"Amazon-AMZN","Apple-APPL","Microsoft-MSFT","Tesla-TSLA"],

      appName: 'Stock  Search Bar',
      list: undefined };

  }
  searchData(e) {
    var queryData = [];
    if (e.target.value != '') {
      this.state.data.forEach(function (person) {

        if (person.toLowerCase().indexOf(e.target.value) != -1) {
          if (queryData.length < 10) {
            queryData.push(person);
          }
        }
      });
    }
    this.setState({ list: queryData });
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Header, { name: this.state.appName }), /*#__PURE__*/
      React.createElement(SearchBar, { search: this.searchData.bind(this) }),
      this.state.list ? /*#__PURE__*/React.createElement(SearchResult, { data: this.state.list }) : null));


  }}


class Header extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, this.props.name)));


  }}


class SearchBar extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("input", { onChange: this.props.search, placeholder: "Search for companies or symbols" })));


  }}


class SearchResult extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("ul", null,
      this.props.data.map(function (value) {
        return /*#__PURE__*/React.createElement(Item, { key: value, val: value });
      }))));




  }}



class Item extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("li", null,
      this.props.val));


  }}





ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));