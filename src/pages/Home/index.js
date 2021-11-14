import Layout from '../../template/Layout'
import TitleContent from "../../components/PageTitle";
import SectionGames from "../../components/SectionGames";
import SectionNews from "../../components/SectionNews";
import { useData } from "../../contexts/dataContext";

const PageHome = () => {
    const { allGames, newsData } = useData()

    const games = allGames.slice(0, 4)
    const news = newsData.slice(0, 6)
    return (
        <Layout pageTitle="Home" isHome={true}>
            <br/>
            <TitleContent pageTitle="Últimos Lançamentos" />
            <br/>
            <SectionGames games={games} />
            <br/>
            <TitleContent pageTitle="Últimas Notícias" />
            <br/>
            <SectionNews news={news} />
        </Layout>
    );
}

export default PageHome