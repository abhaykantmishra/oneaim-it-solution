"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// export const metadata = {
//   title: "Terms of Service | Enterprise AI Services",
//   description: "Terms of Service for Enterprise AI Services",
// }

export default function TermsPageClient() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Last Updated: April 8, 2025
            </p>
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
            <Link href="#agreement" className="text-[#ff3b30] hover:underline font-medium">Agreement</Link>
            <span className="text-gray-300">|</span>
            <Link href="#services" className="text-[#ff3b30] hover:underline font-medium">Services</Link>
            <span className="text-gray-300">|</span>
            <Link href="#intellectual-property" className="text-[#ff3b30] hover:underline font-medium">Intellectual Property</Link>
            <span className="text-gray-300">|</span>
            <Link href="#user-representations" className="text-[#ff3b30] hover:underline font-medium">User Representations</Link>
            <span className="text-gray-300">|</span>
            <Link href="#prohibited-activities" className="text-[#ff3b30] hover:underline font-medium">Prohibited Activities</Link>
            <span className="text-gray-300">|</span>
            <Link href="#limitation-of-liability" className="text-[#ff3b30] hover:underline font-medium">Limitation of Liability</Link>
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
              <div id="agreement" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">1. Agreement to Terms</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Enterprise AI Services (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
                </p>
                <p className="text-gray-600 mb-4">
                  You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
                <p className="text-gray-600">
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
                </p>
              </div>
              
              <div id="services" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">2. Description of Services</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We provide users with access to a variety of enterprise technology services, including but not limited to cloud solutions, web development, digital marketing, e-commerce solutions, automotive solutions, government and defense solutions, and finance and banking solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
                </p>
                <p className="text-gray-600">
                  We reserve the right to refuse service to anyone for any reason at any time. The Company may, without prior notice, change the services; stop providing the services or any features of the services; or create usage limits for the services.
                </p>
              </div>
              
              <div id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">3. Intellectual Property Rights</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                </p>
                <p className="text-gray-600 mb-4">
                  The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
                <p className="text-gray-600">
                  Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
                </p>
              </div>
              
              <div id="user-representations" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">4. User Representations</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
                </p>
                <p className="text-gray-600">
                  If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                </p>
              </div>
              
              <div id="prohibited-activities" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">5. Prohibited Activities</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <p className="text-gray-600 mb-4">
                  As a user of the Site, you agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                  <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                  <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                  <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
                  <li>Engage in unauthorized framing of or linking to the Site.</li>
                  <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming, that interferes with any party&apos;s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
                  <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                  <li>Attempt to impersonate another user or person or use the username of another user.</li>
                </ul>
              </div>
              
              <div id="limitation-of-liability" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">6. Limitation of Liability</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-gray-600">
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                </p>
              </div>
              
              <div id="indemnification" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">7. Indemnification</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Service; (4) any breach of your representations and warranties set forth in these Terms of Service; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site.
                </p>
                <p className="text-gray-600">
                  Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                </p>
              </div>
              
              <div id="governing-law" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">8. Governing Law</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State of California applicable to agreements made and to be entirely performed within the State of California, without regard to its conflict of law principles.
                </p>
              </div>
              
              <div id="changes" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">9. Changes to Terms</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
                </p>
                <p className="text-gray-600">
                  We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or any portion of the Site. We may update the Site from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Site may be out of date at any given time, and we are under no obligation to update such material.
                </p>
              </div>
              
              <div id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1e2942] mb-4">10. Contact Us</h2>
                <div className="w-16 h-1 bg-[#ff3b30] mb-6"></div>
                <p className="text-gray-600 mb-4">
                  In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <p className="text-gray-600">
                  Enterprise AI Services<br />
                  123 Tech Boulevard<br />
                  San Francisco, CA 94105<br />
                  United States<br />
                  legal@enterpriseai.com
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
              Have Questions About Our Terms?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our legal team is available to clarify any questions you may have about our terms of service
            </p>
            <Button className="bg-[#ff3b30] hover:bg-[#e0352b] text-white text-lg px-8 py-6 h-auto">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
