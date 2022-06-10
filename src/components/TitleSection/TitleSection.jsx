import Title from "../Titles/Title/Title";
import Subtitle from "../Titles/Subtitle/Subtitle";
import BtnFiltro from "../BtnFiltro/BtnFilter";

import style from "./TitleSection.module.css"
export default function TitleSection(){
    return(
        <section className={style.topSection}>
            <div>
                <Title>Dashboard</Title>
                <Subtitle>Desafio Técnico Frontend</Subtitle>
            </div>
            <BtnFiltro>Filtro</BtnFiltro>
        </section>
    )
}

