"use client"
import cat from "../../../../public/cat.png"
import batmen from "../../../../public/batmen.png"
import hollywood from "../../../../public/hollywood.png"
import girl from "../../../../public/girl.png"
import comedy from "../../../../public/comdey.png"
import dramas from "../../../../public/dramas.png"
import horrors from "../../../../public/horrors.png"
import fantasy from "../../../../public/fanstay.png"
import Image from "next/image";

const Films = () => {
    return (
        <>
            <section className="info" id="info">
                <div className="info__container">
                    <div className="info__title">🔥 Новинки</div>
                    <div className="info__news news__info">
                        <ul className="news__items">
                            <li className="news__item item__news">
                                <div className="item__img-block">
                                    <Image className="item__img" src={cat} alt="cat"></Image>
                                </div>
                                <ul className="item__description">Мульт в кино. Выпуск №103. Некогда грустить!</ul>
                            </li>
                            <li className="news__item item__news">
                                <div className="item__img-block">
                                    <Image className="item__img" src={batmen} alt="batmen"></Image>
                                </div>
                                <ul className="item__description">Новый Бэтмен</ul>
                            </li>
                            <li className={"news__item item__news background-text"}>
                                <div className="item__img-block">
                                    <Image className="item__img" src={hollywood} alt="hollywood"></Image>
                                </div>
                                <ul className="item__description">Мульт в кино. Выпуск №103. Некогда грустить!</ul>
                            </li>
                            <li className="news__item item__news">
                                <div className="item__img-block">
                                    <Image className="item__img" src={girl} alt="girl"></Image>
                                </div>
                                <ul className=" item__description">Стриптизёрши</ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="genre">
                <div className="genre__container">
                    <div className="genre__title">Жанры</div>
                    <div className="genre__items genre-items">
                        <div className="genre-items__item genre-item comdey">
                            <div className="genre-item__image c"><Image src={comedy} alt=""></Image></div>
                            <div className="genre-item__description">Комедии</div>
                        </div>
                        <div className="genre-items__item genre-item dramas">
                            <div className="genre-item__image"><Image src={dramas} alt=""></Image></div>
                            <div className="genre-item__description">Драмы</div>
                        </div>
                        <div className="genre-items__item genre-item fanstay">
                            <div className="genre-item__image"><Image src={fantasy} alt=""></Image></div>
                            <div className="genre-item__description">Фантастика</div>
                        </div>
                        <div className="genre-items__item genre-item horrors">
                            <div className="genre-item__image"><Image src={horrors} alt=""></Image></div>
                            <div className="genre-item__description">Ужасы</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Films;
