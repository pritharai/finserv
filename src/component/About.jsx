import Couple3 from "../assets/couple3.avif";
import { Button } from "@mui/material";

const About = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-10 lg:px-20 py-12">
      {/* Text Section */}
      <div className="flex-1 mb-10 lg:mb-0 lg:mr-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-700">
          Know Your Policies
        </h1>
        <p className="text-base sm:text-lg mb-8 text-gray-600 leading-relaxed">
          At VSP FinSserv, we believe that financial well-being is the
          foundation of a secure and happy life. As a trusted provider of mutual
          fund investment & insurance solutions, our mission is to empower
          individuals, families, and businesses to make confident financial
          decisions—today and for the future. With a team of our experts in
          their field, we offer a wide range of products tailored to every life
          stage and goal—from wealth creation and retirement planning to
          protection and risk management. Our mutual fund options are carefully
          curated to align with your risk appetite and growth aspirations, while
          our insurance solutions offer peace of mind when you need it most.
        </p>
        <Button variant="outlined" sx={{ mr: 2 }} href="/Aboutus">
          Read More
        </Button>
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full">
        <img
          className="w-full h-auto object-cover rounded-md"
          src={Couple3}
          alt="Happy Couple"
        />
      </div>
    </div>
  );
};

export default About;
