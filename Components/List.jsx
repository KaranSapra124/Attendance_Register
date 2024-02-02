import React, { useEffect, useState } from 'react'


const List = ({ Bool }) => {
  const [ParsedData, setParsedData] = useState([])

  useEffect(() => {
    setParsedData(JSON.parse(localStorage.getItem("StudentsData")))
  }, [Bool])
  const HandleChange = (e) => {
    if (e.target.value === "") {
      setParsedData(JSON.parse(localStorage.getItem("StudentsData")))
    } else {
      const FilterData = ParsedData.filter((elem) => {
        return elem.name.includes(e.target.value)
      })
      setParsedData(FilterData);
    }
  }
  const DateChange = (e) => {
    const ParseData = JSON.parse(localStorage.getItem("StudentsData"));
    const FilterArr = ParseData.filter((elem) => {
      return elem.date === e.target.value;
    })
    setParsedData(FilterArr)
  }

  return (
    <>

      <div className="text-center flex flex-col items-center  lg:w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
       <div className=' top-0 sticky'>
       <input onChange={(e) => {
          HandleChange(e)
        }} placeholder='Search The Student...' className="sticky top-0 text-center m-1 bg-gray-100 p-2 rounded-xl text-black shadow-lg" type="text" name="" id="" />
        <input type="date" className='shadow-lg rounded p-2 bg-gray-100 w-10 ml-2 top-0 sticky' onChange={(e) => {
          DateChange(e)
        }} />
       </div>
        <div className="flow-root h-80  overflow-auto w-80">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 ">
            {ParsedData?.length !== 0 && ParsedData !== null ? ParsedData?.map((elem, index) => {
              return <li className="py-3 sm:py-4 " key={index}>
                <div className="flex items-center">
                  <div className="flex-1 min-w-0 ms-4 shadow-lg rounded p-2">
                    <p className="text-xl  font-medium text-gray-900 truncate dark:text-white">
                      {elem?.name}
                    </p>
                    <p className="text-xl  text-gray-500 truncate dark:text-gray-400">
                      {elem?.date}
                    </p>
                  </div>

                </div>
              </li>
            }) : <h1 className='text-black mt-2 text-center '>Your List Is Empty!</h1>}

          </ul>
        </div>
      </div>

    </>
  )
}

export default List
