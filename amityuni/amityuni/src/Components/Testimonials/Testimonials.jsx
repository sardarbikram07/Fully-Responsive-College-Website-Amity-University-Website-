import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

const slider= useRef();
let tx=0;

const slideForward=()=>{
    if(tx > -50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
}
const slideBackward=()=>{
    if(tx < 0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
    
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
        <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Anjali Malhotra</h3>
                                    <span>B.Tech CSE, Amity University</span>
                                </div>
                            </div>
                            <p>Choosing Amity University for my B.Tech was transformative. The world-class infrastructure, industry-focused curriculum, and countless opportunities for internships and placements have given me a strong foundation for my tech career.</p>
                        </div>                    
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Aditya Verma</h3>
                                    <span>MBA, Amity Business School</span>
                                </div>
                            </div>
                            <p>The MBA program at Amity Business School has been exceptional. The global exposure, regular industry interactions, and practical case studies have prepared me well for the corporate world. The placement support has been outstanding.</p>
                        </div>                    
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Roshni Gupta</h3>
                                    <span>M.Tech, Amity University</span>
                                </div>
                            </div>
                            <p>The research facilities and lab infrastructure at Amity are top-notch. The mentorship from experienced faculty and opportunities to work on cutting-edge projects have helped me develop both technical and practical skills.</p>
                        </div>                    
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Karan Singhania</h3>
                                    <span>BBA, Amity University</span>
                                </div>
                            </div>
                            <p>The vibrant campus life at Amity, combined with excellent academic programs, has made my university experience unforgettable. The emphasis on holistic development through cultural activities and sports has helped me grow personally and professionally.</p>
                        </div>                    
                    </li>
                    
                </ul>
        </div>
    </div>
  )
}

export default Testimonials