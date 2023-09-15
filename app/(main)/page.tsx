import getMovies from '@/actions/get-movies'
import Banner from '@/components/banner'
import FeaturedMovie from '@/components/featured-movie';
import Header from '@/components/header'



export default async function Home() {

  const allMovies = await getMovies();

  return (
    <div className=" relative h-screen bg-transparent  lg:h-[140vh]">

      <Header />
      <main className='relative px-4 md:pr-8 pb-24 lg:space-y-24 lg:pl-16'>

        <Banner allMovies={allMovies.results} />
      </main>
      <section className=' '>

        <FeaturedMovie allMovies={allMovies.results} />
      </section>
    </div>
  )
}








