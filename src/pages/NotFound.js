import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Button,
  Typography
} from '@material-ui/core';

const NotFound = () => (
  <>
    <Helmet>
      <title>SIG2000 WIKI 2.0 | 404 </title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404: A página não foi encontrada.
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          <Button
            variant="contained"
            color="primary"
            component="a"
            size="large"
          >
            Voltar
          </Button>
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <img
            alt="Under development"
            src="/static/images/undraw_page_not_found_su7k.svg"
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;
