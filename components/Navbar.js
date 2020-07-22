import Link from 'next/link'
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
const NavBar = ()=>{
   const router = useRouter()
   const cookieuser = parseCookies()
   const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""
 
   function isActive(route){
     if(route== router.pathname){
         return "active"
     }
     else ""
  }

    return(
        <nav>
        <div className="nav-wrapper #1565c0 blue darken-3">
          <Link href="/"><a className="brand-logo left">MyStore</a></Link>
          <ul id="nav-mobile" className="right">
          <li className={isActive('/cart')}><Link href="/cart"><a>cart</a></Link></li>
            {
            (user.role == 'admin' || user.role == 'root') &&
              <li className={isActive('/create')}><Link href="/create"><a>create</a></Link></li>
            }
        
            {user ?
            <>
                <li className={isActive('/account')}><Link href="/account"><a>Account</a></Link></li>
                <li><button className="btn red" onClick={()=>{
                  cookie.remove('token')
                  cookie.remove('user')
                  router.push('/login')
                }}>logout</button></li>  
             </>   
            :
            <>
            <li className={isActive('/login')}><Link href="/login"><a>login</a></Link></li>
            <li className={isActive('/signup')}><Link href="/signup"><a>signup</a></Link></li>
            </>
            }
           
           
          </ul>
        </div>
      </nav>
    )
}


export default NavBar