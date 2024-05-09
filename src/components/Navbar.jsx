import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, Tooltip, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()
  const backgroundColor = useColorModeValue('#fff', '#1A202C');
  const boxShadow = useColorModeValue('rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', 'rgba(0, 0, 0, 1) 0px 2px 8px 0px');

  const styleSheet = {
    boxShadow: boxShadow,
    backgroundColor: backgroundColor
  }

  return (
    <>
      <div className='flex flex-wrap sm:flex-wrap justify-between items-center p-6 navbar' style={styleSheet}>
        <div>
          <Link to={"/"}><h1 className='font-bold text-2xl nav-brand'>VTK Learnings</h1></Link>
        </div>
        <div className='flex gap-5 items-center'>
          {

            colorMode === "dark" ? <Tooltip label={"Light Mode"}><SunIcon onClick={toggleColorMode} className='text-2xl cursor-pointer' /></Tooltip> :
              <Tooltip label={"Dark Mode"}><MoonIcon onClick={toggleColorMode} className='text-2xl cursor-pointer' /></Tooltip>

          }
        </div>
      </div>
    </>
  )
}
