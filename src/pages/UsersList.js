import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import UsersListResults from 'src/components/users/UsersListResults';
import UsersListToolbar from 'src/components/users/UsersListToolbar';
import users from 'src/__mocks__/users';

const UsersList = () => (
  <>
    <Helmet>
      <title>SIG2000 WIKI | Usuários</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <UsersListToolbar />
        <Box sx={{ pt: 3 }}>
          <UsersListResults users={users} />
        </Box>
      </Container>
    </Box>
  </>
);

export default UsersList;
