import { Button } from '@/components/ui/button';
import farmerImage from '@/assets/pexels-joseph-k-masonda-2562214-13042951.jpg'
import backgroundImages from '@/assets/grain images 114.png'
import { FaCheckCircle } from "react-icons/fa";
import { ImArrowUpRight2 } from 'react-icons/im';


const HeroSection2 = () => {
  return (
    <div>
      <section className={`bg-bgSecondary px-4 py-8 md:py-[137px] md:px-[127px] bg-repeat`} style={{ backgroundImage: `url(${backgroundImages})` }}>
        <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-md p-6 md:p-12 grid md:grid-cols-2 gap-8">
          <img
            src={farmerImage}
            alt="Farmer holding corn"
            className="md:rounded-4xl rounded-2xl w-full h-auto object-cover"
          />

          <div className="flex flex-col justify-center md:px-[77px] px-4">
            <h2 className="text-2xl md:text-2xl font-signika  mb-4 text-darkGreen">
              What the Village Market does.
            </h2>
            <p className='mb-8 text-[16px] text-grayColor '>What the Village Market does Lorem ipsum dolor sit amet, consecte.</p>
            <ul className="space-y-3 text-grayColor text-[16px] flex flex-col gap-4">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-bgSecondary" />
                <span>Lorem ipsum dolor sit amet, connects.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-bgSecondary" />
                <span>Lorem ipsum dolor sit amet, connects.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-bgSecondary" />
                <span>Lorem ipsum dolor sit amet, connects.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-bgSecondary" />
                <span>Lorem ipsum dolor sit amet, connects.</span>
              </li>
            </ul>
            <Button className="bg-bgPrimary mt-8 hover:bg-bgSecondary hover:text-darkGreen text-white px-6 py-2 rounded-[20px] mb-8 md:w-[136.42px] md:h-[54px] cursor-pointer">
              Get started <ImArrowUpRight2 />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection2