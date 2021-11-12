import { useState } from "react";
import Layout from "../../components/Layout";
import TitleContent from "../../components/PageTitle";
import Search from "../../components/Search";
import SectionNews from "../../components/SectionNews";
import { useNews } from "../../contexts/newsContext";

const PageNews = () => {
    const { newsData, searchValue, heandleSearchNews } = useNews()
    const [searchIcon, setSearchIcon] = useState(false)

    const handleInputSearchVisible = ()=>{
        setSearchIcon(c => !c)
    }
    let clazz = searchIcon ? '' : 'hide'
    return (
        <Layout title="News" isHome={false}>
            <TitleContent pageTitle="Todas Notícias" >
                <Search
                    searchIcon={searchIcon}
                    show={clazz}
                    handleIcon={handleInputSearchVisible}
                    value={searchValue}
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