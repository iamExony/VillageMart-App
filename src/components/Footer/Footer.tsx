import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircleMore,
} from "lucide-react"; // Or use appropriate icons

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-20 py-12 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left: Brand and Social */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Village Market</h2>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <div className="flex space-x-4 text-green-700">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <MessageCircleMore className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Middle: Links and Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Lorem ipsum dolor sit amet.</h3>
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-medium mb-1">Need help?</p>
              <p className="text-gray-600">FQA</p>
              <p className="text-gray-600">Contact us</p>
            </div>
            <div>
              <p className="font-medium mb-1">Get in touch</p>
              <p className="text-gray-600">6391 Elgin St. Celina, Delaware 10299</p>
              <p className="text-gray-600">(480) 555-0103</p>
              <p className="text-gray-600">contact@example.com</p>
            </div>
          </div>
        </div>

        {/* Right: Payment Options */}
        <div>
          <p className="font-medium mb-2">Pay with</p>
          <div className="flex items-center space-x-4">
            <img src="/visa-logo.png" alt="Visa" className="h-6" />
            <img src="/mastercard-logo.png" alt="MasterCard" className="h-6" />
            <img src="/bank-transfer.png" alt="Bank Transfer" className="h-6" />
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <div className="text-center text-sm text-gray-600">
        © Village Market 2024. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
