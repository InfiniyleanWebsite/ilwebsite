import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-white w-full mb-0 py-4 text-black text-sm">
      <div className="w-[90%] m-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:basis-2/4 my-4">
            <Image
              src="./logo/footer-logo.svg"
              width="250"
              height="250"
              alt="brand logo"
              className="my-image-footer"
            />
            <div className="md:w-[80%] mt-6 flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <ImLocation className="min-w-[15px] mt-1 p-0" />
                <p>
                  6th Floor, NCC Building, Durgamma Cheruvu Road, Vittal Rao
                  Nagar, HITEC City, Hyderabad, Telangana 500081.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaEnvelope className="mt-1" />
                <p>info@infinitylearn.com</p>
              </div>

              <div className="flex flex-row gap-4">
                <FaPhoneAlt className="" />
                <p>+91 9999999999</p>
              </div>

              <div className="flex flex-row gap-4">
                <BsFillBuildingFill className="min-w-[12px] mt-1" />
                <p>Sri Chaitanya College Admission Enquiries 040-66060606</p>
              </div>

              <div className="flex flex-row gap-4">
                <BsFillBuildingFill className="min-w-[12px] mt-1" />
                <p>
                  Sri Chaitanya School Admission Enquiries 040-71045045 &
                  040-44600600 Ext 401, 402 & 425
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 mt-4">
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaTwitter size={30} />
              <FaPinterest size={30} />
              <FaYoutube size={30} />
            </div>
          </div>

          <div className="md:basis-2/4 mb-4 mt-6">
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl">
              Quick Links
            </h1>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-8 text-xs font-extralight mt-4">
                <div className="flex flex-col gap-3">
                  <Link href="https://infinitylearn.com/teacher">
                    <p>Become a Teacher</p>
                  </Link>
                  <p>Awards & Recognitions</p>
                  <Link href="https://infinitylearn.skillate.com/">
                    <p>Careers</p>
                  </Link>
                  <Link href="https://infinitylearn.com/about">
                    <p>About Us</p>
                  </Link>
                  <Link href="https://infinitylearn.com/life-at-infinitylearn">
                    <p>Life at Infinity Learn</p>
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <p>Scholarships</p>
                  <p>Study Material</p>
                  <Link href="https://infinitylearn.com/results">
                    <p>Our Results</p>
                  </Link>
                  <Link href="https://infinitylearn.com/leadership">
                    <p>Teams</p>
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <p>Courses</p>
                  <Link href="https://infinitylearn.com/surge/blog/">
                    <p>Blog</p>
                  </Link>
                  <p>News</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6">
          <h2 className="md:text-2xl sm:text-xl text-lg">Study Material</h2>
          <hr className="my-3 h-px border-0 bg-slate-500" />
          <div className="flex md:flex-row flex-col gap-2 justify-between text-md font-light">
            <div className="flex flex-col gap-1">
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/">
                NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/">
                NCERT Solutions for Class 12
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/maths/">
                NCERT Solutions for Class 12 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/biology/">
                NCERT Solutions for Class 12 Biology
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/physics/">
                NCERT Solutions for Class 12 Physics
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/chemistry/">
                NCERT Solutions for Class 12 Chemistry
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/">
                NCERT Solutions for Class 11
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/maths/">
                NCERT Solutions for Class 11 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/biology/">
                NCERT Solutions for Class 11 Biology
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/physics/">
                NCERT Solutions for Class 11 Physics
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/chemistry/">
                NCERT Solutions for Class 11 Chemistry
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-10/">
                NCERT Solutions for Class 10
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-10/maths/">
                NCERT Solutions for Class 10 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-10/english/">
                NCERT Solutions for Class 10 English
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-10/science/">
                NCERT Solutions for Class 10 Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-10/social-science/">
                NCERT Solutions for Class 10 Social Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-9/">
                NCERT Solutions for Class 9
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-9/maths/">
                NCERT Solutions for Class 9 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-9/english/">
                NCERT Solutions for Class 9 English
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-9/science/">
                NCERT Solutions for Class 9 Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-9/social-science/">
                NCERT Solutions for Class 9 Social Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-8/">
                NCERT Solutions for Class 8
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-8/maths/">
                NCERT Solutions for Class 8 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-8/english/">
                NCERT Solutions for Class 8 English
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-8/science/">
                NCERT Solutions for Class 8 Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-8/social-science/">
                NCERT Solutions for Class 8 Social Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-7/">
                NCERT Solutions for Class 7
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-7/maths/">
                NCERT Solutions for Class 7 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-7/english/">
                NCERT Solutions for Class 7 English
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-7/science/">
                NCERT Solutions for Class 7 Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-7/social-science/">
                NCERT Solutions for Class 7 Social Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-6/">
                NCERT Solutions for Class 6
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-6/maths/">
                NCERT Solutions for Class 6 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-6/english/">
                NCERT Solutions for Class 6 English
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-6/science/">
                NCERT Solutions for Class 6 Science
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-6/social-science/">
                NCERT Solutions for Class 6 Social Science
              </a>
            </div>
          </div>
        </div>

        <div className="my-6">
          <hr className="my-3 h-px border-0 bg-slate-500" />
          <div className="flex md:flex-row flex-col gap-2 justify-between text-md font-light">
            <div className="flex flex-col gap-1">
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/">
                NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-12/">
                NCERT Solutions for Class 12
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-12/maths/">
                NCERT Solutions for Class 12 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-12/biology/">
                NCERT Solutions for Class 12 Biology
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-12/physics/">
                NCERT Solutions for Class 12 Physics
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-12/chemistry/">
                NCERT Solutions for Class 12 Chemistry
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-11/">
                NCERT Solutions for Class 11
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-11/maths/">
                NCERT Solutions for Class 11 Maths
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-11/biology/">
                NCERT Solutions for Class 11 Biology
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-11/physics/">
                NCERT Solutions for Class 11 Physics
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-11/chemistry/">
                NCERT Solutions for Class 11 Chemistry
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-10/">
                NCERT Solutions for Class 10
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-10/maths/">
                NCERT Solutions for Class 10 Maths
              </a>
              <a href="">NCERT Solutions for Class 10 English</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-10/science/">
                NCERT Solutions for Class 10 Science
              </a>
              <a href="">NCERT Solutions for Class 10 Social Science</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-9/">
                NCERT Solutions for Class 9
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-9/maths/">
                NCERT Solutions for Class 9 Maths
              </a>
              <a href="">NCERT Solutions for Class 9 English</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-9/science/">
                NCERT Solutions for Class 9 Science
              </a>
              <a href="">NCERT Solutions for Class 9 Social Science</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-8/">
                NCERT Solutions for Class 8
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-8/maths/">
                NCERT Solutions for Class 8 Maths
              </a>
              <a href="">NCERT Solutions for Class 8 English</a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-8/science/">
                NCERT Solutions for Class 8 Science
              </a>
              <a href="">NCERT Solutions for Class 8 Social Science</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-7/">
                NCERT Solutions for Class 7
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-7/maths/">
                NCERT Solutions for Class 7 Maths
              </a>
              <a href="">NCERT Solutions for Class 7 English</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-7/science/">
                NCERT Solutions for Class 7 Science
              </a>
              <a href="">NCERT Solutions for Class 7 Social Science</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-6/">
                NCERT Solutions for Class 6
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-6/maths/">
                NCERT Solutions for Class 6 Maths
              </a>
              <a href="">NCERT Solutions for Class 6 English</a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-6/science/">
                NCERT Solutions for Class 6 Science
              </a>
              <a href="">NCERT Solutions for Class 6 Social Science</a>
            </div>
          </div>
        </div>
        <hr className="my-3 h-px border-0 bg-slate-500" />
        <p className="text-xs m-auto text-center font-extralight">
          Copyright &copy; 2021. All Rights Reserved 2021
        </p>
      </div>
    </div>
  );
}

export default Footer;
