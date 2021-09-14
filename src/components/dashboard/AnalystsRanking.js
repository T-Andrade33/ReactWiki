import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const analysts = [
  {
    id: uuid(),
    name: 'Ramon',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Magno Ramos',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(1, 'hours')
  },
  {
    id: uuid(),
    name: 'Erick Werneck',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Felipe Faria',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'T.Bandeira',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(4, 'hours')
  }
];

const AnalystsRanking = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${analysts.length} in total`}
      title="Ranking de Analistas"
    />
    <Divider />
    <List>
      {analysts.map((analyst, i) => (
        <ListItem
          divider={i < analysts.length - 1}
          key={analysts.id}
        >
          <ListItemAvatar>
            <img
              alt={analyst.name}
              src={analyst.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={analyst.name}
            secondary={`Atualizado à ${analyst.updatedAt.fromNow()}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
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
        Ver Mais
      </Button>
    </Box>
  </Card>
);

export default AnalystsRanking;
