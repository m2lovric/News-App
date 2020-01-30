
class NewsApp extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="tech-section">
        <Header />
        <TechNews />
      </div>
    )
  }
}

const Header = () => {
  return(
    <div>
      <div class="img-header">
        <h1 class="logo-header">FRINGE</h1>
      </div>
      <nav>
        <ul>
          <a href="#" active><li>FRINGE</li></a>
          <a href="#"><li>TECH</li></a>
          <a href="#"><li>SCIENCE</li></a>
        </ul>
      </nav>      
    </div>
  )
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
        console.log(el);
        return(
          <article>
            <img src={el.urlToImage} alt="news-img"/>
            <div class="headline">
              <h3><a class="changeColor" href={el.url}>{el.title}</a></h3>      
            </div>
            <div class="author">
              <p>By: <span>{el.author ? el.author : 'Unknown'}</span>  |  {el.publishedAt}</p>
            </div>            
          </article>
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
      <section>
        {this.state.data}
      </section>
    )
  }
}

ReactDOM.render(<NewsApp />, document.getElementById('root'));


