
class NewsApp extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <TechNews />
      </div>
    )
  }
}

class TechNews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1120e3c693314183a21483ac7274206b')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let author = data.articles.map((el) => {
        return(
          <div>
            <p>{el.author}</p>
          </div>
        )
      })
      this.setState(() => {
        return(
          {
            data: author
          }
        ) 
      })
    })
  }
  render(){
    return(
      <div>
        {this.state.data}
      </div>
    )
  }
}

ReactDOM.render(<NewsApp />, document.getElementById('root'));


