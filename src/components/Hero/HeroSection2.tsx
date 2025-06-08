import { Button } from '@/components/ui/button';
import farmerImage from '@/assets/pexels-joseph-k-masonda-2562214-13042951.jpg'
import backgroundImages from '@/assets/grain images 114.png'


const HeroSection2 = () => {
  return (
    <div>
      <section className={`bg-bgSecondary px-4 py-8 md:py-[137px] md:px-[127px] bg-repeat`} style={{ backgroundImage: `url(${backgroundImages})` }}>
        <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-md p-6 md:p-12 grid md:grid-cols-2 gap-8">
          <img
            src={farmerImage}
            alt="Farmer holding corn"
            className="rounded-md w-full h-auto object-cover"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              What the Village Market does.
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, connects.</li>
              <li>Lorem ipsum dolor sit amet, connects.</li>
              <li>Lorem ipsum dolor sit amet, connects.</li>
              <li>Lorem ipsum dolor sit amet, connects.</li>
            </ul>
            <Button className="mt-6 w-fit bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection2