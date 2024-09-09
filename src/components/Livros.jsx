import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Livros.css';

export default function Livros() {
  const [books, setBooks] = useState([]);

  
  const fetchBooks = async () => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER';
    try {
      const response = await axios.get(url);
      setBooks(response.data.items.slice(0, 4)); 
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <section id="livros">
        <div className="livros-texto">
          <h2>Aint oupt sain crays</h2>
          <p>
            Lorem Ipsum é simplesmente uma
            <a href="localhost:3000"> simulação de link </a>
            da indústria tipográfica e de impressos, e vem sendo utilizado desde o
            século XVI, quando um impressor desconhecido pegou uma bandeja de
            tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem
            Ipsum sobreviveu não só a cinco séculos.
          </p>
        </div>

        <div>
          <ul id="livros-itens">
            {books && books.length > 0 ? (
              books.map((livro) => (
                <li key={livro.id} id="livros-itens-livro">
                  <img
                    src={livro.volumeInfo.imageLinks?.thumbnail}
                    alt={livro.volumeInfo.title}
                  />
                  <h3>
                    {livro.volumeInfo.title.split(' ').slice(0, 2).join(' ')}<br />
                    {livro.volumeInfo.title.split(' ').slice(2).join(' ')}
                  </h3>
                  <p>{livro.volumeInfo.authors?.join(', ')}</p>
                </li>
              ))
            ) : (
              <p>Nenhum livro encontrado</p>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
