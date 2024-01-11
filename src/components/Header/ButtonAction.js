export const ButtonAction = ({ children }) => {
  return (
    <>
      <button className="group font-bold duration-500 ease-in-out relative rounded-full bg-black py-4 px-11 text-white  transition-all">
        <div className="animate-ping group-hover:hidden group-active:scale-105 -z-1 duration-500 ease-in-out w-3 h-3 right-7 top-6 rounded-full absolute bg-primary-500 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:top-0" />
        <div className="group-active:scale-105 -z-1 duration-500 ease-in-out w-3 h-3 right-7 top-6 rounded-full absolute bg-primary-500 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:top-0" />
        <p className="z-10 relative mr-2 group-hover:mr-0 group-hover:mx-2 duration-500 ease-in-out">
          <span>{children}</span>
        </p>
      </button>
    </>
  )
}
