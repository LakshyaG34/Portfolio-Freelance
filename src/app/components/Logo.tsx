import React from "react"
// import Logo1 from '../assets/Logo1.png';
// import Image from "next/image"
import Logo1 from "./images/Logo1.svg"
import Logo2 from "./images/Logo2.svg"
import Logo3 from "./images/Logo3.svg"
import Logo4 from "./images/Logo4.svg"
import Logo5 from "./images/Logo5.svg"
import Logo6 from "./images/Logo6.svg"
import Logo7 from "./images/Logo7.svg"

const Logo = () =>
{
    return(
    <section className="py-50">
      <div className="container mx-auto flex justify-between items-center gap-8">
        <Logo1 className="w-24 h-10"/>
        <Logo2 className="w-24 h-10"/>
        <Logo3 className="w-24 h-10"/>
        <Logo4 className="w-24 h-10"/>
        <Logo5 className="w-24 h-10"/>
        <Logo6 className="w-24 h-10"/>
        <Logo7 className="w-24 h-10"/>
      </div>
    </section>
    )
}

export default Logo;