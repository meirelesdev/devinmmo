import * as C from './Styles'
import { BsHeartFill} from 'react-icons/bs'


const Footer = (props)=>{
    return (
        <C.FooterContainer>
            <p>Feito com <span><BsHeartFill /></span> por Daniel Meireles.</p>
        </C.FooterContainer>
    )
}
export default Footer