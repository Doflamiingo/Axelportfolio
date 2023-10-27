import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, dui eget faucibus varius, odio arcu euismod sapien.",
      name: "Client 1",
      image: "../../../public/avatar.png", // Ajoutez le chemin de l'image du client
    },
    {
      id: 2,
      text: "Pellentesque vel bibendum elit. Donec tincidunt, dolor nec hendrerit consectetur, justo urna facilisis risus.",
      name: "Client 2",
      image: "/client2.jpg", // Ajoutez le chemin de l'image du client
    },
    {
      id: 3,
      text: "Sed eget tristique risus. Phasellus nec justo dolor. Aenean congue, urna quis tempus sagittis.",
      name: "Client 3",
      image: "/client3.jpg", // Ajoutez le chemin de l'image du client
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-12 ">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Témoignages de clients
        </h1>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-center mb-4">
                <img
                  src={testimonial.image}
                  alt="Image du client"
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
              </div>
              <p className="text-gray-600 text-center text-lg mb-2">
                <img
                  src="/quote.png"
                  alt="Citation"
                  className="w-6 h-6 inline-block mr-2"
                />
                {testimonial.text}
              </p>
              <p className="text-indigo-600 font-semibold text-center mt-4">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
