"use client"
import React, {useState} from 'react';

const AuthModal = () => {
    let [login, setLogin] = useState("")
    let [password, setPassword] = useState("")
    function updateLogin(newValue: string) {
        if (newValue.length <= 6){
            let query = document.getElementById("auth__warning")
            query!.style.display = "flex"
        }else {
            let query = document.getElementById("auth__warning")
            query!.style.display = "none"
        }
        setLogin(login=newValue)
    }
    function updatePassword(newValue: string) {
        if (newValue.length <= 6){
            let query = document.getElementById("auth__warning-p")
            query!.style.display = "flex"
        }else {
            let query = document.getElementById("auth__warning-p")
            query!.style.display = "none"
        }
        setPassword(password=newValue)
    }
    return (
        <section className="auth" id="auth__modal">
            <div className="auth-header" id="auth-window">
                <div className="auth-header__body">
                    <div className="auth-header__content">
                        <div className="auth-header__title">Вход</div>
                        <form className="auth-header__form">
                            <input placeholder="Логин" className="auth-header__login default__input" onChange={e => updateLogin(e.target.value)}></input>
                            <div className="auth-header__check-text" id={"auth__warning"}>Логин должен быть не меньше 6 символов</div>
                            <input placeholder="Пароль" className="auth-header__password default__input" onChange={e => updatePassword(e.target.value)}></input>
                            <div className="auth-header__check-text" id={"auth__warning-p"}>Пароль должен быть не меньше 6 символов
                            </div>
                            <div className="auth-header__memrize">
                                <input type="checkbox" className="auth-header__check"></input>
                                <div className="auth-header__text">Запомнить</div>
                            </div>
                            <div className="auth-header__btn">
                                <button className="auth-header__close btn">Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthModal;
