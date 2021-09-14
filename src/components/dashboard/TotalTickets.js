import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const TotalTickets = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TICKET PENDENTE
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            221
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            {/* <PeopleIcon /> */}
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpward sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          25%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Desde a última semana
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TotalTickets;
