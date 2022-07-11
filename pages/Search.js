import React from 'react'
import Header from '../Components/Header'
import Footer from "../Components/Footer"

const Search = () => {
  return (
    <div >
      <Header /> 

        <main className='flex'>
          <section>
            <p className='text-xs'>300+ Staysfor 5 Minutes of guests</p>

            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in ME</h1>

            <div className=''>
              <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-all transform duration-100 ease-out'>Cancelation Flexibility</p>
            </div>
          </section>

        </main>
      <Footer />
    </div>
  )
}

export default Search