import Slider from '../Slider'
import * as C from './Styles'

const ContainerGameSingle = ({ game, ...props }) => {
    return (
        <C.Container>
            <C.Title>
                {game.title}: ({(new Date(game.release_date).toLocaleDateString('pt-br'))})
            </C.Title>
            {!!game.screenshots && <Slider images={game.screenshots} />}
            <C.InfoGame>
                <div>
                    <C.InfoTitle>Generos:</C.InfoTitle>
                    <C.InfoContent>{game.genre}</C.InfoContent>
                </div>
                <div>
                    <C.InfoTitle>Plataforma:</C.InfoTitle>
                    <C.InfoContent>{game.platform}</C.InfoContent>
                </div>
            </C.InfoGame>
            <C.InfoGame>
                <C.InfoTitle>Descrição: </C.InfoTitle>
                <C.InfoContent>{game.short_description}</C.InfoContent>
            </C.InfoGame>
            {!!game.minimum_system_requirements && (
                <C.RequestSystem>
                    <h3>Requisitos do sistema</h3>
                    <C.ContainerField>
                        <C.InfoTitle>Sistema Operacional:</C.InfoTitle>
                        <C.InfoContent>{game.minimum_system_requirements.os}</C.InfoContent>
                    </C.ContainerField>
                    <C.ContainerField>
                        <C.InfoTitle>Processador:</C.InfoTitle>
                        <C.InfoContent>{game.minimum_system_requirements.processor}</C.InfoContent>
                    </C.ContainerField>
                    <C.ContainerField>
                        <C.InfoTitle>Memória:</C.InfoTitle>
                        <C.InfoContent>{game.minimum_system_requirements.memory}</C.InfoContent>
                    </C.ContainerField>
                    <C.ContainerField>
                        <C.InfoTitle>Gráficos:</C.InfoTitle>
                        <C.InfoContent>{game.minimum_system_requirements.graphics}</C.InfoContent>
                    </C.ContainerField>
                    <C.ContainerField>
                        <C.InfoTitle>Espaço em disco:</C.InfoTitle>
                        <C.InfoContent>{game.minimum_system_requirements.storage}</C.InfoContent>
                    </C.ContainerField>
                </C.RequestSystem>
            )}
            <C.InfoTitle>Deixe seu comentário:</C.InfoTitle>
            {props.children}
        </C.Container>
    )
}


export default ContainerGameSingle