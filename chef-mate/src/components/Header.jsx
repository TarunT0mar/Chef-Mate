import "../components-css/comp.css"
import { GiChefToque } from "react-icons/gi";
export default function Header(){
    return(
        <header>
            <GiChefToque className="chef-logo" />
            <h3>Chef-Mate</h3>
        </header>
    )
}