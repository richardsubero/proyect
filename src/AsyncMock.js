const products = [
  {
    id: 1,
    price: '1200 $',
    category: 'Consoles',
    name: 'Play 5',
    img: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/10/01/16015440351819.jpg',
    description: 'PlayStation 5 con Accesorios y una serie de Video juegos ! ',
  },
  {
    price: '1300$',
    id: 2,
    category: 'Consoles',
    name: 'Console Black',
    img: 'https://i.blogs.es/f9620b/dxbcie4vsaiki60/450_1000.jpeg',
    description: 'La Nueva Consola "Black" con Accesorios y una serie de Video juegos !',
  },
  {
    price: '300$',
    id: 3,
    category: 'Games',
    name: 'SpiderMan',
    img: 'https://acf.geeknetic.es/imgw/imagenes/auto/2020/7/9/um9-19477-playstation-5-cajas-juegos-w00w.jpg?f=webp&s=b',
    description: 'El increible juego de Spiderman por 2 , si Doble Spider !!',
  },
  {
    price: '550$',
    id: 4,
    category: 'Games',
    name: 'Pack Game',
    img: 'https://i.ytimg.com/vi/p81SxUYjOf0/maxresdefault.jpg',
    description: 'Este increible Pack de 3 Videos juegos a un precio de Locura ',
  },
  {
    price: '650$',
    id: 5,
    category: 'Accesories',
    name: 'Joystick Play 4',
    img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-accessories-ds4-berry-blue-screen-01-en-27oct20?$native$',
    description: 'Joystick totalmante nuevo para PlayStation 4 color SkyBlue ',
  },
  {
    price: '750$',
    id: 6,
    category: 'Accesories',
    name: 'Joystick Play 5',
    img: 'https://gmedia.playstation.com/is/image/SIEPDC/dualsense-nova-pink-screenshot-01-en-30nov21?$native$',
    description: 'Joystick totalmante nuevo para PlayStation 5 color Fucsia ',
  }
]

export const agregarProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export const getProduct = (id) => {
   return new Promise((resolve) => {
    const prod = products.find(p => p.id === parseInt(id))
    setTimeout(() => {
      resolve(prod)
    }, 2000)
  })
}