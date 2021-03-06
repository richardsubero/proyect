import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState} from 'react'
import {getDocs,collection} from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/firebase'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
       getDocs(collection(firestoreDb, 'categories')).then(response =>{
         const categories = response.docs.map(cat => {
           return {id: cat.id, ...cat.data()}
         })
         setCategories(categories)
       })
    }, [])
  

    return (
        <nav className="NavBar">
            <Link to={'/'}>
                <h2>Game´MeApp</h2>
            </Link>
            <div className="Categories">
            {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar