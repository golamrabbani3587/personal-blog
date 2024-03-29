import { motion, useScroll, useSpring } from "framer-motion";
import { BlogPageContent } from '../BlogContent';
import '../App.css'
function CICDPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

     <div dangerouslySetInnerHTML={{ __html: BlogPageContent() }}></div>
    </>
  );
}
export default CICDPage;