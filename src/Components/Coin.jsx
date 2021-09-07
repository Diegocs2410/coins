import React, { useEffect, useState } from 'react';
import getData from '../ayudas/getData';

const Coin = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    // Cargamos la funcion que consume la api
    useEffect(() => {
        getData().then(({ data }) => {
            // console.log(data);
            setCoins(data);
        });
        // return () => {
        //   cleanup
        // };
    }, []);

    const handleChange = (e) => {
        console.log(e.target.value);
        const busqueda = e.target.value;
        setSearch(busqueda);
    };
    return (
        <div>
            <div className='container'>
                <h1 className='text-center my-4 '>Criptomonedas</h1>
                {/* Formulario con input y boton de busqueda */}
                <div className='mt-4  d-flex justify-content-center align-items-center'>
                    <div className='col-sm-6'>
                        <form action=''>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    placeholder='Buscar'
                                    className='form-control p-2'
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='col-sm-6'>
                        <div className='mx-1 mx-sm-5 mb-3'>
                            <button className='btn btn-primary p-2 form-control fw-bold'>
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
                {/* Tabla para mostrar los datos de la api */}
                <table className='table  table-striped table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Price Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin) => (
                            <tr key={coin.id}>
                                <td>
                                    <img
                                        src={coin.image}
                                        alt='imagen bitcoin'
                                        className='iconos img-fluid'
                                    />{' '}
                                </td>
                                <td>{coin.name} </td>
                                <td>{coin.symbol} </td>
                                <td>{coin.current_price} </td>
                                <td
                                    className={
                                        coin.price_change_percentage_24h < 0
                                            ? 'text-danger'
                                            : 'text-success'
                                    }
                                >
                                    {coin.price_change_percentage_24h}{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Coin;
