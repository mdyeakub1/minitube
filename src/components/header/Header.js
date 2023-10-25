import React from 'react'
import logo from '../../assets/lws.svg';
import search from '../../assets/search.svg'

export const Header = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
    <div
        className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
    >
        <a href="/">
            <img
                className="h-10"
                src={logo}
                alt="Learn with Sumit"
            />
        </a>
        <div
            className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <form>
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
            </form>
            <img
                className="inline h-4 cursor-pointer"
                src={search}
                alt="Search"
            />
        </div>
    </div>
</nav>
  )
}