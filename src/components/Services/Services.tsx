
const Services = () => {
  return (
    <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                image: '/images/service1.jpg',
                text: 'Connecting local farmers to a global market.'
              },
              {
                image: '/images/service2.jpg',
                text: 'Purchase and sale of crops and livestock.'
              },
              {
                image: '/images/service3.jpg',
                text: 'Storage of farm produce at safe and convenient locations.'
              },
              {
                image: '/images/service4.jpg',
                text: 'Connecting storage owners to farmers and buyers.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl overflow-hidden p-4 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services