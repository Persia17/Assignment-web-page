import { motion } from "framer-motion";

const rows = [
  {
    id: 1,
    small: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
  },
  {
    id: 2,
    small: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    small: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="w-full flex justify-center" id="services">
      <div className="max-w-[1310.40px] w-full px-4 lg:px-8 py-16 flex justify-center">
        <div className="w-full max-w-full mx-auto relative">
          {/* Heading block */}
          <motion.div
            className="max-w-217.25 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative inline-block">
              <h2 className="font-gerbil text-[26px] leading-8 sm:text-[34px] sm:leading-[2.6rem] md:text-[44px] md:leading-[3.4rem] lg:text-[54px] lg:leading-[4.2rem] xl:text-[64px] xl:leading-[5.0rem]">
                What we{" "}
                <span className="relative inline-block z-10">
                  <span className="absolute inset-0 bg-green-100 rounded-full z-[-1] w-full h-full" />
                  can
                </span>
                <br />
                offer you!
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            whileInView={{ opacity: 0.9, scale: 1, rotate: -3.88 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/avatars/Vector2516.png"
              alt=""
              className="
                absolute z-0 opacity-90
                w-115  h-35  top-[-1%] left-full
                sm:w-120 sm:h-52 sm:top-[-25%] sm:left-[80%]
                md:w-120 md:h-96 md:top-[-10%] md:left-[80%]
                lg:w-[600px] lg:h-[450px] lg:top-[-45%] lg:left-[85%]
                xl:w-234.75 xl:h-174.25 xl:top-[-55%] xl:left-[85%]
                -rotate-[3.88]
                -translate-x-1/2
              "
            />
          </motion.div>

          <motion.div
            className="mb-6 h-7.5 flex items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <img
              src="/avatars/Vector5.png"
              alt=""
              className="w-44 sm:w-56 lg:w-75 h-6 object-contain"
            />
          </motion.div>
          <motion.div
            className="w-full border-y border-[#B1B1B1]"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {rows.map((row, index) => (
              <motion.div
                key={row.id}
                className={`flex items-center py-6 ${
                  index !== rows.length - 1 ? "border-b border-[#B1B1B1]" : ""
                }`}
                variants={rowVariants}
                whileHover={{
                  backgroundColor: "rgba(0,0,0,0.02)",
                  transition: { duration: 0.25 },
                }}
              >
                <div className="w-full flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="sm:basis-[28%]">
                    <p className="whitespace-pre-line font-satoshi text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[19px] leading-5 sm:leading-6 lg:leading-7 xl:leading-8">
                      {row.small}
                    </p>
                  </div>
                  <div className="sm:flex-1 flex justify-center sm:justify-start">
                    <h3 className="font-gerbil text-[17px] sm:text-[21px] lg:text-[24px] xl:text-[27px] leading-8 sm:leading-9 lg:leading-10 xl:leading-11 sm:text-left text-center">
                      {index === 2 ? (
                        <>
                          Piloting digital co
                          <span className="relative inline-block">
                            <span className="absolute -inset-y-2 -left-2.5 -right-2.5 flex justify-center -z-10">
                              <span className="w-11 h-11 sm:w-15 sm:h-15 lg:w-19 lg:h-19 rounded-full overflow-hidden bg-white/10">
                                <img
                                  src="/avatars/Rectangle661.png"
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </span>
                            </span>
                            nfid
                          </span>
                          ence
                        </>
                      ) : (
                        row.title
                      )}
                    </h3>
                  </div>
                  <div className="sm:basis-[10%] flex justify-end">
                    <motion.img
                      src="/avatars/Arrow44.png"
                      alt=""
                      className="w-12 sm:w-14 lg:w-16 h-3 object-contain"
                      whileHover={{
                        x: 6,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        },
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}