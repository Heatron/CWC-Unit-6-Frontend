import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessagesQuestion } from '@fortawesome/pro-solid-svg-icons';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { Separator } from "@/components/ui/separator";
  import { Button } from "@/components/ui/button";





  export default function FAQ() {
    return (
        <div className="max-w-xl mx-auto text-left">
            <h2 className="text-4xl font-bold my-8">
                <FontAwesomeIcon icon={faMessagesQuestion} className="text-l" />
                ‎ ‎  FAQ
            </h2>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>How can Hot Beans benefit my business?</AccordionTrigger>
                    <AccordionContent>
                        Hot Beans specializes in creating tailor-made web solutions that are designed to meet the unique needs and goals of your business. From stunning designs to robust functionality, we work closely with you to ensure that your website not only looks great but also drives results and helps your business grow.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>What sets Hot Beans apart from other web agencies?</AccordionTrigger>
                    <AccordionContent>
                        What sets Hot Beans apart is our commitment to excellence in both design and development. Our team consists of highly skilled professionals who are passionate about delivering top-notch solutions. We prioritize communication, transparency, and customer satisfaction, ensuring that you have a positive experience working with us every step of the way.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>How does Hot Beans ensure accessibility in web development?</AccordionTrigger>
                    <AccordionContent>
                        Hot Beans follows industry best practices and adheres to accessibility standards such as WAI-ARIA. We understand the importance of creating websites that are usable by everyone, regardless of their abilities or disabilities. Our team is experienced in implementing accessibility features and conducting thorough testing to ensure that your website is inclusive and accessible to all users.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Can Hot Beans handle complex web projects?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! Hot Beans has extensive experience in handling complex web projects of all sizes and complexities. Whether you need a simple website or a sophisticated web application, our team has the expertise and resources to deliver high-quality solutions that exceed your expectations.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>How can I get started with Hot Beans?</AccordionTrigger>
                    <AccordionContent>
                        Getting started with Hot Beans is easy! Simply reach out to us via email or phone, and one of our friendly team members will be happy to discuss your project requirements and provide you with a personalized solution tailored to your needs. We offer free consultations and transparent pricing, so you can rest assured knowing that you're getting the best value for your investment.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}