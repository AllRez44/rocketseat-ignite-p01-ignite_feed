import Styles from './Header.module.css'

export function Header(props){
    return (
        <header> 
            {/* <img href="./icon.png"></img> */}
            <h1 className={ Styles.headerTitle }>{ props.headerTitle }</h1>     
        </header>
    )
}