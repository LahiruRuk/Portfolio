import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <div className="service__list">
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
          </div>
        </article>

        {/* WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <div className="service__list">
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
          </div>
        </article>

        {/* CONTENT CREATION */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <div className="service__list">
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li><BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
