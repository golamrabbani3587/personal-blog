import { motion, useScroll, useSpring } from "framer-motion";
import { Contact } from '../ContactContent';
import '../App.css'
function ContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

     <div dangerouslySetInnerHTML={{ __html: Contact() }}></div>
    </>
  );
}
export default ContactPage;