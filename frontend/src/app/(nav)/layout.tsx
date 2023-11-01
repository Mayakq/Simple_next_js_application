import React from "react";


export default function Nav({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <section className="nav">
                <div className="nav__container">
                    <div className="nav__items">
                        <a href="films/" className="nav__item item__films">Фильмы</a>
                        <a href="channels/" className="nav__item item__channel">Телеканалы</a>
                    </div>
                </div>
            </section>
            {children}

        </>

    )
}
