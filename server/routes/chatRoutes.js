import express from "express";

const router = express.Router();

// Predefined chatbot responses with keyword matching
const chatbotResponses = {
  greetings: ["hello", "hi", "hey"],
  howAreYou: ["how are you", "how are you doing"],
  services: ["services", "what services do you offer", "tell me about your services"],
  contact: ["contact", "how can I contact you", "email", "phone"],
  projects: ["projects", "completed projects", "future projects"],
  goodbye: ["bye", "goodbye", "see you"],
};

// Project details for chatbot
const projectDetails = {
  "E-Commerce Platform": "A robust online store built with React, Node.js, and MongoDB. It includes product management, user authentication, secure payments, and order tracking.",
  "AI-Powered Chatbot": "An intelligent chatbot using Python and TensorFlow, capable of handling customer queries and automating responses.",
  "Healthcare Management System": "A cloud-based system built with Angular and Firebase, allowing doctors to manage patient records and book appointments.",
  "Metaverse Shopping": "An immersive VR shopping experience using Web3, AI, and Unity, providing users with a futuristic way to shop online.",
  "AI-Powered Resume Builder": "A Next.js-based resume builder that utilizes AI to auto-generate professional resumes tailored to job descriptions.",
  "Automated Cybersecurity System": "A self-learning AI that uses machine learning and blockchain to detect and prevent cyber threats before they happen.",
};

// Function to match user input with predefined categories
const matchResponse = (message) => {
  const lowerMessage = message.toLowerCase().trim();

  if (chatbotResponses.greetings.includes(lowerMessage)) {
    return "Hi there! How can I assist you today?";
  }
  if (chatbotResponses.howAreYou.includes(lowerMessage)) {
    return "I'm just a bot, but I'm functioning perfectly!";
  }
  if (chatbotResponses.services.includes(lowerMessage)) {
    return "We offer web development, app development, and AI solutions. Check out our services here: https://itcompany.com/services";
  }
  if (chatbotResponses.contact.includes(lowerMessage)) {
    return "You can reach us at support@itcompany.com or call +1 234 567 890.";
  }
  if (chatbotResponses.projects.includes(lowerMessage)) {
    return "We have worked on E-Commerce, AI Chatbots, Healthcare Systems, and more! Type the project name for details.";
  }
  if (chatbotResponses.goodbye.includes(lowerMessage)) {
    return "Goodbye! Have a great day!";
  }

  // Check if message matches a project name
  if (projectDetails[message]) {
    return projectDetails[message];
  }

  return "I'm sorry, I didn't understand that. Can you rephrase?";
};

// Chatbot POST route
router.post("/v1", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send('oops!! Message is Required');
  }

  const response = matchResponse(message);
  res.send( response );
});

export default router;
