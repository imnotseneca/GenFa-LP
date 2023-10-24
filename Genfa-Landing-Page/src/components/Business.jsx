/* eslint-disable react/prop-types */
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section} sm:mt-0 lg:mt-[12em]`}>
      <div className={layout.sectionInfo}>
        <p className={styles.paragraph} style={{textTransform: 'uppercase'}}>Know the benefits</p>
        <h2 className={styles.heading2}>
          We can handle <br className="sm:block hidden" /> your invoices records.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Imagine the convenience of having all your invoicing tasks centralized in one digital platform. GenFa not only expedites the process but also enhances accuracy. The intuitive UI makes it easy for businesses to navigate through various features, empowering them to focus on core activities.
        </p>
        <Button styles="mt-10" text="Start now!" />
      </div>
      <div className={`${layout.sectionImg} flex-col max-w-lg`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
      </div>
    </section>
  );
};

export default Business;
