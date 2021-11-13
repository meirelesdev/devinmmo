import { useState } from "react";
import Layout from '../../template/Layout'
import TitleContent from "../../components/PageTitle";
import Search from "../../components/Search";
import SectionNews from "../../components/SectionNews";
import { useData } from "../../contexts/dataContext";

const PageNews = () => {
    const { newsData, searchValueNews, heandleSearchNews } = useData()
    const [searchIcon, setSearchIcon] = useState(false)

    const handleInputSearchVisible = ()=>{
        setSearchIcon(c => !c)
    }
    let clazz = searchIcon ? '' : 'hide'
    return (
        <Layout title="News" isHome={false}>
            <TitleContent pageTitle={searchValueNews.length > 0 ? `Resultado para "${searchValueNews}" ( ${newsData.length} )`  : `Todos os Jogos ( ${newsData.length} )` } >
                <Search
                    searchIcon={searchIcon}
                    show={clazz}
                    handleIcon={handleInputSearchVisible}
                    value={searchValueNews}
                    onChange={heandleSearchNews}
                    onBlur={handleInputSearchVisible}
                    placeholder="Buscar por titulo ou descrição"
                />
            </TitleContent>
            <SectionNews news={newsData} />
        </Layout>
    );
}
export default PageNews