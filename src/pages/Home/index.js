import { useEffect } from "react";
import { Banner } from "../../components/Banner";
import Layout from "../../components/Layout";
import TitleContent from "../../components/PageTitle";
import SectionGames from "../../components/SectionGames";
import SectionNews from "../../components/SectionNews";
import { useGames } from "../../contexts/gamesContext";
import { useNews } from "../../contexts/newsContext";

const Home = () => {
    const { gamesData, handleLoadGames } = useGames()
    const { newsData, handleLoadNews } = useNews()
    useEffect(()=>{
        handleLoadGames(0, 4)
        handleLoadNews(0, 4)
    }, [])
    return (
        <Layout pageTitle="Home" banner={<Banner />}>
            <TitleContent pageTitle="Últimos Games Lançamentos" />
            <SectionGames games={gamesData} />
            <TitleContent pageTitle="Últimas Notícias" />
            <SectionNews news={newsData} />
        </Layout>
    );
}

export default Home