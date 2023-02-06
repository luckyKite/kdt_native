import CartIcon from '../../assets/icons/cart.png';
import PayIcon from '../../assets/icons/pay.png';
import PinIcon from '../../assets/icons/pin.png';
import QrIcon from '../../assets/icons/qr.png';
import SettinsIcon from '../../assets/icons/settings.png';
import { Cart, Wallet, QR, Pin, Settings } from '../screens/TabScreens';
import HomeStacks from '../stacks/HomeStacks';

export const BottomIconData = [
  {
    id: 1,
    name: 'HomeStacks',
    icon: CartIcon,
    url: 'HomeStacks',
    component: HomeStacks,
    cnt: 10,
  },
  {
    id: 2,
    name: 'Wallet',
    icon: PayIcon,
    url: 'Wallet',
    component: Wallet,
    cnt: 3,
  },
  {
    id: 3,
    name: 'QR',
    icon: QrIcon,
    url: 'QR',
    component: QR,
    // cnt: 1,
  },
  {
    id: 4,
    name: 'Pin',
    icon: PinIcon,
    url: 'Pin',
    component: Pin,
  },
  {
    id: 5,
    name: 'Settings',
    icon: SettinsIcon,
    url: 'Settings',
    component: Settings,
  }
];