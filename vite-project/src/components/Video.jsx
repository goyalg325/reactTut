import React from 'react'
function Thumbnail({width,height}){
  
    return(
        <>
    <img src="./810391.png" alt="" width={width} height={height}/>
        </>
    )
}
function Video() {
  return (
    <>
    <Thumbnail 
    width = {100}
    height = {100} />
    </>
  )
}

export default Video