import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import GoogleIcon from 'src/icons/Google';

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Portal Afv 3.0 | Login</title>
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
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              users: 'SIG2000',
              password: '12345678'
            }}
            validationSchema={Yup.object().shape({
              users: Yup.string().max(25).required('Informe um usuário'),
              password: Yup.string().max(16).required('Por favor informar a senha!')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
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
                  <Typography color="textPrimary" variant="h2">
                    AFV Manager
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Informe seus dados para efetuar o login
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    Informe o Usuário e senha
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.users && errors.users)}
                  fullWidth
                  helperText={touched.users && errors.users}
                  label="Usuário"
                  margin="normal"
                  name="users"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="users"
                  value={values.users}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Senha"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                {/* <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Logar
                  </Button>
                </Box> */}

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Logar com Google
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Logar com Usuário
                    </Button>
                  </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body1">
                  Esqueceu sua senha?
                  {' '}
                  <Link component={RouterLink} to="/#" variant="h6">
                    Recuperar
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

export default Login;
