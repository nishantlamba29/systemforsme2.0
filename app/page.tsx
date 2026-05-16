"use client";

import { useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle, Mail, Phone } from 'lucide-react';
import Image from "next/image";

export default function SystemsForSMEWebsite() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const availableSlots = [
    '9:00 AM',
    '11:00 AM',
    '1:00 PM',
    '3:00 PM',
    '5:00 PM',
  ];

  const bookedSlots: { [key: string]: string[] } = {
    '2026-05-20': ['11:00 AM'],
    '2026-05-21': ['3:00 PM'],
  };

  const services = [
    {
      title: 'SOP & Training Systems',
      description:
        'Create repeatable systems that improve execution and reduce confusion.',
      icon: '📋',
    },
    {
      title: 'Inventory Visibility',
      description:
        'Track inventory and operations with structured visibility systems.',
      icon: '📦',
    },
    {
      title: 'Lead Tracking',
      description:
        'Create better systems for leads, follow-ups, and sales visibility.',
      icon: '🎯',
    },
    {
      title: 'Financial Reporting',
      description:
        'Improve financial clarity with simple reporting systems.',
      icon: '📊',
    },
    {
      title: 'Delegation Systems',
      description:
        'Reduce founder dependency with better delegation workflows.',
      icon: '👥',
    },
    {
      title: 'Workflow Structuring',
      description:
        'Organize operations into scalable business workflows.',
      icon: '⚙️',
    },
  ];

  const faqs = [
    {
      question: "What kind of businesses do you work with?",
      answer: "We work with Indian SMEs across all industries - retail, distribution, manufacturing, services, and more. If you're stuck doing everything yourself and want to build scalable systems, we can help. We've worked with milk distributors, fashion retailers, e-commerce businesses, logistics, and many others."
    },
    {
      question: "What happens during the strategy session?",
      answer: "During the 45-60 minute session, we'll understand your business, identify your biggest operational bottleneck, and design a clear action roadmap. We'll diagnose the exact problem stopping your growth - it could be lack of systems, poor visibility, or delegation issues. You'll leave with a clear direction."
    },
    {
      question: "How does the booking process work?",
      answer: "Fill in your details on this page, select your preferred date and time slot, then click 'Book on WhatsApp'. This opens WhatsApp directly with your booking details pre-filled. Send the message, and we'll confirm your session and payment details."
    },
    {
      question: "Can I reschedule my session?",
      answer: "Yes, you can reschedule. Once you book and confirm payment, just message us on WhatsApp with your new preferred date and time. We'll accommodate the change if the slot is available."
    },
    {
      question: "What if my slot is unavailable?",
      answer: "If your preferred slot is booked, select another date or time. We typically have 2-3 slots open per day. If you really can't find a slot that works, WhatsApp us directly at +91 75894 50517 and we'll help find an alternative."
    },
    {
      question: "What happens after the strategy session?",
      answer: "After the session, you'll have a clear roadmap. You can either implement it yourself using the framework we provide, or we can work with you for hands-on implementation. Some clients like the DIY approach, others prefer ongoing support."
    }
  ];

  const handleBooking = () => {
    if (!name || !phone || !selectedTime) {
      alert('Please fill in: Name, Phone, and Time Slot');
      return;
    }

    const message = `Hi Raghav,\n\nI'd like to book the Systems Strategy Session.\n\n📋 *Details:*\nName: ${name}\nBusiness: ${businessName || 'N/A'}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\n\n📅 *Preferred Slot:*\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nPlease confirm the session and payment details.\n\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917589450517?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-zinc-800 sticky bg-black/95 backdrop-blur z-50">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
          <h1 className="text-xl md:text-2xl font-black text-yellow-400">
            Systems for SME
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm text-zinc-300 font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="hover:text-yellow-400 transition cursor-pointer">
              Case Studies
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-yellow-400 transition cursor-pointer">
              FAQ
            </button>
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={() => scrollToSection('booking')}
            className="hidden md:block bg-yellow-400 text-black px-6 py-2.5 rounded-xl font-bold hover:bg-yellow-300 transition cursor-pointer text-sm"
          >
            Book Session
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-yellow-400"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-zinc-800 py-4 px-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-yellow-400 transition cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-yellow-400 transition cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="block w-full text-left py-2 hover:text-yellow-400 transition cursor-pointer">
              Case Studies
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-yellow-400 transition cursor-pointer">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full bg-yellow-400 text-black py-2 rounded-lg font-bold mt-4 cursor-pointer"
            >
              Book Session
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-xs md:text-sm mb-6">
              Systems & Operations Consulting for Indian SMEs
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Build Systems That Run Your Business — Not Your Life.
            </h1>

            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              We help Indian SME founders reduce operational chaos, improve visibility, create SOPs, and build scalable systems for execution. Stop doing everything yourself. Let systems run your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-yellow-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-yellow-300 transition cursor-pointer text-sm md:text-base"
              >
                Book a Strategy Session
              </button>

              <button 
                onClick={() => scrollToSection('case-studies')}
                className="border border-zinc-700 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer text-sm md:text-base"
              >
                See Real Examples
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800">
              <div>
                <div className="text-2xl md:text-3xl font-black text-yellow-400">1000+</div>
                <div className="text-xs md:text-sm text-zinc-400 mt-1">Analyzed SMEs</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-yellow-400">50+</div>
                <div className="text-xs md:text-sm text-zinc-400 mt-1">Systems Built</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-yellow-400">6-8h/week</div>
                <div className="text-xs md:text-sm text-zinc-400 mt-1">Average Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 border-t border-zinc-800 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm mb-4">
              About Systems for SME
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              We Help Indian SMEs Move From Chaos to Structured Execution
            </h2>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Most Indian SME founders are stuck. They work 12-14 hours every day, but nothing improves. The business depends entirely on them. Staff make repeated mistakes. There's no visibility on inventory, sales, or finances. Growth feels impossible because there's no time to actually grow.
            </p>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              We help founders identify the real bottleneck - usually missing systems, poor visibility, or founder dependency. We build practical, implementable systems that make your business easier to manage, easier to scale, and less dependent on you.
            </p>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              We focus on execution, not theory. Real systems that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm mb-4">
                Our Services
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Systems We Build
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-yellow-400/50 transition cursor-pointer group"
                >
                  <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-lg md:text-xl mb-3 group-hover:text-yellow-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-zinc-950/30 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm mb-4">
                Real Results
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Businesses We've Helped
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Milk Distributor Case Study */}
              <div className="bg-black border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Milk Distributor - Mumbai
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-zinc-300 mb-2">The Problem:</h4>
                    <ul className="space-y-2 text-xs md:text-sm text-zinc-400">
                      <li>• Owner getting 10+ calls every night (11 PM - 2 AM)</li>
                      <li>• Customers changing quantities last-minute</li>
                      <li>• No system for order changes</li>
                      <li>• Founder involved in every operation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm md:text-base text-zinc-300 mb-2">The Solution:</h4>
                    <ul className="space-y-2 text-xs md:text-sm text-zinc-400">
                      <li>✓ Built a customer app for quantity changes</li>
                      <li>✓ Delivery boys automatically notified</li>
                      <li>✓ All without owner's involvement</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4">
                    <div className="space-y-2 text-sm md:text-base">
                      <div className="font-bold text-yellow-400">Results:</div>
                      <div className="text-zinc-300">✓ 6-8 hours saved per week</div>
                      <div className="text-zinc-300">✓ Happier customers</div>
                      <div className="text-zinc-300">✓ Zero owner involvement</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retail Operations Case Study */}
              <div className="bg-black border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Retail Operations - Multi-City
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-zinc-300 mb-2">The Problem:</h4>
                    <ul className="space-y-2 text-xs md:text-sm text-zinc-400">
                      <li>• Weak lead tracking system</li>
                      <li>• Staff accountability issues</li>
                      <li>• No documentation of processes</li>
                      <li>• Poor visibility on daily sales</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm md:text-base text-zinc-300 mb-2">The Solution:</h4>
                    <ul className="space-y-2 text-xs md:text-sm text-zinc-400">
                      <li>✓ Built lead tracking system</li>
                      <li>✓ Created process documentation</li>
                      <li>✓ Structured daily reporting</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4">
                    <div className="space-y-2 text-sm md:text-base">
                      <div className="font-bold text-yellow-400">Results:</div>
                      <div className="text-zinc-300">✓ Clear accountability</div>
                      <div className="text-zinc-300">✓ Better team execution</div>
                      <div className="text-zinc-300">✓ 25% improvement in conversions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-12 mb-12">
            <div>
              <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm mb-4">
                Our Process
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                A Simple 45-60 Minute Session
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { num: '1', title: 'Book Session', desc: 'Select your preferred time' },
              { num: '2', title: 'Understand Business', desc: 'We analyze your operations' },
              { num: '3', title: 'Diagnose Problem', desc: 'Find the real bottleneck' },
              { num: '4', title: 'Design Solution', desc: 'Create your system blueprint' },
              { num: '5', title: 'Get Roadmap', desc: 'Clear action plan for growth' },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl p-4 md:p-6 text-center space-y-3"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-yellow-400 text-black rounded-full flex items-center justify-center font-black text-lg md:text-xl">
                  {step.num}
                </div>
                <h3 className="font-bold text-sm md:text-base">{step.title}</h3>
                <p className="text-xs text-zinc-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Payment Info - NEW SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-black border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm mb-4">
                Investment
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Simple, Transparent Pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Regular Price Card */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold">Strategy Session</h3>
                <p className="text-sm text-zinc-400">One 45-60 minute consultation</p>
                
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-black text-yellow-400">₹1,499</div>
                  <p className="text-xs text-zinc-500">Standard Price</p>
                </div>

                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>✓ Deep business analysis</li>
                  <li>✓ Bottleneck identification</li>
                  <li>✓ System design consultation</li>
                  <li>✓ Clear action roadmap</li>
                  <li>✓ Implementation guidance</li>
                </ul>

                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-3 text-xs">
                  <p className="text-zinc-300">Includes: Strategy document + email follow-up support</p>
                </div>
              </div>

              {/* Discounted Price Card */}
              <div className="bg-black border-2 border-yellow-400 rounded-3xl p-6 md:p-8 space-y-4 relative">
                <div className="absolute -top-3 right-6 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  SPECIAL OFFER
                </div>

                <h3 className="text-xl md:text-2xl font-bold">Limited Time Offer</h3>
                <p className="text-sm text-zinc-400">For BML Calculator Users</p>
                
                <div className="space-y-2">
                  <div className="text-xs line-through text-zinc-500">₹1,499</div>
                  <div className="text-4xl md:text-5xl font-black text-yellow-400">₹499</div>
                  <p className="text-xs text-yellow-400 font-bold">Save ₹1,000 (67% OFF)</p>
                </div>

                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>✓ Everything in Standard +</li>
                  <li>✓ Free Inventory Sheet template</li>
                  <li>✓ 30 days implementation support</li>
                  <li>✓ Priority booking</li>
                </ul>

                <div className="bg-yellow-400 text-black rounded-lg p-3 text-xs font-bold text-center">
                  Limited slots available
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-lg">Payment Process:</h4>
              <ol className="space-y-3 text-sm text-zinc-300">
                <li><span className="text-yellow-400 font-bold">1.</span> Fill the booking form and click "Book on WhatsApp"</li>
                <li><span className="text-yellow-400 font-bold">2.</span> We'll send you payment details via WhatsApp</li>
                <li><span className="text-yellow-400 font-bold">3.</span> Complete payment (UPI, Bank Transfer, or Card)</li>
                <li><span className="text-yellow-400 font-bold">4.</span> Your session is confirmed with a calendar link</li>
              </ol>
              <p className="text-xs text-zinc-500 pt-2">Money-back guarantee if you're not satisfied with the strategy within 7 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-zinc-950/50">
        <div className="max-w-2xl mx-auto bg-black border border-zinc-800 rounded-3xl p-6 md:p-10 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm">
              Book Your Session
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
              Book Your Strategy Session
            </h2>

            <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
              Select your preferred date and time. We'll confirm everything on WhatsApp and send payment details.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Full Name *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-yellow-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Phone Number *</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-yellow-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Business Name</label>
              <input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Your business name"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-yellow-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-yellow-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Preferred Date *</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white text-black rounded-xl px-4 py-3 text-sm focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">Select Time Slot *</label>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {availableSlots.map((slot) => {
                  const dateKey = selectedDate as string;
                  const isBooked = bookedSlots[dateKey]?.includes(slot) ?? false;

                  return (
                    <button
                      key={slot}
                      disabled={isBooked}
                      onClick={() => !isBooked && setSelectedTime(slot)}
                      className={`py-3 rounded-lg font-bold transition border text-sm ${
                        isBooked
                          ? 'bg-zinc-900 text-zinc-600 border-zinc-800 cursor-not-allowed'
                          : selectedTime === slot
                          ? 'bg-yellow-400 text-black border-yellow-400'
                          : 'bg-zinc-950 border-zinc-800 hover:border-yellow-400 cursor-pointer'
                      }`}
                    >
                      {isBooked ? `Booked` : slot}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-base hover:bg-yellow-300 transition cursor-pointer mt-6"
            >
              Book on WhatsApp
            </button>

            <p className="text-xs text-zinc-500 text-center pt-2">
              By booking, you agree to receive messages about your session and payment details.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-black border-y border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm">
              FAQ
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 md:p-6 hover:bg-zinc-900 transition cursor-pointer text-left"
                >
                  <h3 className="font-bold text-sm md:text-base pr-4">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-yellow-400 flex-shrink-0 transition ${
                      expandedFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaqIndex === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-zinc-800 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder/Meet the Team */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-zinc-950/30 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-yellow-400 uppercase tracking-[3px] text-xs md:text-sm">
              Who You'll Meet
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Meet Raghav Kansal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Founder Avatar */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-yellow-400">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGd78wc1Fvp9Q/profile-displayphoto-scale_400_400/B56Z0M2hd2H0Ag-/0/1774037115493?e=1780531200&v=beta&t=iMLW_GwDAOfKNNPkSGWErmlQCsE5Dc8HN35m-_HEP0Y"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Founder Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">Raghav Kansal</h3>
                <p className="text-yellow-400 font-bold text-sm md:text-base">Founder, Systems for SME</p>
              </div>

              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Raghav has analyzed 1000+ Indian SMEs and helped 50+ businesses build scalable systems. He specializes in helping founders escape the trap of "doing everything myself" by building operational systems that actually work.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">✓</span>
                  <p className="text-xs md:text-sm text-zinc-400">Studied operational patterns in 1000+ SMEs across India</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">✓</span>
                  <p className="text-xs md:text-sm text-zinc-400">Built systems that save founders 6-8 hours per week</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">✓</span>
                  <p className="text-xs md:text-sm text-zinc-400">Works with businesses of all sizes and industries</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">✓</span>
                  <p className="text-xs md:text-sm text-zinc-400">Focused on practical, implementable solutions - not theory</p>
                </div>
              </div>

              <p className="text-xs md:text-sm text-zinc-500 italic pt-4">
                "Most SME founders are stuck because they're solving the wrong problem. Let's find what's actually broken and fix it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us / Social Links */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-black border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Connect With Us</h3>
              <p className="text-sm text-zinc-400">Have questions? Reach out on any platform.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917589450517"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-green-500 hover:text-green-500 transition cursor-pointer"
              >
                <MessageCircle size={24} />
                <span className="text-xs font-bold">WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/systems_for_sme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-pink-500 hover:text-pink-500 transition cursor-pointer"
              >
                {/* <Instagram size={24} /> */}
                <span className="text-xs font-bold">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/raghavkansal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-blue-500 hover:text-blue-500 transition cursor-pointer"
              >
                {/* <Linkedin size={24} /> */}
                <span className="text-xs font-bold">LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href="mailto:raghav@systemsforsme.com"
                className="flex flex-col items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
              >
                <Mail size={24} />
                <span className="text-xs font-bold">Email</span>
              </a>
            </div>

            <div className="text-xs text-zinc-500">
              <p>Direct WhatsApp: <a href="tel:+917589450517" className="text-yellow-400 hover:underline">+91 7589 450517</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 lg:px-16 py-8 text-zinc-500 text-xs md:text-sm border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Systems for SME. All rights reserved.</p>
          <p>Built for Indian SME founders who want to stop doing everything themselves.</p>
        </div>
      </footer>
    </div>
  );
}
