/* eslint-disable react/prop-types */


const Card = ({children}) => {
  return (
    <div className="card bg-gray-200 shadow-xl rounded-3xl p-4 w-[90%] my-4 m-auto">
            {children}
        </div>
  )
}

export default Card