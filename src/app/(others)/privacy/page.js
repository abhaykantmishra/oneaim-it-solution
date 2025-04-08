"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// export const metadata = {
//   title: "Privacy Policy | Enterprise AI Services",
//   description: "Privacy Policy for Enterprise AI Services",
// }

export default function PrivacyPolicyClientPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ff3b30] to-[#ff8e88] py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Last Updated: April 8, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="#overview" className="text-[#ff3b30] hover:underline font-medium">
              Overview
            </Link>
            <span className="text-[#ff3b30] hover:underline font-medium">Overview</span>
            <span className="text-gray-300">|</span>
            <Link href="#information-collection" className="text-[#ff3b30] hover:underline font-medium">
              Information Collection
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#information-usage" className="text-[#ff3b30] hover:underline font-medium">
              Information Usage
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#information-sharing" className="text-[#ff3b30] hover:underline font-medium">
              Information Sharing
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#cookies" className="text-[#ff3b30] hover:underline font-medium">
              Cookies
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#security" className="text-[#ff3b30] hover:underline font-medium">
              Security
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#changes" className="text-[#ff3b30] hover:underline font-medium">
              Changes to Policy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div id="overview" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">1. Overview</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  Welcome to Enterprise AI Services. We respect your privacy and are committed to protecting your
                  personal data. This privacy policy will inform you about how we look after your personal data when you
                  visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <p className="text-gray-600 mb-4">
                  This privacy policy applies to all information collected through our website, as well as any related
                  services, sales, marketing, or events.
                </p>
                <p className="text-gray-600">
                  Please read this privacy policy carefully as it will help you understand what we do with the
                  information that we collect.
                </p>
              </div>

              <div id="information-collection" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">2. Information We Collect</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We collect personal information that you voluntarily provide to us when you express an interest in
                  obtaining information about us or our products and services, when you participate in activities on the
                  website, or otherwise when you contact us.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Personal Information Provided by You:</strong> The personal information that we collect
                  depends on the context of your interactions with us and the website, the choices you make, and the
                  products and features you use. The personal information we collect may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Names</li>
                  <li>Phone numbers</li>
                  <li>Email addresses</li>
                  <li>Mailing addresses</li>
                  <li>Job titles</li>
                  <li>Contact preferences</li>
                  <li>Contact or authentication data</li>
                  <li>Billing addresses</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  <strong>Automatically Collected Information:</strong> We automatically collect certain information
                  when you visit, use, or navigate the website. This information does not reveal your specific identity
                  but may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Device and usage information</li>
                  <li>IP address</li>
                  <li>Browser and device characteristics</li>
                  <li>Operating system</li>
                  <li>Language preferences</li>
                  <li>Referring URLs</li>
                  <li>Country</li>
                  <li>Information about how and when you use our website</li>
                </ul>
              </div>

              <div id="information-usage" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">3. How We Use Your Information</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We use personal information collected via our website for a variety of business purposes described
                  below. We process your personal information for these purposes in reliance on our legitimate business
                  interests, in order to enter into or perform a contract with you, with your consent, and/or for
                  compliance with our legal obligations. We use the information we collect or receive:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>To facilitate account creation and login process</li>
                  <li>To send administrative information to you</li>
                  <li>To send you marketing and promotional communications</li>
                  <li>To respond to user inquiries/offer support to users</li>
                  <li>To deliver targeted advertising to you</li>
                  <li>To protect our Services</li>
                  <li>To comply with legal obligations</li>
                  <li>To respond to legal requests and prevent harm</li>
                  <li>For other business purposes</li>
                </ul>
              </div>

              <div id="information-sharing" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">4. Information Sharing and Disclosure</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We only share information with your consent, to comply with laws, to provide you with services, to
                  protect your rights, or to fulfill business obligations. We may process or share your data that we
                  hold based on the following legal basis:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>
                    <strong>Consent:</strong> We may process your data if you have given us specific consent to use your
                    personal information for a specific purpose.
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to
                    achieve our legitimate business interests.
                  </li>
                  <li>
                    <strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may
                    process your personal information to fulfill the terms of our contract.
                  </li>
                  <li>
                    <strong>Legal Obligations:</strong> We may disclose your information where we are legally required
                    to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court
                    order, or legal process.
                  </li>
                  <li>
                    <strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary
                    to investigate, prevent, or take action regarding potential violations of our policies, suspected
                    fraud, situations involving potential threats to the safety of any person and illegal activities, or
                    as evidence in litigation.
                  </li>
                </ul>
                <p className="text-gray-600">
                  More specifically, we may need to process your data or share your personal information in the
                  following situations:
                </p>
              </div>

              <div id="cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">5. Cookies and Tracking Technologies</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We may use cookies and similar tracking technologies to access or store information. Specific
                  information about how we use such technologies and how you can refuse certain cookies is set out in
                  our Cookie Policy.
                </p>
                <p className="text-gray-600">
                  We use both session cookies (which expire once you close your web browser) and persistent cookies
                  (which stay on your computer or mobile device until you delete them) to provide you with a more
                  personal and interactive experience on our website.
                </p>
              </div>

              <div id="security" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">6. Data Security</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We have implemented appropriate technical and organizational security measures designed to protect the
                  security of any personal information we process. However, despite our safeguards and efforts to secure
                  your information, no electronic transmission over the Internet or information storage technology can
                  be guaranteed to be 100% secure.
                </p>
                <p className="text-gray-600">
                  We will do our best to protect your personal information. Transmission of personal information to and
                  from our website is at your own risk. You should only access the website within a secure environment.
                </p>
              </div>

              <div id="changes" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">7. Changes to This Privacy Policy</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We may update this privacy policy from time to time. The updated version will be indicated by an
                  updated "Revised" date and the updated version will be effective as soon as it is accessible. If we
                  make material changes to this privacy policy, we may notify you either by prominently posting a notice
                  of such changes or by directly sending you a notification. We encourage you to review this privacy
                  policy frequently to be informed of how we are protecting your information.
                </p>
              </div>

              <div id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">8. Contact Us</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  If you have questions or comments about this policy, you may contact our Data Protection Officer (DPO)
                  by email at privacy@enterpriseai.com, or by post to:
                </p>
                <p className="text-gray-600">
                  Enterprise AI Services
                  <br />
                  Attn: Data Protection Officer
                  <br />
                  123 Tech Boulevard
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e2942] mb-6">
              Have Questions About Our Privacy Practices?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our team is ready to assist you with any questions or concerns regarding your privacy
            </p>
            <Button className="bg-[#ff3b30] hover:bg-[#e0352b] text-white text-lg px-8 py-6 h-auto">Contact Us</Button>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
