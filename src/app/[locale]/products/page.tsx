import { motion } from "framer-motion"

const list = { hidden : {opacity:0}}
const item = {hidden :{x:-10, opacity:0}}
export default function page(){
    



return (
  <motion.ul animate="hidden" variants={list}>
      <motion.li variants={item} />
          <motion.li variants={item} />
              <motion.li variants={item} />
                </motion.ul>
                )

  
}