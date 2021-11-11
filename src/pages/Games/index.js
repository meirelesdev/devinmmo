import { useEffect } from "react";
import { Banner } from "../../components/Banner";
import Layout from "../../components/Layout";
import SectionGames from "../../components/SectionGames";
import { useGames } from "../../contexts/gamesContext";

const Games = () => {
    const { gamesData, handleLoadGames } = useGames()
    useEffect(()=>{
        handleLoadGames()
    }, [])
    return (
        <Layout title="Games" banner={<Banner />}>
            <SectionGames games={gamesData} />
        </Layout>
    );
}

export default Games