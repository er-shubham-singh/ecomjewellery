import React from 'react'
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

const faqs = [
    { question: "How do I redeem Encircle Points?", answer: "You can redeem Encircle Points at checkout while making a purchase." },
    { question: "Do I need to pay shipping / delivery charges?", answer: "Shipping charges depend on the delivery location and order value." },
    { question: "Can I send gifts to my loved ones?", answer: "Yes, you can send gifts with personalized messages to your loved ones." },
    { question: "What happens if my order is lost in transit?", answer: "In case of a lost order, please contact our support for resolution." },
    { question: "Questions on Cash On Delivery (COD)", answer: "COD is available for selected locations only." },
];

const Contactpage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
                <div className="text-sm text-gray-500 mb-4 p-6">
                    <span className="text-gray-700">Home</span> | <span className="text-red-600">Help & Contact</span>
                </div>
            <div className="max-w-4xl mx-auto p-6 text-center">
                
                <h2 className="text-3xl font-semibold text-red-700 mb-4">Help & Contact</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-6">Have A Question</h3>

               
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-gray-100 py-6 px-4">
                  
                    <div className="flex flex-col items-center p-4 border-r border-gray-400">
                        <MessageCircle className="h-14 w-14 text-red-900 mb-2" />
                        <p className="text-red-900 font-medium">Chat with Us</p>
                    </div>

                  
                    <div className="flex flex-col items-center p-4 border-r border-gray-400">
                        <Phone className="h-14 w-14 text-red-900 mb-2" />
                        <p className="text-red-900 font-medium">Call Us At</p>
                        <p className="text-gray-600 text-sm">1800-266-0123</p>
                    </div>

                  
                    <div className="flex flex-col items-center p-4">
                        <Mail className="h-14 w-14 text-red-900 mb-2" />
                        <p className="text-red-900 font-medium">Write to Us</p>
                    </div>
                </div>

               
                <p className="text-gray-600 text-sm my-12">
                    The toll-free number is only applicable for domestic orders within India. For international customers or deliveries, please reach out to us through WhatsApp, live chat, or email.
                </p>
            </div>
            <div className="max-w-3xl mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Top Customer Questions</h2>
                    <a href="#" className="text-red-600 font-semibold hover:underline text-xl">
                        ALL FAQ'S
                    </a>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg">
                            <button
                                className="w-full flex justify-between items-center p-4 text-left font-medium "
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t text-gray-700">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Contactpage