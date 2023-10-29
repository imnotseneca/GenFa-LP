import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  invoiceForm01,
  invoiceForm02,
  invoiceForm03,
  invoiceForm04,
} from "../assets";
import styles from "../style";

function Carousel() {
  const slides = [
    {
      id: 1,
      url: invoiceForm01,
      heading: "Step 1",
      paragraph: "Fill the invoice form.",
    },
    {
      id: 2,
      url: invoiceForm02,
      heading: "Step 2",
      paragraph: "Review the invoice data.",
    },
    {
      id: 3,
      url: invoiceForm03,
      heading: "Step 3",
      paragraph: "Download a PDF copy of the invoice.",
    },
    {
      id: 4,
      url: invoiceForm04,
      heading: "Step 4",
      paragraph: "Check and filter the records.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Add any logic you need when currentIndex changes
  }, [currentIndex]);

  return (
    <section id="product" className="block sm:flex flex-col justify-center items-center max-w-[1400px] w-full m-auto py-16 px-4 relative group sm:mt-0 lg:mt-[8em] lg:mb-[8em]">
      <p
        className={styles.paragraph}
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        Know how to
      </p>
      <h2 className={`${styles.heading2} mt-2 text-center`}>
        We got every step covered for you
      </h2>
      <img
        src={currentSlide.url}
        alt={currentSlide.heading}
        className="max-w-full h-auto sm:max-h-[700px] z-10 p-6"
      />

      {/* Left Arrow */}
      <div className="hidden lg:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-blue-gradient text-black cursor-pointer">
        <AiOutlineArrowLeft className="w-10" onClick={prevSlide} />
      </div>

      {/* Right Arrow */}
      <div className="hidden lg:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-blue-gradient text-black cursor-pointer">
        <AiOutlineArrowRight className="w-10" onClick={nextSlide} />
      </div>

      <div className="lg:hidden flex justify-between items-center py-2 gap-8">
        <div
          onClick={prevSlide}
          className="bg-blue-gradient text-black text-2xl cursor-pointer rounded-full p-1"
        >
          <AiOutlineArrowLeft className="w-10" />
        </div>
        <div
          onClick={nextSlide}
          className="bg-blue-gradient text-black text-2xl cursor-pointer rounded-full p-1"
        >
          <AiOutlineArrowRight className="w-10" />
        </div>
      </div>

      <div className="flex top-4 justify-center items-center text-center py-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`text-2xl cursor-pointer ${
              currentSlide.id === slide.id ? "active" : ""
            }`}
          >
            {currentSlide.id === slide.id && (
              <>
                <h3 className={`${styles.heading2} mt-1`}>{slide.heading}</h3>
                <p className={`${styles.paragraph} mt-1`}>{slide.paragraph}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
