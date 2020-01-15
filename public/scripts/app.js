"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsApp = function (_React$Component) {
  _inherits(NewsApp, _React$Component);

  function NewsApp(props) {
    _classCallCheck(this, NewsApp);

    return _possibleConstructorReturn(this, (NewsApp.__proto__ || Object.getPrototypeOf(NewsApp)).call(this, props));
  }

  _createClass(NewsApp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "tech-section" },
        React.createElement(TechNews, null)
      );
    }
  }]);

  return NewsApp;
}(React.Component);

var TechNews = function (_React$Component2) {
  _inherits(TechNews, _React$Component2);

  function TechNews(props) {
    _classCallCheck(this, TechNews);

    var _this2 = _possibleConstructorReturn(this, (TechNews.__proto__ || Object.getPrototypeOf(TechNews)).call(this, props));

    _this2.state = {
      data: []
    };
    return _this2;
  }

  _createClass(TechNews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1120e3c693314183a21483ac7274206b').then(function (response) {
        return response.json();
      }).then(function (data) {
        var author = data.articles.map(function (el) {
          console.log(el);
          return React.createElement(
            "article",
            null,
            React.createElement("img", { src: el.urlToImage, alt: "news-img" }),
            React.createElement(
              "div",
              { "class": "headline" },
              React.createElement(
                "h3",
                null,
                el.title
              )
            ),
            React.createElement(
              "div",
              { "class": "author" },
              React.createElement(
                "p",
                null,
                "By: ",
                el.author ? el.author : 'Unknown',
                "  |  ",
                el.publishedAt
              )
            )
          );
        });
        _this3.setState(function () {
          return {
            data: author
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        null,
        this.state.data
      );
    }
  }]);

  return TechNews;
}(React.Component);

ReactDOM.render(React.createElement(NewsApp, null), document.getElementById('root'));
