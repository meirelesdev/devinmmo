import Loader from "./LoaderItem";
import * as C from './Styles'


const LoaderContainer = props => {
    return (
        <C.Container>
            <C.LoaderItem>
                <Loader />
            </C.LoaderItem>
            <C.LoaderItem>
                <Loader/>
            </C.LoaderItem>
            <C.LoaderItem>
                <Loader/>
            </C.LoaderItem>
            <C.LoaderItem>
                <Loader/>
            </C.LoaderItem>
        </C.Container>
    )
}

export default LoaderContainer