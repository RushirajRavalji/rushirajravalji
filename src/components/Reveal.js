import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


function Reveal({ children, width = "100%" }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControlls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControlls.start("visible")
        }

    }, [isInView, mainControlls])

    return (
        <div ref={ref}  >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 170 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.75, delay: 0.30 }}
            >
                {children}
            </motion.div>
        </div>

    )
}

export default Reveal;
