"use client"

import React from 'react';
import Image from "next/image";
import logo from '../../../public/sign.svg'
import AuthModal from "@/components/ui/auth";

const Header = () => {
    function modal() {
        let modal = document.getElementById("auth__modal");
        modal!.style!.display = "flex"
    }

    return (
        <header className="header">
            <AuthModal/>
            <div className="header__container">
                <div className="header__top top-header">
                    <div className="top-header__logotype">
                        <a href="#" className="top-header__logo"><Image src={logo} alt="logo" width={37}
                                                                        height={36}></Image></a>
                        <a href="#" className="top-header__name">Видеосервис</a>
                    </div>
                    <div className="top-header__search search">
                        <form className="search__form">
                            <input type="search" name="" id="" className="search__input default-input"
                                   placeholder="Поиск..."></input>
                            <a href="#" className="search__btn transparent-btn">Найти</a>
                        </form>
                    </div>
                    <div className="top-header__login login">
                        <button className="login__btn btn" onClick={modal}>Войти</button>
                    </div>
                    <div className="top-header__logout logout">
                        <div className="logout__name"></div>
                        <button className="logout__btn transparent-btn">Выйти</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
