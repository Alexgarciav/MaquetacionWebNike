import { useState, useEffect } from 'react'
import  useWindowSize  from './../hooks/hook'
import './nike.scss'

export const Nike = () => {


    let [ foto , setFoto ] = useState(0)

    let slider1 = [
        {
            src : './assets/slider1/zapatilla1.jpeg' , alt : 'Zapatilla1'
        },
        {
            src : './assets/slider1/zapatilla2.jpeg' , alt : 'Zapatilla2'
        },
        {
            src : './assets/slider1/zapatilla3.jpeg' , alt : 'Zapatilla3'
        },
        {
            src : './assets/slider1/zapatilla4.jpeg' , alt : 'Zapatilla4'
        },
        {
            src : './assets/slider1/zapatilla5.jpeg' , alt : 'Zapatilla5'
        },
        {
            src : './assets/slider1/zapatilla6.jpeg' , alt : 'Zapatilla6'
        },
        {
            src : './assets/slider1/zapatilla7.png' , alt : 'Zapatilla7'
        },
        {
            src : './assets/slider1/zapatilla8.png' , alt : 'Zapatilla8'
        },
        {
            src : './assets/slider1/zapatilla9.jpeg' , alt : 'Zapatilla9'
        },
        {
            src : './assets/slider1/zapatilla10.png' , alt : 'Zapatilla10'
        }
    ]

    let slider2 = [
        {
            src : './assets/slider2/zapatilla1.png' , alt : 'Zapatilla1'
        },
        {
            src : './assets/slider2/zapatilla2.png' , alt : 'Zapatilla2'
        },
        {
            src : './assets/slider2/zapatilla3.png' , alt : 'Zapatilla3'
        },
        {
            src : './assets/slider2/zapatilla4.jpeg' , alt : 'Zapatilla4'
        },
        {
            src : './assets/slider2/zapatilla5.png' , alt : 'Zapatilla5'
        },
        {
            src : './assets/slider2/zapatilla6.png' , alt : 'Zapatilla6'
        },
        {
            src : './assets/slider2/zapatilla7.jpeg' , alt : 'Zapatilla7'
        },
        {
            src : './assets/slider2/zapatilla8.png' , alt : 'Zapatilla8'
        },
        {
            src : './assets/slider2/zapatilla9.png' , alt : 'Zapatilla9'
        },
        {
            src : './assets/slider2/zapatilla10.png' , alt : 'Zapatilla10'
        }
    ]

    let fotoPosicion  = ( valor ) => {
        setFoto( valor )
    }

    let cuantosveo = 3
    let cantidadElementos1 = 10
    let cantidadElementos2 = 10
    let vecesSlide1 = (cantidadElementos1 - cuantosveo)
    let vecesSlide2 = (cantidadElementos2 - cuantosveo)


    let anchoSlider1 = () => {
        return `calc(100% * ${vecesSlide1})`
    }
    let anchoSlider2 = () => {
        return `calc(100% * ${vecesSlide2})`
    }


    let aumentarFoto1 = () => {
        setFoto( foto + 1 )
        if( foto >= vecesSlide1 ){
            setFoto(0)
        }
        console.clear()
        console.log( foto )
    }
    let aumentarFoto2 = () => {
        setFoto( foto + 1 )
        if( foto >= vecesSlide2){
            setFoto(0)
        }
    }

    let disminuirFoto1 = () => {
        setFoto ( foto - 1 )
            if( foto === 0){
                setFoto(vecesSlide1)
        }
    }
    let disminuirFoto2 = () => {
        setFoto ( foto - 1 )
            if( foto === 0){
                setFoto(vecesSlide2)
        }
    }
    let [ activo1 , setActivo1 ] = useState(false)
    let activarMenu1 = () => {
        setActivo1( !activo1 )
    }
    let [ activo2 , setActivo2 ] = useState(false)
    let activarMenu2 = () => {
        setActivo2( !activo2 )
    }
    let [ activo3 , setActivo3 ] = useState(false)
    let activarMenu3 = () => {
        setActivo3( !activo3 )
    }
    let [ activo4 , setActivo4 ] = useState(false)
    let activarMenu4 = () => {
        setActivo4( !activo4 )
    }
    let [ activo5 , setActivo5 ] = useState(false)
    let activarMenu5 = () => {
        setActivo5( !activo5 )
    }
    let [ activo6 , setActivo6 ] = useState(false)
    let activarMenu6 = () => {
        setActivo6( !activo6 )
    }

    let [ menu , setMenu ] = useState(false)
    let activoMenu = () => {
        setMenu( !menu )
    }


    let [ submenu1 , setSubmenu1 ] = useState(false)
    let activoSubmenu1 = () => {
        setSubmenu1( !submenu1 )
    }

    let [ submenu2 , setSubmenu2 ] = useState(false)
    let activoSubmenu2 = () => {
        setSubmenu2( !submenu2 )
    }

    let [ submenu3 , setSubmenu3 ] = useState(false)
    let activoSubmenu3 = () => {
        setSubmenu3( !submenu3 )
    }

    let [ submenu4 , setSubmenu4 ] = useState(false)
    let activoSubmenu4 = () => {
        setSubmenu4( !submenu4 )
    }

    let [ submenu5 , setSubmenu5 ] = useState(false)
    let activoSubmenu5 = () => {
        setSubmenu5( !submenu5 )
    }

    let [ submenu6 , setSubmenu6 ] = useState(false)
    let activoSubmenu6 = () => {
        setSubmenu6( !submenu6 )
    }


    return (

        <section className="nike__section">
            <header className="nike__header">
                <div className="nike__header1">
                    <div className="nike__header1-logos">
                        <img className="nike__jordan-logo" src="./assets/logos/jordan.png"/>
                        <img className="nike__converse-logo" src="./assets/logos/Converse.png"/>
                    </div>
                    <div className="nike__header1-texto">
                        <a className='nike__header1-a'>Ayuda</a>
                        <a className='nike__header1-a'>Únete a nosotros</a>
                        <a className='nike__header1-a'>Iniciar sesión</a>
                    </div>
                </div>
                <div className="nike__header2">
                    <div className="nike__header2-logos">
                        <img className="nike__nike-logo" src="./assets/logos/nike.png"/>
                    </div>
                     <div className="nike__header2-opciones">
                        <ul className="nike__header2-ul">
                            <li className="nike__header2-li" onMouseEnter={activarMenu1} onMouseLeave={activarMenu1}>Novedades
                                <div className={`nike__header2-lidiv ${ (activo1 === true) ? 'activo' : '' }`}>
                                    <ul className="nike__header2-li-ul">Destacados
                                        <li className="nike__header2-li-ul-li">Comprar novedades</li>
                                        <li className="nike__header2-li-ul-li">Superventas</li>
                                        <li className="nike__header2-li-ul-li">Calendario de lanzamientos de SNKRS</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para hombre
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para hombre</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para mujer
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para mujer</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para niño/a
                                        <li className="nike__header2-li-ul-li">Zapatillas para niño</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niño</li>
                                        <li className="nike__header2-li-ul-li">Zapatillas para niña</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niña</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para niño/a</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Comprar por marca
                                        <li className="nike__header2-li-ul-li">Nike Sportswear</li>
                                        <li className="nike__header2-li-ul-li">NikeLab</li>
                                        <li className="nike__header2-li-ul-li">Jordan</li>
                                        <li className="nike__header2-li-ul-li">Nike SB</li>
                                        <li className="nike__header2-li-ul-li">ACG</li>
                                        <li className="nike__header2-li-ul-li">Nike Pro</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nike__header2-li" onMouseEnter={activarMenu2} onMouseLeave={activarMenu2}>Hombre
                                <div className={`nike__header2-lidiv ${ (activo2 === true) ? 'activo' : '' }`}>
                                    <ul className="nike__header2-li-ul">Destacados
                                        <li className="nike__header2-li-ul-li">Comprar novedades</li>
                                        <li className="nike__header2-li-ul-li">Superventas</li>
                                        <li className="nike__header2-li-ul-li">Calendario de lanzamientos de SNKRS</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para hombre
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para hombre</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para mujer
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para mujer</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para niño/a
                                        <li className="nike__header2-li-ul-li">Zapatillas para niño</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niño</li>
                                        <li className="nike__header2-li-ul-li">Zapatillas para niña</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niña</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para niño/a</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Comprar por marca
                                        <li className="nike__header2-li-ul-li">Nike Sportswear</li>
                                        <li className="nike__header2-li-ul-li">NikeLab</li>
                                        <li className="nike__header2-li-ul-li">Jordan</li>
                                        <li className="nike__header2-li-ul-li">Nike SB</li>
                                        <li className="nike__header2-li-ul-li">ACG</li>
                                        <li className="nike__header2-li-ul-li">Nike Pro</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nike__header2-li" onMouseEnter={activarMenu3} onMouseLeave={activarMenu3}>Mujer
                                <div className={`nike__header2-lidiv ${ (activo3 === true) ? 'activo' : '' }`}>
                                    <ul className="nike__header2-li-ul">Destacados
                                        <li className="nike__header2-li-ul-li">Comprar novedades</li>
                                        <li className="nike__header2-li-ul-li">Superventas</li>
                                        <li className="nike__header2-li-ul-li">Calendario de lanzamientos de SNKRS</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para hombre
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para hombre</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para mujer
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para mujer</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para niño/a
                                        <li className="nike__header2-li-ul-li">Zapatillas para niño</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niño</li>
                                        <li className="nike__header2-li-ul-li">Zapatillas para niña</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niña</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para niño/a</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Comprar por marca
                                        <li className="nike__header2-li-ul-li">Nike Sportswear</li>
                                        <li className="nike__header2-li-ul-li">NikeLab</li>
                                        <li className="nike__header2-li-ul-li">Jordan</li>
                                        <li className="nike__header2-li-ul-li">Nike SB</li>
                                        <li className="nike__header2-li-ul-li">ACG</li>
                                        <li className="nike__header2-li-ul-li">Nike Pro</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nike__header2-li" onMouseEnter={activarMenu4} onMouseLeave={activarMenu4}>Niño/a
                                <div className={`nike__header2-lidiv ${ (activo4 === true) ? 'activo' : '' }`}>
                                    <ul className="nike__header2-li-ul">Destacados
                                        <li className="nike__header2-li-ul-li">Comprar novedades</li>
                                        <li className="nike__header2-li-ul-li">Superventas</li>
                                        <li className="nike__header2-li-ul-li">Calendario de lanzamientos de SNKRS</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para hombre
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para hombre</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para mujer
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para mujer</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para niño/a
                                        <li className="nike__header2-li-ul-li">Zapatillas para niño</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niño</li>
                                        <li className="nike__header2-li-ul-li">Zapatillas para niña</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niña</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para niño/a</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Comprar por marca
                                        <li className="nike__header2-li-ul-li">Nike Sportswear</li>
                                        <li className="nike__header2-li-ul-li">NikeLab</li>
                                        <li className="nike__header2-li-ul-li">Jordan</li>
                                        <li className="nike__header2-li-ul-li">Nike SB</li>
                                        <li className="nike__header2-li-ul-li">ACG</li>
                                        <li className="nike__header2-li-ul-li">Nike Pro</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nike__header2-li" onMouseEnter={activarMenu5} onMouseLeave={activarMenu5}>Ofertas
                                <div className={`nike__header2-lidiv ${ (activo5 === true) ? 'activo' : '' }`}>
                                    <ul className="nike__header2-li-ul">Destacados
                                        <li className="nike__header2-li-ul-li">Comprar novedades</li>
                                        <li className="nike__header2-li-ul-li">Superventas</li>
                                        <li className="nike__header2-li-ul-li">Calendario de lanzamientos de SNKRS</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para hombre
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para hombre</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para mujer
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para mujer</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para niño/a
                                        <li className="nike__header2-li-ul-li">Zapatillas para niño</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niño</li>
                                        <li className="nike__header2-li-ul-li">Zapatillas para niña</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niña</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para niño/a</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Comprar por marca
                                        <li className="nike__header2-li-ul-li">Nike Sportswear</li>
                                        <li className="nike__header2-li-ul-li">NikeLab</li>
                                        <li className="nike__header2-li-ul-li">Jordan</li>
                                        <li className="nike__header2-li-ul-li">Nike SB</li>
                                        <li className="nike__header2-li-ul-li">ACG</li>
                                        <li className="nike__header2-li-ul-li">Nike Pro</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nike__header2-li" onMouseEnter={activarMenu6} onMouseLeave={activarMenu6}>Colecciones
                                <div className={`nike__header2-lidiv ${ (activo6 === true) ? 'activo' : '' }`}>
                                    <ul className="nike__header2-li-ul">Destacados
                                        <li className="nike__header2-li-ul-li">Comprar novedades</li>
                                        <li className="nike__header2-li-ul-li">Superventas</li>
                                        <li className="nike__header2-li-ul-li">Calendario de lanzamientos de SNKRS</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para hombre
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para hombre</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para mujer
                                        <li className="nike__header2-li-ul-li">Zapatillas</li>
                                        <li className="nike__header2-li-ul-li">Ropa</li>
                                        <li className="nike__header2-li-ul-li">Equipamiento</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para mujer</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Novedades para niño/a
                                        <li className="nike__header2-li-ul-li">Zapatillas para niño</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niño</li>
                                        <li className="nike__header2-li-ul-li">Zapatillas para niña</li>
                                        <li className="nike__header2-li-ul-li">Ropa para niña</li>
                                        <li className="nike__header2-li-ul-li">Comprar novedades para niño/a</li>
                                    </ul>
                                    <ul className="nike__header2-li-ul">Comprar por marca
                                        <li className="nike__header2-li-ul-li">Nike Sportswear</li>
                                        <li className="nike__header2-li-ul-li">NikeLab</li>
                                        <li className="nike__header2-li-ul-li">Jordan</li>
                                        <li className="nike__header2-li-ul-li">Nike SB</li>
                                        <li className="nike__header2-li-ul-li">ACG</li>
                                        <li className="nike__header2-li-ul-li">Nike Pro</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div> 
                    <div className="nike__header2-compra">
                        <img className="nike__lupa-logo"    src="./assets/iconos/lupa.png"/>
                        <img className="nike__corazon-logo" src="./assets/iconos/amor.png"/>
                        <img className="nike__bolsa-logo"   src="./assets/iconos/bolsa.png"/>
                        <img className="nike__menu-logo"    src="./assets/iconos/menu.png" onClick={ () => activoMenu(true) }/>
                    </div>
                    <div className={ `nike__menu-desplegable ${ ( menu === true ) ? 'activo' : '' }`} >
                        <div className="nike__desplegable-wrapper">
                            <p className="nike__desplegable-cierre" onClick={ () => activoMenu(true) }>╳</p>
                            <ul className="nike__desplegable-ul">
                                <li className="nike__desplegable-li" onClick={ () => activoSubmenu1(true) }>
                                    <p className="nike__desplegable-p">Novedades</p>
                                    <p className="nike__desplegable-p">></p>
                                </li>
                                <li className="nike__desplegable-li" onClick={ () => activoSubmenu2(true) }>
                                    <p className="nike__desplegable-p">Hombre</p>
                                    <p className="nike__desplegable-p">></p>
                                </li>
                                <li className="nike__desplegable-li" onClick={ () => activoSubmenu3(true) }>
                                    <p className="nike__desplegable-p">Mujer</p>
                                    <p className="nike__desplegable-p">></p>
                                </li>
                                <li className="nike__desplegable-li" onClick={ () => activoSubmenu4(true) }>
                                    <p className="nike__desplegable-p">Niño/a</p>
                                    <p className="nike__desplegable-p">></p>
                                </li>
                                <li className="nike__desplegable-li" onClick={ () => activoSubmenu5(true) }>
                                    <p className="nike__desplegable-p">Hasta un 50 % de descuento</p>
                                    <p className="nike__desplegable-p">></p>
                                </li>
                                <li className="nike__desplegable-li" onClick={ () => activoSubmenu6(true) }>
                                    <p className="nike__desplegable-p">Colecciones</p>
                                    <p className="nike__desplegable-p">></p>
                                </li>
                            </ul>
                            <div className="nike__desplegable-iconos">
                                <div className="nike__desplegable-marcas">
                                    <img className="nike__desplegable-marcas-img" src="./assets/logos/jordan.png" />
                                    <p className="nike__desplegable-marcas-p">Jordan</p>
                                </div>
                                <div className="nike__desplegable-marcas">
                                    <img className="nike__desplegable-marcas-img" src="./assets/logos/Converseshort.png" />
                                    <p className="nike__desplegable-marcas-p">Converse</p>
                                </div>
                            </div>
                            <div className="nike__desplegable-member">
                                <p className="nike__desplegable-memberp">Hazte Nike Member para descubrir los mejores productos, la motivación que necesitas e historias del deporte. Más información</p>
                                <button className="nike__desplegable-unete">Únete a nosotros</button>
                                <button className="nike__desplegable-inicia">Inicia sesión</button>
                            </div>
                        </div>
                    </div>
                    <div className="nike__submenu">
                            <div className={ `nike__submenu-desplegable ${ ( submenu1 === true ) ? 'activo' : '' }`}>
                                <div className="nike__submenu-wrapper">
                                    <div className="nike__submenu-todo"onClick={ () => activoSubmenu1(true) }>
                                        <p className="nike__submenu-p">＜</p>
                                        <p className="nike__submenu-p">Todo</p>
                                    </div>
                                    <ul className="nike__submenu-ul">Novedades
                                        <li className="nike__submenu-li">Destacados</li>
                                        <li className="nike__submenu-li">Novedades para hombre</li>
                                        <li className="nike__submenu-li">Novedades para mujer</li>
                                        <li className="nike__submenu-li">Novedades para niño/a</li>
                                        <li className="nike__submenu-li">Comprar por marca</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ `nike__submenu-desplegable ${ ( submenu2 === true ) ? 'activo' : '' }`}>
                                <div className="nike__submenu-wrapper">
                                    <div className="nike__submenu-todo"onClick={ () => activoSubmenu2(true) }>
                                        <p className="nike__submenu-p">＜</p>
                                        <p className="nike__submenu-p">Todo</p>
                                    </div>
                                    <ul className="nike__submenu-ul">Hombre
                                        <li className="nike__submenu-li">Destacados</li>
                                        <li className="nike__submenu-li">Zapatillas</li>
                                        <li className="nike__submenu-li">Accesorios y equipamiento</li>
                                        <li className="nike__submenu-li">Ropa</li>
                                        <li className="nike__submenu-li">Comprar por deporte</li>
                                        <li className="nike__submenu-li">Personalizar</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ `nike__submenu-desplegable ${ ( submenu3 === true ) ? 'activo' : '' }`}>
                                <div className="nike__submenu-wrapper">
                                    <div className="nike__submenu-todo"onClick={ () => activoSubmenu3(true) }>
                                        <p className="nike__submenu-p">＜</p>
                                        <p className="nike__submenu-p">Todo</p>
                                    </div>
                                    <ul className="nike__submenu-ul">Mujer
                                        <li className="nike__submenu-li">Destacados</li>
                                        <li className="nike__submenu-li">Zapatillas</li>
                                        <li className="nike__submenu-li">Ropa</li>
                                        <li className="nike__submenu-li">Comprar por deporte</li>
                                        <li className="nike__submenu-li">Personalizar</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ `nike__submenu-desplegable ${ ( submenu4 === true ) ? 'activo' : '' }`}>
                                <div className="nike__submenu-wrapper">
                                    <div className="nike__submenu-todo"onClick={ () => activoSubmenu4(true) }>
                                        <p className="nike__submenu-p">＜</p>
                                        <p className="nike__submenu-p">Todo</p>
                                    </div>
                                    <ul className="nike__submenu-ul">Niño/a
                                        <li className="nike__submenu-li">Destacados</li>
                                        <li className="nike__submenu-li">Zapatillas</li>
                                        <li className="nike__submenu-li">Ropa de niño</li>
                                        <li className="nike__submenu-li">Accesorios y equipamiento</li>
                                        <li className="nike__submenu-li">Ropa para niña</li>
                                        <li className="nike__submenu-li">Bebé e infantil</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ `nike__submenu-desplegable ${ ( submenu5 === true ) ? 'activo' : '' }`}>
                                <div className="nike__submenu-wrapper">
                                    <div className="nike__submenu-todo"onClick={ () => activoSubmenu5(true) }>
                                        <p className="nike__submenu-p">＜</p>
                                        <p className="nike__submenu-p">Todo</p>
                                    </div>
                                    <ul className="nike__submenu-ul">Hasta un 50 % de descuento
                                        <li className="nike__submenu-li">Destacados</li>
                                        <li className="nike__submenu-li">Descuentos para hombre</li>
                                        <li className="nike__submenu-li">Descuentos para mujer</li>
                                        <li className="nike__submenu-li">Descuentos para niño/a</li>
                                        <li className="nike__submenu-li">Descuentos para deporte</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ `nike__submenu-desplegable ${ ( submenu6 === true ) ? 'activo' : '' }`}>
                                <div className="nike__submenu-wrapper">
                                    <div className="nike__submenu-todo"onClick={ () => activoSubmenu6(true) }>
                                        <p className="nike__submenu-p">＜</p>
                                        <p className="nike__submenu-p">Todo</p>
                                    </div>
                                    <ul className="nike__submenu-ul">Colecciones
                                        <li className="nike__submenu-li">Tendencias</li>
                                        <li className="nike__submenu-li">Lifestyle</li>
                                        <li className="nike__submenu-li">Running</li>
                                        <li className="nike__submenu-li">Fútbol</li>
                                        <li className="nike__submenu-li">Niño/a</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="nike__header3">
                    <p className="nike__header3-p">Los estudiantes tienen un 10% de descuento</p>
                    <a className="nike__header3-a">Más información</a>
                </div>
            </header>
            <div className="nike__airmax">
                <img className="nike__airmax-img" src="./assets/image.jpg" />
                <p className="nike__airmax-p">Novedad</p>
                <h2 className="nike__airmax-h2">NIKE AIR MAX DAWN</h2>
                <p className="nike__airmax-p1">Sal de la zona de confort y sigue tus impulsos creativos con las Air Max Dawn, inspiradas en el estilo de running retro y con un diseño innovador.</p>
                <div className="nike__airmax-buttons">
                    <button className="nike__airmax-boton">Comprar</button>
                    <button className="nike__airmax-boton">Comprar para niño</button>
                </div>
            </div>
            <div className="nike__equipate">
                <div className="nike__equipate-superior">
                    <h3 className="nike__equipate-h3">Equípate</h3>
                    <div className="nike__equipate-flechas">
                        <button onClick={()=>{disminuirFoto1()}} className="nike__equipate-flechaanterior"> ᐸ </button>
                        <button onClick={()=>{aumentarFoto1()}} className="nike__equipate-flechasiguiente"> ᐳ </button>
                    </div>
                </div>
                <div 
                    className="nike__equipate-inferior">
                    <div className="nike__equipate-div" id="slider" style={
                        { transform : `translateX(-${ foto * cantidadElementos1}%)`
                    }
                    }>
                    {
                        slider1.map( ( img , i) =>
                        <div key={i} /* style={
                            {
                                width: `calc(100% * ${vecesSlide1})`
                            }
                        } */ className="nike__equipate-contenedorimg">
                            <img className="nike__equipate-img" src={img.src} />
                        </div>
                        )
                    }
                    </div>
                </div>
            </div>
            <div className="nike__primavera">
                <h3 className="nike__primavera-h3">Primavera a la vista</h3>
                <div className="nike__primavera-total">
                    <div className="nike__primavera-cuadrado">
                        <img className="nike__primavera-img" alt="Imagen" src="./assets/primavera.jpeg" />
                        <div className="nike__primavera-texto">
                            <p className="nike__primavera-p">Nueva temporada, nuevos objetivos.</p>
                            <button className="nike__primavera-button">Comprar</button>
                        </div>
                    </div>
                    <div className="nike__primavera-cuadrado">
                        <img className="nike__primavera-img" alt="Imagen" src="./assets/primavera2.jpeg" />
                        <div className="nike__primavera-texto">
                            <p className="nike__primavera-p">Elévate y renueva tu estilo.</p>
                            <button className="nike__primavera-button">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nike__tendencias">
                <div className="nike__tendencias-superior">
                    <h3 className="nike__tendencias-h3">Tendencias</h3>
                    <div className="nike__tendencias-flechas">
                        <button onClick={()=>{disminuirFoto2()}} className="nike__tendencias-flechaanterior"> ᐸ </button>
                        <button onClick={()=>{aumentarFoto2()}} className="nike__tendencias-flechasiguiente"> ᐳ </button>
                    </div>
                </div>
                <div 
                    className="nike__tendencias-inferior">
                        <div className="nike__tendencias-div" style={
                        { transform : `translateX(-${ foto * cantidadElementos2}%)`
                        }
                    }>
                    {
                        slider2.map( ( img , i) =>
                        <div key={i} onClick={()=>{fotoPosicion(i)}} className="nike__tendencias-contenedorimg">
                            <img className="nike__tendencias-img" src={img.src} />
                        </div>
                        )                        
                    }
                    </div>
                </div>
            </div>
            <div className="nike__atleta">
                <h3 className="nike__atleta-h3">No te lo pierdas</h3>
                <img className="nike__atleta-img" src="./assets/atleta.jpeg" />
                <div className="nike__atleta-texto">
                    <p className="nike__atleta-p">Nunca pares de dejar tu marca.</p>
                    <h2 className="nike__atleta-h2">ELIUD KIPCHOGE: ACABAR EN PRIMERA POSICIÓN SIN QUE<br></br>ELLA ACABE CONTIGO.</h2>
                    <button className="nike__atleta-boton">Comprar ahora</button>
                </div>
            </div>
            <div className="nike__aplicaciones">
                <h3 className="nike__aplicaciones-h3">Descubre nuestras aplicaciones</h3>
                <div className="nike__aplicaciones-total">
                    <div className="nike__aplicaciones-cuadrado">
                        <img className="nike__aplicaciones-img" alt="Imagen" src="./assets/aplicaciones/nikeapp.jpeg" />
                        <div className="nike__aplicaciones-texto">
                            <p className="nike__aplicaciones-p">Nike App</p>
                            <button className="nike__aplicaciones-button">Más información.</button>
                        </div>
                    </div>
                    <div className="nike__aplicaciones-cuadrado">
                        <img className="nike__aplicaciones-img" alt="Imagen" src="./assets/aplicaciones/trainingclub.jpeg" />
                        <div className="nike__aplicaciones-texto">
                            <p className="nike__aplicaciones-p">Nike Training Club App</p>
                            <button className="nike__aplicaciones-button">Más información.</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nike__unete">
                <h3 className="nike__unete-h3">Únete</h3>
                <div className="nike__unete-total">
                    <img className="nike__unete-img" alt="Imagen" src="./assets/nikemembership.jpeg" />
                    <div className="nike__unete-texto">
                        <h2 className="nike__unete-h2">TU NIKE MEMBERSHIP</h2>
                        <p className="nike__unete-p">Hazte Member y demuestra tu amor con Nike By You</p>
                        <button className="nike__unete-button">Únete</button>
                    </div>
                </div>
            </div>
            <div className="nike__masnike">
                <h3 className="nike__masnike-h3">Más de Nike</h3>
                <div className="nike__masnike-total">
                    <div className="nike__masnike-cuadrado">
                        <img className="nike__aplicaciones-img" alt="Imagen" src="./assets/masdenike/hombre.jpeg" />
                        <div className="nike__masnike-texto">
                            <button className="nike__masnike-button">Para hombre</button>
                        </div>
                    </div>
                    <div className="nike__masnike-cuadrado">
                        <img className="nike__aplicaciones-img" alt="Imagen" src="./assets/masdenike/mujer.jpeg" />
                        <div className="nike__masnike-texto">
                            <button className="nike__masnike-button">Para mujer</button>
                        </div>
                    </div>
                    <div className="nike__masnike-cuadrado">
                        <img className="nike__aplicaciones-img" alt="Imagen" src="./assets/masdenike/kids.png" />
                        <div className="nike__masnike-texto">
                            <button className="nike__masnike-button">Para niño/a</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nike__categorias">
                <div className='nike__categorias-lista'>
                    <ul className="nike__categorias-ul" >Zapatillas
                        <li className="nike__categorias-li">Zapatillas</li>
                        <li className="nike__categorias-li">Botas de fútbol</li>
                        <li className="nike__categorias-li">Zapatillas de running</li>
                        <li className="nike__categorias-li">Zapatillas de netball</li>
                        <li className="nike__categorias-li">Zapatillas de golf</li>
                        <li className="nike__categorias-li">Zapatillas de skateboard</li>
                        <li className="nike__categorias-li">Zapatillas de baloncesto</li>
                        <li className="nike__categorias-li">Zapatillas de tenis</li>
                        <li className="nike__categorias-li">Dunk</li>
                    </ul>
                    <ul className="nike__categorias-ul" >Ropa
                        <li className="nike__categorias-li">Toda la ropa</li>
                        <li className="nike__categorias-li">Partes de arriba</li>
                        <li className="nike__categorias-li">Pantalones y leggings</li>
                        <li className="nike__categorias-li">Chándales</li>
                        <li className="nike__categorias-li">Sudaderas con capucha</li>
                        <li className="nike__categorias-li">Chaquetas</li>
                        <li className="nike__categorias-li">Equipaciones y camisetas</li>
                        <li className="nike__categorias-li">Pantalones de yoga</li>
                    </ul>
                    <ul className="nike__categorias-ul" >Niño/a
                        <li className="nike__categorias-li">Zapatillas para niño/a</li>
                        <li className="nike__categorias-li">Mochilas para niño/a</li>
                        <li className="nike__categorias-li">Botas de fútbol para niño/a</li>
                        <li className="nike__categorias-li">Zapatillas de running para niño/a</li>
                        <li className="nike__categorias-li">Jordan para niño/a</li>
                        <li className="nike__categorias-li">Sudaderas con capucha para niño/a</li>
                        <li className="nike__categorias-li">Camisetas para niño/a</li>
                        <li className="nike__categorias-li">Chándales para niño/a</li>
                    </ul>
                    <ul className="nike__categorias-ul" >Destacados
                        <li className="nike__categorias-li">Novedades</li>
                        <li className="nike__categorias-li">Nike Run Club</li>
                        <li className="nike__categorias-li">Nike Training Club</li>
                        <li className="nike__categorias-li">Mochilas y bolsas</li>
                        <li className="nike__categorias-li">Balones de fútbol</li>
                        <li className="nike__categorias-li">Guantes de portero</li>
                        <li className="nike__categorias-li">Zapatillas negras</li>
                        <li className="nike__categorias-li">Botas de fútbol negras</li>
                        <li className="nike__categorias-li">Tallas grandes</li>
                        <li className="nike__categorias-li">Factory Store</li>
                    </ul>
            </div>
            </div>
            <footer className="nike__footer">
                <div className="nike__footer-lista">
                    <div className="nike__footer-div">
                        <ul className="nike__footer-ul">TARJETAS DE REGALO</ul>
                        <ul className="nike__footer-ul">BUSCAR UNA TIENDA</ul>
                        <ul className="nike__footer-ul">REGÍSTRATE PARA RECIBIR CORREOS ELECTRÓNICOS</ul>
                        <ul className="nike__footer-ul">HAZTE MEMBER</ul>
                        <ul className="nike__footer-ul">DESCUENTO PARA ESTUDIANTES</ul>
                        <ul className="nike__footer-ul">COMENTARIOS</ul>
                        <ul className="nike__footer-ul">CÓDIGOS PROMOCIONALES</ul>
                    </div>
                    <ul className="nike__footer-ul">AYUDA
                        <li className="nike__footer-li">Estado del pedido</li>
                        <li className="nike__footer-li">Envíos y entregas</li>
                        <li className="nike__footer-li">Devoluciones</li>
                        <li className="nike__footer-li">Opciones de pago</li>
                        <li className="nike__footer-li">Contacto</li>
                        <li className="nike__footer-li">Ayuda con los códigos promocionales de Nike</li>
                    </ul>
                    <ul className="nike__footer-ul">ACERCA DE NIKE
                        <li className="nike__footer-li">Novedades</li>
                        <li className="nike__footer-li">Trabaja con nosotros</li>
                        <li className="nike__footer-li">Inversores</li>
                        <li className="nike__footer-li">Sostenibilidad</li>
                    </ul>
                    <ul className="nike__footer-ul">APLICACIONES DE NIKE
                        <li className="nike__footer-li">Nike Run Club App</li>
                        <li className="nike__footer-li">Nike Training Club App</li>
                    </ul>
                    <div className="nike__footer-diviconos">
                        <img className="nike__footer-img" src="./assets/iconos/twitter.png" />
                        <img className="nike__footer-img" src="./assets/iconos/facebook.png" />
                        <img className="nike__footer-img" src="./assets/iconos/youtube.png" />
                        <img className="nike__footer-img" src="./assets/iconos/instagram.png" />
                    </div>
                </div>
            </footer>
        </section>
    )
}
