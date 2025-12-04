import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../css/skills.css'
import { skills }  from '../data/skills.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default function Skills(){

    return(
        <section id="skills">

            <div className="section-header">
                <h2>&lt;Skills&gt;</h2>
            </div>

            <div className="section-body swipe-element">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            centeredSlides: false,
                            autoplay: false,
                            pagination: false,
                            loop: false,
                            allowTouchMove: false,
                        },
                    }}
                    className="skills-swiper"
                >
                    {skills.map(category => (
                        <SwiperSlide key={category.id}>
                            <div className="slide-content">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <div className="skill-items">
                                    {category.skills.map(skill => (
                                        <div key={skill.name} className="skill-item">
                                            <i className={skill.icon}></i>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}