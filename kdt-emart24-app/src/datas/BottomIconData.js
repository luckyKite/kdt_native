import CartIcon from '../../assets/icons/cart.png';
import SearchIcon from '../../assets/icons/search.png';
import WalletIcon from '../../assets/icons/wallet.png';
import QrIcon from '../../assets/icons/qr.png';
import HomeIcon from '../../assets/icons/home.png';

// components import
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Wallet from '../screens/Wallet';
import Search from '../screens/Search';
import Qr from '../screens/Qr';

export const BottomIconData = [
  {
    id: 1,
    name: 'Home',
    icon: HomeIcon,
    url: 'Home',
    component: Home,
    cnt: 10,
  },
  {
    id: 2,
    name: 'Cart',
    icon: CartIcon,
    url: 'Cart',
    component: Cart,
    // cnt: 10,
  },
  {
    id: 3,
    name: 'Wallet',
    icon: WalletIcon,
    url: 'Wallet',
    component: Wallet,
    cnt: 3,
  },
  {
    id: 4,
    name: 'Qr',
    icon: QrIcon,
    url: 'Qr',
    component: Qr,
    // cnt: 1,
  },
  {
    id: 5,
    name: 'Search',
    icon: SearchIcon,
    url: 'Search',
    component: Search,
  }
];