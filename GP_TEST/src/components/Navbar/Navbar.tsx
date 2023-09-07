
export interface NavbarInterface { }

export const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <>

      <nav className="fixed items-center left-0 top-0 h-16 bg-white shadow-md   w-full ">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="container relative left-0 z-50 flex w-3/4 h-auto ">

              <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                <a href="#" className="relative block">
                  <span className="material-symbols-outlined">account_circle</span>                
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>



    </>)
}