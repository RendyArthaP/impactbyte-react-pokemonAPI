import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Card = () => {
  const [cards, setCards] = useState({})

  const fetchData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu"
    axios
      .get(url)
      .then((res) => setCards(res.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const abilityPikachu = cards.abilities || [];
  const abilitiesPikachu = () => {
    return abilityPikachu.map((skills, index) => {
      return <div key={index}>
        <span>{skills.ability.name}</span>
      </div>
    })
  }

  const typePikachu = cards.types ||[];
  const typesPikachu = () => {
    return typePikachu.map((types, index) => {
      return <div key={index}>
        <span>{types.type.name}</span>
      </div>
    })
  }

  const itemPikachu = cards.held_items || []
  const itemsPikachu = () => {
    return itemPikachu.map((items, index) => {
      return <div key={index}>
        <span>{items.item.name}</span>
      </div>
    })
  }

  return (
    <div>
      <h1>{cards.name}</h1>
      <div>
        <h3>Height:</h3>
        <span>{cards.height}</span>
      </div>
      <div>
        <h3>Weight:</h3>
        <span>{cards.weight} pon</span>
      </div>
      <div>
        <h3>Ability:</h3>
        <span>{abilitiesPikachu()}</span>
      </div>
      <div>
        <h3>Type:</h3>
        <span>{typesPikachu()}</span>
      </div>
      <div>
        <h3>Items:</h3>
        <span>{itemsPikachu()}</span>
      </div>
    </div>
  )
}

export default Card
