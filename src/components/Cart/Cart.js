import { useContext, useState, useRef } from "react"
import CartContext from '../../Context/CartContext'
import './Cart.css'
import Form from '../Form/Form'
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/firebase'
import { useNotificationServices } from '../../service/notification/NotificationServices'
import Togglable from '../Togglable/Togglable'


const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })
    const { cart, clearCart, removeItem, getTotal, img } = useContext(CartContext)

    const FormRef = useRef()

    const setNotification = useNotificationServices()

    const Order = () => {
        if (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)

            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []

            const ids = objOrder.items.map(i => i.id)

            getDocs(query(collection(firestoreDb, 'products'), where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach((docSnapshot) => {
                        if (docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity })
                        } else {
                            outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() })
                        }
                    })
                }).then(() => {
                    if (outOfStock.length === 0) {
                        addDoc(collection(firestoreDb, 'orders'), objOrder).then(({ id }) => {
                            batch.commit()
                            clearCart()
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    } else {
                        outOfStock.forEach(prod => {
                            setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                            removeItem(prod.id)
                        })
                    }
                }).catch((error) => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })

        } else {
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    if (processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }


    if (cart.length === 0) {
        return <h1 style={{ color: 'white' }}>No hay productos en el carrito</h1>
    }


    const handleRemoveItem = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex' }}>
                            <picture>
                                <img style={{ width: '100px' }} className='img' src={prod.img} alt={img} />
                            </picture>
                            <h3 style={{ color: 'white', margin: '22px' }}>{prod.name}</h3>
                            <h3 style={{ color: 'black' }}>Cantidad {prod.quantity}</h3>
                            <button className="Option" onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
                })}
            <p style={{ color: 'white' }}>Total: ${getTotal()}</p>
            <button onClick={() => Order()} className="Button">Confirmar Compra</button>
            <button onClick={() => clearCart()} className="Button">Cancelar compra</button>

            {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&

                <div>
                    <h4>Nombre: {contact.name}</h4>
                    <h4>Telefono: {contact.phone}</h4>
                    <h4>Direccion: {contact.address}</h4>
                    <h4>Comentario: {contact.comment}</h4>
                    <button onClick={() => setContact({ phone: '', address: '', comment: '' })}
                        className='Button'
                        style={{ backgroundColor: '#db4025' }}>
                        Borrar datos de contacto
                    </button>
                </div>
            }
            <Togglable buttonLabelShow={
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '')
                    ? 'Editar contacto'
                    : 'Agregar contacto'
            }
                ref={FormRef}>
                <Form toggleVisibility={FormRef} setContact={setContact} />
            </Togglable>
        </div >
    )
}

export default Cart