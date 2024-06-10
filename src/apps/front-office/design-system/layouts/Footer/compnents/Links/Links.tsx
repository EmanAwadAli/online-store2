import { Link } from "@mongez/react-router";
import { group } from "console";
import FooterHeading from "../FooterHeading";

const FooterLinks = [
  {
    heading: "Categories",
    linksList: [
      {
        title: "Smartphones",
        url: "/"
      },
      {
        title: "Laptops",
        url: "/"
      },
      {
        title: "Hardware",
        url: "/"
      },
      {
        title: "Cameras",
        url: "/"
      },
      {
        title: "Headphones",
        url: "/"
      },
      {
        title: "Bathroom",
        url: "/"
      }
    ]
  },
  {
    heading: "Useful Links",
    linksList: [
      {
        title: "Promotions",
        url: "/"
      },
      {
        title: "Stores",
        url: "/"
      },
      {
        title: "Our Contacts",
        url: "/"
      },
      {
        title: "Delivery & Return",
        url: "/"
      },
      {
        title: "Outlet",
        url: "/"
      }
    ]
  },
  {
    heading: "Other Links",
    linksList: [
      {
        title: "Blog",
        url: "/"
      },
      {
        title: "Our Contacts",
        url: "/"
      },
      {
        title: "Promotions",
        url: "/"
      },
      {
        title: "Stores",
        url: "/"
      },
      {
        title: "Delivery & Return",
        url: "/"
      }
    ]
  }
]
export default function Links() {
  return (
    <div className="footer-links grid grid-cols-3 gap-4 col-span-2">
      {
        FooterLinks.map((group, index) => {
          return (
            <div key={index}>
              <FooterHeading title={group.heading}/>
              <ul className="flex flex-col gap-2">
                {
                  group.linksList.map((link, index) => {
                    return (
                      <li><Link to={link.url} className="text-sm text-gray-400 hover:text-primary capitalize transition-all duration-500 ease-in-out">{link.title}</Link></li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}
