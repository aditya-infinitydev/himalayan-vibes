import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (<>
    {/* Navigation Bar Top */}
    <nav className="fixed z-50 w-full bg-transparent">
      <section className="max-w-7xl mx-auto w-[90%] flex justify-between items-center py-10 px-5 gap-5">
        <div className="text-xl font-semibold text-white">HimalyanVibes</div>
        <div className="text-neutral-900 bg-white font-medium flex gap-7.5 py-2.5 px-7.5 rounded-full">
          <div>Home</div>
          <div>About Us</div>
          <div>Trips</div>
          <div>Blogs</div>
          <div>Reviews</div>
        </div>
        {/* CTA */}
        <div className="bg-neutral-900 text-white py-2.5 px-5 rounded-full flex items-center gap-2.5">
          <span>Book Now</span>
          <ArrowRight size={20} />
        </div>
      </section>
    </nav>
    {/* Hero Section */}
    <section className="relative flex min-h-screen">
      {/* Video */}
      <video
        className="absolute inset-0 z-0 object-cover object-center w-full h-full"
        src="https://videos.pexels.com/video-files/31677824/13496048_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-black/50 to-black/10" />
      {/* Content */}
      <div className="max-w-7xl mx-auto w-[90%] relative z-20 py-30 mt-30">
        {/* Heading */}
        <div className="mb-10 text-6xl text-white !font-stylized">
          Explore the World <br /> Without Limits
        </div>
        {/* Input */}
        <div className="border border-white rounded-full w-fit items-center flex p-2.5 px-7.5 pr-40 gap-5 relative backdrop-blur">
          <div className="text-white/90">Find your dream destination</div>
          <div className="p-2.5 border border-neutral-900 text-neutral-50 bg-neutral-900 px-5 rounded-full absolute -right-[1px] flex gap-2.5">
            Search
            <Search size={20} />
          </div>
        </div>
      </div>
      {/* Hero Bottom Bar */}
      <div className="absolute bottom-0 z-20 w-full py-3.5 bg-black">
        <div className="flex items-center gap-7.5 text-sm text-white font-mono pl-[7.5%]">
          <div className="cursor-pointer hover:underline">Facebook</div>
          <div className="cursor-pointer hover:underline">Instagram</div>
          <div className="cursor-pointer hover:underline">Twitter</div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-30 flex items-end">
        <div className="h-40 px-10 pt-7.5 bg-white w-80">
          <div className="mb-2.5 text-xl font-medium">
            Everest Package
          </div>
          <div className="line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illo facilis iusto qui ab vitae deserunt nesciunt. Tempore sed, quisquam corporis minima beatae debitis iste voluptas, nisi laudantium nam at?</div>
        </div>
        <div className="relative size-50">
          <div className="absolute top-0 flex items-center h-10 gap-2.5 text-white bg-black px-2.5 left-full">
            <ChevronLeft className="" size={24} />
            <ChevronRight className="" size={24} />
          </div>
          <Image fill src={"/everest.jpg"} className="object-cover object-center" alt="Logo" />
        </div>
        <div className="h-40 px-10 pt-7.5 bg-white w-80">
          <div className="mb-2.5 text-xl font-medium">
            Everest Package
          </div>
          <div className="line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illo facilis iusto qui ab vitae deserunt nesciunt. Tempore sed, quisquam corporis minima beatae debitis iste voluptas, nisi laudantium nam at?</div>
        </div>
        <div className="flex items-center h-40 px-1 text-white bg-black">
          <ChevronRight size={36} />
        </div>
      </div>
    </section>

    <section className="min-h-screen">

    </section>
  </>)
}