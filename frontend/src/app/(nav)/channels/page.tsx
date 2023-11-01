import channel1 from "../../../../public/1channel.svg"
import twoxtwo from "../../../../public/2x2ch.png"
import rbk from "../../../../public/rbk.svg"
import amedia from "../../../../public/amedia.svg"
import Image from "next/image";

const Channels = () => {
    return (
        <>
            <section className="channels" id="channels">
                <div className="channels__container">
                    <div className="channels__items">
                        <div className="channels__item">
                            <div className="channels__img">
                                <Image src={channel1} alt="" className="channels__img-channel"></Image>
                            </div>
                            <div className="channels__info">
                                <div className="channels__title">Первый канал</div>
                                <div className="channels__info-schelude schelude">
                                    <div className="schelude__items">
                                        <div className="schelude__item">
                                            <div className="schelude__time red-text">13:00</div>
                                            <div className="schelude__text red-text">Новости (с субтитрами)</div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">14:00</div>
                                            <div className="schelude__text">Давай поженимся</div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">15:00</div>
                                            <div className="schelude__text">Другие новости</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="channels__item">
                            <div className="channels__img">
                                <Image src={twoxtwo} alt="" className="channels__img-channel"></Image>
                            </div>
                            <div className="channels__info">
                                <div className="channels__title">2x2</div>
                                <div className="channels__info-schelude schelude">
                                    <div className="schelude__items">
                                        <div className="schelude__item">
                                            <div className="schelude__time red-text">13:00</div>
                                            <div className="schelude__text red-text">МУЛЬТ ТВ. Сезон 4, 7 серия</div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">14:00</div>
                                            <div className="schelude__text">ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">15:00</div>
                                            <div className="schelude__text">БУРДАШЕВ. Сезон 1, 20 серия</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="channels__item">
                            <div className="channels__img">
                                <Image src={rbk} alt=""
                                                                  className="channels__img-channel"></Image>
                            </div>
                            <div className="channels__info">
                                <div className="channels__title">РБК</div>
                                <div className="channels__info-schelude schelude">
                                    <div className="schelude__items">
                                        <div className="schelude__item">
                                            <div className="schelude__time red-text">13:00</div>
                                            <div className="schelude__text red-text">ДЕНЬ. Горючая смесь: как бороться с
                                                суррогатом на АЗС
                                            </div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">14:00</div>
                                            <div className="schelude__text">ДЕНЬ. Главные темы</div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">15:00</div>
                                            <div className="schelude__text">Главные новости</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="channels__item">
                            <div className="channels__img">
                                <Image src={amedia} alt=""
                                                                  className="channels__img-channel"></Image>
                            </div>
                            <div className="channels__info">
                                <div className="channels__title">AMEDIA PREMIUM</div>
                                <div className="channels__info-schelude schelude">
                                    <div className="schelude__items">
                                        <div className="schelude__item">
                                            <div className="schelude__time red-text">13:00</div>
                                            <div className="schelude__text red-text">Клиент всегда мёртв</div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">14:00</div>
                                            <div className="schelude__text">Голодные игры: Сойка-пересмешница. Часть I
                                            </div>
                                        </div>
                                        <div className="schelude__item">
                                            <div className="schelude__time">15:00</div>
                                            <div className="schelude__text">Секс в большом городе</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Channels;
