import styles from "../style";
import { discount, invoiceForm } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount logo"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">20%</span> Discount for{" "}
            <span>1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Your Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Invoice</span> Generator.
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Seamlessly generate, record, and download professional invoices with
          ease. Say goodbye to cumbersome paperwork and embrace a streamlined
          invoicing solution tailored for your business needs.
        </p>
        <div className="ss:flex md:mr-4 mr-0 w-full sm:w-8/12">
          <Button styles="mt-10 w-full sm:w-8/12" text="Book a free discovery test" />
        </div>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={invoiceForm}
          alt="billing"
          className="md:block hidden max-w-sm h-[100%] z-index[10] p-6"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[2] w-[80%] h-[85%] rounded-full bottom-40  white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] -right-40 top-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
