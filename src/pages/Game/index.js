import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Layout from "../../components/Layout"
import api from "../../services/api"

const PageGame = props => {
    const [game, setGame] = useState({
        id: '',
        title: '',
        thumbnail: '',
        status: '',
        short_description: '',
        description: '',
        game_url: '',
        genre: '',
        platform: '',
        publisher: '',
        developer: '',
        release_date: '',
        profile_url: '',
        minimum_system_requirements: {
            os: '',
            processor: '',
            memory: '',
            graphics: '',
            storage: ''
        },
        screenshots: [
            {
                id: '',
                image: ''
            }, {
                id: '',
                image: ''
            }, {
                id: '',
                image: ''
            }, {
                id: '',
                image: ''
            }
        ]
    })
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const response = await api.get('game', { params: { id } })
            setGame(g => response.data)
        })()
    }, [id])
    return (
        <Layout title="Game Single" isHome={false}>
            <div>
                <h1>
                    {game.title} ({(new Date(game.release_date).toLocaleDateString('pt-br'))})
                    </h1>
                 <div className="slide-show">
                    {!!game.screenshots && game.screenshots.map((gameImg, index) => (
                        <img 
                            key={`${game.id}-${index}`} 
                            src={gameImg.image}
                            alt={`${game.title}-${gameImg.id}`}
                            />
                    ))} 
                </div> 
                <div className="info">
                    <strong>Generos</strong>
                    <p>{game.genre}</p>
                    <strong>Plataforma</strong>
                    <p>{game.platform}</p>
                </div>
                <div>
                    <strong>Descrição</strong>
                    <p>{game.short_description}</p>
                    <div>
                        <h3>Requisitos do sistema</h3>
                        <div>
                            <span>Sistema Operacional:</span>
                            {/* <span>{game.minimum_system_requirements.os}</span> */}
                        </div>
                        <div>
                            <span>Processador:</span>
                            <span>{game.minimum_system_requirements.processor}</span>
                        </div>
                        <div>
                            <span>Memória:</span>
                            <span>{game.minimum_system_requirements.memory}</span>
                        </div>
                        <div>
                            <span>Gráficos:</span>
                            <span>{game.minimum_system_requirements.graphics}</span>
                        </div>
                        <div>
                            <span>Espaço em disco:</span>
                            <span>{game.minimum_system_requirements.storage}</span>
                        </div>
                    </div>
                </div>
                <div>
                    area para postar comentarios
                </div>
                <div>
                    area para mostrar comentarios
                </div>
            </div>
        </Layout>
    )
}
export default PageGame