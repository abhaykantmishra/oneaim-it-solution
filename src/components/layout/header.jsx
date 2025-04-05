"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X, Stars } from "lucide-react"

// Define dropdown content for each menu item
const cloudServicesItems = [
  {
    title: "Cloud Hosting",
    href: "/cloud-services",
    description: "End-to-end product development services for startups and enterprises",
  },
  {
    title: "Server Management",
    href: "/cloud-services",
    description: "User-centered design services to create intuitive digital experiences",
  },
  {
    title: "Data Backup",
    href: "/cloud-services",
    description: "Native and cross-platform mobile app development",
  },
  {
    title: "Cloud Security",
    href: "/cloud-services",
    description: "Modern web applications built with the latest technologies",
  },
]

const webDevelopmentItems = [
  {
    title: "Web App Development",
    href: "/development-services",
    description: "Seamless migration to cloud platforms like AWS, Azure, and GCP",
  },
  {
    title: "Custom website development",
    href: "/development-services",
    description: "Streamline your development and operations with CI/CD pipelines",
  },
  {
    title: "Ui & Ux Designing",
    href: "/development-services",
    description: "Manage infrastructure with code for better scalability and reliability",
  },
  {
    title: "E- Commerce Development",
    href: "/development-services",
    description: "Container orchestration and management solutions",
  },
  {
    title: "Api Development & Integration",
    href: "/development-services",
    description: "Container orchestration and management solutions",
  },
  {
    title: "Front-End Development",
    href: "/development-services",
    description: "Container orchestration and management solutions",
  },
  {
    title: "Back-End Development",
    href: "/development-services",
    description: "Container orchestration and management solutions",
  },
  {
    title: "DevOps & Cloud Services",
    href: "/development-services",
    description: "Container orchestration and management solutions",
  },
]

const aimlSolutionsItems = [
  {
    title: "Custom AI Development",
    href: "/ai-ml-services",
    description: "Transform your business with modern digital solutions",
  },
  {
    title: "AI Game Development",
    href: "/ai-ml-services",
    description: "Design scalable and resilient enterprise systems",
  },
  {
    title: "AI Chatbot Development",
    href: "/ai-ml-services",
    description: "Update legacy systems to modern technologies",
  },
  {
    title: "Custom Machine Learning Development Services",
    href: "/ai-ml-services",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Ai Software Development",
    href: "/ai-ml-services",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Predictive Analytics Solutions",
    href: "/ai-ml-services",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Deep Learning Development  services",
    href: "/ai-ml-services",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Ai consultancy services",
    href: "/ai-ml-services",
    description: "Implement agile methodologies for better project outcomes",
  },
]

const digitalMarketingItems = [
  {
    title: "Meta ads",
    href: "/digital-marketing",
    description: "Financial technology solutions for banks and financial institutions",
  },
  {
    title: "Google ads",
    href: "/digital-marketing",
    description: "Healthcare technology solutions for providers and patients",
  },
  {
    title: "Instagram ads",
    href: "/digital-marketing",
    description: "Sustainable technology solutions for a greener future",
  },
  {
    title: "SEO",
    href: "/digital-marketing",
    description: "Human resources technology solutions for better workforce management",
  },
]

const IndustriesItems = [
  {
    title: "Automobile",
    href: "/automobile",
    description: "Automobile technology solutions",
  },
  {
    title: "Telecommunications",
    href: "/telecommunication",
    description: "telecommunication technology solutions for providers and consumers",
  },
  {
    title: "Healthcare",
    href: "/healthcare",
    description: "Healthcare technology solutions for providers and patients",
  },
  {
    title: "E-Commerce",
    href: "/e-commerce",
    description: "Human resources technology solutions for better workforce management",
  },
  {
    title: "Finance & Banking",
    href: "/finance-&-banking",
    description: "Financial technology solutions for banks and financial institutions",
  },
  {
    title: "Education",
    href: "/education",
    description: "Education technology solutions for better institutions and workforce management",
  },
  {
    title: "Govt & Defense",
    href: "/govt-&-defense",
    description: "Human resources technology solutions for better workforce management",
  },
]

// Component for dropdown menu items
const ListItem = ({ title, href, description, image }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
        >
          <div className="flex flex-row">
            <div className="bg-blue-400 text-xs w-14 h-14">
              <img src={image || "/placeholder.svg"} alt={title} className="w-14 h-14 overflow-hidden" />
            </div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-slate-500">{description}</p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [pullRefresh, setPullRefresh] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      // Pull down to show header
      if (currentScrollY < 0 || currentScrollY < lastScrollY - 20) {
        setVisible(true)
        setPullRefresh(currentScrollY < 0)
      }
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY + 10 && currentScrollY > 100) {
        setVisible(false)
        setPullRefresh(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        } ${pullRefresh ? "shadow-lg" : ""} bg-[#1e2942] text-white`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 mx-1">
            <p className="font-extrabold text-3xl text-[#ff3b30] font-mono">OneAim</p>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#2a3a5f] data-[state=open]:bg-[#2a3a5f]">
                  Cloud Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[780px] bg-white">
                    {cloudServicesItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#2a3a5f] data-[state=open]:bg-[#2a3a5f]">
                  Web Development
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[780px] bg-white">
                    {webDevelopmentItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#2a3a5f] data-[state=open]:bg-[#2a3a5f]">
                  AI & ML Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[780px] bg-white">
                    {aimlSolutionsItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#2a3a5f] data-[state=open]:bg-[#2a3a5f]">
                  Digital Marketing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[780px] bg-white">
                    {digitalMarketingItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#2a3a5f] data-[state=open]:bg-[#2a3a5f]">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[780px] bg-white">
                    {IndustriesItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4 mx-2">
            <Link href={'/contact'} className="p-0 m-0">
              <button
                className="hidden md:flex md:flex-row py-[8px] px-5 main-button-blue text-nowrap"
              >
                Let&apos;s Talk AI
                <Stars className="ml-1 text-xs" />
              </button>
            </Link>
            <Link href={'/contact'} className="p-0 m-0">
              <button className="main-button py-2 px-5 rounded-full text-lg text-nowrap">Contact Us</button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden p-2 text-white hover:bg-[#2a3a5f]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b bg-[#1e2942]">
                    <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
                      <p className="font-extrabold text-xl text-white">OneAim</p>
                    </Link>
                  </div>

                  <div className="flex-1 overflow-auto py-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="product-engineering">
                        <AccordionTrigger className="px-4">Cloud Services</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2 pl-4">
                            {cloudServicesItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="py-2 px-4 hover:bg-slate-100 rounded-md text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="cloud-devops">
                        <AccordionTrigger className="px-4">Web Development</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2 pl-4">
                            {webDevelopmentItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="py-2 px-4 hover:bg-slate-100 rounded-md text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="enterprise-practices">
                        <AccordionTrigger className="px-4">AI & ML Solutions</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2 pl-4">
                            {aimlSolutionsItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="py-2 px-4 hover:bg-slate-100 rounded-md text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="industries">
                        <AccordionTrigger className="px-4">Digital Marketing</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2 pl-4">
                            {digitalMarketingItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="py-2 px-4 hover:bg-slate-100 rounded-md text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="p-4 border-t space-y-4">
                    <Link href={'/contact'}>
                      <Button variant="outline" className="w-full rounded-full text-[]  py-2 text-nowrap flex flex-row justify-center mb-4">
                        Let&apos;s Talk AI
                        <Stars className="mx-2" />
                      </Button>
                    </Link>
                    <Link href={'/contact'}>
                      <Button variant="destructive" className="w-full rounded-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

