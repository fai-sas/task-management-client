/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='container flex flex-col justify-center py-8 m-10 mx-auto space-y-10 '>
      <nav className='flex flex-wrap justify-center gap-6 font-medium text-gray-500'>
        <Link className='hover:text-gray-900'>Home</Link>
        <Link className='hover:text-gray-900'>About</Link>
        <Link className='hover:text-gray-900'>Services</Link>
        <Link className='hover:text-gray-900'>Media</Link>
        <Link className='hover:text-gray-900'>Gallery</Link>
        <Link className='hover:text-gray-900'>Contact</Link>
      </nav>

      <div className='flex justify-center space-x-5'>
        <Link
          to='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://img.icons8.com/fluent/30/000000/facebook-new.png' />
        </Link>
        <Link
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://img.icons8.com/fluent/30/000000/linkedin-2.png' />
        </Link>
        <Link
          to='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://img.icons8.com/fluent/30/000000/instagram-new.png' />
        </Link>
        <Link
          to='https://messenger.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png' />
        </Link>
        <Link
          to='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='https://img.icons8.com/fluent/30/000000/twitter.png' />
        </Link>
      </div>
      <p className='font-medium text-center text-gray-700'>
        &copy; {currentYear} Company Ltd. All rights reservered
      </p>
    </footer>
  )
}
export default Footer
