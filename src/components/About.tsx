"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const About = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.section
      ref={ref}
      className="relative flex flex-col flex-grow bg-[#EEECEB]"
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <hr className="hidden lg:block absolute w-1/4 top-[3.8rem] ml-25 bg-[#C7C2BE]" />

      <div className="flex flex-col-reverse items-center lg:flex-row gap-20 p-5 lg:py-20 lg:px-25">
        <motion.div className="lg:w-1/2 flex flex-col gap-4" variants={fadeIn}>
          <div className="flex flex-col gap-6">
            <div className="text-[#939393] font-canela text-2xl lg:text-3xl  font-extrabold">
              Hi there,
            </div>
            <div className="text-[#C99D86] font-canela font-extrabold text-5xl lg:text-[3.5rem]">
              I&apos;m Claudia
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <motion.p
              variants={fadeIn}
              className="text-xs lg:text-base text-black"
            >
              I understand that life can be challenging and difficult to
              navigate at times. Therapy offers a space to bring anything that
              may be worrying you or causing you distress. Sometimes, people are
              unsure why they are coming to therapy, and that is completely
              okay. There is no right or wrong topic to bring, and nothing I
              would consider unimportant. Whatever has led you to seek support
              is valid, and I can help you explore it further. Therapy can help
              create meaningful shifts and heal the past.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-xs lg:text-base text-black"
            >
              Therapy is a safe and supportive space to explore and make sense
              of your difficulties. I want you to feel truly seen and
              understood. Together, we will explore what feels most challenging
              for you and work towards meaningful change and personal growth. I
              believe the therapeutic relationship is just as important as
              psychological knowledge. I take a person-centred approach, seeking
              to understand not only the difficulties someone brings, but the
              whole person. This allows us to work together in a way that
              supports psychological, emotional, and relational wellbeing,
              tailored to each individual.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-xs lg:text-base text-black"
            >
              Over the past 10 years, I have undertaken rigorous clinical
              training and worked with children, adolescents, and adults. I have
              practiced in both Ireland and the United Kingdom across a range of
              mental health services, including the Health Service Executive
              (HSE), the National Health Service (NHS), charity services,
              private settings, private rehabilitation services, and staff
              support services. I have also worked in highly specialised areas,
              including addiction and substance misuse, trauma, and chronic
              health conditions.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-xs lg:text-base text-black"
            >
              I am a registered Psychologist and a member of the British
              Psychological Society and the British Association for Counselling
              and Psychotherapy. I completed my Doctorate in Counselling
              Psychology at City, University of London.
            </motion.p>
          </div>
        </motion.div>

        <motion.div className="relative lg:w-fit h-fit" variants={fadeIn}>
          <div className="hidden xl:inline w-[380px] h-[325px] absolute left-5 -top-5 bg-[#C7C2BE] z-0" />
          <Image
            className="relative z-10"
            alt="image gallery"
            src="/about_me.png"
            width={380}
            height={325}
            fetchPriority="high"
            priority
            quality={80}
          />
        </motion.div>
      </div>

      <hr className="hidden  lg:block absolute w-full bottom-20 bg-[#C7C2BE]" />
    </motion.section>
  );
};

export default About;
