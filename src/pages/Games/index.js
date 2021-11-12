import TitleContent from "../../components/PageTitle";
import Layout from "../../components/Layout";
import SectionGames from "../../components/SectionGames";
import { useGames } from "../../contexts/gamesContext";
import {  useState } from "react";
import Search from "../../components/Search";

const PageGames = () => {
    const { allGames, searchValue, heandleSearchGames } = useGames()
    const [searchIcon, setSearchIcon] = useState(false)

    const handleInputSearchVisible = ()=>{
        setSearchIcon(c => !c)
    }

    let clazz = searchIcon ? '' : 'hide'
    return (
        <Layout title="Games"  isHome={false}>
            <TitleContent pageTitle="Todos os Jogos" >
                <Search 
                    searchIcon={searchIcon}
                    show={clazz}
                    handleIcon={handleInputSearchVisible}
                    value={searchValue}
                    onChange={heandleSearchGames}
                    onBlur={handleInputSearchVisible}
                    placeholder="Buscar por titulo ou descrição"
                    />
            </TitleContent>
            <SectionGames games={allGames} />
        </Layout>
    );
}

export default PageGames