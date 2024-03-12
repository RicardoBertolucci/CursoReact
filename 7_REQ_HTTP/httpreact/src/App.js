//Style
import './App.css';

//Library
import { useState, useEffect } from "react";

//Components
//4 - Custom hook
import { useFetch } from './hooks/useFetch';



const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  //4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);//Redefini o valor de data como items

  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  //1 - Resgatando dados
  // useEffect(() => {
  //   const response = async () => {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data); 
  //   }

  //   response();
  // }, []);

  // 2 - Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name, price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //Como o valor retornado da API é o item adicionado, nó simplesmente pegamos o retorno 
    //e guardamos em uma variável, que irá acrescentar o produto sem a necessidade de recarregar a página

    //5 - refatorando POST

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  //8 - DESAFIO 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>  
          </li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - state de loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar Produto" />}
        </form>
      </div>
    </div>
  );
}

export default App;
