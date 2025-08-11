import { ArrowRight, ChevronLeft, ChevronRight, Plus, Search, Star, StarHalf } from "lucide-react";
import Image from "next/image";

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

export default function Page() {
  return (<>
    {/* Navigation Bar Top */}
    <nav className="fixed z-50 w-full bg-transparent">
      <section className="max-w-7xl mx-auto w-[90%] flex justify-between items-center py-10 px-5 gap-5">
        {/* Logo */}
        <div className="text-3xl font-medium -ml-2.5 text-white font-serif italic tracking-tight">HimalyanVibes</div>
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
              <Image fill src={item.image} className="object-cover object-center" alt="Logo" />
            </div>
          ))}
          <div
            className="group relative -mr-4 size-9 flex items-center justify-center text-neutral-500 rounded-full bg-neutral-100 border-white border-3 overflow-hidden"
          >
            <Plus size={24} />
          </div>
        </div>
        {/* Heading */}
        <div className="mb-10 text-6xl font-normal text-white font-stylized tracking-tighter">
          Your <span className="font-serif tracking-tight italic -ml-1">Himalayan</span> <br />
          <span className="font-serif tracking-tight italic -ml-1 mr-0.5">Adventure</span> Awaits
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
            <Image width={96} height={0} src={"/trustpilot.png"} className="object-contain object-center brightness-50000 saturate-0 -ml-0.5" alt="Logo" />
            <Image width={68} height={0} src={"/google.png"} className="object-contain object-center brightness-400 saturate-0 -ml-0.5" alt="Logo" />
            <Image width={96} height={0} src={"/tripadvisor.png"} className="object-contain object-center brightness-50000 saturate-0 -ml-0.5" alt="Logo" />
          </div>
          {/* Reviews */}
          <div className="flex gap-2.5 text-neutral-300">
            <Star fill="currentColor" stroke="currentColor" size={18} />
            <Star fill="currentColor" stroke="currentColor" size={18} />
            <Star fill="currentColor" stroke="currentColor" size={18} />
            <Star fill="currentColor" stroke="currentColor" size={18} />
            <StarHalf fill="currentColor" stroke="currentColor" size={18} />
            <div className="text-sm uppercase text-neutral-100">Rated 4.6 out of 5 based on 147 reviews</div>
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
            <div className="mb-5 text-3xl font-medium">
              01
            </div>
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
              <Image fill src={"/everest.jpg"} className="object-cover object-center z-0" alt="Logo" />
            </div>
          </div>
          <div className="h-40 px-10 pt-7.5 bg-white w-80">
            <div className="mb-2.5 text-xl font-medium">
              Everest Package
            </div>
            <div className="line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illo facilis iusto qui ab vitae deserunt nesciunt. Tempore sed, quisquam corporis minima beatae debitis iste voluptas, nisi laudantium nam at?</div>
          </div>
          <div className="flex items-center h-40 text-white btn-dark duration-200 cursor-pointer">
            <ChevronRight size={36} />
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="py-30">
      <div className="max-w-7xl mx-auto w-[90%]">
        {/* Copy */}
        <div className="flex justify-between w-full mb-30">
          <div>
            <div className="text-6xl font-stylized tracking-tighter">
              Beyond the <br />
              <span className="font-serif tracking-tight italic -ml-1">Ordinary</span>
            </div>
          </div>
          <div>
            <div className="text-2xl font-medium mb-5">
              We&apos;re not just another tour company.
            </div>
            <div className="max-w-xl text-lg">
              We live here. We know the mountains, the cultures, and the legends. Our adventures combine thrilling challenges with local hospitality—ensuring every step is safe, memorable, and inspiring.
            </div>
          </div>
        </div>
        {/* Packages */}
        <div className="grid grid-cols-4 gap-1.5 w-full">
          {[...Array(4)].map((_, idx) => {
            return (
              <div className={`border-5 shadow-lg border-white rounded-3xl overflow-hidden relative w-full h-85 ${idx % 2 === 0 && '-mt-10'}`} key={idx}>
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/25 to-black/10" />
                <Image fill src={"/everest.jpg"} className="relative z-0 object-cover object-center" alt="Logo" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  </>)
}