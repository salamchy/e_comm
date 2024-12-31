import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>An eCommerce site is an online platform where businesses sell products or services directly to customers. It offers features like product catalogs, search functionality, secure payment gateways, and seamless navigation. Customers benefit from convenience, diverse options, personalized recommendations, and efficient delivery. Businesses leverage eCommerce sites to reach global audiences, boost sales, and provide a 24/7 shopping experience.</p>
          <p>ECommerce, or electronic commerce, is the buying and selling of goods and services online. It offers convenience, global reach, secure payments, and personalized experiences. Businesses leverage eCommerce to expand markets, enhance efficiency, and meet evolving customer expectations.</p>

          <b className="text-gray-800">Our Misssion</b>
          <p>Our mission is to revolutionize E-commerce by delivering seamless, personalized shopping experiences, fostering trust, and empowering customers with innovative solutions, quality products, and exceptional service to enhance lives and build lasting connections worldwide.</p>

        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">We ensures products or services meet defined continuous improvement, fostering reliability, customer satisfaction.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">It means easy access to diverse products, seamless navigation, quick checkout, multiple payment options.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique voluptate nemo atque vitae quidem cumque culpa aut.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}
export default About