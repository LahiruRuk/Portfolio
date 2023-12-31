import React from 'react'
import './experiance.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>

              </div>

            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>

              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>

              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>WordPress</h4>
                <small className='text-light'>Experienced</small>

              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
          </div>

        </div>

        {/* End of Frontend */}

        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermidiate</small>
              </div>

            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermidiate</small>
              </div>

            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermidiate</small>
              </div>

            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermidiate</small>
              </div>

            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Intermidiate</small>
              </div>

            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experiance
