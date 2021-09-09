import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Wiki from './App';

ReactDOM.render((
  <BrowserRouter>
    <Wiki />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
