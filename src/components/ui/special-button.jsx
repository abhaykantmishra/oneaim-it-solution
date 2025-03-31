import { useState } from "react"

export function SpecialButton({ children, isTransparent = false, handleClick, textClassName }) {
    const [activeClass, setActiveClass] = useState(isTransparent ? "hover:bg-transparent hover:text-[#ff3b30]" : "hover:bg-white hover:text-[#ff3b30]")
    
    
    return (
        <button 
            className={`px-8 py-3 rounded-full font-medium outline outline-1 transition-colors bg-[#ff3b30] ${activeClass}`}
            onClick={handleClick}
        >
            <p className={`${textClassName}`}>{children}</p>
        </button>
    )
}