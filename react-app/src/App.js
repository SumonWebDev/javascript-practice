
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <Person></Person>
       <Person></Person>
       <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  var first={
    border:'2px solid green',
    padding:'20px',
    margin:'10px',
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    width:'60%'
  }
  return(
    <div style={first}>
        <h1>Md.Sumon Islam</h1>
        <p style={{lineHeight:'40px',textAlign:'center'}}>
          It is called JSX, and it is a syntax extension to JavaScript.
          We recommend using it with React to describe what the UI should look like.JSX may remind you of a template language, but it comes with the full power of JavaScript
        </p>
    </div>
  )
}

export default App;
