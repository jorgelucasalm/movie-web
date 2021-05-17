import React from 'react'
import '../../assets/styles/global.css'
import './style.css'
import Icon from '../../assets/public/language-icon.png'

const Index = () =>
    <>
        <nav className="navbar">
            <h1 className="logo">Listagem de filmes</h1>
            
            <ul className="filter-ul">
                <li className="filter-li" >Filmes</li>
                <li className="filter-li">Series</li>
            </ul>
            <img width="24" height="24" src={Icon} alt=""/>
        </nav>

        <div className="description rm">
            <h3>Bem vindo ao Listagem de filmes!</h3><br />
            <hr /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur non nam, placeat provident quisquam ullam, totam doloribus amet quo doloremque quasi possimus aperiam recusandae? Molestiae quidem consequuntur repellendus ab.</p>
        </div>

    </>

export default Index;