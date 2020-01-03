import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

class RenderApp extends React.Component {
  render () {
    return (
      <div className="body" 
      // style={{backgroundColor:'#ffffff'}}
      >
        <App />
        <p>Piotr Jarosz nie zmienia skarpet</p>
      </div>
    )
  }
}

ReactDOM.render(
  <RenderApp />,
  document.getElementById('root')
);
