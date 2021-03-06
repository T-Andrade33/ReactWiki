import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlignJustify as NotificationsIcon,
  Archive as ArchiveIcon,
  BarChart as BarChartIcon,
  Clock as ClockIcon,
  HelpCircle as SolutionSignIcon,
  Calendar as AgendaIcon,
  Slack as CompanyIcon,
  Book as DocsIcon,
  Link as LinkIcon,
  HelpCircle as TaskIcon,
  Pocket as PackageIcon,
  Smartphone as SmartphoneIcon,
  Codesandbox as TicketIcon,
  Settings as SettingsIcon,
  Shield as ShieldIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';

const company = {
  avatar: '/static/images/company/demo01.png',
  companyTitle: 'SIG2000 - Demonstração',
  name: 'Tiago Andrade'
};

const items = [
  {
    href: '/wiki/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/wiki/#',
    icon: NotificationsIcon,
    title: 'Avisos / Notificações'
  },
  {
    href: '/wiki/buscacep',
    icon: AgendaIcon,
    title: 'Agenda'
  },
  {
    href: '/wiki/products',
    icon: TaskIcon,
    title: 'Atendimentos'
  },
  {
    href: '/wiki/#',
    icon: UsersIcon,
    title: 'Colaboradores'
  },
  {
    href: '/wiki/customers',
    icon: CompanyIcon,
    title: 'Clientes'
  },
  {
    href: '/wiki/#',
    icon: DocsIcon,
    title: 'Contratos'
  },
  {
    href: '/wiki/#',
    icon: ClockIcon,
    title: 'Controle de Ponto'
  },
  {
    href: '/wiki/#',
    icon: SmartphoneIcon,
    title: 'Dispositivos'
  },
  {
    href: '/wiki/#',
    icon: LinkIcon,
    title: 'Links Úteis'
  },
  {
    href: '/wiki/#',
    icon: PackageIcon,
    title: 'Meu Expediente'
  },
  {
    href: '/wiki/#',
    icon: ShieldIcon,
    title: 'Patrimônio'
  },
  {
    href: '/wiki/#',
    icon: ArchiveIcon,
    title: 'Relatórios'
  },
  {
    href: '/wiki/#',
    icon: SolutionSignIcon,
    title: 'Soluções'
  },
  {
    href: '/wiki/#',
    icon: SolutionSignIcon,
    title: 'F.A.Q'
  },
  {
    href: '/wiki/#',
    icon: TicketIcon,
    title: 'Ticket MySuit'
  },
  {
    href: '/wiki/#',
    icon: TicketIcon,
    title: 'Ticket Interno'
  }, {
    href: '/wiki/#',
    icon: TicketIcon,
    title: 'Pesquisa de Satisfação'
  },
  {
    href: '/wiki/#',
    icon: TicketIcon,
    title: 'Versão dos Softwares'
  },
  {
    href: '/wiki/settings',
    icon: SettingsIcon,
    title: 'Configurações'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={company.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/wiki/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {company.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {company.companyTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2
        }}
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Portal AFV/Pedido Web
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Em caso de dúvidas, entrar em contato com o setor de desenvolvimento.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://afv.sig2000.com.br/index.php/usuario_auth/login"
            target="_blank"
          >
            Portal Web
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
