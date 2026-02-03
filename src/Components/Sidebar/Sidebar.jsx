import './Sidebar.scss'
import pokeball from '../../../public/pokeball.png'
import { useState } from 'react'


function Sidebar({ pokedex }) {
 
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
        X
      </button>
      <h2>
        <img src={pokeball} alt="" />
        <p>Pokédex</p>
      </h2>
      {pokedex.length === 0 ? (
  <div>Votre Pokédex est vide</div>
) : (
  <ul className="pokedex-list">
    {pokedex.map((p) => (
      <li key={p.id}>
       {p.name}
      </li>
    ))}
  </ul>
)}

    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>
        <img src={pokeball} alt="" />
        <p>Pokédex ({pokedex.length})</p>
      </button>
    </div>
  )
}

export default Sidebar
