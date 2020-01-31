import routes from '../routes';
import { startSaga } from './rootSaga';

const App = () => {
  startSaga();
  return routes;
}

export default App;
