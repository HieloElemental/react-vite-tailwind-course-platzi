const Card = () => {
  return (
    <div className='w-64 h-80 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer'>
      <figure className='relative mb-2 w-full h-4/6'>
        <span className='absolute bottom-0 left-0 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 m-2'>
          Electronics
        </span>
        <img
          className='w-full h-full object-cover rounded-t-lg'
          src='https://www.free-mockup.com/wp-content/uploads/edd/2024/01/Smart-Watch-Free-Mockups-01-1000x750.jpg'
          alt=''
        />
      </figure>
      <div className='px-5 pb-5'>
        <a
          href=''
          className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'
        >
          Smart watch
        </a>
        <div className='flex items-center justify-between py-1'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            $599
          </span>
          <a
            href=''
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export { Card };
