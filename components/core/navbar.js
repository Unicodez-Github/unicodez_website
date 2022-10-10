import { Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XIcon,
  ViewGridAddIcon,
  BriefcaseIcon,
  CubeTransparentIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Logo from "./logo";
import { classNames } from "../../lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

const about = [
  {
    name: "Our Story",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/about",
    icon: ChartBarIcon,
  },
  {
    name: "The Team",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/about/team",
    icon: ViewGridAddIcon,
  },
  {
    name: "Our Clients",
    description: "Your customers' data will be safe and secure.",
    href: "/about/clients",
    icon: ShieldCheckIcon,
  },
];

const services = [
  {
    name: "What We Offer",
    href: "/services",
  },
  {
    name: "Custom Software Development",
    href: "/services/custom-software",
  },
  {
    name: "Blockchain Development",
    href: "/services/blockchain",
  },
  {
    name: "Enterprise Software Solutions",
    href: "/services/enterprise-software",
  },
  {
    name: "Production Support & Maintenance",
    href: "/services/production-support-maintenance",
  },
  {
    name: "Mobile Application Development ",
    href: "/services/mobile-applications",
  },
  {
    name: "Cloud Software Solutions",
    href: "/services/cloud-solutions",
  },
];

const products = [
  {
    name: "Products Brief",
    href: "/products",
  },
  {
    name: "Meetchess",
    href: "/products/meetchess",
  },
  {
    name: "Meetup",
    href: "#",
  },
  {
    name: "Unistack",
    href: "/products/unistack",
  },
  {
    name: "InvoiceX",
    href: "#",
  },
  {
    name: "Smart Checkout",
    href: "/products/smartcheckout",
  },
];

const mobileNav = [
  {
    name: "About us",
    href: "/about",
    icon: ViewGridAddIcon,
    children: true,
    childrenMenuId: about,
  },
  {
    name: "Services",
    href: "/services",
    icon: CubeTransparentIcon,
  },
  {
    name: "Products",
    description: "Your customers' data will be safe and secure.",
    href: "/products",
    icon: BriefcaseIcon,
    children: true,
    childrenMenuId: products,
  },
  {
    name: "Contact us",
    description: "Your customers' data will be safe and secure.",
    href: "/contact",
    icon: PhoneIcon,
  },
];

const callsToAction = [
  { name: "Contact Sales", href: "/contact", icon: PhoneIcon },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <Popover className="relative">
      {/* Desktop Navbar */}
      <div className="container">
        <div className="flex justify-between items-center py-6  md:space-x-10">
          <div className="flex justify-start">
            <Link href="/">
              <span className="cursor-pointer">
                <span className="sr-only">Unicodez</span>
                <Logo />
              </span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-unicodez-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-unicodez-dark shadow-sm">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden lg:flex justify-center space-x-14"
          >
            <Link href="/">
              <span
                className={`text-lg font-medium cursor-pointer ${
                  router.pathname === "/"
                    ? "text-unicodez-blue"
                    : "text-unicodez-dark"
                }`}
              >
                Home
              </span>
            </Link>
            {/* About Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open || router.pathname.includes("/about")
                        ? "text-unicodez-blue"
                        : "text-unicodez-blueDark",
                      "group inline-flex items-center text-lg font-medium hover:text-unicodez-blue focus-visible:ring-0"
                    )}
                  >
                    <span>About</span>
                    <ChevronDownIcon
                      className={classNames(
                        open || router.pathname.includes("/about")
                          ? "text-unicodez-blue"
                          : "text-unicodez-blueDark",
                        "ml-2 h-5 w-5 group-hover:text-unicodez-blue"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-unicodez-blueDark ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {about.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-unicodez-blue"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-unicodez-blueDark">
                                    {item.name}
                                  </p>
                                  {/* <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p> */}
                                </div>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link href={item.href}>
                                <span className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-unicodez-blueDark hover:bg-gray-100 cursor-pointer">
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Services Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open || router.pathname.includes("/services")
                        ? "text-unicodez-blue"
                        : "text-unicodez-blueDark",
                      "group inline-flex items-center text-lg font-medium hover:text-unicodez-blue"
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open || router.pathname.includes("/services")
                          ? "text-unicodez-blue"
                          : "text-unicodez-blueDark",
                        "ml-2 h-5 w-5 group-hover:text-unicodez-blue"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-unicodez-blueDark ring-opacity-5 overflow-hidden">
                        <div className="relative grid grid-cols-2 bg-white px-5 py-6">
                          {services.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <span className="p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                                <p className="text-base font-medium text-unicodez-blueDark">
                                  {item.name}
                                </p>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Products Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open || router.pathname.includes("/products")
                        ? "text-unicodez-blue"
                        : "text-unicodez-blueDark",
                      "group inline-flex items-center text-lg font-medium hover:text-unicodez-blue"
                    )}
                  >
                    <span>Products</span>
                    <ChevronDownIcon
                      className={classNames(
                        open || router.pathname.includes("/products")
                          ? "text-unicodez-blue"
                          : "text-unicodez-blueDark",
                        "ml-2 h-5 w-5 group-hover:text-unicodez-blue"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-unicodez-blueDark ring-opacity-5 overflow-hidden">
                        <div className="relative grid grid-cols-2 bg-white px-5 py-6">
                          {products.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <span className="p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                                <p className="text-base font-medium text-unicodez-blueDark">
                                  {item.name}
                                </p>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {/* <Link href="/careers">
              <span className="text-lg font-medium text-unicodez-blueDark hover:text-unicodez-blue cursor-pointer">
                Careers
              </span>
            </Link> */}
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end md:gap-8">
            <Link href="/contact">
              <button className="button primary normal">Contact Us</button>
            </Link>
            <a
              href="https://unistack.herokuapp.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="button dark normal">Employee Login</button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar  */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <span className="cursor-pointer">
                    <Logo />
                  </span>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-unicodez-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-unicodez-dark">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {mobileNav.map((item) =>
                    item.children ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between items-center rounded-md hover:bg-gray-50 p-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-unicodez-blue focus-visible:ring-opacity-75">
                              <span
                                className="-m-3 flex items-center"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-unicodez-blue"
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium text-gray-900">
                                  {item.name}
                                </span>
                              </span>
                              <ChevronRightIcon
                                className={`${
                                  open ? "rotate-90 transform" : ""
                                } transition ease-in-out h-5 w-5 text-unicodez-dark`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="-mt-6 px-4 text-sm text-gray-500">
                              {item.childrenMenuId.length > 3 ? (
                                <div className="grid grid-cols-2 gap-1">
                                  {item.childrenMenuId.map((child) => {
                                    return (
                                      <Link href={child.href} key={child.name}>
                                        <span className="p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer">
                                          <span className="text-sm font-medium text-gray-900">
                                            {child.name}
                                          </span>
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              ) : (
                                item.childrenMenuId.map((child) => {
                                  return (
                                    <Link href={child.href} key={child.name}>
                                      <span className="p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer">
                                        <span className="text-sm font-medium text-gray-900">
                                          {child.name}
                                        </span>
                                      </span>
                                    </Link>
                                  );
                                })
                              )}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link href={item.href} key={item.name}>
                        <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer">
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-unicodez-blue"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </span>
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href={"/services/custom-software"}>
                  <span className="text-sm font-medium text-unicodez-dark hover:text-unicodez-blue cursor-pointer">
                    Custom Software Development
                  </span>
                </Link>
                <Link href={"/services/blockchain"}>
                  <span className="text-sm font-medium text-unicodez-dark hover:text-unicodez-blue cursor-pointer">
                    Blockchain Development
                  </span>
                </Link>
                <Link href={"/services/enterprise-software"}>
                  <span className="text-sm font-medium text-unicodez-dark hover:text-unicodez-blue cursor-pointer">
                    Enterprise Software Solutions
                  </span>
                </Link>
                <Link href={"/services/production-support-maintenance"}>
                  <span className="text-sm font-medium text-unicodez-dark hover:text-unicodez-blue cursor-pointer">
                    Production Support & Maintenance
                  </span>
                </Link>
                <Link href={"/services/mobile-applications"}>
                  <span className="text-sm font-medium text-unicodez-dark hover:text-unicodez-blue cursor-pointer">
                    Mobile Application Development
                  </span>
                </Link>
                <Link href={"/services/cloud-solutions"}>
                  <span className="text-sm font-medium text-unicodez-dark hover:text-unicodez-blue cursor-pointer">
                    Cloud Software Solutions
                  </span>
                </Link>
              </div>
              <div>
                <a
                  href="https://unistack.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-unicodez-blue hover:bg-opacity-90">
                    Employee Login
                  </span>
                </a>
                {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Registered user?{" "}
                  <Link href="https://unistack.herokuapp.com/">
                    <span className="text-unicodez-blue hover:text-opacity-90 cursor-pointer">
                     Login
                    </span>
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
