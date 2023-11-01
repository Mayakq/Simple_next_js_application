import React from 'react';
import Image from "next/image";
import logo from '../../../public/footer.svg'

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className="footer__container">
                <div className="footer__info info--footer">
                    <Image src={logo} className="info--footer__logo" width={32} height={64}
                           alt={"image footer"}></Image>
                </div>
                <div className="info--footer__contacts">
                    <div className="info--footer__address">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла
                        Маркса, 246 (ДК «Металлург»)
                    </div>
                    <div className="info--footer__phone">+7 (3412) 93-88-61, 43-29-29</div>
                    <a href="#" className="info--footer__site site-url">htc-cs.ru</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
