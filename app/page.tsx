"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Smart Document Generation",
    description: "AI-powered system that creates perfectly formatted legal documents in minutes",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: "Legal Compliance",
    description: "Always up-to-date with current legal requirements and regulations",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Collaboration Tools",
    description: "Work together with your team in real-time with built-in review and approval workflows",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  }
];

const stats = [
  { number: "100K+", label: "Documents Generated" },
  { number: "99.9%", label: "Accuracy Rate" },
  { number: "24/7", label: "Customer Support" },
  { number: "50+", label: "Document Types" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Legal Operations Manager",
    company: "Tech Solutions Inc.",
    content: "This platform has revolutionized how we handle legal documentation. What used to take hours now takes minutes."
  },
  {
    name: "Michael Chen",
    role: "Corporate Counsel",
    company: "Global Enterprises",
    content: "The accuracy and consistency of the generated documents is impressive. It's like having an extra legal assistant."
  },
  {
    name: "Emily Rodriguez",
    role: "Paralegal",
    company: "Law Firm LLP",
    content: "The templates are comprehensive and the customization options make it perfect for our diverse client needs."
  },
  {
    name: "David Kim",
    role: "Small Business Owner",
    company: "StartUp Co.",
    content: "As a small business owner, having access to professional legal documents at an affordable price is invaluable."
  }
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for individuals and small businesses",
    features: [
      "10 Documents per month",
      "Basic templates",
      "Email support",
      "Document storage",
      "Basic customization"
    ]
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited documents",
      "Advanced templates",
      "Priority support",
      "Team collaboration",
      "Advanced customization",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom templates",
      "Dedicated support",
      "Custom workflows",
      "Advanced security",
      "SLA guarantee",
      "Training & onboarding"
    ]
  }
];

const faqs = [
  {
    question: "How does the document generation work?",
    answer: "Our AI-powered system uses your inputs to generate legally-sound documents based on pre-approved templates. Simply fill in the required information, and our system will create a professionally formatted document in minutes."
  },
  {
    question: "Are the documents legally valid?",
    answer: "Yes, all our templates are created and regularly reviewed by legal professionals to ensure compliance with current laws and regulations. The generated documents are legally valid and can be used for official purposes."
  },
  {
    question: "Can I customize the templates?",
    answer: "Absolutely! Our Professional and Enterprise plans allow you to customize templates to match your specific needs. You can add your branding, modify clauses, and save custom templates for future use."
  }
];

const blogPosts = [
  {
    title: "The Future of Legal Tech: AI and Automation",
    excerpt: "Explore how artificial intelligence is transforming the legal industry and improving document generation.",
    image: "/blog/legal-tech.jpg"
  },
  {
    title: "Best Practices for Legal Document Management",
    excerpt: "Learn the essential strategies for organizing and managing your legal documents effectively.",
    image: "/blog/document-management.jpg"
  },
  {
    title: "Ensuring Compliance in Digital Documentation",
    excerpt: "Stay compliant with regulations while transitioning to digital document processes.",
    image: "/blog/compliance.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 sm:pt-48 lg:pt-52">
        {/* Dashed Grid Background */}
        <div 
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            backgroundPosition: 'center center',
          }}
        />

        {/* Radial Gradient Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: 'radial-gradient(circle at top left, rgba(0, 128, 128, 0.15) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(200, 200, 200, 0.15) 0%, transparent 50%)'
          }}
        />

        {/* Background Elements */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute -left-[10%] top-0 h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-TealGreen/10 to-transparent blur-3xl" />
          <div className="absolute -right-[10%] top-[20%] h-[800px] w-[800px] rounded-full bg-gray-100/80 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Pill Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 inline-flex items-center gap-x-2 rounded-full bg-TealGreen/5 px-4 py-2 ring-1 ring-TealGreen/20"
              >
                <div className="h-2 w-2 rounded-full bg-TealGreen animate-pulse" />
                <span className="text-sm font-medium leading-6 text-TealGreen">New: AI-Powered Document Analysis</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Create Legal Documents
                <span className="relative mt-3 block">
                  <span className="bg-gradient-to-r from-TealGreen to-TealGreen/80 bg-clip-text text-transparent">
                    in Minutes, Not Hours
                  </span>
                  <motion.svg
                    className="absolute -right-10 bottom-2 h-6 w-28 text-TealGreen/30"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewBox="0 0 112 24"
                    fill="none"
                  >
                    <path
                      d="M2 22C42 22 82 22 110 2"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                Transform your legal document workflow with AI-powered generation. 
                Create professional, compliant documents instantly with our advanced platform.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/create">
                  <Button
                    className="group relative bg-TealGreen text-white hover:bg-TealGreen/90 text-lg px-8 py-6 shadow-lg"
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 -z-10 scale-x-[1.05] scale-y-[1.15] rounded-full bg-white opacity-0 blur transition-all duration-200 group-hover:opacity-30" />
                  </Button>
                </Link>
                <Link href="">
                  <Button
                    variant="outline"
                    className="group relative text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-lg px-8 py-6"
                  >
                    <span className="relative z-10">Watch Demo</span>
                    <div className="absolute inset-0 -z-10 scale-x-[1.05] scale-y-[1.15] rounded-full bg-TealGreen opacity-0 blur transition-all duration-200 group-hover:opacity-10" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-TealGreen/10">
                    <svg className="h-6 w-6 text-TealGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100K+</div>
                    <div className="text-sm text-gray-600">Documents Generated</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-TealGreen/10">
                    <svg className="h-6 w-6 text-TealGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                </div>
              </div>

             
            </motion.div>
          </div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mx-auto mt-20 max-w-5xl"
          >
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 -z-10 h-[500px] w-[500px] rounded-full bg-TealGreen/5 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 -z-10 h-[500px] w-[500px] rounded-full bg-gray-100 blur-3xl" />

            {/* Preview Window */}
            <div className="overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 p-4 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-950">
                {/* Window Controls */}
                <div className="absolute left-4 top-4 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20" />
                </div>

                {/* Preview Content */}
                <div className="flex h-full items-center justify-center p-8">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-TealGreen/20 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent" />
                    {/* Add your preview content here */}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {['AI-Powered', 'Real-time', 'Secure'].map((tag) => (
                <div
                  key={tag}
                  className="rounded-full bg-gray-900/5 px-3 py-1 text-sm font-medium text-gray-900 ring-1 ring-gray-900/10"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-32 bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-TealGreen">{stat.number}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative mt-32 overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0M0 0L40 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Everything you need to generate legal documents
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Our platform combines AI technology with legal expertise to create accurate, 
              compliant documents in minutes.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Smart Document Generation',
                description: 'AI-powered system that creates tailored legal documents based on your specific needs.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: 'Legal Compliance',
                description: 'Stay compliant with automatic updates to templates based on the latest legal requirements.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Collaboration Tools',
                description: 'Work together with your team in real-time with built-in review and approval workflows.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: 'Version Control',
                description: 'Track changes and maintain a complete history of all document revisions.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Secure Storage',
                description: 'Enterprise-grade security with encrypted storage and secure document sharing.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: 'Template Library',
                description: 'Access a vast library of pre-approved templates for various legal documents.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50 transition-all duration-200 hover:shadow-lg hover:ring-gray-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-TealGreen/10">
                  <div className="text-TealGreen">{feature.icon}</div>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
                <div className="absolute -z-10 h-full w-full rounded-2xl bg-gradient-to-tr from-TealGreen/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative mt-32 overflow-hidden bg-gray-900 px-4 py-24 sm:px-6 lg:px-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-TealGreen/20 via-gray-900 to-gray-900" />

        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Trusted by legal professionals worldwide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-300"
            >
              See what our customers have to say about their experience with our platform.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                quote: "This platform has revolutionized how we handle legal documentation. What used to take hours now takes minutes.",
                author: "Sarah Chen",
                title: "Legal Director, TechCorp Inc.",
                image: "/testimonials/sarah.jpg"
              },
              {
                quote: "The AI-powered document generation is incredibly accurate and has helped us maintain consistency across all our legal documents.",
                author: "Michael Rodriguez",
                title: "Senior Partner, Rodriguez & Associates",
                image: "/testimonials/michael.jpg"
              },
              {
                quote: "The collaboration features have made it so much easier to work with our team and clients. It's a game-changer.",
                author: "Emma Thompson",
                title: "Corporate Counsel, Global Enterprises",
                image: "/testimonials/emma.jpg"
              },
              {
                quote: "Outstanding compliance features. Keeps us up-to-date with regulatory changes automatically.",
                author: "David Park",
                title: "Compliance Officer, Finance Corp",
                image: "/testimonials/david.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-600">
                    {/* Add actual images later */}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-lg leading-7 text-gray-300">
                  &quote;{testimonial.quote}&quote;
                </p>
                <div className="absolute -left-1 -top-1 h-24 w-24 rounded-full bg-TealGreen opacity-10 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative mt-32 overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white" />
          <div className="absolute h-full w-full opacity-5">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pricing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pricing-grid)" />
            </svg>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Choose the perfect plan for your legal document needs
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "49",
                description: "Perfect for individuals and small teams",
                features: [
                  "Up to 25 documents per month",
                  "5 template customizations",
                  "Basic document analytics",
                  "Email support",
                  "7-day revision history"
                ]
              },
              {
                name: "Professional",
                price: "99",
                description: "Ideal for growing businesses",
                features: [
                  "Unlimited documents",
                  "20 template customizations",
                  "Advanced analytics",
                  "Priority support",
                  "30-day revision history",
                  "Team collaboration",
                  "Custom branding"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "249",
                description: "For large organizations",
                features: [
                  "Unlimited everything",
                  "Unlimited customizations",
                  "Enterprise analytics",
                  "24/7 dedicated support",
                  "Unlimited revision history",
                  "Advanced security features",
                  "API access",
                  "Custom integrations"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50 ${
                  plan.popular ? 'scale-105 shadow-lg ring-2 ring-TealGreen' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-TealGreen py-2 text-center text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                  <p className="mt-6">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  </p>
                </div>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-TealGreen hover:bg-TealGreen/90'
                      : 'border-TealGreen text-TealGreen hover:bg-TealGreen/10'
                  }`}
                >
                  Get started
                </Button>

                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <svg
                        className="h-5 w-5 flex-none text-TealGreen"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative mt-32 overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Frequently asked questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Find answers to common questions about our platform
            </motion.p>
          </div>

          {/* FAQ Grid */}
          <div className="mx-auto mt-16 max-w-3xl">
            {[
              {
                question: "How accurate is the AI document generation?",
                answer: "Our AI system maintains a 99.9% accuracy rate, backed by continuous learning and expert legal verification. Each document is checked against the latest legal requirements and best practices."
              },
              {
                question: "Can I customize the document templates?",
                answer: "Yes, all templates are fully customizable to meet your specific needs. You can modify fields, add clauses, and save your customizations for future use."
              },
              {
                question: "Is my data secure?",
                answer: "We employ enterprise-grade security measures, including end-to-end encryption, secure data centers, and regular security audits to ensure your documents and data are protected."
              },
              {
                question: "Do you offer customer support?",
                answer: "Yes, we provide comprehensive support through multiple channels. Basic plans include email support, while higher tiers get priority support and dedicated account managers."
              },
              {
                question: "Can I collaborate with my team?",
                answer: "Absolutely! Our platform includes robust collaboration features, allowing teams to work together on documents with version control and approval workflows."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-gray-200 py-6"
              >
                <button className="flex w-full items-start justify-between text-left">
                  <span className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg
                      className="h-6 w-6 rotate-0 transform text-gray-600 transition-transform duration-200 group-hover:text-TealGreen"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative mt-32 overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-TealGreen/30 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Ready to streamline your legal document workflow?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Start generating professional legal documents in minutes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Button className="bg-TealGreen px-8 py-6 text-lg hover:bg-TealGreen/90">
                Get Started Now
              </Button>
              <Button
                variant="outline"
                className="border-TealGreen px-8 py-6 text-lg text-TealGreen hover:bg-TealGreen/10"
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-3">
                {['Features', 'Templates', 'Pricing', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-TealGreen">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-TealGreen">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
              <ul className="mt-4 space-y-3">
                {['Documentation', 'API', 'Guides', 'Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-TealGreen">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                {['Privacy', 'Terms', 'Security', 'Compliance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-TealGreen">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-600">
              {new Date().getFullYear()} LegalDoc Generator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
