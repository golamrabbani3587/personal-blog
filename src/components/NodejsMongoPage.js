import { motion, useScroll, useSpring } from "framer-motion";
import { NodejsMongodbPageContent } from '../NodejsMongodbApplicationContent';
import '../App.css'
function NodeJSMongodbPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

     <div dangerouslySetInnerHTML={{ __html: NodejsMongodbPageContent() }}></div>
    </>
  );
}
export default NodeJSMongodbPage;