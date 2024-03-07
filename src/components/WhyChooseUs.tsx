"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export default function WhyChooseUs() {
    const MusicContent = [
        
{title: "Harmony Haven: Unlock Your Musical Potential at Our Music School",
description:"Welcome to Harmony Haven, where melodies meet mastery! Our music school offers a harmonious blend of tradition and innovation, providing a nurturing environment for students of all ages and skill levels to explore their musical passions. With our team of dedicated instructors and state-of-the-art facilities, we're committed to helping you unlock your full musical potential."},

{title: "Sound Waves Academy: Dive into the World of Music with Our Music School",
description:"Immerse yourself in the world of music at Sound Waves Academy, where creativity knows no bounds! Our music school offers a dynamic curriculum designed to inspire and empower students on their musical journey. Whether you're a budding virtuoso or just starting out, our experienced instructors will guide you through a diverse range of musical styles and techniques, helping you to develop your skills and discover your unique voice."},

{title: "Melody Mansion: Discover Your Musical Talents at Our Music School",
description:"Welcome to Melody Mansion, where every note is a masterpiece waiting to be played! Our music school is dedicated to fostering a love of music and nurturing the talents of aspiring musicians. From piano to percussion, guitar to vocals, our comprehensive curriculum covers it all. With a focus on individualized instruction and hands-on learning, we're here to help you cultivate your musical talents and reach new heights of performance."},

{title: "Rhythmic Resonance: Find Your Beat at Our Music School",
description:"Step into the rhythm of possibility at Rhythmic Resonance, where music is more than just notes—it's a way of life! Our music school offers a vibrant and inclusive community where students can explore the joys of music-making in a supportive and encouraging environment. Whether you're interested in jazz, classical, rock, or something in between, our expert instructors will help you find your beat and unleash your inner musician."}
    ];
  return (
    <div className="text-white">
        <StickyScroll content={MusicContent}/>
    </div>
  )
}