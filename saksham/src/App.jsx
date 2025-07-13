
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import {
  Heart,
  Users,
  BookOpen,
  MessageCircle,
  Star,
  Globe,
  Volume2,
  Eye,
  Accessibility,
  Menu,
  X,
  ChevronRight,
  Play,
  Mic,
  Headphones,
  UserCheck,
  Award,
  Shield,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const languages = {
    en: {
      title: 'Saksham: Voices of Bharat',
      subtitle: 'Being different shouldn\'t mean being alone',
      hero: 'Empowering 3 crore+ specially-abled individuals across India',
      description: 'A personalized, AI-powered, community-driven platform where specially-abled individuals can access inclusive learning, connect with mentors, and share their stories.',
      cta: 'Join Our Community',
      features: 'Our Features',
      community: 'Community',
      education: 'Education',
      mentorship: 'Mentorship',
      aiSupport: 'AI Support',
      stories: 'Suno meri kahani..(Success Stories)',
      about: 'About Us',
      contact: 'Contact',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      watchVideo: 'Watch Video',
      listenAudio: 'Listen Audio',
      readText: 'Read Text',
      problem: 'The Problem',
      solution: 'Our Solution',
      impact: 'Our Impact',
      testimonials: 'What Our Community Says',
      footer: 'Empowering voices, building futures'
    },
    hi: {
      title: 'सक्षम: भारत की आवाज़ें',
      subtitle: 'अलग होने का मतलब अकेले होना नहीं है',
      hero: 'भारत भर के 3 करोड़+ विशेष रूप से सक्षम व्यक्तियों को सशक्त बनाना',
      description: 'एक व्यक्तिगत, AI-संचालित, समुदाय-संचालित मंच जहाँ विशेष रूप से सक्षम व्यक्ति समावेशी शिक्षा प्राप्त कर सकते हैं, गुरुओं से जुड़ सकते हैं, और अपनी कहानियाँ साझा कर सकते हैं।',
      cta: 'हमारे समुदाय में शामिल हों',
      features: 'हमारी विशेषताएं',
      community: 'समुदाय',
      education: 'शिक्षा',
      mentorship: 'मार्गदर्शन',
      aiSupport: 'AI सहायता',
      stories: 'सफलता की कहानियां',
      about: 'हमारे बारे में',
      contact: 'संपर्क',
      getStarted: 'शुरू करें',
      learnMore: 'और जानें',
      watchVideo: 'वीडियो देखें',
      listenAudio: 'ऑडियो सुनें',
      readText: 'पाठ पढ़ें',
      problem: 'समस्या',
      solution: 'हमारा समाधान',
      impact: 'हमारा प्रभाव',
      testimonials: 'हमारे समुदाय का कहना है',
      footer: 'आवाज़ों को सशक्त बनाना, भविष्य का निर्माण'
    }
  };

  const t = languages[currentLanguage];

  const handleFeatureClick = (feature) => {
    if (feature === t.aiSupport) {
      // 🎯 Open the chatbot in a new tab
      window.open(
        "https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/02/12/20250702124622-1P26ESV0.json",
        "_blank"
      );
      return;
    }
       if (feature === t.mentorship) {
    // 🎯 Open the career counselling mentorship link in a new tab
    window.open(
      "https://prachi9506.github.io/career-counselling-/",
      "_blank"
    );
    return;
  }
   if (feature === t.community) {
    // 🎯 Open the Google Form for community feedback
    window.open(
      "https://docs.google.com/forms/d/1SyD6tfj4ljiSGC8sBZwf3QoQSrkgUbWqBFbAgwyvMq0/edit",
      "_blank"
    );
    return;
  }
    if (feature === t.education) {
    // 🎯 Education - Text-to-Voice App
    window.open(
      "https://text2voice-1.onrender.com/",
      "_blank"
    );
    return;
  }

    // Default toast for other features
    toast({
      title: (
        <>
          🚧 यह सुविधा अभी तक लागू नहीं की गई है—लेकिन चिंता न करें!
          <br />
          This feature is not implemented yet—but don’t worry! You can request it in your next prompt! 🚀
        </>
      ),
      duration: 3000,
    });
  };


  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problem', 'solution', 'features', 'stories', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 pattern-paisley">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-orange-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                {t.title}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'problem', 'solution', 'features', 'stories', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${activeSection === section ? 'text-orange-600' : 'text-gray-700'
                    }`}
                >
                  {t[section] || section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="text-sm border border-orange-200 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>

              {/* <Button
                onClick={() => handleFeatureClick('join')}
                className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white"
              >
                {t.getStarted}
              </Button> */}

              <Button
                  onClick={() => window.location.href = 'https://docs.google.com/forms/d/1SyD6tfj4ljiSGC8sBZwf3QoQSrkgUbWqBFbAgwyvMq0/edit'}
                  className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white"
                >
                  {t.getStarted}
                </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-orange-200"
            >
              <div className="px-4 py-2 space-y-2">
                {['home', 'problem', 'solution', 'features', 'stories', 'about'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                  >
                    {t[section] || section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
                <div className="px-3 py-2">
                  <select
                    value={currentLanguage}
                    onChange={(e) => setCurrentLanguage(e.target.value)}
                    className="w-full text-sm border border-orange-200 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                  </select>
                </div>
                <Button
                  onClick={() => window.location.href = 'https://docs.google.com/forms/d/1SyD6tfj4ljiSGC8sBZwf3QoQSrkgUbWqBFbAgwyvMq0/edit'}
                  className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white"
                >
                  {t.getStarted}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-green-600 bg-clip-text text-transparent animate-gradient">
                  {t.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-2 font-medium">
                "{t.subtitle}"
              </p>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
                {t.hero}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                {t.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => window.location.href = 'https://text2voice-1.onrender.com/'}
                  variant="outline"
                  size="lg"
                  className="border-green-300 text-green-600 hover:bg-green-50"
                >
                  Listen Textbooks
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>


                <Button
                  onClick={() => window.location.href = 'https://docs.google.com/forms/d/1SyD6tfj4ljiSGC8sBZwf3QoQSrkgUbWqBFbAgwyvMq0/edit'}
                  variant="outline"
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-3 text-lg animate-pulse-glow"
                >
                  Join Our Community
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                   onClick={() => window.open('https://youtu.be/fBnAMUkNM2k?feature=shared', '_blank')}
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    {t.watchVideo}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-4xl">
                <img
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl animate-float"
                  alt="Diverse group of specially-abled individuals using technology and learning together"
                  src="https://images.unsplash.com/photo-1699263644834-be3f11c8e9a8" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.problem}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In Bharat, 3 crore+ specially-abled individuals face significant challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Limited Educational Access",
                description: "Lack of inclusive education and career guidance tailored to individual needs"
              },
              {
                icon: Globe,
                title: "Language Barriers",
                description: "Many cannot access English or text-based materials, limiting their learning opportunities"
              },
              {
                icon: Heart,
                title: "Mental Health Gap",
                description: "Insufficient mental health support and peer motivation systems"
              },
              {
                icon: Star,
                title: "No Role Models",
                description: "Minimal exposure to successful individuals who've overcome similar challenges"
              },
              {
                icon: Users,
                title: "Isolation",
                description: "Little to no platform to speak, connect, or feel heard by their community"
              },
              {
                icon: Target,
                title: "Unrealized Potential",
                description: "Loss of confidence and unrealized potential in millions of lives"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-red-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.solution}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A personalized, AI-powered, community-driven platform designed for inclusion
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
                alt="AI-powered learning platform interface showing multilingual accessibility features"
                src="https://images.unsplash.com/photo-1675557009483-e6cf3867976b" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Volume2,
                  title: "Multi-format Learning",
                  description: "Access content in audio, visual, and simplified formats in local Indian languages"
                },
                {
                  icon: MessageCircle,
                  title: "AI Assistant",
                  description: "Get help from an AI chatbot trained on Indian disability schemes and support systems"
                },
                {
                  icon: Users,
                  title: "Story Sharing",
                  description: "Share your story or hear from others through video, audio, or text formats"
                },
                {
                  icon: UserCheck,
                  title: "Mentor Network",
                  description: "Connect with real achievers with disabilities from India and worldwide"
                },
                {
                  icon: Shield,
                  title: "Safe Space",
                  description: "Discuss struggles anonymously or publicly in a secure, supportive environment"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.features}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed for accessibility and empowerment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                {
                icon: MessageCircle,
                title: t.aiSupport,
                description: "24/7 AI assistance for guidance and support",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50"
              },
               {
                icon: UserCheck,
                title: t.mentorship,
                description: "Learn from successful role models and achievers",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50"
              },
               {
                icon: Users,
                title: t.community,
                description: "Connect with peers and share experiences safely",
                color: "from-green-500 to-teal-500",
                bgColor: "from-green-50 to-teal-50"
              },
              {
                icon: BookOpen,
                title: t.education,
                description: "NCERT-aligned voice-based education in local languages",
                color: "from-blue-500 to-purple-500",
                bgColor: "from-blue-50 to-purple-50"
              },
        
           
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${feature.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                onClick={() => handleFeatureClick(feature.title)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform"
                >
                  {t.learnMore}
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.stories}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our community members who've transformed their lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai, Maharashtra",
                story: "From struggling with visual impairment to becoming a software developer through our platform's audio-based coding courses.",
                achievement: "Software Developer at Tech Company",
                image: "Young Indian woman with visual impairment using assistive technology at computer"
              },
              {
                name: "Rajesh Kumar",
                location: "Patna, Bihar",
                story: "Overcame hearing challenges to become a digital artist using our visual learning modules and mentor support.",
                achievement: "Freelance Digital Artist",
                image: "Young Indian man with hearing aid creating digital art on tablet"
              },
              {
                name: "Anita Devi",
                location: "Jaipur, Rajasthan",
                story: "Started her own handicraft business after connecting with mentors and learning business skills through our platform.",
                achievement: "Successful Entrepreneur",
                image: "Middle-aged Indian woman with mobility aid showcasing traditional handicrafts"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <img
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                    alt={`Portrait of ${story.name}`}
                    src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{story.location}</p>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                    {story.achievement}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >


            {/*             <Button 
              onClick={() =>  handleFeatureClick('more-stories')}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              View More Stories
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button> */}

            <Button
              onClick={() => window.location.href = '/story.html'}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              View More Stories
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>




          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.impact}
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              "From silence to strength" - Transforming lives across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Emotional Empowerment",
                description: "Users realize they're not alone and see people like them succeeding and thriving",
                stat: "95% report increased confidence"
              },
              {
                icon: BookOpen,
                title: "Education Access",
                description: "Children in remote areas get voice-based education aligned with NCERT standards",
                stat: "50,000+ students reached"
              },
              {
                icon: Users,
                title: "Real Community",
                description: "A thriving network of support, mentorship, and shared experiences",
                stat: "10,000+ active members"
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                <p className="text-indigo-200 mb-4">{impact.description}</p>
                <div className="text-2xl font-bold text-yellow-400">{impact.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.about}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Saksham: Voices of Bharat is more than a platform—it's a movement. We believe that every individual, regardless of their abilities, deserves access to education, community, and opportunities to thrive.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to break down barriers, build bridges, and create a more inclusive India where 3 crore+ specially-abled individuals can realize their full potential.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Accessibility, title: "Fully Accessible", description: "Designed with accessibility at its core" },
                  { icon: Globe, title: "Multilingual", description: "Available in 10+ Indian languages" },
                  { icon: Shield, title: "Safe & Secure", description: "Privacy-first approach to user data" },
                  { icon: Zap, title: "AI-Powered", description: "Cutting-edge AI for personalized support" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                alt="Team of diverse individuals working together on inclusive technology solutions"
                src="https://images.unsplash.com/photo-1686545684554-2694c9cee9e6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of a movement that's transforming lives across India. Your voice matters, your story inspires, and your potential is limitless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                  onClick={() => window.location.href = 'https://docs.google.com/forms/d/1SyD6tfj4ljiSGC8sBZwf3QoQSrkgUbWqBFbAgwyvMq0/edit'}
                  variant="outline"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              <Button
                onClick={() => handleFeatureClick('register')}
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Request Demo
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">{t.title}</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {t.footer}
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Volume2, label: "Audio Support" },
                  { icon: Eye, label: "Visual Support" },
                  { icon: Accessibility, label: "Full Accessibility" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                {['Education', 'Community', 'Mentorship', 'AI Support'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleFeatureClick(item.toLowerCase())}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                {['Help Center', 'Accessibility', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleFeatureClick(item.toLowerCase().replace(' ', '-'))}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Saksham: Voices of Bharat. Made with ❤️ for an inclusive India by Team NextGen Bharat.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;
