import { Banner } from "../../components/Banner";
import Layout from "../../components/Layout";
import { SectionGames } from "../../components/SectionGames";

function Home() {
    return (
        <Layout title="Home" banner={<Banner/>}>
            <SectionGames/>
        </Layout>
    );
}

export default Home