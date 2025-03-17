"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
import { Menu, X } from "lucide-react"

// Define dropdown content for each menu item
const cloudServicesItems = [
  {
    title: "Cloud Hosting",
    href: "#",
    description: "End-to-end product development services for startups and enterprises",
  },
  {
    title: "Server Management",
    href: "#",
    description: "User-centered design services to create intuitive digital experiences",
  },
  {
    title: "Data Backup",
    href: "#",
    description: "Native and cross-platform mobile app development",
  },
  {
    title: "Cloud Security",
    href: "#",
    description: "Modern web applications built with the latest technologies",
  },
]

const webDevelopmentItems = [
  {
    title: "Web App Development",
    href: "#",
    description: "Seamless migration to cloud platforms like AWS, Azure, and GCP",
  },
  {
    title: "Custom website development",
    href: "#",
    description: "Streamline your development and operations with CI/CD pipelines",
  },
  {
    title: "Ui & Ux Designing",
    href: "#",
    description: "Manage infrastructure with code for better scalability and reliability",
  },
  {
    title: "E- Commerce Development",
    href: "#",
    description: "Container orchestration and management solutions",
  },
  {
    title: "Api Development & Integration",
    href: "#",
    description: "Container orchestration and management solutions",
  },
  {
    title: "Front-End Development",
    href: "#",
    description: "Container orchestration and management solutions",
  },
  {
    title: "Back-End Development",
    href: "#",
    description: "Container orchestration and management solutions",
  },
  {
    title: "DevOps & Cloud Services",
    href: "#",
    description: "Container orchestration and management solutions",
  },
]

const aimlSolutionsItems = [
  {
    title: "Custom AI Development",
    href: "#",
    description: "Transform your business with modern digital solutions",
  },
  {
    title: "AI Game Development",
    href: "#",
    description: "Design scalable and resilient enterprise systems",
  },
  {
    title: "AI Chatbot Development",
    href: "#",
    description: "Update legacy systems to modern technologies",
  },
  {
    title: "Custom Machine Learning Development Services",
    href: "#",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Ai Software Development",
    href: "#",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Predictive Analytics Solutions",
    href: "#",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Deep Learning Development  services",
    href: "#",
    description: "Implement agile methodologies for better project outcomes",
  },
  {
    title: "Ai consultancy services",
    href: "#",
    description: "Implement agile methodologies for better project outcomes",
  },
]

const digitalMarketingItems = [
  {
    title: "Meta ads",
    href: "#",
    description: "Financial technology solutions for banks and financial institutions",
  },
  {
    title: "Google ads",
    href: "#",
    description: "Healthcare technology solutions for providers and patients",
  },
  {
    title: "Instagram ads",
    href: "#",
    description: "Sustainable technology solutions for a greener future",
  },
  {
    title: "SEO",
    href: "#",
    description: "Human resources technology solutions for better workforce management",
  },
]

// Component for dropdown menu items
const ListItem = ({ title, href, description }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            {/* <img
              src="/vercel.svg?height=40&width=120"
              alt="OneAim"
              width={120}
              height={40}
              className="h-10 w-auto"
            /> */}
            <p className="font-extrabold text-xl">OneAim</p>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem >
                <NavigationMenuTrigger className="bg-transparent">Cloud Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {cloudServicesItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Web Development</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {webDevelopmentItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">AI & ML Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aimlSolutionsItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Digital Marketing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {digitalMarketingItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} description={item.description} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Let&apos;s Talk AI
            </Button>
            <Button variant="destructive">Contact Us</Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="OneAim"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
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
                    <Button variant="outline" className="w-full">
                      Let&apos;s Talk AI
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Contact Us
                    </Button>
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
