import React from 'react';
import '../../App.css';
import './Services.css';

export default function Services() {
    return (
        <>
            <div className='service-container'>
                <h1 className='header'>OUR SERVICES</h1>
                <div className='service-image'>
                    <div className='paragraph'>
                        <img src="/images/travel1.jpg" alt="hello" className='service_img' ></img>
                        <p className='text'>Travelling</p>
                    </div>
                    <div className='paragraph'>
                        <img src="/images/travel2.jpg" alt="hello" className='service_img' ></img>
                        <p className='text'>Enjoyday</p>
                    </div>
                    <div className='paragraph'>
                        <img src="/images/travel3.jpg" alt="hello" className='service_img' ></img>
                        <p className='text'>Destination</p>
                    </div>
                </div>
            </div>
            <div className='service-text'>
                <div className='service-text-1'>
                    <p>Step by step, science is advancing. Presently science has helped man arrive at the moon, which was once obscure to man as a satellite. Each creation in innovation or clinical methods depends on science and logical examination.Every other wonders science has done till now has encouraged in progress identified with identification of maladies and treatment moreover. Thus science will unquestionably prompt a superior future for humankind.Step by step, science is advancing. Presently science has helped man arrive at the moon, which was once obscure to man as a satellite. Each creation in innovation or clinical methods depends on science and logical examination.Every other wonders science has done till now has encouraged in progress identified with identification of maladies and treatment moreover. Thus science will unquestionably prompt a superior future for humankind.
                    </p>
                </div>
                <div className='services-img1'>
                    <img src="/images/travel4.jpg" alt="hello" className='service-img-2'></img>
                </div>
            </div>
        </>
    );
}
