import CircleCheckIcon from 'assets/icons/circle-check.svg';
import TodayIcon from 'assets/icons/today.svg';
import SearchIcon from 'assets/icons/search.svg';
import BinIcon from 'assets/icons/bin.svg';
import OnAgenda from 'components/Agenda/OnAgenda';
import Today from 'components/Agenda/Today';
import SearchAll from 'components/Agenda/SearchAll';
import Bin from 'components/Agenda/Bin';

const Overview = [
  { 
    id: 1,
    name: 'On the Agenda',
    path: '/',
    icon: { 
      src: CircleCheckIcon, 
      alt: 'circle-check' 
    },
    component: OnAgenda
  },
  { 
    id: 2,
    name: 'Today',
    path: '/today',
    icon: { 
      src: TodayIcon, 
      alt: 'today'
    },
    component: Today
  },
  { 
    id: 3,
    name: 'Search All',
    path: '/search-all',
    icon: {
      src: SearchIcon,
      alt: 'search'
    },
    component: SearchAll
  },
  { 
    id: 4,
    name: 'Bin',
    path: '/bin',
    icon: {
      src: BinIcon,
      alt: 'bin'
    },
    component: Bin
  }
]

export default Overview;