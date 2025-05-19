import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Blake Marcus</title>
        <meta name='description' content="Sorry, that page doesn't exist." />
      </Helmet>
      <div className='flex flex-col items-center justify-center min-h-screen bg-white px-6 border-t-8 border-l-8 border-black'>
        <h1 className='text-[10rem] font-extrabold uppercase leading-none tracking-tight border-b-8 border-r-8 border-black mb-8 p-4'>
          404
        </h1>
        <p className='text-2xl font-bold uppercase mb-12 border-b-4 border-black pb-2 w-full max-w-md text-left'>
          OOPS! THAT PAGE DOESN'T EXIST.
        </p>
        <Link
          to='/'
          className='border-8 border-black px-10 py-5 uppercase font-extrabold text-black hover:bg-black hover:text-white transition-all duration-300 max-w-max'>
          GO HOME
        </Link>
      </div>
    </>
  );
}

export default NotFound;
