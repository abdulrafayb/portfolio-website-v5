import Logo from '/public/logo.svg';

function Footer() {
  return (
    <>
      <div className='max-w-[1500px] m-auto h-px bg-white opacity-10' />

      <footer className='main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20'>
        <img src={Logo} alt='' />
        <div>
          <h5 className='font-medium mb-5'>Services</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>
              <a href=''>Web Design</a>
            </li>
            <li>
              <a href=''>UI / UX</a>
            </li>
            <li>
              <a href=''>Web Development</a>
            </li>
            <li>
              <a href=''>Brand</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className='font-medium mb-5'>Accessibility</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>
              <a href=''>Mon - Fri: 9:00 - 5:00</a>
            </li>
            <li>
              <a href=''>24/7 WhatsApp & Email</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className='font-medium mb-5'>Contact</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>
              <a href=''>abdulrafay@gmail.com</a>
            </li>
            <li>
              <a href=''>+92 398-1234567</a>
            </li>
          </ul>
        </div>
      </footer>

      <div className='max-w-[1500px] m-auto h-px bg-white opacity-10' />

      <div className='main-container text-center py-6 lg:py-8'>
        <div className='text-base lg:text-lg'>
          © 2025 AR | All Rights Reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
