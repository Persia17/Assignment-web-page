import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section className="w-full flex justify-center" id="faqs">
      <div className="relative max-w-[1310.40px] w-full px-4 lg:px-8 py-8 flex justify-center overflow-hidden">
        <motion.img
          src="/avatars/image.png"
          alt=""
          className="
            pointer-events-none
            absolute inset-x-0 top-0 mx-auto -z-10
            w-full max-w-full
            h-full max-h-[380px] xl:max-h-[420px]
            object-contain
          "
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <div className="w-full max-w-full mx-auto flex flex-col items-center">
          <motion.div
            className="relative max-w-166.5 text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-gerbil text-[20px] leading-7 sm:text-[25px] sm:leading-8 lg:text-[30px] lg:leading-10 xl:text-[36px] xl:leading-12 tracking-[-0.025em] text-center">
              <span className="relative inline-block z-10 px-2">
                <span className="absolute inset-0 bg-green-100 rounded-full z-[-1] w-full h-full" />
                What
              </span>{" "}
              our customer
              <br />
              says{" "}
              <span className="relative inline-block z-10 px-2">
                <span className="absolute left-0 right-0 -bottom-2 flex justify-start z-0">
                  <img
                    src="/avatars/Vector5.png"
                    alt=""
                    className="w-full h-4 sm:h-5 object-contain"
                  />
                </span>
                About Us
              </span>
            </h2>
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            className="relative w-full max-w-[620px] bg-[#D7EEDD4D] rounded-4xl sm:rounded-[40px] lg:rounded-[60px] px-5 sm:px-8 lg:px-12 py-6 sm:py-9 lg:py-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{
              y: -8,
              boxShadow:
                "0 24px 60px rgba(0, 0, 0, 0.12)",
              transition: { type: "spring", stiffness: 230, damping: 20 },
            }}
          >
            <motion.div
              className="absolute left-4 sm:left-8 top-4 sm:top-6 flex gap-1 items-end"
              initial={{ opacity: 0, x: -10, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <img
                src="/avatars/invertedcomma1.png"
                alt=""
                className="w-2 sm:w-3 lg:w-4 h-auto"
              />
              <img
                src="/avatars/invertedcomma2.png"
                alt=""
                className="w-2 sm:w-3 lg:w-4 h-auto"
              />
            </motion.div>
            <motion.div
              className="absolute right-8 sm:right-8 bottom-4 sm:bottom-6 flex gap-1 items-start"
              initial={{ opacity: 0, x: 10, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            >
              <img
                src="/avatars/invertedcomma3.png"
                alt=""
                className="w-2 sm:w-3 lg:w-4 h-auto rotate-0"
              />
              <img
                src="/avatars/invertedcomma4.png"
                alt=""
                className="w-2 sm:w-3 lg:w-4 h-auto rotate-0"
              />
            </motion.div>
            <motion.p
              className="font-satoshi text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[18px] leading-5 sm:leading-6 lg:leading-7 xl:leading-8 text-center text-black max-w-175.75 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            >
              Elementum delivered the site within the timeline as they requested.
              In the end, the client found a 50% increase in traffic within days
              since its launch. They also had an impressive ability to use
              technologies that the company has not used, which have also
              proved to be easy to use and reliable.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}