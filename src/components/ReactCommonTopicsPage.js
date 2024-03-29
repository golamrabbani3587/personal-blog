import { motion, useScroll, useSpring } from "framer-motion";
import { ReactCommonTopicsContent } from '../reactCommonTopicContent';
import '../App.css'
function ReactCommonPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

     <div dangerouslySetInnerHTML={{ __html: ReactCommonTopicsContent() }}></div>
    </>
  );
}
export default ReactCommonPage;