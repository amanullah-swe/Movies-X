import Navbar from "../../components/Navbar"
import { Hero, TrandingMovies } from "./sections"
import PopularMovies from "./sections/PopularMovies"
import Toprated from "./sections/Toprated"

function HomePage() {
    return (
        <main className='max-container  bg-black text-white'>
            <section className=" absolute w-full padding-x top-0 left-0 z-50"> <Navbar /></section>
            <section className='lg:px-16 px-0; ' ><Hero /></section>
            <section className='padding-x'><TrandingMovies /></section>
            <section className='padding-x padding-t'><PopularMovies /></section>
            <section className='padding-x padding-t'><Toprated /></section>
        </main >
    )
}

export default HomePage