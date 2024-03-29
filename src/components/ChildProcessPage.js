import { motion, useScroll, useSpring } from "framer-motion";
import { NodeChildProcessPageContent } from '../ChildProcessContent';
import '../App.css'
function CallbackPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

     <div dangerouslySetInnerHTML={{ __html: NodeChildProcessPageContent() }}></div>
    </>
  );
}
export default CallbackPage;