import ToggleTheme from '../ToggleTheme'
import * as C from './Styles'
import { itemsMenu } from '../Menu/items'


const MenuMobile = ({ handleNavToggle }) => {
    return (
        <C.StyledMenu>
            <div className="animate__animated animate__fadeInRight">
                <ToggleTheme />
            </div>
            {itemsMenu.map((item, index)=>(
                <C.StyledLink key={index} className="animate__animated animate__fadeInRight" to={item.path}>{item.description}</C.StyledLink>

            ))}
            <C.CloseToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle} />
        </C.StyledMenu>
    )
}

export default MenuMobile