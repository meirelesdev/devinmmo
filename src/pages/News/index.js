import { useState } from "react";
import Layout from '../../template/Layout'
import TitleContent from "../../components/PageTitle";
import Search from "../../components/Search";
import SectionNews from "../../components/SectionNews";
import { useData } from "../../contexts/dataContext";

const PageNews = () => {
    const { allNews, searchNews, heandleSearch } = useData()
    const [searchIcon, setSearchIcon] = useState(false)

    const handleInputSearchVisible = ()=>{
        setSearchIcon(c => !c)
    }
    let clazz = searchIcon ? '' : 'hide'
    return (
        <Layout title="News" isHome={false}>
            <TitleContent pageTitle={searchNews.length > 0 ? `Resultado para "${searchNews}" ( ${allNews.length} )` : `Total de notícias ( ${allNews.length} )`} >
                <Search
                    searchIcon={searchIcon}
                    show={clazz}
                    handleIcon={handleInputSearchVisible}
                    value={searchNews}
                    onChange={heandleSearch}
                    onBlur={handleInputSearchVisible}
                    placeholder="Buscar por titulo ou descrição"
                    searchName="searchNews"
                />
            </TitleContent>
            <SectionNews news={allNews} />
        </Layout>
    );
}
export default PageNews