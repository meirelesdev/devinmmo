import { MdModeNight, MdLightMode } from "react-icons/md";
import * as C from './Styles'
import { useThemeToggler } from '../../contexts/themContext'

const ToggleTheme = () => {
    const { isDark, toggleTheme } = useThemeToggler()
    return (
        <C.Container>
            {isDark ? <MdLightMode onClick={toggleTheme}/> : (<MdModeNight onClick={toggleTheme}/>)}
        </C.Container>
    )
}
export default ToggleTheme