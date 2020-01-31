import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const ForwardedLink = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

const MaterialLink = props => (
  <Link
    component={ForwardedLink}
    {...props}
  />
);

export default MaterialLink;
