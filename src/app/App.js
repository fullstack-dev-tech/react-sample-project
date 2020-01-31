import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from '../routes';
import { startSaga } from './rootSaga';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

const App = () => {
  useEffect(() => {
    startSaga();
  }, []);

  return (
    <BrowserRouter>
      <Box>
        <CssBaseline />
        <Header />
        <PageWrapper>
          {routes}
        </PageWrapper>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App;
