import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  // Grid,
  // Link,
  TextField,
  Typography
} from '@material-ui/core';
// import ViaCep from '../components/Service/viacep';

const ExportBuscacep = () => (
  <>
    <Helmet>
      <title>Buscacep | TesteApi</title>
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
          Busca Cep
        </Typography>
        <TextField
          // error={Boolean(touched.firstName && errors.firstName)}
          smallWidth
          align="center"
          // helperText={touched.firstName && errors.firstName}
          label="Cep"
          margin="normal"
          name="cep"
          // onBlur={handleBlur}
          // onChange={handleChange}
          // value={values.firstName}
          variant="outlined"
        />
      </Container>
      <Button
        color="primary"
        // disabled={isSubmitting}
        smallWidth
        size="small"
        type="submit"
        variant="contained"
      >
        Sign up now
      </Button>
    </Box>
  </>
);

export default ExportBuscacep;
