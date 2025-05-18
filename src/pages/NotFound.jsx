import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found – Blake Marcus</title>
        <meta name='description' content='This page does not exist.' />
      </Helmet>
      <div className='flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-4'>
        <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
        <p className='text-xl text-gray-600 mb-6'>Oops! That page doesn't exist.</p>
        <Link
          to='/'
          className='text-white bg-[#385b4f] hover:bg-[#2f4a42] px-6 py-3 rounded-xl text-lg transition'>
          Go Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
