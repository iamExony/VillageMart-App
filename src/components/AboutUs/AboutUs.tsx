import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="bg-green-700 text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Leaf pattern background optional */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Text + Image */}
        <div>
          <Button variant="secondary" className="mb-4 text-green-700 font-semibold rounded-full px-4 py-1">
            Discover about us
          </Button>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bringing the local market <br /> to the world
          </h2>

          <p className="text-white/90 mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <img
            src="https://via.placeholder.com/500x300"
            alt="Local market"
            className="rounded-xl shadow-lg mt-4"
          />
        </div>

        {/* Right Column: Info Cards */}
        <div className="space-y-4">
          {[
            { num: "01", title: "Who are we?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { num: "02", title: "What we do?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { num: "03", title: "Who are we?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          ].map((item) => (
            <Card key={item.num} className="bg-white rounded-xl">
              <CardContent className="flex items-start space-x-4 p-4">
                <div className="text-green-700 font-bold text-lg">{item.num}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;