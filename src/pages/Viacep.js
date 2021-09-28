import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Api Via Cep</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '110%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              cep: '',
              logradouro: '',
              bairro: '',
              localidade: '',
              uf: ''
            }}
            // validationSchema={
            //   Yup.object().shape({
            //     email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            //     firstName: Yup.string().max(255).required('First name is required'),
            //     lastName: Yup.string().max(255).required('Last name is required'),
            //     password: Yup.string().max(255).required('password is required'),
            //   })
            // }
            onSubmit={() => {
              navigate('/wiki/#', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Testando Api ViaCep
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Buscanddo dados de logradouro via cep
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.cep && errors.cep)}
                  fullWidth
                  helperText={touched.cep && errors.cep}
                  label="Informe o Cep"
                  margin="normal"
                  name="cep"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cep}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.logradouro && errors.logradouro)}
                  fullWidth
                  helperText={touched.logradouro && errors.logradouro}
                  label="logradouro"
                  margin="normal"
                  name="logradouro"
                  value={values.logradouro}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.bairro && errors.bairro)}
                  fullWidth
                  helperText={touched.bairro && errors.bairro}
                  label="bairro"
                  margin="normal"
                  name="bairro"
                  type="bairro"
                  value={values.bairro}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.localidade && errors.localidade)}
                  fullWidth
                  helperText={touched.localidade && errors.localidade}
                  label="localidade"
                  margin="normal"
                  name="localidade"
                  type="email"
                  value={values.localidade}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.uf && errors.uf)}
                  fullWidth
                  helperText={touched.uf && errors.uf}
                  label="Estado"
                  margin="normal"
                  name="uf"
                  type="email"
                  value={values.uf}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Buscar Cep
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  .
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/#"
                    variant="h6"
                  >
                    .
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
