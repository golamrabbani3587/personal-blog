import { motion, useScroll, useSpring } from "framer-motion";
import { HomePageContent } from '../HomePageContent';
import '../App.css'
function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

     <div dangerouslySetInnerHTML={{ __html: HomePageContent() }}></div>
    </>
  );
}
export default HomePage;