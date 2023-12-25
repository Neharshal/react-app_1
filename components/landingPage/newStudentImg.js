import React from "react";
import Image from "next/image";

function NewStudentImg (){
    return (
        <Image 
        className="avatar-img rounded-circle border-white"
        src={`/assets/images/avatar/${avatar}.jpg`}
        width={50}
        height={50}
        alt="avatar"
      />
    );
}

export default NewStudentImg;