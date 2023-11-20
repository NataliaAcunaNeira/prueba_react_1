/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MiApi.css';

import axios from 'axios';

function MiApi() {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState('');
  const buscarDatos = () => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      console.log({ res });
      window.paises = res.data;
      setInfo(res.data);
    });
  };

  useEffect(() => {
    buscarDatos();
  }, []);
  const paisesFiltrados = info.filter((elemento) => elemento.name.common.includes(filter));
  return (
    <div>

      <section>

        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputNombre">
                Nombre País
                <input
                  type="Nombre"
                  className="form-control"
                  id="inputNombre"
                  placeholder="Nombre"
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                />
              </label>
            </div>
          </div>
        </form>

        <button onClick={buscarDatos} type="submit" className="btn btn-primary">Buscar</button>

      </section>
      {paisesFiltrados.map((elemento) => (
        <div>
          {elemento.name.common}
        </div>
      ))}
    </div>
  );
}

export default MiApi;
