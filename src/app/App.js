import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from '../routes';
import { startSaga } from './rootSaga';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

const App = () => {
  startSaga();

  return (
    <Box>
      <CssBaseline />
      <Header />
      <PageWrapper>
        {routes}
      </PageWrapper>
      <Footer />
    </Box>
  )
}

export default App;
