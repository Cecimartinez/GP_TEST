import { IconButton } from "@mui/material"
import { CustomDialog, dialogOpenSubject$ } from ".."
import FavoriteTable from "./FavoriteTable/FavoriteTable"
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface NavbarInterface { }
export const Navbar: React.FC<NavbarInterface> = () => {

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <nav className="fixed items-center left-0 top-0 h-16 bg-white shadow-md   w-full ">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="container relative justify-between items-center  left-0 z-50 flex w-3/4 h-auto ">
              <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                <a href="#" className="relative block">
                  <span className="material-symbols-outlined text-[#53f]">account_circle</span>
                </a>
              </div>
              <h2 className="text-center i">People Table</h2>
              <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
                <FavoriteIcon className="text-[#5c33ff] " />
              </IconButton>
            </div>
          </div>
        </div>
      </nav >
    </>)
}