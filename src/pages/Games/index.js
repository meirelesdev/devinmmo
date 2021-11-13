import TitleContent from "../../components/PageTitle";
import Layout from '../../template/Layout'
import SectionGames from "../../components/SectionGames";
import { useGames } from "../../contexts/gamesContext";
import {  useState } from "react";
import Search from "../../components/Search";

const PageGames = () => {
    const { allGames, searchValue, heandleSearchGames } = useGames()
    //const [ gamesToShow, setGamesToShow ] = useState([]) // para implementar paginação

    const [searchIcon, setSearchIcon] = useState(false)

    const handleInputSearchVisible = ()=>{
        setSearchIcon(c => !c)
    }


    let clazz = searchIcon ? '' : 'hide'

    return (
        <Layout title="Games"  isHome={false}>
            <TitleContent pageTitle={searchValue.length > 0 ? `Resultado para "${searchValue}" ( ${allGames.length} )`  : `Todos os Jogos ( ${allGames.length} )` } >
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