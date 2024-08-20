
export default function Button({children,bgColor="black",onClick}) {



  return (

    <div className={`px-9 py-3 bg-${bgColor} rounded-md`}>

        <button className={` text-white font-semibold`} onClick={onClick}>{children}</button>

    </div>
  )
}


