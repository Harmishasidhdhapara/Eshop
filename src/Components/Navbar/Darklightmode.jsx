import React from 'react'

const Darklightmode =() => {
  const[theme,setTheme]=React.useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");

  const element=document.documentElement;
  console.log(element);
  React.useEffect(()=>{
    localStorage.setItem("theme",theme);
    if (theme=='dark'){
      element.classList.add("dark");
      element.classList.add("dark");
    } else{
      element.classList.remove("light");
      element.classList.remove("dark")
    };
    
  });

  return (
    <div className='relative'>
      <img 
      onClick={()=> setTheme(theme=="dark" ? "light": "dark")}
      src="light-mode-button.png"
      className={'w-12 cursor-pointer absolute right-0 z-10 ${theme=="dark" ? "opacity-0 : "opacity-100"}transition-all duration-300'}
       />

      <img src="dark-mode-button.png"
      onClick={() => setTheme(theme=="dark" ? "light" : "dark")} 
      className={'w-12 cursor-pointer'}
      alt="" />
    </div>
  );
};

export default Darklightmode;