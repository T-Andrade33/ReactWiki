/* Detalhes do Perfil de usuario */

import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const states = [
  {
    value: 'Rio de Janeiro',
    label: 'Rio de Janeiro'
  },
  {
    value: 'Sao Paulo',
    label: 'Sao Paulo'
  },
  {
    value: 'Minas Gerais',
    label: 'Minas Gerais'
  }
];

// const users = [
//   {
//     value: 'tiago andrade',
//     label: 'Tiago Andrade'
//   },
//   {
//     value: 'maycon douglas',
//     label: 'Maycon Douglas'
//   }
// ];

const city = [
  {
    value: 'Tres Rios',
    label: 'Três Rios'
  },
  {
    value: 'Paraiba do Sul',
    label: 'Paraiba do Sul'
  },
  {
    value: 'Levy Gasparian',
    label: 'Levy Gasparian'
  }
];

const country = [
  {
    value: 'Brasil',
    label: 'Brasil'
  },
  {
    value: 'Alemanha',
    label: 'Alemanha'
  },
  {
    value: 'India',
    label: 'India'
  }
];

// const typeUser = [
//   {
//     value: 'Administrador',
//     label: 'Administrador'
//   },
//   {
//     value: 'Padrao',
//     label: 'Padrao'
//   }
// ];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Tiago',
    lastName: 'Andrade',
    email: 't.andrade@sig2000.com.br',
    phone: '24981345180',
    state: 'Rio de Janeiro',
    country: 'Brasil',
    users: 't.andrade',
    typeUser: 'administrador'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader
          title="Perfil de Usuário"
          subheader="Editar dados do perfil."
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por Favor, preencha o nome do usuário."
                label="Nome"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Sobrenome"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Celular"
                name="phone"
                onChange={handleChange}
                required
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Cidade"
                name="city"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {city.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Estado / UF"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Tipo"
                name="tipo"
                onChange={handleChange}
                // required
                // Disabled
                value={values.typeUser}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="País"
                name="pais"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.country}
                variant="outlined"
              >
                {country.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Usuário"
                name="usuario"
                onChange={handleChange}
                // required
                value={values.users}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Senha"
                name="senha"
                onChange={handleChange}
                // required
                Passwuord
                // value={values.country}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
            flexGrow: 10
          }}
        >
          <Button color="primary" variant="contained">
            Desfazer
          </Button>
          <Button color="primary" variant="contained">
            Salvar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
