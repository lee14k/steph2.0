import React from "react"
import Link from "next/link"


const Navigation =()=>{
    return(
<nav>
        <ul>
            <Link href="/">
            <li>
            Home

    </li>
    </Link>
    <Link href="/portfolio">

    <li>

        Portfolio
     
        </li>
        </Link>

        <Link href="/about">

        <li>

        About
     
        </li>
        </Link>
   
        </ul>
 </nav>
)}

export default Navigation