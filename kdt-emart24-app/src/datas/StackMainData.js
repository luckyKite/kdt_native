import Main from "../screens/Main"
import ProductDetail from "../screens/ProductDetail"
import Products from "../screens/Products"

export const stackMainData = [
  {
    id: 1,
    name: 'Main',
    component: Main,
  },
  {
    id: 2,
    name: 'Products',
    component: Products,
  },
  {
    id: 3,
    name: 'ProductDetail',
    component: ProductDetail,
  }
]

export const stackMainCenterData = [
  {
    id: 1,
    data: [
      {
        id: 1,
        name: 'Main',
        source: require('../../assets/logo.png'),
      }
    ]
  }
]

const stackMainLeftData = [
]

const stackMainRightData = [
]