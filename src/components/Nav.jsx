import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => (isActive ? " active" : "");

function Nav() {
    return (
        <div className="container">
            <nav>
                <NavLink to="/" className={setActive}>
                    Задание 1
                </NavLink>
                <NavLink to="/magicBall" className={setActive}>
                    Задание 2
                </NavLink>
            </nav>
        </div>
    );
}

export default Nav;