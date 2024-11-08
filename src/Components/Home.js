import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import user from "./Images/image.png";
import { FaEye, FaHeadset, FaHeart, FaLock, FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import SearchSuggestions from './SearchSuggestions';
import { googleBooksApi } from '../utils/api';

const Home = () => {
  const swiperOptionsOne = {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
    },
    loop:true,
  };

  const swiperOptionsTwo = {
    breakpoints: {
      0: {
        slidesPerView:1,
        spaceBetween:10,
      },
      450: {
        slidesPerView:2,
        spaceBetween:10,
      },
      768: {
        slidesPerView:3,
        spaceBetween:10,
      },
      1024: {
        slidesPerView:4,
      },
    },
    loop:true,
    centeredSlides:true,
    spaceBetween:10,
  };

  const swiperOptionsThree = {
    breakpoints: {
      0: {
        slidesPerView:1,
        spaceBetween:10,
      },
      450: {
        slidesPerView:2,
        spaceBetween:10,
      },
      768: {
        slidesPerView:3,
        spaceBetween:10,
      },
      1024: {
        slidesPerView:3,
      },
    },
    loop:true,
    centeredSlides:true,
    spaceBetween:10,
  };

  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
        try {
            const response = await googleBooksApi.getFeaturedBooks();
            setFeaturedBooks(response.data.items || []);
        } catch (error) {
            console.error('Error fetching featured books:', error);
            setFeaturedBooks([]);
        }
    };

    fetchFeaturedBooks();
  }, []);

  return (
    <div className='home-containber'>
        <Navbar />

        <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <h3>upto 55% offers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente eos quisquam voluptatibus, cum quod.</p>
                    <a href="\#" className="btn">shop now</a>
                </div>
                <div className='swiper'>
                    <Swiper
                        watchSlidesProgress={true}
                        slidesPerView={3}
                        autoplay={{
                            delay: 9500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="book-list"
                        {...swiperOptionsOne}
                    >

                        <Link to="/book" className="swiper-slide">
                            <SwiperSlide><img src="/image/book-1.png" alt=""  /></SwiperSlide>
                        </Link>
                        <Link to="/book" className="swiper-slide">
                            <SwiperSlide><img src="/image/book-2.png" alt=""  /></SwiperSlide>
                        </Link>
                        <Link to="/book" className="swiper-slide">
                            <SwiperSlide><img src="/image/book-3.png" alt=""  /></SwiperSlide>
                        </Link>
                        <Link to="/book" className="swiper-slide">
                            <SwiperSlide><img src="/image/book-4.png" alt=""  /></SwiperSlide>
                        </Link>
                        <Link to="/book" className="swiper-slide">
                            <SwiperSlide><img src="/image/book-5.png" alt=""  /></SwiperSlide>
                        </Link>
                        <Link to="/book" className="swiper-slide">
                            <SwiperSlide><img src="/image/book-6.png" alt=""  /></SwiperSlide>
                        </Link>
                    </Swiper>
                    <img className="stand" src="/images/stand.png" alt="" />
                </div>
            </div>
        </section>

        <section className="featured" id="featured">
            <div className="heading" style={{marginTop:"50px", marginBottom:"50px"}}>
                <span>featured books</span>
            </div>
            <div className="swiper">
                <Swiper
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="featured-slider"
                    {...swiperOptionsTwo}
                >
                    {featuredBooks?.map((book) => (
                        <SwiperSlide key={book.id}>
                            <div className="box">
                                <div className="icons">
                                    <Link to={`/book/${book.id}`}><FaSearch /></Link>
                                    <Link to="/Components/ReadingList"><FaHeart /></Link>
                                    <Link to={`/book/${book.id}`}><FaEye /></Link>
                                </div>
                                <div className="image">
                                    <img
                                        src={book.volumeInfo?.imageLinks?.thumbnail || '/image/book-1.png'}
                                        alt={book.volumeInfo?.title}
                                        onError={(e) => {
                                            e.target.src = '/image/book-1.png';
                                        }}
                                    />
                                </div>
                                <div className="content">
                                    <h3>{book.volumeInfo?.title}</h3>
                                    <div className="price">$15.99 <span>$20.99</span></div>
                                    <Link to={`/booksrental/${book.id}`} className="btn">
                                        Rent Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

        <section className="newsletter">
            <form action="">
                <h3>subscribe for latest update</h3>
                <input type="email" placeholder='enter your email' className='box' />
                <input type="submit" value="subscribe" className='btn' />
            </form>
        </section>

        <section className="arrivals" id='arrivals'>
            <div className="heading" style={{marginTop:"50px", marginBottom:"50px"}}><span>New Arrivals</span></div>
            <div className="swiper">
                <Swiper
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="arrivals-slider"
                    {...swiperOptionsThree}
                >

                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-1.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-2.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-3.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-4.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-5.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                </ Swiper>
            </div>

            <div className="swiper">
                <Swiper
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="arrivals-slider"
                    {...swiperOptionsThree}
                >

                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-1.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-2.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-3.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-4.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="/image/book-5.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99 <span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                </ Swiper>
            </div>
        </section>

        <section className='deal'>
            <div className="content">
                <h3>deal of the day</h3>
                <h1>upto 50% offers</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure accusantium nisi minus ipsum porro.
                </p>
                <a href="\#" className='btn'>shop now</a>
            </div>
            <div className="image">
                <img src="/image/deal-img.jpg" alt="" />
            </div>
        </section>

        <section className="reviews" id='reviews'>
            <h1 className='heading' style={{marginTop:"50px", marginBottom:"50px"}}><span>Client Reviews</span></h1>

            <div className="swiper">
            <Swiper
                watchSlidesProgress={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="reviews-slider"
                {...swiperOptionsThree}
            >
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </section>

        <section className="blogs" id="blogs">
            <h1 className='heading' style={{marginTop:"50px", marginBottom:"50px"}}><span>Our Community Feed</span></h1>

            <div className="swiper">
                <Swiper
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="blogs-slider"
                    {...swiperOptionsThree}
                >
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="/image/blog-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="/image/blog-2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="/image/blog-3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="/image/blog-4.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>

        </section>

        <section className="footer" style={{background:"whitesmoke"}}>
            <div className="box-container">
                <div className="box">
                    <h3>Website Links</h3>
                    <Link to="/Components/Home"><i><FaMapMarkedAlt /></i>Home</Link>
                    <Link to="/book"><i><FaMapMarkedAlt /></i>Search Books</Link>
                    <Link to="/booksrental/:key"><i><FaMapMarkedAlt /></i>Rent Books</Link>
                    <Link to="/tablereservation/:key"><i><FaMapMarkedAlt /></i>Reading Session Reservation</Link>
                </div>
                <div className="box">
                    <h3>User Links</h3>
                    <Link to="/Components/Profile"><i><FaMapMarkedAlt /></i>User Profile Page</Link>
                    <Link to="/Components/ReadingList"><i><FaMapMarkedAlt /></i>Reading List</Link>
                    <Link to="/Components/Profile"><i><FaMapMarkedAlt /></i>Books Rental History</Link>
                    <Link to="/Components/Profile"><i><FaMapMarkedAlt /></i>Table Reservation History</Link>
                </div>
                <div className="box">
                    <h3>Login and Logout</h3>
                    <Link to="/"><i><FaMapMarkedAlt /></i>Login</Link>
                    <Link to="/Components/Logout"><i><FaMapMarkedAlt /></i>Logout</Link>
                </div>
                <div className="box">
                    <h3>Contact Information</h3>
                    <a href="#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="#"><i><FaEnvelope /></i>cosc671@yahoo.com</a>
                    <img src="/image/worldmap.png" alt="" className='map' />
                </div>
            </div>
            <div className="credit">Created for COSC 617. All rights are reserved.</div>
        </section>

    </div>
  )
}

export default Home
