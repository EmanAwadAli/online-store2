import { Link } from "@mongez/react-router";
import { stickyNavAtom } from "../../atoms/sticky-nav-atom";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { LuMouse } from "react-icons/lu";
import { FiHardDrive } from "react-icons/fi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { FaTv } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { TbWashMachine } from "react-icons/tb";
import OverLay from "apps/front-office/design-system/components/OverLay";
import { trans } from "@mongez/localization";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import banner from "assets/images/banners/banner4.jpg"

export default function HeaderStickyNav() {
  const opened = stickyNavAtom.useValue();
  const linkIconStyle = "text-2xl flex-0";
  const categories = [
    {
      id: 1,
      name: "Laptops, Tablets & PCs",
      icon: <BsLaptop className={linkIconStyle} />,
      link: "/",
      subCategories: [
        {
          id: 11,
          name: "Laptops",
          link: "/",
          subCategories: [
            {
              id: 111,
              name: "Apple MacBook",
              link: "/",
            },
            {
              id: 112,
              name: "Business Laptop",
              link: "/",
            },
            {
              id: 113,
              name: "Gaming Laptop",
              link: "/",
            },
            {
              id: 114,
              name: "Ultrabook",
              link: "/",
            }
          ]
        },
        {
          id: 12,
          name: "Laptops",
          link: "/",
          subCategories: [
            {
              id: 121,
              name: "Apple MacBook",
              link: "/",
            },
            {
              id: 122,
              name: "Business Laptop",
              link: "/",
            },
            {
              id: 123,
              name: "Gaming Laptop",
              link: "/",
            },
            {
              id: 124,
              name: "Ultrabook",
              link: "/",
            }
          ]
        }
      ],
      banner: banner
    },
    {
      id: 2,
      name: "Computer & Office",
      icon: <LuMouse className={linkIconStyle} />,
      link: "/"
    },
    {
      id: 3,
      name: "Hardware & Components",
      icon: <FiHardDrive className={linkIconStyle} />,
      link: "/"
    },
    {
      id: 4,
      name: "Smartphones",
      icon: <MdOutlinePhonelinkRing className={linkIconStyle} />,
      link: "/"
    },
    {
      id: 5,
      name: "Games & Entertainment",
      icon: <LuGamepad2 className={linkIconStyle} />,
      link: "/"
    },
    {
      id: 6,
      name: "TV & Hi-Fi",
      icon: <FaTv className={linkIconStyle} />,
      link: "/"
    },
    {
      id: 7,
      name: "Photo & Video",
      icon: <MdOutlinePhotoCamera className={linkIconStyle} />,
      link: "/"
    },
    {
      id: 8,
      name: "Home Appliance",
      icon: <TbWashMachine className={linkIconStyle} />,
      link: "/"
    }
  ]

  return (
   <>
    <div className={`sticky-side-nav flex flex-col gap-6 h-full py-5 bg-white fixed top-0 left-0 ${ opened.opened ? "w-[300px]" : "w-[60px]"} z-20 shadow-lg overflow-hidden hover:overflow-visible transition-all duration-500 ease-in-out`}
      onMouseEnter={stickyNavAtom.open}
      onMouseLeave={stickyNavAtom.close}
    >
      <span className={`flex flex-0 items-center justify-start h-11 mx-[8px] px-[9px] gap-2 relative rounded-full  bg-primary text-white transition-all duration-500 ease-in-out`}>
        <HiOutlineBars3BottomLeft className="w-[28px] flex-0 text-3xl"/>
        <span className={`text-sm font-medium ${ opened.opened ? "opacity-100" : "opacity-0"} transition-all duration-500 ease`}>{trans("categories")}</span>
      </span>
      <ul className="flex flex-col gap-6 mx-[18px]">
        {
          categories.map(category => {
            return (
              <li className="group" key={category.id}>
                <Link to={category.link} className={`flex items-center gap-2 text-sm font-medium ${ opened.opened ? "w-auto" : "w-[24px]"}`}>{category.icon}<span className={`flex items-center mt-[4px] font-medium whitespace-nowrap group-hover:text-primary  origin-left  ${ opened.opened ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"} transition-all duration-500 ease-in-out`}>{category.name}</span> {category.subCategories ? <MdOutlineKeyboardArrowRight className="ml-auto mt-[4px] text-lg text-gray-300"/> : ""} </Link>
                {category.subCategories ?
                  <ul className="sub-menu absolute top-0 left-full w-[300px] h-full px-5 pt-4 bg-white border-l border-gray-200 transform scale-x-0 origin-left opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      {
                        category.subCategories?.map(subCategory => {
                          return (
                            <li className="border-b border-gray-200 last:border-0 py-5" key={subCategory.id}>
                              <Link to={subCategory.link} className="block text-sm uppercase font-medium mb-2 hover:text-primary transition-all duration-500 ease-in-out" >{subCategory.name}</Link>
                              <ul className="subcategory-menu">
                                {
                                  subCategory.subCategories?.map(category => {
                                    return (
                                      <li className="mb-1" key={category.id}><Link to={category.link} className="text-sm font-medium text-gray-500 hover:text-primary transition-all duration-500 ease-in-out">{category.name}</Link></li>
                                    )
                                  })
                                }
                              </ul>
                            </li>
                          )
                        })
                      }
                      {
                        category.banner ?
                          <Link to={category.link} className="group/banner block rounded-lg overflow-hidden w-full h-[400px]">
                            <img src={banner} className="w-full h-full object-cover group-hover/banner:scale-110 transition-all duration-500 ease-in-out" alt={category.name} />
                          </Link>
                        : ""
                      }
                  </ul>
                : ""}
              </li>
            )
          })
        }
      </ul>
    </div>
    <OverLay atom={stickyNavAtom}></OverLay>
    </>
  );
}
