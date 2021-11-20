import * as C from './Styles'
import { itemsMenu } from './items'

const Menu = () => {
    return (
        <C.StyledMenu>
            {itemsMenu.map((item, index)=>(
                <C.StyledLinkMenu key={index} to={item.path}>{item.description}</C.StyledLinkMenu>
            ))}
        </C.StyledMenu>
    )
}
export default Menu