import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Mail, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Heart, 
  Calendar, 
  Shield, 
  Smile, 
  Users, 
  Award, 
  Sparkles, 
  Languages, 
  MessageSquare, 
  ArrowUpRight, 
  ChevronRight, 
  Menu,
  X,
  Activity,
  HeartIcon,
  Video,
  FileCheck,
  Zap,
  Check,
  Info,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Calculator,
  Plus,
  Minus,
  FileText,
  AlertCircle,
  RefreshCw,
  Download,
  ClipboardList
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Real dentist team from offficial google maps/website context
const team = [
  {
    name: "Dr. Rewant Raj Bhandari",
    role: "Senior Consultant Prosthodontist",
    details: "NMC No: 15638",
    status: "Active in OR-1 (Accepting Consults)",
    statusType: "active",
    bio: "Specializes in crowns, bridges, dental implants, and full mouth rehabilitations, ensuring maximum functionality and aesthetic perfection.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Alisha Shrestha",
    role: "Consultant Periodontist",
    details: "NMC No: 17218",
    status: "In Clinic (Operating Room 2)",
    statusType: "active",
    bio: "Expert in gum therapies, cosmetic gum contouring, and advanced pocket management using high-end precision techniques.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Pralab Pradhan",
    role: "MDS in Oral & Maxillofacial Surgeon",
    details: "NMC No: 16339",
    status: "Surgical Suite (In Session)",
    statusType: "busy",
    bio: "Pioneering surgeon managing complex wisdom teeth extraction, dental implant placement, and minor oral corrective surgeries.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Prakash Paudel",
    role: "MDS in Orthodontics & Dentofacial Orthopedics",
    details: "NMC No: 12033",
    status: "Active in Aligners Consultation Board",
    statusType: "active",
    bio: "Transforming alignments with modern clear aligners, high-grade ceramic braces, and child jaw orthopedics.",
    image: "https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Nisha Neupane",
    role: "Lead Dental Surgeon",
    details: "NMC No: 38966",
    status: "In Clinic (Pediatric Play Checkups)",
    statusType: "active",
    bio: "Passionate about conservative restorations, pediatric dentistry, and painless dental root canal treatments.",
    image: "https://images.unsplash.com/photo-1622961139476-8795304897f2?auto=format&fit=crop&q=80&w=400"
  }
];

const pillars = [
  {
    icon: Smile,
    title: "Patient-Centered Comfort",
    description: "Every treatment starts with deep listening. We build strong relationships with active empathy, making our clinic stress-free for toddlers and seniors alike."
  },
  {
    icon: Users,
    title: "Multi-Disciplinary Specialists",
    description: "Our board-certified dentists specialize in Orthodontics, Prosthodontics, Periodontics, and Oral Surgery to cover all user needs in one single space."
  },
  {
    icon: Shield,
    title: "World-Class Sterilization",
    description: "Strict multi-tiered sterilization using class-B autoclaves, chemical indicators, and pristine disposable materials for impeccable hygienic protection."
  },
  {
    icon: Sparkles,
    title: "Painless Cosmetic Magic",
    description: "From custom computer-designed smile alignments to immediate teeth whitening treatments that restore confidence within just one gentle session."
  },
  {
    icon: Languages,
    title: "Dental Tourism for Expats & NRNs",
    description: "Cost-effective, highly premium packages designed for Non-Resident Nepalese and world travelers exploring Kathmandu without sacrificing quality."
  },
  {
    icon: Award,
    title: "Advanced Clinical Apparatus",
    description: "Utilizing modern silent rotary turbines, macro dental imaging, and digital radiography with lowest-possible radiation standards."
  }
];

const milestones = [
  {
    year: "2015",
    title: "The Vision Born",
    description: "Established our initial state-of-the-art clinic on Tokha Road, determined to deliver clinical perfection at realistic pricing."
  },
  {
    year: "2018",
    title: "Specialist Integration",
    description: "Brought MDS experts on board for Orthodontics and Oral Surgery, avoiding the need for outside referrals."
  },
  {
    year: "2021",
    title: "Digital Tech Upgrade",
    description: "Adoption of ultra-quiet rotary systems, micro endodontics, and computerized implant diagnostic software."
  },
  {
    year: "2024",
    title: "Dental Tourism Peak",
    description: "Inaugurated dedicated coordinate plans for international guests visiting Nepal, with virtual digital pre-checks."
  },
  {
    year: "2026",
    title: "Grande Chowk Landmark",
    description: "Celebrating thousands of pristine, certified smile improvements as the primary reference clinic in northern Kathmandu."
  }
];

const reviews = [
  {
    id: 1,
    name: "Ramesh Baskota",
    role: "NRN living in Sydney, Australia",
    comment: "I got full dental implants at Hamro Dental. The treatment was absolutely world-class, painless, and cost me a fraction of what Melbourne clinics quoted. Booking pre-consultations on WhatsApp made everything seamless!",
    rating: 5,
    tag: "Dental Implants"
  },
  {
    id: 2,
    name: "Prerna Manandhar",
    role: "Local Kathmandu Resident",
    comment: "Dr. Alisha and Dr. Rewant are amazing. They analyzed my root dental health carefully and explained every step. Best hygiene standards I have seen in Kathmandu. Extremely clean and professional!",
    rating: 5,
    tag: "Gum Therapy & Restorations"
  },
  {
    id: 3,
    name: "Alexander Wright",
    role: "Expat living in Maharajgunj",
    comment: "Painless Wisdom Tooth removal done by Dr. Pralab. He was super professional, calm, and had incredible surgical skill. The post-op recovery assistance was gold standard.",
    rating: 5,
    tag: "Oral Surgery"
  }
];

const faqs = [
  {
    q: "Why is dental work at Hamro Dental more cost-effective for international visitors?",
    a: "Our clinical equipment, expert degrees, and material qualities are fully comparable with premium clinics in Europe or Australia. However, operational and clinician costs in Nepal are much lower, allowing us to pass major savings of up to 70% onto our patients."
  },
  {
    q: "How can I book a remote video consult before traveling to Kathmandu?",
    a: "Simply select the 'International Expat / NRN' option in our booking form, or text our coordinator directly via WhatsApp. We will set up a Zoom or WhatsApp Video consultation to analyze your diagnostic reports beforehand."
  },
  {
    q: "What sterilization protocols are practiced within your local clinic?",
    a: "We follow international OSHA guidelines. All key dental handpieces are vacuum autoclaved at high pressure, wrapped in individual sterile bags, and unpacked directly in front of you."
  },
  {
    q: "Do you offer solutions for children or dental-anxious individuals?",
    a: "Yes! Dr. Nisha and our clinical dental surgeons are specifically certified in gentle pediatric therapies, and we practice gradual desensitization for highly nervous patients to build long-term clinic trust."
  }
];

const treatmentCatalog = [
  {
    id: "implants",
    name: "Premium Dental Implant Suite",
    category: "Restorative & Surgical",
    nprRange: "Rs. 65,000 - 95,000",
    nprEstimate: 80000,
    usdEstimate: 600,
    globalCostAud: 3500,
    globalCostUsd: 2500,
    globalCostGbp: 1800,
    description: "State-of-the-art pure titanium implants, custom abutment, and premium solid porcelain crown. Guided by clinical CAD diagnostics.",
    duration: "2-3 sessions across 5 active days"
  },
  {
    id: "braces",
    name: "Orthodontics Aligners & Ceramic Braces",
    category: "Alignment Correction",
    nprRange: "Rs. 45,000 - 85,000",
    nprEstimate: 65000,
    usdEstimate: 490,
    globalCostAud: 4500,
    globalCostUsd: 3200,
    globalCostGbp: 2400,
    description: "Medical-grade custom aesthetic and transparent dental aligners by Dr. Prakash Paudel. Full orthodontic assessment diagnostic checks.",
    duration: "12-18 months gradual check plan"
  },
  {
    id: "rootcanal",
    name: "Computerized Painless Root Canal (RCT)",
    category: "Micro Endodontics",
    nprRange: "Rs. 6,500 - 12,000",
    nprEstimate: 9200,
    usdEstimate: 70,
    globalCostAud: 1200,
    globalCostUsd: 850,
    globalCostGbp: 650,
    description: "Precision micro endodontic rotary filing, apex tracking, full disinfection, and temporary therapeutic crown sealing.",
    duration: "1-2 session checks"
  },
  {
    id: "whitening",
    name: "Teeth Whitening & Laser Scaling Suite",
    category: "Aesthetics & Cosmetics",
    nprRange: "Rs. 10,000 - 18,000",
    nprEstimate: 13500,
    usdEstimate: 102,
    globalCostAud: 900,
    globalCostUsd: 650,
    globalCostGbp: 500,
    description: "Professional medical whitening therapy that lifts deep enamel scaling and stains in a completely comfortable 60-minute chair visit.",
    duration: "Single 60-minute comfortable session"
  },
  {
    id: "crowns",
    name: "Solid Computer-Milled Zirconia Crown",
    category: "Prosthodontics",
    nprRange: "Rs. 15,000 - 25,000",
    nprEstimate: 19500,
    usdEstimate: 147,
    globalCostAud: 1550,
    globalCostUsd: 1100,
    globalCostGbp: 800,
    description: "CAD/CAM 3D computerized milled porcelain crowns. Perfect translucency, heavy endurance matching natural tooth physics.",
    duration: "2 clinical checks across 3 days"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(milestones.length - 1);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Form Fields State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [patientAge, setPatientAge] = useState<"Adult" | "Child">("Adult");
  const [serviceRequested, setServiceRequested] = useState("General Smile Checkup");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning Session (09:00 AM - 01:00 PM)");
  const [briefConcern, setBriefConcern] = useState("");
  const [geographicType, setGeographicType] = useState<"Local" | "International">("Local");

  // Interactive Cost Estimator states
  const [estimatorTreatmentId, setEstimatorTreatmentId] = useState("implants");
  const [estimatorQuantity, setEstimatorQuantity] = useState(1);
  const [estimatorCurrency, setEstimatorCurrency] = useState<"USD" | "AUD" | "GBP" | "NPR">("USD");

  // Form Error & Submission success states
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  const [successTicket, setSuccessTicket] = useState<any>(null);

  const currentEstimatorTreatment = treatmentCatalog.find(t => t.id === estimatorTreatmentId) || treatmentCatalog[0];

  const getEstimatedPrice = () => {
    const qty = Math.max(1, estimatorQuantity);
    let nepalEx = 0;
    let foreignEx = 0;
    let label = "";

    if (estimatorCurrency === "NPR") {
      nepalEx = currentEstimatorTreatment.nprEstimate * qty;
      // Comparative is computed relative to USD global cost turned into NPR equivalent
      foreignEx = currentEstimatorTreatment.globalCostUsd * 133 * qty; // standard approx rate
      label = "Rs.";
    } else if (estimatorCurrency === "USD") {
      nepalEx = currentEstimatorTreatment.usdEstimate * qty;
      foreignEx = currentEstimatorTreatment.globalCostUsd * qty;
      label = "$";
    } else if (estimatorCurrency === "AUD") {
      // computed based on exchange proxy
      nepalEx = Math.round(currentEstimatorTreatment.usdEstimate * 1.5 * qty);
      foreignEx = currentEstimatorTreatment.globalCostAud * qty;
      label = "A$";
    } else if (estimatorCurrency === "GBP") {
      nepalEx = Math.round(currentEstimatorTreatment.usdEstimate * 0.78 * qty);
      foreignEx = currentEstimatorTreatment.globalCostGbp * qty;
      label = "£";
    }

    const savings = Math.max(0, foreignEx - nepalEx);
    const savingsPercent = foreignEx > 0 ? Math.round((savings / foreignEx) * 100) : 0;

    return {
      nepalCost: nepalEx.toLocaleString(),
      globalCost: foreignEx.toLocaleString(),
      savings: savings.toLocaleString(),
      percent: savingsPercent,
      label
    };
  };

  const applyEstimateToBooking = () => {
    const calc = getEstimatedPrice();
    // find correct service option name that matches treatment selection
    let targetService = "General Smile Checkup";
    if (estimatorTreatmentId === "implants") targetService = "Dental Implants Placement";
    if (estimatorTreatmentId === "braces") targetService = "Orthodontics Aligners / Braces";
    if (estimatorTreatmentId === "rootcanal") targetService = "Root Canal Treatment";
    if (estimatorTreatmentId === "whitening") targetService = "Cosmetic Teeth Whitening";
    if (estimatorTreatmentId === "crowns") targetService = "Crown and Bridges Restoration";

    setServiceRequested(targetService);
    setBriefConcern(`Hi Hamro Dental, I have calculated a pricing estimate using your NMC Cost Estimator. Selected Plan: ${currentEstimatorTreatment.name} for ${estimatorQuantity} dental units. Estimated Clinic Cost: ${calc.label} ${calc.nepalCost} (Saves us ${calc.percent}% vs global average). Please confirm our slot!`);
    
    // Smooth scroll down to booking section
    scrollToAnchor("booking-section");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formName.trim()) {
      errors.name = "Full name is required to log your clinical queue.";
    }
    if (!formPhone.trim()) {
      errors.phone = "Phone or Mobile number is required.";
    } else if (formPhone.length < 8) {
      errors.phone = "Provide a valid phone number (minimum 8 digits).";
    }
    if (formEmail && !/\S+@\S+\.\S+/.test(formEmail)) {
      errors.email = "Please input a valid email layout details.";
    }
    if (!preferredDate) {
      errors.date = "Please specify your preferred target date.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      const formEl = document.getElementById("clinical-form-anchor");
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setValidationErrors({});
    
    // Simulate real local database scheduling
    setSuccessTicket({
      id: "HD-" + Math.floor(100000 + Math.random() * 900000),
      name: formName,
      phone: formPhone,
      email: formEmail || "Direct Contact Enabled",
      patientAge,
      serviceRequested,
      preferredDate,
      preferredTime,
      briefConcern: briefConcern || "Routine dental inspection setup",
      geographicType: geographicType === "International" ? "Overseas Traveler / Expat Coordinator Assigned" : "Local Walk-In / Preferred Local Scheduling",
      clinicLocation: "Grande Chowk, Tokha Road (Near Grande International Hospital), Kathmandu, Nepal"
    });
  };

  const clearTicket = () => {
    setSuccessTicket(null);
    setFormName("");
    setFormPhone("");
    setFormEmail("");
    setBriefConcern("");
    setPreferredDate("");
  };

  const scrollToAnchor = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#334E68] font-sans antialiased selection:bg-[#F2994A] selection:text-white">
      
      {/* 1. TOP DIRECT CHANNELS & EMERGENCY COMMS BAR */}
      <div className="bg-[#334E68] text-[#FAF9F6] py-2 px-4 text-xs md:text-sm border-b border-sky-950 font-medium z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a href="tel:+9779803427273" className="flex items-center gap-1.5 hover:text-[#F2994A] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F2994A]" />
              <span>Mobile Support: +977 9803427273</span>
            </a>
            <span className="text-slate-500 hidden md:inline">|</span>
            <a href="tel:+9779860240612" className="flex items-center gap-1.5 hover:text-[#F2994A] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F2994A]" />
              <span>Emergency Help: +977 9860240612</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/9779803427273" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 bg-emerald-600/85 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold transition-all"
            >
              <MessageSquare className="w-3 h-3 text-white fill-current" />
              WhatsApp Online Support
            </a>
            <span className="text-[11px] font-bold text-amber-400 bg-[#FAF9F6]/10 px-2 py-0.5 rounded border border-amber-400/20">
              📍 Tokha Road, Kathmandu
            </span>
          </div>

        </div>
      </div>

      {/* 2. STICKY STYLED NAVIGATION HEADER */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FDFDFB]/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-[#FDFDFB] py-5 border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Authentic Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="bg-[#334E68] text-white p-2.5 rounded-xl group-hover:bg-[#F2994A] transition-colors duration-300">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xl font-display font-black text-[#334E68] tracking-tight leading-none group-hover:text-[#F2994A] transition-colors">
                HAMRO <span className="text-[#F2994A]">DENTAL</span>
              </span>
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                Grande Chowk • Clinic of Excellence
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Our Philosophy', id: 'pillars' },
              { label: 'Specialists', id: 'team' },
              { label: 'Expat Tourism', id: 'tourism' },
              { label: 'Milestones', id: 'milestones' },
              { label: 'Parent Reviews', id: 'reviews' },
              { label: 'FAQs', id: 'faqs' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToAnchor(link.id)}
                className="px-3.5 py-2 text-sm font-bold text-[#334E68] hover:text-[#F2994A] transition-colors rounded-lg hover:bg-[#334E68]/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                setGeographicType("International");
                scrollToAnchor("booking-section");
              }}
              className="bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[#334E68] px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <Languages className="w-3.5 h-3.5 text-sky-600" />
              <span>International Inquiry</span>
            </button>
            
            <button
              onClick={() => scrollToAnchor("booking-section")}
              className="bg-[#F2994A] hover:bg-[#d67e2a] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-sm shadow-[#F2994A]/25 transition-all cursor-pointer"
            >
              Book Appt
            </button>
          </div>

          {/* Mobile hamburger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#334E68] hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-[#FDFDFB] border-b border-stone-200 shadow-xl z-50 lg:hidden p-5"
            >
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Our Philosophy', id: 'pillars' },
                  { label: 'Doctors & Specialists', id: 'team' },
                  { label: 'Dental Tourism Desk', id: 'tourism' },
                  { label: 'Our Milestones', id: 'milestones' },
                  { label: 'Patient Testimonials', id: 'reviews' },
                  { label: 'FAQs Accordion', id: 'faqs' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToAnchor(item.id)}
                    className="w-full text-left py-2 px-3 hover:bg-stone-50 rounded-lg font-bold text-sm text-[#334E68]"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="border-t border-stone-200 pt-3 mt-1 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setGeographicType("International");
                      scrollToAnchor("booking-section");
                    }}
                    className="w-full py-3 px-4 border border-[#F2994A] text-[#F2994A] font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-amber-50"
                  >
                    <Languages className="w-4 h-4" />
                    <span>International / Expat Program</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToAnchor("booking-section");
                    }}
                    className="w-full py-3 px-4 bg-[#F2994A] text-white font-bold text-xs rounded-xl text-center"
                  >
                    Book Appt Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION */}
      <section id="home" className="pt-8 pb-20 md:py-24 bg-gradient-to-b from-[#FDFDFB] to-[#F2994A]/5 relative overflow-hidden">
        {/* Decorative backdrop blobs */}
        <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-[#FAF9F6]/40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-8 left-[10%] w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 border border-amber-200/50 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F2994A]" />
              Kathmandu's Patient-Preferred Smile Clinicians
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#334E68] leading-tight tracking-tight">
              Clinical Excellence for <br className="hidden md:inline" />
              <span className="text-[#F2994A] relative inline-block">
                Healthy, Proud Smiles
                <svg className="absolute left-0 -bottom-1 w-full h-2.5 text-amber-200" fill="currentColor" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-[#334E68]/90 text-sm md:text-md leading-relaxed font-sans max-w-xl">
              Welcome to <strong>Hamro Dental Clinic</strong> at Grande Chowk on Tokha Road. We deliver state-of-the-art restorative, ortho, surgical, and implant procedures beneath one warm ceiling. Certified specialist dentists look after toddlers' dental anxiety and complex adult dental tourism needs with deep empathy and uncompromising safety standards.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => scrollToAnchor("booking-section")}
                className="bg-[#F2994A] hover:bg-[#e28328] text-white px-8 py-4 rounded-xl text-sm font-black shadow-lg shadow-[#F2994A]/30 hover:shadow-xl hover:shadow-[#F2994A]/40 transition-all duration-300 text-center flex items-center justify-center gap-2.5 cursor-pointer relative overflow-hidden group hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <Calendar className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span>Schedule Online Appointment</span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={() => scrollToAnchor("team")}
                className="bg-white/90 hover:bg-stone-50 text-[#334E68] border-2 border-[#334E68]/15 hover:border-[#334E68]/40 px-7 py-4 rounded-xl text-sm font-extrabold transition-all duration-300 text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span>Meet Resident Doctors</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Google mapping metadata summary block */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap gap-y-3 gap-x-6 items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold text-[#334E68] ml-1">4.6 Aggregate Rating</span>
                </div>
              </div>
              <div className="h-4 w-px bg-stone-300 hidden sm:block"></div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F2994A]" />
                Grande Chowk, Tokha Road, Kathmandu
              </div>
            </div>

          </div>

          {/* Realistic UI Card with dentist background image and quick clinic info */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -inset-1 bg-[#F2994A]/10 rounded-3xl blur-md"></div>
            <div className="relative bg-white border border-stone-200 rounded-2xl p-4 shadow-xl">
              
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-inner group">
                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=650"
                  alt="Hamro Dental modern practice facility with ergonomic clinical setup"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter saturate-[1.05]"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-stone-100 shadow-md transform group-hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[#334E68]">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#334E68]">Accepting Walk-ins & Appointments</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Located near Grande International Hospital gate, Kathmandu</p>
                </div>
              </div>

              {/* Free digital coordinate details */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center">
                  <Heart className="w-5 h-5 text-rose-500 mx-auto mb-1 fill-rose-500/20" />
                  <span className="block text-xs font-black text-[#334E68]">Family Welcoming</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Painless pediatric therapies</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center">
                  <Languages className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                  <span className="block text-xs font-black text-[#334E68]">Global Standards</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Premium medical tourism</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. KEY METRICS STATISTICAL PANEL */}
      <section className="bg-[#334E68] text-white py-12 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-[#F2994A] tracking-tight">10+</div>
              <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mt-1.5">Years of experience</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Active community trust built</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-[#F2994A] tracking-tight">45,000+</div>
              <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mt-1.5">Consults Completed</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Perfect smile outcomes delivered</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-[#F2994A] tracking-tight">200+</div>
              <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mt-1.5">International Patients</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Cost-Effective tourism coordination</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-[#F2994A] tracking-tight">7+</div>
              <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mt-1.5">Certified Specialists</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Active NMC clinical registrations</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SIX PILLARS OF DENTAL CARE EXCELLENCE */}
      <section id="pillars" className="py-20 bg-gradient-to-b from-stone-50 to-[#FDFDFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#F2994A] font-extrabold uppercase text-xs tracking-widest block">Core Care Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-[#334E68] tracking-tight">
              Our 6 Pillars of Clinical Reassurance
            </h2>
            <p className="text-slate-600 font-medium">
              We leverage advanced scientific workflows and family-centric approach guidelines to ensure patient safety and gorgeous clinical results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all relative group overflow-hidden"
                >
                  {/* Styling highlight line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-stone-100 group-hover:bg-[#F2994A] transition-all" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F2994A] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#334E68] group-hover:text-[#F2994A] transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-md font-bold font-display text-[#334E68]">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. OUR SPECIALIST TEAM GRID */}
      <section id="team" className="py-20 bg-[#FDFDFB] border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#F2994A] font-extrabold uppercase text-xs tracking-widest block">NMC Registered Physicians</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-[#334E68] tracking-tight">
              Meet Our Expert Doctors team
            </h2>
            <p className="text-slate-600 font-medium">
              Hamro Dental hosts a highly credentialed, multi-specialty clinical roster focused on orthodontic, surgical, and implant perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {team.map((doc, idx) => (
              <div 
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 relative overflow-hidden bg-slate-100 uppercase font-bold text-xs tracking-wider flex items-center justify-center text-slate-400">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-[#334E68] text-[#FAF9F6] px-2.5 py-1 rounded text-xs font-bold font-display shadow-sm">
                      {doc.details}
                    </span>
                  </div>

                  <div className="p-6 text-left">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="text-lg font-bold font-display text-[#334E68]">{doc.name}</h3>
                    </div>
                    <p className="text-xs font-extrabold text-[#F2994A] uppercase tracking-wide mb-2">{doc.role}</p>

                    <div className="mb-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest ${
                        doc.statusType === 'busy' 
                          ? 'bg-amber-100/90 text-amber-800 border border-amber-200/40' 
                          : 'bg-emerald-100/90 text-emerald-800 border border-emerald-200/40'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${doc.statusType === 'busy' ? 'bg-amber-500' : 'bg-emerald-500'} animate-pulse`} />
                        {doc.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{doc.bio}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Hamro Dental Expert Roster</span>
                  <CheckCircle2 className="w-4 h-4 text-[#F2994A]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW: DENTAL OWNER STANDARD FEATURE - INTERACTIVE COST ESTIMATOR */}
      <section id="estimator" className="py-20 bg-gradient-to-b from-[#FDFDFB] to-stone-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/40 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-[#F2994A]" />
              Transparent Clinical Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#334E68] tracking-tight">
              NMC Standard Fee Estimator & Savings
            </h2>
            <p className="text-slate-600 font-medium text-sm md:text-base">
              Medical expenses shouldn't be a mystery. Select your required treatment below, enter the estimated tooth count, and instantly compare Kathmandu's regulated clinical rates against Western private fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* INPUT SIDE (7 columns) */}
            <div className="lg:col-span-7 bg-white border border-stone-200 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-extrabold text-[#334E68] uppercase tracking-widest mb-2.5">
                    Step 1: Select Dental Procedure
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {treatmentCatalog.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setEstimatorTreatmentId(t.id)}
                        className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                          estimatorTreatmentId === t.id
                            ? 'border-[#F2994A] bg-amber-50/50 shadow-sm'
                            : 'border-stone-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-extrabold ${estimatorTreatmentId === t.id ? 'text-[#F2994A]' : 'text-[#334E68]'}`}>
                            {t.name}
                          </span>
                          {estimatorTreatmentId === t.id && (
                            <div className="w-2 h-2 rounded-full bg-[#F2994A]" />
                          )}
                        </div>
                        <span className="block text-[10px] text-slate-400 font-bold uppercase mt-1">
                          {t.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* QUANTITY INCREMENTER */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#334E68] uppercase tracking-widest mb-2.5">
                      Step 2: Dental Units / Teeth
                    </label>
                    <div className="flex items-center gap-3 bg-stone-50 p-2 border border-stone-200 rounded-xl max-w-[180px]">
                      <button
                        type="button"
                        onClick={() => setEstimatorQuantity(Math.max(1, estimatorQuantity - 1))}
                        className="w-10 h-10 rounded-lg bg-white border border-stone-200 hover:border-slate-300 text-[#334E68] font-bold flex items-center justify-center transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="flex-1 text-center text-sm font-black text-[#334E68]">
                        {estimatorQuantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setEstimatorQuantity(Math.min(16, estimatorQuantity + 1))}
                        className="w-10 h-10 rounded-lg bg-white border border-stone-200 hover:border-slate-300 text-[#334E68] font-bold flex items-center justify-center transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="block text-[10px] text-slate-400 mt-1.5 font-medium">
                      Select quantity (e.g. 1 titanium unit, 4 ceramic crowns, etc)
                    </span>
                  </div>

                  {/* CURRENCY ACCENT */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#334E68] uppercase tracking-widest mb-2.5">
                      Step 3: Comparative Currency
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {(["USD", "AUD", "GBP", "NPR"] as const).map((curr) => (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => setEstimatorCurrency(curr)}
                          className={`px-4 py-2.5 rounded-lg text-xs font-black transition-all ${
                            estimatorCurrency === curr
                              ? 'bg-[#334E68] text-[#FAF9F6] shadow-sm'
                              : 'bg-stone-50 text-slate-500 hover:bg-stone-100 border border-stone-200'
                          }`}
                        >
                          {curr} {curr === "NPR" ? "🇳🇵" : curr === "USD" ? "🇺🇸" : curr === "AUD" ? "🇦🇺" : "🇬🇧"}
                        </button>
                      ))}
                    </div>
                    <span className="block text-[10px] text-slate-400 mt-1.5 font-medium">
                      Rates calibrated to Western private healthcare schedules
                    </span>
                  </div>
                </div>
              </div>

              {/* SPECIFIC PROCEDURAL MEMO */}
              <div className="bg-stone-50 border border-stone-100 rounded-2xl p-4 flex gap-3.5 items-start mt-4">
                <Info className="w-5 h-5 text-[#F2994A] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-[#334E68] uppercase tracking-wider">
                    Procedure Summary: {currentEstimatorTreatment.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    {currentEstimatorTreatment.description}
                  </p>
                  <p className="text-[10px] text-[#F2994A] font-bold uppercase tracking-wide pt-1">
                    ⏱️ Projected Treatment Timeline: {currentEstimatorTreatment.duration}
                  </p>
                </div>
              </div>

            </div>

            {/* COMPARE OUTPUT BOARD (5 columns) */}
            <div className="lg:col-span-5 bg-[#334E68] text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between border border-slate-700/80 relative overflow-hidden">
              {/* Radial background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <span className="block text-[10px] text-amber-400 font-extrabold uppercase tracking-widest text-center border-b border-white/10 pb-3">
                  NMC Standard Price Comparison Board
                </span>

                <div className="space-y-4">
                  {/* Hamro Dental Cost */}
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-1">
                      Hamro Dental Clinic Kathmandu fee
                    </span>
                    <span className="block text-3xl font-black font-mono text-emerald-400">
                      {getEstimatedPrice().label} {getEstimatedPrice().nepalCost}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">
                      Regulated Clinical Range: {currentEstimatorTreatment.nprRange}
                    </span>
                  </div>

                  {/* Global Cost */}
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-1">
                      Private Clinical Average Abroad (US/UK/AU)
                    </span>
                    <span className="block text-2xl font-black font-mono text-rose-300 line-through">
                      {getEstimatedPrice().label} {getEstimatedPrice().globalCost}
                    </span>
                  </div>

                  {/* Net Savings Badge */}
                  <div className="bg-emerald-500/20 border border-emerald-500/30 p-4 rounded-xl text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                      Your Margined Medical Savings
                    </span>
                    <span className="block text-4xl font-black uppercase text-emerald-400 tracking-tight my-1">
                      {getEstimatedPrice().percent}% Off
                    </span>
                    <span className="block text-xs font-bold text-slate-200">
                      You save approx: {getEstimatedPrice().label} {getEstimatedPrice().savings}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 bg-[#FDFDFB]/5 p-3 rounded-xl text-[10px] text-slate-300 leading-normal border border-white/5 font-sans">
                  <div className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#F2994A] flex-shrink-0" />
                    <span>Includes certified tax invoice receipt matching your travel insurance specs.</span>
                  </div>
                  <div className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#F2994A] flex-shrink-0" />
                    <span>Signed and stamped by NMC licensed clinical registrar doctors.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 relative z-10">
                <button
                  type="button"
                  onClick={applyEstimateToBooking}
                  className="w-full bg-[#F2994A] hover:bg-[#e28328] text-white py-3.5 px-6 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-orange-500/10 flex items-center justify-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  <ClipboardList className="w-4 h-4 text-white" />
                  Apply Estimate & Book Slot now
                </button>
              </div>

            </div>

          </div>

          {/* DENTAL OWNER CLINICAL ONBOARDING DOWNLOAD BAR */}
          <div className="mt-12 bg-white border border-stone-200 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-start gap-3.5">
              <div className="bg-[#334E68]/10 text-[#334E68] p-3 rounded-xl flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-0.5 text-left">
                <h4 className="text-sm font-bold text-[#334E68]">Clinical Intake & Pediatric Welcoming Guide</h4>
                <p className="text-xs text-slate-500 font-medium">Download standard clinical intake templates to speed up registration. Includes child dental desensitization charts.</p>
              </div>
            </div>
            
            <a
              href="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=650"
              download="Hamro_Dental_Intake_Guide_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-[#334E68] hover:bg-[#2c3e53] text-[#FAF9F6] border border-transparent font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4 text-[#F2994A]" />
              <span>Download Intake Guide (PDF)</span>
            </a>
          </div>

        </div>
      </section>

      {/* 7. DENTAL TOURISM FOR EXPATS & OVERSEAS NEPALESE */}
      <section id="tourism" className="py-20 bg-stone-50 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100/60 border border-sky-300/40 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <Languages className="w-3.5 h-3.5 text-sky-600" />
              Dental Tourism & NRN Support Desk
            </span>

            <h2 className="text-3xl md:text-4xl font-display font-black text-[#334E68] tracking-tight leading-tight">
              World-Class Smile Makeovers <span className="text-[#F2994A]">at 70% Less Cost</span>
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Living in Australia, UK, Europe, or the Americas, dentist bills can consume your life savings. At Hamro Dental, our board-certified MDS professionals use exact FDA-approved implants, crowns, and diagnostic systems. We assist overseas Nepalese (NRNs) and global travelers to blend pristine dental treatments with clinical perfection in Kathmandu.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#334E68]">Direct Travel-Coordinated Scheduling</h4>
                  <p className="text-[11px] text-slate-500">We optimize appointment slots across 3 to 7 days to match your tourist itineraries.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#334E68]">Virtual Telehealth Consultations</h4>
                  <p className="text-[11px] text-slate-500">Submit your dental X-rays via email or WhatsApp for a free digital assessment before departure.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setGeographicType("International");
                  scrollToAnchor("booking-section");
                }}
                className="bg-[#334E68] text-white hover:bg-slate-700 px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all text-center"
              >
                <span>Request Free Overseas Dental Evaluation</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F2994A] to-sky-600 rounded-2xl opacity-15 blur"></div>
            <div className="relative bg-white border border-stone-200 p-6 rounded-2xl shadow-lg space-y-6">
              
              <h3 className="text-md font-bold font-display text-[#334E68] border-b border-stone-100 pb-3 flex items-center gap-2">
                <Video className="w-5 h-5 text-sky-600" />
                Virtual Pre-Check Itinerary
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-50 text-[#F2994A] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#334E68]">Online Registration</h4>
                    <p className="text-[11px] text-slate-500">Provide name, age, and select "Visiting From Abroad" on our form.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-50 text-[#F2994A] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#334E68]">Diagnostic Sharing or Zoom Call</h4>
                    <p className="text-[11px] text-slate-500">Our clinical coordinators review your condition and structure the costs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-50 text-[#F2994A] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#334E68]">Direct Priority Booking</h4>
                    <p className="text-[11px] text-slate-500">Pristine slot assignment. We prepare diagnostic and surgical setup prior to arrival.</p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200/50 p-4 rounded-xl text-center">
                <span className="text-[10px] text-sky-800 uppercase tracking-wide font-black block mb-1">Estimated Cost Margins</span>
                <p className="text-xs text-slate-600 leading-normal font-medium">Save up to <strong>72% on Dental Implants</strong> and <strong>65% on Orthodontics</strong> compared to Melbourne or London rates with absolute identical FDA material standards.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE MILESTONES STEPPER */}
      <section id="milestones" className="py-20 bg-[#334E68] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[#F2994A] font-extrabold uppercase text-xs tracking-widest block">Our Evolution</span>
            <h2 className="text-3xl font-display font-black text-white tracking-tight">
              Hamro Dental Landmark History
            </h2>
            <p className="text-slate-300 text-xs font-medium">
              Click on each year step below to trace how our clinic transformed into northern Kathmandu's primary clinical standard.
            </p>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2.5 max-w-2xl mx-auto mb-8">
            {milestones.map((ms, idx) => (
              <button
                key={ms.year}
                onClick={() => setActiveTimeline(idx)}
                className={`py-2 px-5 rounded-full font-display font-black text-xs tracking-wide transition-all ${
                  activeTimeline === idx
                    ? 'bg-[#F2994A] text-white shadow-md shadow-[#F2994A]/20 ring-2 ring-amber-300'
                    : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {ms.year} Step
              </button>
            ))}
          </div>

          <div className="max-w-lg mx-auto bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 relative shadow-lg min-h-[140px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTimeline}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-display font-black text-[#F2994A]">{milestones[activeTimeline].year}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                  <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">{milestones[activeTimeline].title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{milestones[activeTimeline].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 9. TESTIMONIAL REVIEW ENGINE */}
      <section id="reviews" className="py-20 bg-stone-50 border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#F2994A] font-extrabold uppercase text-xs tracking-widest block">Parent & Traveler Feedback</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-[#334E68] tracking-tight">
              Verified Reviews on Patient Satisfaction
            </h2>
            <p className="text-slate-600 font-medium">
              We aggregate Google review details. Read why locals and international travelers place high trust in Hamro Dental Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-50 text-[#F2994A] font-extrabold text-[9px] uppercase px-2 py-0.5 rounded border border-amber-200/50">
                      Google Verified • {rev.tag}
                    </span>
                    <div className="flex text-amber-400 gap-0.5">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs italic text-slate-600 leading-relaxed font-sans">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#334E68]/10 text-[#334E68] flex items-center justify-center text-xs font-black">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#334E68]">{rev.name}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. ADVANCED CLINICAL BOOKING & CONVERSION */}
      <section id="booking-section" className="py-20 bg-gradient-to-br from-[#334E68] to-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[#334E68] opacity-50 z-0 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[#F2994A] uppercase text-xs font-bold tracking-widest block">Digital Queue Coordination</span>
            
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
              Put a Dentist in Your Schedule
            </h2>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Plan your physical clinic or digital consult appointment in under two minutes. Once filled, our dedicated schedule coordinator will reach out to lock down the exact timing slot for you and your family members.
            </p>

            <div className="space-y-3.5 pt-2 text-xs text-slate-300 font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F2994A]" />
                <span>Immediate WhatsApp Confirmation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F2994A]" />
                <span>Local or Overseas Travel Accommodations Assist</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F2994A]" />
                <span>Free Initial General Consultation Included</span>
              </div>
            </div>

            {/* Clinic support card for user ease */}
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-[#F2994A] flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-300 leading-normal">
                <strong>Need Immediate Assistance?</strong> Skip this form entirely and call our direct priority line <a href="tel:+9779803427273" className="text-[#F2994A] font-extrabold underline block sm:inline">+977 9803427273</a> for swift support.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div id="clinical-form-anchor" className="bg-white border border-stone-200 text-[#334E68] p-6 md:p-8 rounded-2xl shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {!successTicket ? (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold font-display text-[#334E68] border-b border-stone-100 pb-3">
                      Secure Your Appointment Slot
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Patient or Guardian Full Name *
                        </label>
                        <input 
                          type="text" 
                          placeholder="e.g. Purushottam Shrestha"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F2994A] bg-stone-50"
                        />
                        {validationErrors.name && (
                          <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{validationErrors.name}</p>
                        )}
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Phone / Mobile Number *
                        </label>
                        <input 
                          type="text" 
                          placeholder="e.g. +977 9803427273"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F2994A] bg-stone-50"
                        />
                        {validationErrors.phone && (
                          <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{validationErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email input */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input 
                          type="text" 
                          placeholder="e.g. puran.shrestha50@gmail.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F2994A] bg-stone-50"
                        />
                        {validationErrors.email && (
                          <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{validationErrors.email}</p>
                        )}
                      </div>

                      {/* Service selector */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Target Core Treatment
                        </label>
                        <select 
                          value={serviceRequested}
                          onChange={(e) => setServiceRequested(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F2994A] bg-stone-50 text-[#334E68] font-medium"
                        >
                          <option>General Smile Checkup</option>
                          <option>Dental Implants Placement</option>
                          <option>Cosmetic Teeth Whitening</option>
                          <option>Orthodontics Aligners / Braces</option>
                          <option>Root Canal Treatment</option>
                          <option>Crown and Bridges Restoration</option>
                          <option>Periodontal Gum scaling</option>
                        </select>
                      </div>
                    </div>

                    {/* Radio Button Custom Blocks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-stone-50 rounded-xl border border-stone-100">
                      
                      {/* Age Status */}
                      <div>
                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                          Patient Demographics
                        </span>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center gap-1.5 text-xs font-bold text-[#334E68] cursor-pointer">
                            <input 
                              type="radio" 
                              name="age" 
                              checked={patientAge === "Adult"}
                              onChange={() => setPatientAge("Adult")}
                              className="text-[#F2994A] focus:ring-0" 
                            />
                            <span>Adult Class</span>
                          </label>
                          <label className="inline-flex items-center gap-1.5 text-xs font-bold text-[#334E68] cursor-pointer">
                            <input 
                              type="radio" 
                              name="age" 
                              checked={patientAge === "Child"}
                              onChange={() => setPatientAge("Child")}
                              className="text-[#F2994A] focus:ring-0" 
                            />
                            <span>Pediatric / Child</span>
                          </label>
                        </div>
                      </div>

                      {/* Geo Status */}
                      <div>
                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                          Your Travel Setting
                        </span>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center gap-1.5 text-xs font-bold text-[#334E68] cursor-pointer">
                            <input 
                              type="radio" 
                              name="geo" 
                              checked={geographicType === "Local"}
                              onChange={() => setGeographicType("Local")}
                              className="text-[#F2994A] focus:ring-0" 
                            />
                            <span>Local Resident</span>
                          </label>
                          <label className="inline-flex items-center gap-1.5 text-xs font-bold text-[#334E68] cursor-pointer">
                            <input 
                              type="radio" 
                              name="geo" 
                              checked={geographicType === "International"}
                              onChange={() => setGeographicType("International")}
                              className="text-[#F2994A] focus:ring-0" 
                            />
                            <span>NRN / Abroad Expat</span>
                          </label>
                        </div>
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Date Picker */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Preferred Target Date *
                        </label>
                        <input 
                          type="date" 
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F2994A] bg-stone-50"
                        />
                        {validationErrors.date && (
                          <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wide">{validationErrors.date}</p>
                        )}
                      </div>

                      {/* Session Picker */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Preferred Daytime Shift
                        </label>
                        <select 
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F2994A] bg-stone-50"
                        >
                          <option>Morning Session (09:00 AM - 01:00 PM)</option>
                          <option>Afternoon Session (01:00 PM - 05:00 PM)</option>
                          <option>Evening Session (05:00 PM - 07:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Concerns block */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Tell Us Briefly About Your Concern
                      </label>
                      <textarea 
                        rows={2}
                        placeholder="e.g. Sensitivity in upper left molar, scheduling visual child play visit first, orthodontic dental braces pricing..."
                        value={briefConcern}
                        onChange={(e) => setBriefConcern(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F2994A] bg-stone-50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#F2994A] hover:bg-[#d67e2a] text-white py-3 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-orange-500/10 flex items-center justify-center gap-1.5"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Book Online Appointment</span>
                    </button>

                  </form>
                ) : (
                  // Custom generated booking itinerary representation
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-4 text-center py-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-display text-[#334E68]">Appointment Scheduled!</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest font-mono">CODE ID: {successTicket.id}</p>
                    </div>

                    <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span className="text-slate-400 font-bold">Patient Name:</span>
                        <span className="font-extrabold text-[#334E68]">{successTicket.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span className="text-slate-400 font-bold">Primary Contact:</span>
                        <span className="font-extrabold text-[#334E68]">{successTicket.phone}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span className="text-slate-400 font-bold">Treatment Target:</span>
                        <span className="font-extrabold text-[#334E68]">{successTicket.serviceRequested}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span className="text-slate-400 font-bold">Selected Date:</span>
                        <span className="font-extrabold text-emerald-600 font-mono">{successTicket.preferredDate}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span className="text-slate-400 font-bold">Shift:</span>
                        <span className="font-extrabold text-[#334E68]">{successTicket.preferredTime}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span className="text-slate-400 font-bold">Travel Type:</span>
                        <span className="font-extrabold text-[#F2994A] text-[10px] uppercase font-sans">{successTicket.geographicType}</span>
                      </div>
                      <div className="pt-1">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Clinical Location Venue:</span>
                        <span className="block text-[11px] text-slate-600 font-semibold leading-relaxed">{successTicket.clinicLocation}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 max-w-sm mx-auto leading-normal font-medium">Our clinical queue manager will message you via SMS or WhatsApp within two hours to finalise your exact doctor checkup slot.</p>

                    <div className="pt-2">
                      <button
                        onClick={clearTicket}
                        className="bg-stone-100 hover:bg-stone-200 text-[#334E68] font-bold text-xs py-2 px-5 rounded-lg transition-all"
                      >
                        Reset and Log Another Booking
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section id="faqs" className="py-20 bg-[#FDFDFB]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-[#F2994A] font-extrabold uppercase text-xs tracking-widest block">Clear Answers</span>
            <h2 className="text-3xl font-display font-black text-[#334E68] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 font-medium">
              We look after patient education. Browse commonly asked technical queries below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-2 text-left"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-extrabold font-display">Q:</span>
                  <h4 className="text-sm font-bold text-[#334E68] font-display">{faq.q}</h4>
                </div>
                <div className="pl-5 border-l border-stone-100 mt-2">
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. EXTENSIVE FOOTER & SERVICE TIMETABLES */}
      <footer className="bg-gradient-to-br from-[#1b2d3e] to-[#334E68] text-[#FAF9F6] border-t-4 border-[#F2994A] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="bg-[#F2994A] text-white p-2.5 rounded-xl">
                <Smile className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-black text-white tracking-tight">
                HAMRO <span className="text-[#F2994A]">DENTAL</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
              Kathmandu's premier multi-disciplinary family dental care hotspot at Grande Chowk. Delivering certified micro-restorations, specialized ortho alignments, painless root canals, and titanium dental implants beneath rigorous clinical hygienic safeguards.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#F2994A] flex-shrink-0" />
                <span>Grande Chowk, Tokha Road, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#F2994A]" />
                <a href="mailto:puran.shrestha50@gmail.com" className="hover:underline hover:text-[#F2994A] transition-colors">puran.shrestha50@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm text-[#F2994A] font-black uppercase tracking-widest font-display">Useful Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {[
                { name: "Family Philosophy", goal: "pillars" },
                { name: "Specialist Physicians", goal: "team" },
                { name: "Fee Cost Estimator", goal: "estimator" },
                { name: "Dental Tourism Program", goal: "tourism" },
                { name: "Our Milestone Evolution", goal: "milestones" },
                { name: "Schedule Online Slot", goal: "booking-section" }
              ].map((item, id) => (
                <li key={id}>
                  <button 
                    onClick={() => scrollToAnchor(item.goal)}
                    className="hover:text-[#F2994A] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Timetable */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm text-[#F2994A] font-black uppercase tracking-widest font-display">Specialized Treatments</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Complete Dental Implants Suite</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Orthopedic Jaw Braces & Aligners</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Micro Painless Root Canal Therapy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Teeth Laser Whitening Suite</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Custom Zirconia CAD/CAM Crowns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>NMC Certified Deep Periodontics</span>
              </li>
            </ul>
          </div>

          {/* Working hours Timetable */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm text-[#F2994A] font-black uppercase tracking-widest font-display">Operation Timetable</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Sunday - Friday:</span>
                <span className="font-bold text-white">08:00 AM - 07:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Saturday (Special):</span>
                <span className="font-bold text-[#F2994A]">09:00 AM - 04:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-1 font-semibold">
                <span>Emergency Trauma Desk:</span>
                <span className="font-bold text-emerald-400">24/7 Priority Emergency Line</span>
              </div>
              
              <div className="pt-3 flex gap-2.5">
                {/* Custom styled icon placeholders for connectivity with precise matching */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Follow us on Facebook" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-[#F2994A] hover:text-white transition-all flex items-center justify-center font-bold text-xs"><Facebook className="w-4 h-4 text-white" /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Follow us on Instagram" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-[#F2994A] hover:text-white transition-all flex items-center justify-center font-bold text-xs"><Instagram className="w-4 h-4 text-white" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="Connect on LinkedIn" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-[#F2994A] hover:text-white transition-all flex items-center justify-center font-bold text-xs"><Linkedin className="w-4 h-4 text-white" /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" title="Subscribe on YouTube" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-[#F2994A] hover:text-white transition-all flex items-center justify-center font-bold text-xs"><Youtube className="w-4 h-4 text-white" /></a>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-700/60 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Hamro Dental Clinic. All Rights Reserved. Located at Grande Chowk, Tokha Road (Near Grand International Hospital Gate), Kathmandu, Nepal.</p>
          <p className="mt-1 text-[11px] text-slate-500">Certified by Nepal Medical Council (NMC) Specialist Roster. Built with high precision medical layouts.</p>
        </div>
      </footer>

    </div>
  );
}
