import {
    Outlet
} from "react-router-dom"

import {Link} from "react-router-dom"

const navbarList = [
    "home",
    "gallery",
    "member",
    "about us",
    "contact us"
]

export default () => {

    return (
        <>
            <div className="w-full h-20 bg-blue-100 flex justify-between px-8" >
                <div>
                    <img className="h-full" src="/website-logo.png" />
                </div>
                <ul className="flex h-full w-3/4 items-center justify-around">
                    {
                        navbarList.map((list) => {
                            const linkNav = list.replace(/\s/g, "-")
                            return (<li className="capitalize tracking-wide"><Link to={`/${linkNav}`}>{list}</Link></li>)
                        })
                    }
                </ul>
                <div className="flex items-center justify-center">
                    <Link to="/login">

                    <div className="bg-blue-600 rounded px-4 py-2 text-white text-base font-light cursor-pointer tracking-wider">
                    login
                    </div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )

}
