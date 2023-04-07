import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-orange-500 px-[15px] py-10 lg:py-20 lg:px-[150px] flex flex-col justify-between lg:flex-row lg:gap-10">
      <div className="md:px-5 text-white">
        <h2 className="text-3xl font-bold">Alimazon</h2>
        <p className="text-sm">Best products from all of the world.</p>
        <p>CopyRight &#169; 2023</p> 
      </div>

      <br />
      <hr />
      <br />

      <div className="flex flex-col md:flex-row md:justify-around lg:w-1/2 lg:justify-around gap-5">
        <section>
          <menu className="flex flex-col gap-2 text-white">
            <h3 className="text-xl font-bold">Navigation</h3>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Join Us</a>
            </li>
            <li>
              <a href="">Delivery Partners</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Ask for Help</a>
            </li>
          </menu>
        </section>

        <section>
          <menu className="flex flex-col gap-1 text-white">
            <h3 className="text-xl font-bold">Contact</h3>
            <address>Alimazon, Sichun, China</address>
            <li>
              <a href="tel:000000">Call Us</a>
            </li>
            <li>
              <a href="mailto:webmaster@example.com">Email Us</a>
            </li>
          </menu>
        </section>

        <section>
          <menu className="flex flex-col gap-2 text-white">
            <h3 className="text-xl font-bold">Social Media Links</h3>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com" target="_blank">
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://www.twittter.com" target="_blank">
                Twitter
              </a>
            </li>
          </menu>
        </section>
      </div>
    </footer>
  )
}

export default Footer
