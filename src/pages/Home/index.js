import Layout from "../../components/Layout";
import TitleContent from "../../components/PageTitle";
import SectionGames from "../../components/SectionGames";
import SectionNews from "../../components/SectionNews";
import { useGames } from "../../contexts/gamesContext";
import { useNews } from "../../contexts/newsContext";

const PageHome = () => {
    const { allGames } = useGames()
    const { newsData } = useNews()

    const games = allGames.slice(0, 8)
    const news = newsData.slice(0, 5)
    return (
        <Layout pageTitle="Home" isHome={true}>
            <TitleContent pageTitle="Últimos Games Lançamentos" />
            <br/>
            <br/>
            <br/>
            <SectionGames games={games} />
            <TitleContent pageTitle="Últimas Notícias" />
            <br/>
            <br/>
            <br/>
            <SectionNews news={news} />
        </Layout>
    );
}

export default PageHome