import { useRef } from 'react'
import { useEffect } from 'react/cjs/react.development'
import * as C from './Styles'

const Search = (props) => {
    const inputEl = useRef(null)
    const handleBlur = ()=>{
        props.onBlur()
    }
    useEffect(()=>{
        if(props.searchIcon) {
            inputEl.current.focus()
        }
    },[props.searchIcon])

    return (
        <C.ContainerSearch>
            {!props.searchIcon && (
                <C.SearchIcon name="serchIcon" onClick={props.handleIcon} />
            )}
            <C.InputSearch
                className={`${props.show}`}
                ref={inputEl}
                value={props.value}
                type="search"
                name="searchInput"
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={handleBlur}
            />
        </C.ContainerSearch>
    )
}

export default Search