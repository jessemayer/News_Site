import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
   
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <img src="/favicon.ico" alt=""/>
            </Link>
            <ul>
            <CustomLink to="/Profile">Profile</CustomLink>  
              <CustomLink to="/TechCrunch">TechCrunch</CustomLink>
              <CustomLink to="/Business">Business News</CustomLink>
              <CustomLink to="/WallStreetJournal">Wall Street Journal</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink ({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={ to } {...props}>{children}</Link>
        </li>
    )
}