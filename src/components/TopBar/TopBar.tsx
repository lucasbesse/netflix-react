import { useEffect, useRef, useState } from "react"
import "./TopBar.css"

interface TopBarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

function TopBar({ searchTerm, setSearchTerm }: TopBarProps){
    const [showInput, setShowInput] = useState<Boolean>(false);
    const refInput = useRef<HTMLInputElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (refInput.current && !refInput.current.contains(event.target as Node)) {
        console.log("Clique fora do input!");
        setShowInput(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return(
        <div className="top-bar">
            <div className="c c-left">
                <img className="logo" src="assets/logo.png" alt="" />
                <div className="menu">Início</div>
                <div className="menu">Séries</div>
                <div className="menu">Filmes</div>
                <div className="menu">Minha Lista</div>
                <div className="menu">Bombando</div>
            </div>
            <div className="c c-right">
                {showInput && 
                    <input 
                        ref={refInput} 
                        placeholder="Busque por títulos" 
                        className="search-input" 
                        type="text"
                        value={searchTerm}
                        onChange={(e)=> setSearchTerm(e.target.value)}
                    />}
                {!showInput && 
                    <div onClick={() => setShowInput(true)} className="search-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                }
            </div>
        </div>
    )
}
export default TopBar