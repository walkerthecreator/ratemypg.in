"use client";
import { useState } from "react";

type props = {
    handleChange : ( name : string , value : number ) => void ,
    ratingFor : string , 
    starIndex : number
}

export default function Star({ handleChange , ratingFor , starIndex  } : props ) {
  const [hovered, setHovered] = useState(-1);
  const [active, setActive] = useState(-1);

  function handleClick(index : number){
    setActive(index);
    handleChange( ratingFor , index + 1 )
    window.scrollTo({
      top : 120 * starIndex  ,
      behavior : 'smooth'
    })
  }

  return (
    <div
      className="p-5 flex gap-2 cursor-pointer"
      onMouseLeave={() => {
        setHovered(active);
      }}
    >


    {
      [...Array(5)].map((_, index) => {
        return (
          <span
            onClick={()=>{ handleClick(index) }}
            style={{ color: index <= hovered ? "#FFDF00" : "white" }}
            onMouseOver={() => {
              setHovered(index);
            }}
            className="hover:text-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
