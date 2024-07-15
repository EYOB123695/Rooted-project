import styles from '../style';
import { imagesix } from '../assets';

const Testimonials = () => (
  <div className="text-center text-white py-10">
    <h2 className="text-4xl font-bold">
      TESTIMONIAL
    </h2>
    <p className="mt-4 mb-5 text-2xl font-semibold">
      Read What Others<br />Have To Say
    </p>
    <div className="flex justify-center mt-10 space-x-8">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="relative bg-[#13124F] rounded-lg p-8 w-96 text-center mb-8">
          <img src={imagesix} alt="testimonial" className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 rounded-full" />
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-2">Feven</h3>
            <p className="text-sm">
              This platform helps me to explore investment opportunities easily and invest in them.
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-[#9091DC] rounded-lg p-8 mx-auto mt-10" style={{ width: '1063px', height: '402px' }}>
      <h3 className="text-black text-[20px] font-roboto font-bold mb-2">Are you ready?</h3>
      <p className="text-white text-[50px] font-roboto font-bold mt-4">
        Be part of the <br/>next big thing.
      </p>
    </div>
  </div>
);

export default Testimonials;
