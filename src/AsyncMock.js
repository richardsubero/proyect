const products = [
  {
    id: 1,
    price: '1200',
    category: 'consoles',
    name: 'Play 5',
    img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/10/01/16015440351819.jpg',
    description: 'PlayStation 5 con Accesorios y una serie de Video juegos ! ',
    stock: 10
  },
  {
    price: '1300',
    id: 2,
    category: 'consoles',
    name: 'Console Black',
    img: 'https://i.blogs.es/f9620b/dxbcie4vsaiki60/450_1000.jpeg',
    description: 'La Nueva Consola "Black" con Accesorios y una serie de Video juegos !',
    stock: 5
  },
  {
    price: '300',
    id: 3,
    category: 'games',
    name: 'SpiderMan',
    img: 'https://acf.geeknetic.es/imgw/imagenes/auto/2020/7/9/um9-19477-playstation-5-cajas-juegos-w00w.jpg?f=webp&s=b',
    description: 'El increible juego de Spiderman por 2 , si Doble Spider !!',
    stock: 8
  },
  {
    price: '550',
    id: 4,
    category: 'games',
    name: 'Pack Game',
    img: 'https://i.ytimg.com/vi/p81SxUYjOf0/maxresdefault.jpg',
    description: 'Este increible Pack de 3 Videos juegos a un precio de Locura ',
    stock: 2
  },
  {
    price: '650',
    id: 5,
    category: 'accesories',
    name: 'Joystick Play 4',
    img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-accessories-ds4-berry-blue-screen-01-en-27oct20?$native$',
    description: 'Joystick totalmante nuevo para PlayStation 4 color SkyBlue ',
    stock: 5
  },
  {
    price: '750',
    id: 6,
    category: 'accesories',
    name: 'Joystick Play 5',
    img: 'https://gmedia.playstation.com/is/image/SIEPDC/dualsense-nova-pink-screenshot-01-en-30nov21?$native$',
    description: 'Joystick totalmante nuevo para PlayStation 5 color Fucsia ',
    stock: 4
  }
]

const categories =[
  {id: 'consoles', description: 'Consoles'},
  {id: 'games', description: 'Games'},
  {id: 'accesories', description: 'Accesories'}
]

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories)
    }, 500)
  })
}

export const getProduct = (id) => {
   return new Promise((resolve) => {
    const prod = products.find(p => p.id === parseInt(id))
    setTimeout(() => {
      resolve(prod)
    }, 500)
  })
}

export const getProducts = (idCategory) => {
  return new Promise((resolve) => {
   const productsToResolve = idCategory ? products.filter(item => item.category ===idCategory) : products
   setTimeout(() => {
     resolve(productsToResolve)
   }, 500)
 })
}