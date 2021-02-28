import React, { useEffect, useState } from 'react';
import { Container, Loading, Person } from './styles';
import axios from 'axios'

function Main() {
  const [loading, setLoading] = useState(true)
  const [persons, setPersons] = useState([])

  useEffect(() => {
    const fetchRick = async () => {
      var url = `https://rickandmortyapi.com/api/character/`
      try {
        const response = await axios.get(url)
        const data = await response.data;
        setPersons(data.results)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    fetchRick()
  }, [])

  if (loading) {
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    )
  }

  return (
    <Container>
      {
        persons.map((person) => {
          return (
            <Person key={person.id}>
              <img src={person.image} alt={person.name} />
              <h1>{person.name}</h1>
            </Person>
          )
        })
      }
    </Container>
  );
}

export default Main;