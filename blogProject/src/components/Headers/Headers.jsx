import React from "react"
import { Container,Logo, LogoutBtn} from "../index"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"

export function Headers(){
    const authStatus = useSelector((state) => state.auth.Status)

    const navigate = useNavigate()
    const navItems = [{
        name: 'Home',
        slug: "/",
        active: authStatus
    },{}]
    return(
        <div>
           <header>
            <Container>
                <nav>
                    <div>
                        <Link>
                            <Logo></Logo>
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item)=> item.active?( <li key={item.name}><button
                            onClick={()=> navigate(item.slug)}
                        >{item.name}</button>

                        </li>):null)}
                        {authStatus && (
                            <li>
                                <LogoutBtn></LogoutBtn>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
           </header>
        </div>
    )
}