import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

const Profile = ({ name, surname }) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={3}>Profile</Col>
    </Row>
  </Grid>
);

export default Profile;
