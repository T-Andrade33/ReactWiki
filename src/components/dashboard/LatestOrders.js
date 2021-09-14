import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: '100000',
    amount: 30.5,
    customer: {
      name: 'Fmaia Bebidas'
    },
    createdAt: 1555016400000,
    status: 'Aguardando'
  },
  {
    id: uuid(),
    ref: '100001',
    amount: 25.1,
    customer: {
      name: 'Ceramica Porto Velho'
    },
    createdAt: 1555016400000,
    status: 'Aguardando'
  },
  {
    id: uuid(),
    ref: '100002',
    amount: 10.99,
    customer: {
      name: 'Imbramil'
    },
    createdAt: 1554930000000,
    status: 'Em análise'
  },
  {
    id: uuid(),
    ref: '100003',
    amount: 96.43,
    customer: {
      name: 'Jae Descartaveis'
    },
    createdAt: 1554757200000,
    status: 'Aguardando'
  },
  {
    id: uuid(),
    ref: '100004',
    amount: 32.54,
    customer: {
      name: 'Jae Descartaveis'
    },
    createdAt: 1554670800000,
    status: 'Nâo verificado'
  },
  {
    id: uuid(),
    ref: '100005',
    amount: 16.76,
    customer: {
      name: 'Cerâmica Porto Velho'
    },
    createdAt: 1554670800000,
    status: 'nao verificado'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Analistas em Atendimentos" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Analista
              </TableCell>
              <TableCell>
                Cliente
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Alteração
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {moment(order.createdAt).format('DD/MM/YYYY')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Ver mais
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
