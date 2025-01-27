import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './services.css';

const services = [
  {
    title: "Advertising",
    description:
      "Advertising consists of all activities involved in presenting to a group a non-personal, oral or visual, openly sponsored identified message regarding a product, service, or idea. The message, called an advertisement, is disseminated through one or more media and is paid for by the identified sponsor.”-William Stanton.",
    image: "image/advertising.png",
  },
  {
    title: "Banking",
    description: "Learn more about our banking services.",
    image: "image/banking.jpeg",
  },
  {
    title: "Cards",
    description: "Explore our card services.",
    image: "image/cards.jpeg",
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our digital marketing solutions.",
    image: "public/slider1.jpg",
  },
  {
    title: "Gift T-shirt Printing",
    description: "Get customized gift t-shirts printed with your designs.",
    image: "image/gift.jpeg",
  },
  {
    title: "Franchise",
    description: "Learn about our franchise opportunities.",
    image: "image/franchise.jpeg",
  },
  // Add other services here...
];

const App = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (service) => {
    setModalData(service);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-600 truncate">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={modalData.image}
              alt={modalData.title}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{modalData.title}</h2>
              <p className="text-gray-700">{modalData.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
