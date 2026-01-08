"use client"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import img1 from "../assets/curvet.svg"
import { useState } from "react"

export default function SocialSection() {
  const [status, setStatus] = useState("idle") // idle | sending | sent

  const footerMaskSVG = `data:image/svg+xml,${encodeURIComponent(`
     <svg width="100%" height="100%" viewBox="0 0 1688 896" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 73.5C0 56.9315 13.4315 43.5 30 43.5H641.409C665.549 43.5 688.773 34.2581 706.312 17.6719V17.6719C718.313 6.32341 734.203 0 750.72 0H936.302C954.204 0 971.543 6.2503 985.328 17.6719V17.6719C1005.47 34.365 1030.82 43.5 1056.98 43.5H1658C1674.57 43.5 1688 56.9315 1688 73.5V835.5C1688 852.069 1674.57 865.5 1658 865.5H1499.48C1492.09 865.5 1484.96 868.231 1479.45 873.169L1462.55 888.331C1457.04 893.269 1449.91 896 1442.52 896H302.72C294.59 896 286.809 892.7 281.157 886.857L269.343 874.643C263.691 868.8 255.91 865.5 247.78 865.5H30C13.4315 865.5 0 852.069 0 835.5V73.5Z" fill="black"/>
    </svg>
  `)}`
  const socialLinks = {
  GitHub: "https://github.com/gtra5",
  LinkedIn: "https://www.linkedin.com/in/elijah-olokode-9a246028a/",
  Twitter: "https://twitter.com/yourusername",
}


  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      setStatus("sent")
      e.target.reset()
      setTimeout(() => setStatus("idle"), 2000) // reset button after 2s
    } catch (err) {
      console.error("EmailJS error:", err)
      alert("Failed to send message. Check console.")
      setStatus("idle")
    }
  }

  return (
    <footer className="bg-[#c8f550] relative overflow-hidden min-h-screen px-3 sm:px-4 md:px-8 pb-4 sm:pb-6 flex flex-col justify-end">
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-48 md:h-56 lg:h-72 bg-gradient-to-b from-[#f5f1e8] to-[#c8f550] z-0" />

      <div className="relative flex-1 flex flex-col w-full max-w-[1688px] mx-auto mt-4 sm:mt-8 md:mt-12 z-10 min-h-[auto] sm:min-h-[70vh] md:min-h-[80vh]">
        <div
          className="absolute inset-0 w-full h-full z-0 bg-[#282c20] overflow-hidden"
          style={{
            maskImage: `url("${footerMaskSVG}")`,
            WebkitMaskImage: `url("${footerMaskSVG}")`,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />

        <div
          className="absolute inset-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-20 flex flex-col h-full px-3 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-10 md:py-12 lg:py-20">
          <div className="flex justify-center items-center w-full mt-12">
            <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Let's connect
            </h1>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-stretch">
            <div className="hidden lg:flex col-span-3 text-center flex-col justify-center">
              <h4 className="font-black text-xs uppercase mb-6 text-white/40 tracking-[0.2em]">
                PAGES
              </h4>
              <ul className="space-y-2">
                {["Home-ish", "Builds", "About"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white font-bold text-2xl uppercase hover:text-[#c8f550] transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#store"
                    className="text-[#c8f550] font-black text-2xl uppercase hover:text-white transition"
                  >
                    STORE
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <motion.form
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="w-full max-w-xl rounded-3xl p-6 space-y-4"
              >
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white w-full outline-none focus:border-[#c8f550]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white w-full outline-none focus:border-[#c8f550]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    required
                    placeholder="Tell me about your project..."
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white w-full resize-none outline-none focus:border-[#c8f550]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`w-full bg-[#c8f550] text-black font-bold uppercase tracking-wider py-3 rounded-full transition ${
                    status === "sending" ? "cursor-wait" : ""
                  }`}
                  disabled={status === "sending"}
                >
                  {status === "idle" && "Send Message"}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "Sent!"}
                </motion.button>
              </motion.form>
            </div>

            <div className="lg:col-span-3 text-center flex flex-col justify-center">
  <h4 className="text-xs uppercase tracking-[0.2em] mb-6 text-white/40 font-black">
    Follow
  </h4>

  <ul className="space-y-2">
    {["GitHub", "LinkedIn", "Twitter"].map((p) => (
      <li key={p}>
        <a
          href={socialLinks[p]}
          target="_blank"
          rel="noopener noreferrer"
          className="block font-bold uppercase text-2xl text-white hover:text-[#c8f550] transition"
        >
          {p}
        </a>
      </li>
    ))}
  </ul>
</div>

          </div>
        </div>
      </div>
    </footer>
  )
}
