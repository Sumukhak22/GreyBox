import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { useState } from "react";
import ContactFormPopup from "./ContactFormPopup"; // Import the contact form popup

const Collaboration = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  const openPopup = () => {
    setIsPopupOpen(true); // Open popup when "Try it now" is clicked
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close popup
  };

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h3 className="h2 mb-4 md:mb-8">We provide the best services</h3>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button onClick={openPopup}>Try it now</Button> {/* Added onClick to open popup */}
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[30rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-100 md:scale-100">
            {/* Adjusted the sizes to wrap tightly */}
            <div className="flex w-[18rem] aspect-square m-auto border border-n-6 rounded-full">
              {/* Reduced padding to remove the gap */}
              <div className="w-[12rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={300} // Increase the logo size slightly
                    height={220}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>

      {/* Contact Form Popup */}
      <ContactFormPopup isOpen={isPopupOpen} onClose={closePopup} /> {/* Popup component */}
    </Section>
  );
};

export default Collaboration;
