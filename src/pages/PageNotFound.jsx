import React from 'react';
import notFound from "../assets/not-found.gif";

export default function PageNotFound() {

    const header = {
        fontSize: "100px",
        fontWeight: "900",
        margin: "0px"
    }

    const subHeader = {
        fontSize: "40px",
        fontWeight: "500"
    }

  return (
    <>
        <div className='flex flex-col justify-center items-center my-20'>
            <h1 style={header}>404</h1>
            <h5 style={subHeader}>Page Not Found</h5>
            <p>OOPS....The link you clicked may be broken or the page may have been removed. We're sorry.</p>
        </div>
    </>
  )
}
