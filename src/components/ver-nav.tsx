import {useNavigate} from "react-router-dom";

function VerNav() {
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => navigate("/dashboard/cpu")}></button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/dashboard/gpu")}></button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/dashboard/ram")}></button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/dashboard/network")}></button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default VerNav;
