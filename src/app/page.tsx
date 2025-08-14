import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  // ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Plus,
  Search,
  Star,
  StarHalf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const testiesWithNoImg = [
  {
    name: "Emily R.",
    title: "Bali Wellness Retreat",
    review:
      "Every detail was thoughtfully planned. From the ocean-view villa to the daily yoga sessions, it felt like a dream I didn’t want to wake up from.",
    date: "Aug 20, 2025",
    rating: 5.0,
  },
  {
    name: "James K.",
    title: "Swiss Alps Ski Adventure",
    review:
      "The slopes were pristine, the guides were fantastic, and the chalet felt like home. I’ll definitely be returning next winter.",
    date: "Jan 14, 2025",
    rating: 4,
  },
  {
    name: "Sofia M.",
    title: "Tokyo Cultural Experience",
    review:
      "From tea ceremonies to exploring hidden alleys, I felt truly immersed in the culture. An unforgettable journey.",
    date: "Mar 5, 2025",

    rating: 5.0,
  },
  {
    name: "Liam T.",
    title: "Maldives Luxury Getaway",
    review:
      "The overwater villa, crystal-clear waters, and personalized service made this the best vacation of my life.",
    date: "Sep 2, 2025",

    rating: 5.0,
  },
  {
    name: "Ava L.",
    title: "New York City Food Tour",
    review:
      "From bagels to Michelin-star dinners, every bite was a new adventure. Perfect for any food lover.",
    date: "May 10, 2025",
    rating: 4.0,
  },
  {
    name: "Noah C.",
    title: "Patagonia Hiking Expedition",
    review:
      "Challenging trails, breathtaking views, and the best guides I could ask for. Worth every step.",
    date: "Nov 18, 2025",
    rating: 4.0,
  },
  {
    name: "Isabella F.",
    title: "Santorini Sunset Escape",
    review:
      "Watching the sun set over the whitewashed houses was magical. The local wine was the cherry on top.",
    date: "Jul 8, 2025",
    rating: 5.0,
  },
  {
    name: "Ethan D.",
    title: "Kenya Safari Adventure",
    review:
      "Seeing lions, elephants, and giraffes in their natural habitat was awe-inspiring. The guides made it safe and exciting.",
    date: "Feb 25, 2025",
    rating: 4.0,
  },
];

const testimonials = [
  {
    name: "Emily R.",
    title: "Bali Wellness Retreat",
    review:
      "Every detail was thoughtfully planned. From the ocean-view villa to the daily yoga sessions, it felt like a dream I didn’t want to wake up from.",
    date: "Aug 20, 2025",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    rating: 5,
  },
  {
    name: "James K.",
    title: "Swiss Alps Ski Adventure",
    review:
      "The slopes were pristine, the guides were fantastic, and the chalet felt like home. I’ll definitely be returning next winter.",
    date: "Jan 14, 2025",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    rating: 4,
  },
  {
    name: "Sofia M.",
    title: "Tokyo Cultural Experience",
    review:
      "From tea ceremonies to exploring hidden alleys, I felt truly immersed in the culture. An unforgettable journey.",
    date: "Mar 5, 2025",

    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    rating: 5,
  },
  {
    name: "Liam T.",
    title: "Maldives Luxury Getaway",
    review:
      "The overwater villa, crystal-clear waters, and personalized service made this the best vacation of my life.",
    date: "Sep 2, 2025",

    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    rating: 5,
  },
  {
    name: "Ava L.",
    title: "New York City Food Tour",
    review:
      "From bagels to Michelin-star dinners, every bite was a new adventure. Perfect for any food lover.",
    date: "May 10, 2025",
    rating: 4,

    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Noah C.",
    title: "Patagonia Hiking Expedition",
    review:
      "Challenging trails, breathtaking views, and the best guides I could ask for. Worth every step.",
    date: "Nov 18, 2025",
    rating: 4,

    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Isabella F.",
    title: "Santorini Sunset Escape",
    review:
      "Watching the sun set over the whitewashed houses was magical. The local wine was the cherry on top.",
    date: "Jul 8, 2025",
    rating: 5,

    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Ethan D.",
    title: "Kenya Safari Adventure",
    review:
      "Seeing lions, elephants, and giraffes in their natural habitat was awe-inspiring. The guides made it safe and exciting.",
    date: "Feb 25, 2025",
    rating: 4,

    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Mia P.",
    title: "Paris Art & Fashion Tour",
    review:
      "From the Louvre to boutique ateliers, I felt like I stepped into a dream for art and fashion lovers.",
    date: "Apr 12, 2025",
    rating: 5,

    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Oliver W.",
    title: "Iceland Northern Lights Trip",
    review:
      "The aurora was beyond words. The hot springs and glacier hikes made the trip even more special.",
    date: "Dec 6, 2025",
    rating: 5,

    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];

const faqs = [
  {
    question: "What types of tours do you offer?",
    answer:
      "We offer a wide range of tours, including group tours, private tours, family vacations, adventure trips, cultural tours, honeymoon packages, and customized itineraries both domestic and international.",
  },
  {
    question: "How do I book a tour with you?",
    answer:
      "You can book a tour through our website by selecting your preferred package and following the booking steps. Alternatively, you can contact our travel consultants via phone or email for personalized assistance.",
  },
  {
    question: "Can I customize my travel itinerary?",
    answer:
      "Absolutely! We offer tailor-made travel solutions based on your interests, budget, and schedule. Just let us know your preferences, and we'll design a personalized itinerary for you.",
  },
  {
    question: "What is included in the tour package?",
    answer:
      "Most of our packages include accommodation, transportation, guided tours, entrance fees to attractions, and some meals. Each package has a detailed inclusions and exclusions section. Please refer to the specific tour for more information.",
  },
  {
    question: "Are flights included in the package?",
    answer:
      "Flights are included only in selected packages. For others, we can assist you with flight bookings as an add-on service. Please check with our travel advisor for more details.",
  },
];

const nepalPackages = [
  {
    name: "Himalaya Sunrise Trek",
    duration: "5 days, 4 nights",
    price: "₨35,000",
    image:
      "https://images.unsplash.com/photo-1509644851181-8ee1886f57d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Kathmandu Cultural Tour",
    duration: "3 days, 2 nights",
    price: "₨20,000",
    image:
      "https://images.unsplash.com/photo-1565389330190-1d3db63ccf92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Pokhara Lakeside Escape",
    duration: "4 days, 3 nights",
    price: "₨25,000",
    image:
      "https://images.unsplash.com/photo-1628155986781-9027b06fad7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Chitwan Wildlife Safari",
    duration: "3 days, 2 nights",
    price: "₨30,000",
    image:
      "https://images.unsplash.com/photo-1634276222688-8b8e1ac7b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Spiritual Lumbini Retreat",
    duration: "2 days, 1 night",
    price: "₨15,000",
    image:
      "https://images.unsplash.com/photo-1640501813524-82b8dc9c40e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Sarangkot Paragliding Adventure",
    duration: "2 days, 1 night",
    price: "₨18,000",
    image:
      "https://images.unsplash.com/photo-1692866921316-c6843c56d8bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Everest Panorama Flight",
    duration: "1 day",
    price: "₨22,000",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Annapurna Circuit Trek",
    duration: "12 days, 11 nights",
    price: "₨120,000",
    image:
      "https://images.unsplash.com/photo-1585552444301-b339c51253b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Pilgrimage Tour: Pashupatinath & Boudhanath",
    duration: "3 days, 2 nights",
    price: "₨23,000",
    image:
      "https://images.unsplash.com/photo-1583511771228-22c0b6f3e2ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Luxury Mustang Boutique Escape",
    duration: "7 days, 6 nights",
    price: "₨250,000",
    image:
      "https://images.unsplash.com/photo-1592820018120-50cc6b2e6c89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];

export default function Page() {
  return (
    <>
      {/* Navigation Bar Top */}
      <nav className="fixed z-50 w-full bg-transparent">
        <section className="max-w-7xl mx-auto w-[90%] flex justify-between items-center py-10 px-5 gap-5">
          {/* Logo */}
          <div className="text-3xl font-medium -ml-2.5 text-white font-serif italic tracking-tight">
            HimalyanVibes
          </div>
          {/* Links */}
          <div className="text-neutral-900 bg-white flex gap-7.5 py-2.5 px-7.5 rounded-full">
            <div>Home</div>
            <div>About Us</div>
            <div>Trips</div>
            <div>Blogs</div>
            <div>Reviews</div>
          </div>
          {/* CTA */}
          <div className="text-white py-2.5 px-5 rounded-full flex items-center gap-2.5 btn-dark">
            <span className="bg-white animate-pulse size-2 rounded-full" />
            <span>Book Now</span>
            <ArrowRight size={20} />
          </div>
        </section>
      </nav>
      {/* Hero Section */}
      <section className="relative flex min-h-screen">
        {/* Video */}
        <video
          src="https://videos.pexels.com/video-files/14372030/14372030-hd_1920_1080_30fps.mp4"
          className="absolute inset-0 z-0 object-cover object-[0%_-0%] w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-black/50 to-black/10" />
        {/* Content */}
        <div className="max-w-7xl mx-auto w-[90%] relative z-20 py-30 mt-15">
          {/* People */}
          <div className="flex mb-7.5">
            {people.map((item) => (
              <div
                className="group relative -mr-4 size-9 rounded-full border-white border-3 overflow-hidden"
                key={item.name}
              >
                <Image
                  fill
                  src={item.image}
                  className="object-cover object-center"
                  alt="Logo"
                />
              </div>
            ))}
            <div className="group relative -mr-4 size-9 flex items-center justify-center text-neutral-500 rounded-full bg-neutral-100 border-white border-3 overflow-hidden">
              <Plus size={24} />
            </div>
          </div>
          {/* Heading */}
          <div className="mb-10 text-6xl font-normal text-white font-stylized tracking-tighter">
            Your{" "}
            <span className="font-serif tracking-tight italic -ml-1">
              Himalayan
            </span>{" "}
            <br />
            <span className="font-serif tracking-tight italic -ml-1 mr-0.5">
              Adventure
            </span>{" "}
            Awaits
          </div>
          {/* Input */}
          <div className="border border-white rounded-full w-fit items-center flex p-2.5 px-7.5 pr-40 gap-5 relative backdrop-blur mb-5">
            <div className="text-white/90">Find your dream destination</div>
            <div className="p-2.5 border border-neutral-900 text-neutral-50 btn-dark px-5 rounded-full absolute -right-[1px] flex gap-2.5">
              Search
              <Search size={20} />
            </div>
          </div>
          {/* Social Proof */}
          <>
            {/* Logos */}
            <div className="flex gap-5 -mb-5 items-center">
              <Image
                width={96}
                height={0}
                src={"/trustpilot.png"}
                className="object-contain object-center brightness-50000 saturate-0 -ml-0.5"
                alt="Logo"
              />
              <Image
                width={68}
                height={0}
                src={"/google.png"}
                className="object-contain object-center brightness-400 saturate-0 -ml-0.5"
                alt="Logo"
              />
              <Image
                width={96}
                height={0}
                src={"/tripadvisor.png"}
                className="object-contain object-center brightness-50000 saturate-0 -ml-0.5"
                alt="Logo"
              />
            </div>
            {/* Reviews */}
            <div className="flex gap-2.5 text-neutral-300">
              <Star fill="currentColor" stroke="currentColor" size={18} />
              <Star fill="currentColor" stroke="currentColor" size={18} />
              <Star fill="currentColor" stroke="currentColor" size={18} />
              <Star fill="currentColor" stroke="currentColor" size={18} />
              <StarHalf fill="currentColor" stroke="currentColor" size={18} />
              <div className="text-sm uppercase text-neutral-100">
                Rated 4.6 out of 5 based on 147 reviews
              </div>
            </div>
          </>
        </div>
        {/* Hero Bottom Bar */}
        <div className="absolute bottom-0 z-20 w-full py-3.5 bg-black">
          {/* Links */}
          <div className="flex items-center gap-7.5 text-white pl-[7.5%]">
            <div className="cursor-pointer hover:underline">Facebook</div>
            <div className="cursor-pointer hover:underline">Instagram</div>
            <div className="cursor-pointer hover:underline">Twitter</div>
          </div>
          {/* Featured */}
          <div className="absolute bottom-0 right-0 z-30 flex items-end">
            <div className="h-40 px-10 pt-7.5 bg-white w-80">
              <div className="mb-5 text-3xl font-medium">01</div>
              <div className="line-clamp-2 text-xl">Everest Package</div>
            </div>
            <div className="relative size-50">
              <div className="absolute top-0 flex items-center h-10 text-white left-full">
                <div className="btn-dark h-full px-2 flex items-center">
                  <ChevronLeft size={24} />
                </div>
                <div className="btn-dark h-full px-2 flex items-center">
                  <ChevronRight size={24} />
                </div>
              </div>
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-black/10 z-10" />
                <Image
                  fill
                  src={"/everest.jpg"}
                  className="object-cover object-center z-0"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="h-40 px-10 pt-7.5 bg-white w-80">
              <div className="mb-2.5 text-xl font-medium">Everest Package</div>
              <div className="line-clamp-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur illo facilis iusto qui ab vitae deserunt nesciunt.
                Tempore sed, quisquam corporis minima beatae debitis iste
                voluptas, nisi laudantium nam at?
              </div>
            </div>
            <div className="flex items-center h-40 text-white btn-dark duration-200 cursor-pointer">
              <ChevronRight size={36} />
            </div>
          </div>
        </div>
      </section>
      {/* Section About us */}
      <section className="py-30">
        <div className="max-w-7xl mx-auto w-[90%]">
          {/* Copy */}
          <div className="flex justify-between w-full mb-30">
            <div>
              <div className="text-6xl font-stylized tracking-tighter">
                Beyond the <br />
                <span className="font-serif tracking-tight italic -ml-1">
                  Ordinary
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-medium mb-5">
                We&apos;re not just another tour company.
              </div>
              <div className="max-w-xl text-lg">
                We live here. We know the mountains, the cultures, and the
                legends. Our adventures combine thrilling challenges with local
                hospitality—ensuring every step is safe, memorable, and
                inspiring.
              </div>
            </div>
          </div>
          {/* Packages */}
          <div className="grid grid-cols-4 gap-1.5 w-full">
            {[...Array(4)].map((_, idx) => {
              return (
                <div
                  className={`border-5 shadow-lg border-white rounded-3xl overflow-hidden relative w-full h-85 ${idx % 2 === 0 && "-mt-10"}`}
                  key={idx}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/25 to-black/10" />
                  <Image
                    fill
                    src={"/everest.jpg"}
                    className="relative z-0 object-cover object-center"
                    alt="Logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Section Packages */}
      <section className="py-30 bg-neutral-100">
        <div className="max-w-7xl mx-auto w-[90%]">
          {/* Copy */}
          <div className="flex justify-between items-center max-w-7xl mx-auto w-[90%] mb-20">
            <div>
              <div className="text-6xl font-stylized tracking-tighter">
                Must{" "}
                <span className="font-serif tracking-tight italic -ml-1">
                  experience
                </span>
                <br />
                Packages
              </div>
            </div>
            <div className="text-white py-2.5 px-5 rounded-full flex items-center gap-2.5 btn-dark h-fit">
              <span>View All</span>
              <ArrowRight size={20} className="-rotate-45" />
            </div>

          </div>
          <div className="grid grid-cols-4 gap-5 w-full">
            {[...Array(4)].map((_, idx) => {
              return (
                <div
                  className="relative h-[400px] w-full overflow-hidden rounded-xl"
                  key={idx}
                >
                  <Image
                    fill
                    src={"/everest.jpg"}
                    className="absolute inset-0 object-cover object-center"
                    alt="Holiday Picture"
                  />

                  <div className="absolute inset-0 z-20 bg-black/30 flex flex-col justify-between text-white">
                    <div className="flex w-full justify-end p-5">
                      <div className="p-2 bg-white/50 backdrop-blur-2xl rounded-full">
                        <Heart size={24} className="fill-white" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-3 p-5 pt-10 bg-gradient-to-t from-black to-black/0">
                      <div className=" font-medium">
                        {nepalPackages[idx].name}
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm opacity-60 font-medium">
                          {nepalPackages[idx].duration}
                        </div>
                        <div className="opacity-60 text-sm font-medium">
                          {nepalPackages[idx].price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center max-w-7xl mx-auto w-[90%] mb-20">
            <div>
              <div className="text-6xl font-stylized tracking-tighter">
                Must{" "}
                <span className="font-serif tracking-tight italic -ml-1">
                  experience
                </span>
                <br />
                Packages
              </div>
            </div>
            <div className="text-white py-2.5 px-5 rounded-full flex items-center gap-2.5 btn-dark h-fit">
              <span>View All</span>
              <ArrowRight size={20} className="-rotate-45" />
            </div>

          </div>
        </div>
      </section>

      <section className="py-30">
        <div className="">
          {/* Copy */}
          <div className="flex justify-between max-w-7xl mx-auto w-[90%] mb-20">
            <div>
              <div className="text-6xl font-stylized tracking-tighter">
                What Clients <br />
                <span className="font-serif tracking-tight italic -ml-1">
                  say About Us
                </span>
              </div>
            </div>
          </div>
          {/* Packages */}

          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-5 animate-scroll"
              style={{ ["--scroll-speed" as keyof React.CSSProperties]: "40s" }}
            >
              {[...testiesWithNoImg, ...testiesWithNoImg].map((item, index) => (
                <div
                  key={index}
                  className="grid gap-6 bg-white rounded-xl p-8 border border-gray-100 w-[650px] flex-shrink-0"
                >
                  <div className="col-span-3 flex flex-col gap-5">
                    <div className="text-2xl font-medium">{item.name}</div>
                    <div className="text-xl opacity-60">{item.review}</div>

                    <div className="flex gap-5">
                      <div className="text-neutral-500 text-sm">
                        {item.date}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(item.rating)].map((_, idx) => (
                          <div
                            key={idx}
                            className="bg-amber-400 p-1 size-5"
                          >
                            <Star className="fill-white stroke-white size-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden pt-5">
            <div
              className="flex gap-5 animate-scroll-negative"
              style={{ ["--scroll-speed" as keyof React.CSSProperties]: "40s" }} // adjust speed
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-6 bg-white rounded-xl p-8 border border-gray-100 w-[650px] flex-shrink-0"
                >
                  <div className="col-span-3 flex flex-col gap-5">
                    <div className="text-2xl font-medium">{item.name}</div>
                    <div className="text-xl opacity-60">{item.review}</div>
                    <div className="flex gap-5">
                      <div className="text-neutral-500 text-sm">
                        {item.date}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(item.rating)].map((_, idx) => (
                          <div
                            key={idx}
                            className="bg-amber-400 p-1 size-5"
                          >
                            <Star className="fill-white stroke-white size-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
                      <Image
                        fill
                        src={item.image}
                        className="object-cover object-center z-0 rounded-xl "
                        alt="Logo"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="py-30 bg-neutral-100">
        <div className="max-w-7xl mx-auto w-[90%] grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 w-full mb-30">
            <div className="text-6xl font-stylized tracking-tighter">
              Frequently Asked
              <br />
              <span className="font-serif tracking-tight italic -ml-1">
                Questions
              </span>
            </div>

            <p className="opacity-70 text-lg font-medium">
              Not sure about something? No worries we’re here to make things
              simple. Whether you’re wondering about bookings, packages,
              destinations, or just need some travel tips, feel free to drop
              your question below. Our team is always happy to help and will get
              back to you as soon as possible!
            </p>

            <div className="w-fit text-white py-2.5 px-5 rounded-full flex items-center gap-2.5 btn-dark">
              {/* <span className="bg-white animate-pulse size-2 rounded-full" /> */}
              <span>Learn More</span>
              <ArrowRight size={20} />
            </div>
          </div>
          {/* //right */}
          <Accordion
            type="single"
            className="mx-auto gap-10 bg-white rounded-xl p-8 w-full"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                className=" bg-white mb-5"
                key={i}
                value={`item-${i}`}
              >
                <AccordionTrigger
                  className={cn(
                    "md:text-lg lg:text-xl text-base/7 py-4 text-neutral-900 px-5  cursor-pointer font-medium",
                    i == faqs.length - 1 && "mb-0!",
                  )}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "pb-5 text-base opacity-80 px-5 text-foreground",
                  )}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* CTA */}

      <section className="relative w-full h-[600px] bg-neutral-100 z-0">
        <Image
          fill
          src="/everest.jpg"
          className="object-cover object-center rounded-t-[64px] "
          alt="Holiday Picture"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end text-white p-6 pb-30 rounded-t-[64px]">
          <div className="max-w-7xl mx-auto w-[90%]  flex flex-col gap-5">
            <div className="text-6xl font-stylized tracking-tighter">
              Book Your Escape Today. <br />
              <span className="font-serif tracking-tight italic -ml-1">
                Memories Can’t Wait.
              </span>
            </div>
            <div className="text-white py-2.5 px-5 rounded-full flex items-center gap-2.5 btn-dark w-fit">
              <span className="bg-white animate-pulse size-2 rounded-full" />
              <span>Book Now</span>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative bg-black text-white rounded-t-[64px] -mt-20 z-[999]">
        <div className="grid grid-cols-3 gap-20 max-w-7xl mx-auto w-[90%] pt-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">About Us</h3>
            <p className="opacity-80">
              We are a team of passionate travelers who are dedicated to
              providing the best travel experiences to our clients. We offer a
              wide range of packages and services to suit your needs and
              preferences. Whether you are looking for a solo adventure, a
              family getaway, or a luxury getaway, we have you covered.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Services</h3>
            <div className="flex flex-col gap-3">
              <Link
                className="hover:border-b-2 w-fit duration-300"
                href="/services"
              >
                Explore Services
              </Link>
              <Link
                className="hover:border-b-2 w-fit duration-300"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="hover:border-b-2 w-fit duration-300"
                href="/contact"
              >
                Contact Us
              </Link>
              <Link
                className="hover:border-b-2 w-fit duration-300"
                href="/blog"
              >
                Blog
              </Link>
              <Link className="hover:border-b-2 w-fit duration-300" href="/faq">
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link
                className="hover:border-b-2 w-fit duration-300"
                href="/blog"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:border-b-2 w-fit duration-300"
                href="/blog"
              >
                Terms & Conditions
              </Link>
              <Link
                className="hover:border-b-2 w-fit duration-300"
                href="/blog"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-10 flex flex-col items-center">
          <div className="flex gap-5 items-center">
            <Image
              width={96}
              height={0}
              src={"/trustpilot.png"}
              className="object-contain object-center brightness-50000 saturate-0 -ml-0.5"
              alt="Logo"
            />
            <Image
              width={68}
              height={0}
              src={"/google.png"}
              className="object-contain object-center brightness-400 saturate-0 -ml-0.5"
              alt="Logo"
            />
            <Image
              width={96}
              height={0}
              src={"/tripadvisor.png"}
              className="object-contain object-center brightness-50000 saturate-0 -ml-0.5"
              alt="Logo"
            />
          </div>
          <div className="text-neutral-500 text-sm">
            © 2023 Himalayan Vibes. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
