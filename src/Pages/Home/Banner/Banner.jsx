import ban1 from '../../../assets/images/banner/1.jpg'
import ban2 from '../../../assets/images/banner/2.jpg'
import ban3 from '../../../assets/images/banner/3.jpg'
import ban4 from '../../../assets/images/banner/4.jpg'
import ban5 from '../../../assets/images/banner/5.jpg'
import ban6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={ban1} className="w-full" />
                <div className="absolute flex items-center h-full w-full left-0 top bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white space-y-7">
                    <div className='space-y-7 pl-10 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle me-5">❮</a>
                    <a href="#slide2" className="btn btn-circle ms-5">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={ban2} className="w-full" />
                <div className="absolute flex items-center h-full w-full left-0 top bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white space-y-7">
                    <div className='space-y-7 pl-10 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle ms-5">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={ban3} className="w-full" />
                <div className="absolute flex items-center h-full w-full left-0 top bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white space-y-7">
                    <div className='space-y-7 pl-10 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle ms-5">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={ban4} className="w-full" />
                <div className="absolute flex items-center h-full w-full left-0 top bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white space-y-7">
                    <div className='space-y-7 pl-10 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle ms-5">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={ban5} className="w-full" />
                <div className="absolute flex items-center h-full w-full left-0 top bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white space-y-7">
                    <div className='space-y-7 pl-10 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle ms-5">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={ban6} className="w-full" />
                <div className="absolute flex items-center h-full w-full left-0 top bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white space-y-7">
                    <div className='space-y-7 pl-10 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle ms-5">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;