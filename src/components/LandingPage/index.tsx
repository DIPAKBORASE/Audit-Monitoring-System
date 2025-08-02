import React, { useState } from 'react';
import { ChevronRight, Users, BarChart3, Shield, Zap, CheckCircle, Star, Menu, X } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate({ to: '/auth/login' });
  };

  const handleRegister = () => {
    // You can create a separate register route or handle registration logic
    // navigate({ to: '/auth/register' }); // or '/auth/login' if you handle both in same route
  };

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      title: "ESG Reporting",
      description: "Generate multiple ESG reports via one-time data collection, meeting requirements for regulators and investors."
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      title: "AI-Powered Insights",
      description: "AI-powered automation for ESG workflows and actionable insights from your sustainability data."
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Always Audit Ready",
      description: "Automated audit trails to ensure transparency and compliance readiness at all times."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Expert Guidance",
      description: "Expert support from data collection to reporting, with end-to-end handholding without any hassle."
    }
  ];

  const testimonials = [
    {
      name: "Atul Khanapurkar",
      role: "Executive Director, Shriram Pistons & Rings",
      content: "Oren is very professional, and they deliver their services and commitments in a time-bound manner. The products they have developed are absolutely topnotch and it caters to all our requirements",
      rating: 5
    },
    {
      name: "Vidhi Thukral",
      role: "Senior Manager, Max Financial Services",
      content: "Oren immensely helped us with our Scope 1 and Scope 2 reporting. Overall, the team is well updated and very supportive - and they were always just a call away.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">
                SustainCorp
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition">Contact</a>
              <button 
                onClick={handleLogin}
                className="text-gray-700 hover:text-emerald-600 transition font-medium"
              >
                Login
              </button>
              <button 
                onClick={handleRegister}
                className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
              >
                Register
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Features</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Testimonials</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</a>
                <button 
                  onClick={handleLogin}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Login
                </button>
                <button 
                  onClick={handleRegister}
                  className="block w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 mt-2"
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              All Your Sustainability Data and 
              <span className="text-emerald-600"> Stakeholders Connected</span> in One Place
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate multiple ESG reports via one-time data collection, seamlessly meeting requirements for regulators, customers, investors, and global frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleRegister}
                className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition duration-200 flex items-center"
              >
                Get Started Free
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 transition duration-200">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Blackstone', 'Warburg Pincus', 'Max Financial', 'Shriram Group', 'ADF Foods'].map((company) => (
              <div key={company} className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-gray-700 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover the SustainCorp Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wherever you are in your sustainability journey, we help you advance with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Leader Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sustainability AI Leader
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            AI-powered insights from your sustainability data — instantly understand what's driving emissions, waste, water, and energy trends across every chart.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Summarise Data</h3>
              <p className="opacity-90">Summarise data across all questions in seconds</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Auto-populate</h3>
              <p className="opacity-90">Auto-populate data from uploaded documents</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Instant Insights</h3>
              <p className="opacity-90">Get actionable insights instantly from your data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from leaders who've transformed their sustainability journey with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Go Beyond Reporting. Start Driving Real Impact.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of companies already using our platform to streamline their sustainability reporting and drive meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRegister}
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition duration-200"
            >
              Start Your Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-4">SustainCorp</div>
              <p className="text-gray-400">
                Empowering businesses to drive sustainability and ESG excellence through innovative technology and expert guidance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <p>ESG Reporting</p>
                <p>Carbon Footprint</p>
                <p>Supply Chain</p>
                <p>AI Insights</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <p>About Us</p>
                <p>Careers</p>
                <p>Partners</p>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-gray-400">
                <p>Documentation</p>
                <p>Support</p>
                <p>Blog</p>
                <p>Webinars</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SustainCorp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}