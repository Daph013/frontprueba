import React from 'react'

const Noticias = () => {
  return (
  <section id="team" className="py-24 text-center">
  <div className="container">
    <div className="text-center">
      <h2 className="mb-12 section-heading wow fadeInDown text-white" data-wow-delay="0.3s">Ultimas Noticias</h2>
    </div>
    <div className="flex flex-wrap justify-center">
      <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
        <div className="team-item">
          <div className="team-img relative">
            <img className="img-fluid" src="altuvenoti.jpg" alt />
            <div className="team-overlay">
              <ul className="flex justify-center">
                <li className="mx-1">
                  <a href="#" className="social-link hover:bg-indigo-500">
                    <i className="lni lni-facebook-original" aria-hidden="true" />
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#" className="social-link hover:bg-blue-400">
                    <i className="lni lni-twitter-original" aria-hidden="true" />
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#" className="social-link hover:bg-red-500">
                    <i className="lni lni-instagram-original" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center px-5 py-3">
            <h3 className="team-name">John Doe</h3>
            <p>UX UI Designer</p>
          </div>
        </div>
      </div>
      <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
        <div className="team-item">
          <div className="team-img relative">
            <img className="img-fluid" src="salvynoti.jpg" alt />
            <div className="team-overlay">
              <ul className="flex justify-center">
                <li className="mx-1">
                  <a href="#" className="social-link hover:bg-indigo-500">
                    <i className="lni lni-facebook-original" aria-hidden="true" />
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#" className="social-link hover:bg-blue-400">
                    <i className="lni lni-twitter-original" aria-hidden="true" />
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#" className="social-link hover:bg-red-500">
                    <i className="lni lni-instagram-original" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center px-5 py-3">
            <h3 className="team-name">Sarah Doe</h3>
            <p>Front-End Developer</p>
          </div>
        </div>
      </div>
      <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
        <div className="team-item">
          <div className="team-img relative">
            <img className="img-fluid" src="chourionot.jpg" alt />
            <div className="team-overlay">
              <ul className="flex justify-center">
               
                <li className="mx-3 ">
                  <a href="#" className="btn  hover:bg-blue-400">
                    Leer Noticia
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="text-center px-5 py-3">
            <h3 className="team-name">Rob Hope</h3>
            <p>Front-end Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 
  )
}

export default Noticias