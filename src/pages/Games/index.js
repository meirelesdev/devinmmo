import TitleContent from "../../components/PageTitle";
import Layout from '../../template/Layout'
import SectionGames from "../../components/SectionGames";
import { useData } from "../../contexts/dataContext";
import {  useState } from "react";
import Search from "../../components/Search";
import LoarderComponent from '../../components/LoaderComponent';

const PageGames = () => {
    const { allGames, searchGames, heandleSearch } = useData()
    const [searchIcon, setSearchIcon] = useState(false)
    const handleInputSearchVisible = ()=>{
        setSearchIcon(c => !c)
    }
    let clazz = searchIcon ? '' : 'hide'

    return (
        <Layout title="Games"  isHome={false}>
            <TitleContent 
                    pageTitle={searchGames.length > 0 ?
                        `Resultado para "${searchGames}" ( ${allGames.length} )`
                        :`Total de Jogos ( ${allGames.length} )`}>
                <Search 
                    searchIcon={searchIcon}
                    show={clazz}
                    handleIcon={handleInputSearchVisible}
                    value={searchGames}
                    onChange={heandleSearch}
                    onBlur={handleInputSearchVisible}
                    placeholder="Buscar por titulo ou descrição"
                    searchName="searchGames"
                    />
            </TitleContent>
            {(allGames.length === 0 && !searchGames) ? (
                <LoarderComponent />
            ): (
                <SectionGames games={allGames} />
            )}
        </Layout>
    );
}

export default PageGames