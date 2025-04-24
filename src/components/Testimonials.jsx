import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from './clients';

function TestimonialSlide({ item }) {
  return (
    <div className="text-center px-4 pb-16"> {/* Add padding-bottom to avoid overlapping */}
      <img src={item.logo} alt={item.company} className="h-10 mx-auto mb-6" />
      <p className="text-gray-700 text-lg mb-6 px-2">{item.message}</p>
      <div className="flex items-center justify-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="font-bold">{item.name}</p>
          <p className="text-sm text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="page-width m-auto flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4 text-center section-heading">Testimonials</h2>
      <div className="flex justify-center py-8 px-4 w-full">
        <div className="w-full max-w-5xl min-h-[60vh] relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
            }}
            className="pb-12" // extra space for dots inside swiper container
          >
            {testimonials.map(renderTestimonialSlide)}
          </Swiper>

          {/* Remove custom pagination div if not using el: '.custom-pagination' */}
        </div>
      </div>
    </div>
  );
}

function renderTestimonialSlide(item, index) {
  return (
    <SwiperSlide key={index}>
      <TestimonialSlide item={item} />
    </SwiperSlide>
  );
}

export default Testimonials;
