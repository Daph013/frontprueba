

const Carrusel = () => {
  return (
   <section id="hero-area" className=" pt-48 pb-10">
  <div className="container">
    <div className="flex justify-between">
      <div className="w-full text-center">
        <h1 className=" font-bold leading-snug text-gray-700 mb-10 wow fadeInUp text-6xl" data-wow-delay="1s">MLB  <span className='text-yellow-300'>VEN</span><span className='text-blue-700'>EZU</span><span className='text-red-700'>ELA</span>
          <br className="hidden lg:block" /> Built with TailwindCSS</h1>
        <div className="text-center mb-10 wow fadeInUp" data-wow-delay="1.2s">
          <a href="#" rel="nofollow" className="btn">Download Now</a>
        </div>
        <div className="text-center wow fadeInUp" data-wow-delay="1.6s">
          <img className="img-fluid rounded-2xl mx-auto" src="banner3.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Carrusel