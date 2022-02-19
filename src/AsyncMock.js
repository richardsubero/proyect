export const products = [
    {
        "price": 800,
        "id": 1,
        "name": "Play 5",
        "img": "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/10/01/16015440351819.jpg"
      },
      {
        "price": 950,
        "id": 2,
        "name": "Console Black",
        "img": "https://i.blogs.es/f9620b/dxbcie4vsaiki60/450_1000.jpeg "
      },
      {
        "price": 650,
        "id": 3,
        "name": "SpiderMan",
        "img": "https://acf.geeknetic.es/imgw/imagenes/auto/2020/7/9/um9-19477-playstation-5-cajas-juegos-w00w.jpg?f=webp&s=b"
      },
      {
        "price": 820,
        "id": 4,
        "name": "Pack Game",
        "img": "https://i.ytimg.com/vi/p81SxUYjOf0/maxresdefault.jpg"
      },
      {
        "price": 1200,
        "id": 5,
        "name": "Joystick Play 4",
        "img": "https://gmedia.playstation.com/is/image/SIEPDC/ps4-accessories-ds4-berry-blue-screen-01-en-27oct20?$native$"
      },
      {
        "price": 750,
        "id": 6,
        "name": "Joystick Play 5",
        "img": "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-nova-pink-screenshot-01-en-30nov21?$native$"
      }
]

export const agregarProductos = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve(products)
    }, 2000)
})
