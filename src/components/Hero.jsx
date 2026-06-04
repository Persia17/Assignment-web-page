import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative w-full pt-10 pb-16 lg:py-0 lg:min-h-[820px] flex flex-col justify-center overflow-hidden bg-transparent"
      id="home"
    >
      <div className="max-w-[1310.40px] mx-auto px-4 lg:px-8 w-full">
        <motion.div
          className="relative mx-auto max-w-400 text-center py-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src="/avatars/Vector5.png"
            className="absolute w-24 sm:w-40 md:w-80 lg:w-110 left-1/2 transform -translate-x-1/2 bottom-2.5 z-0 top-24 sm:top-26 md:top-32 lg:top-38"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          />
          <motion.h1
            className="relative font-gerbil text-[18px] sm:text-[26px] md:text-[38px] lg:text-[48px] xl:text-[58px] 2xl:text-[68px] leading-7 sm:leading-9 md:leading-[2.8rem] lg:leading-[3.6rem] xl:leading-[4.4rem] 2xl:leading-[5.2rem] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            The{" "}
            <span className="relative inline-block">
              thinkers
            </span>{" "}
            and doers
            <br />
            <span className="relative inline-block z-10 px-4 sm:px-6 md:px-8">
              <span className="absolute inset-0 bg-pink-200 rounded-full -z-10 w-full h-full" />
              were changing
            </span>{" "}
            the{" "}
            <span className="relative inline-block z-10 px-4 sm:px-6 md:px-8">
              <span className="absolute inset-0 bg-green-100 rounded-full -z-10 w-full h-full" />
              status
            </span>
            <br />
            Quo with
          </motion.h1>

          <motion.p
            className="mt-6 mx-auto max-w-[90%] sm:max-w-150 md:max-w-190 lg:max-w-240 font-satoshi text-[11px] sm:text-[13px] md:text-sm lg:text-base xl:text-lg leading-4 sm:leading-5 md:leading-6 lg:leading-7 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          >
            We are a team of strategists, designers, communicators, researchers.
            Together we believe that progress only happens when you refuse to
            play things safe.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-12 h-105 w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {[
            { src: "/avatars/Ellipse 255.png", style: { top: "40%", left: "-10%" } },
            { src: "/avatars/Ellipse 261.png", style: { top: "25%", left: "0%" } },
            { src: "/avatars/Ellipse 258.png", style: { top: "0%", left: "20%" } },
            { src: "/avatars/Ellipse 256.png", style: { top: "50%", left: "30%" } },
            { src: "/avatars/Ellipse 257.png", style: { top: "15%", left: "50%" } },
            {
              src: "/avatars/Ellipse 260.png",
              style: {},
              extra:
                "w-[70px] sm:w-[90px] md:w-[110px] lg:w-[130px] xl:w-[160px] border-4 sm:border-[5px] md:border-[6px] border-white top-[26%] left-[60%] sm:top-[28%] sm:left-[60%] md:top-[40%] md:left-[60%] lg:top-[40%] lg:left-[60%]",
            },
            { src: "/avatars/Ellipse 259.png", style: { top: "0%", left: "75%" } },
            { src: "/avatars/Ellipse 262.png", style: { top: "45%", left: "90%" } },
          ].map((avatar) => (
            <motion.img
              key={avatar.src}
              src={avatar.src}
              className={
                "absolute rounded-full w-14 sm:w-18 md:w-24 lg:w-30 xl:w-38 " +
                (avatar.extra ?? "")
              }
              style={avatar.style}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.04,
                y: -6,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}