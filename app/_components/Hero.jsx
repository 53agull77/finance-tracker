import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="bg-white flex items-center flex-col">
  <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Manage your Expenses.
        <strong className="text-indigo-600"> Control your money. </strong>

      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
        accusamus impedit minima harum corporis iusto.
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700" href="/sign-in">
          Get Started
        </a>

        <a className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
          Learn More
        </a>
      </div>
    </div>
  </div>
  <Image src = {'/dashboard.png'} alt = 'dashboard'
  width = {1000}
  height = {700}
  className = '-mt-9 rounded-xl border-2'
  />
</section>
  )
}

export default Hero