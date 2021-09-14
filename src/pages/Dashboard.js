import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import TicketsOpen from 'src/components/dashboard/TicketsOpen';
import LatestOrders from 'src/components/dashboard//LatestOrders';
import AnalystsRanking from 'src/components/dashboard//AnalystsRanking';
import Sales from 'src/components/dashboard//Sales';
import TicketsClosed from 'src/components/dashboard/TicketsClosed';
import TotalTickets from 'src/components/dashboard/TotalTickets';
import TotalCustomers from 'src/components/dashboard/TotalCustomers';
import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

const Dashboard = () => (
  <>
    <Helmet>
      <title>SIG2000 WIKI | Dashboard </title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TicketsOpen />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalTickets />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TicketsClosed />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <AnalystsRanking sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
