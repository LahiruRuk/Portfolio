import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div class='cta'>
            <a href={CV} download class='btn'>Downlord CV</a>
            <a href="#contact" class='btn btn-primary'>Let's Talk</a>

        </div>
    )
}

export default CTA
