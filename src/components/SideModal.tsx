import { useContext } from 'react';
import { GIcon } from '../assets';
import { ContextType, AppContext } from '../context';
import { motion } from 'framer-motion';
import { slideIn, fadeIn } from '../utils/motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const SideModal = () => {
  const { setSideModal, sideModal } = useContext(AppContext) as ContextType;
  return (
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 0.5)}
      initial="hidden"
      animate="show"
      className="w-screen bg-black absolute top-0 right-0 bg-opacity-60 h-screen flex flex-row-reverse"
    >
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.7)}
        initial="hidden"
        animate="show"
        className="h-full bg-[#F2F6F9] w-5/12 px-16 py-5 flex flex-col gap-16"
      >
        <div className="text-4xl font-semibold flex flex-row-reverse">
          <XMarkIcon
            onClick={() => setSideModal(!sideModal)}
            className="w-10 font-extralight cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-12">
          <a
            href="#"
            data-replace="Services"
            className={`text-4xl font-bold w-max ${'modalLinks'}`}
          >
            <span>Services</span>
          </a>

          <a
            href="#"
            data-replace="Team"
            className={`text-4xl font-bold w-max ${'modalLinks'}`}
          >
            <span>Team</span>
          </a>
          <a
            href="#"
            data-replace="Vision"
            className={`text-4xl font-bold w-min ${'modalLinks'}`}
          >
            <span>Vision</span>
          </a>
          <a
            href="#"
            data-replace="Contact Us"
            className={`text-4xl font-bold w-max ${'modalLinks'}`}
          >
            <span>Contact Us</span>
          </a>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <hr className="border-2" />
          <p>Let's develop it together 👨‍💻</p>
          <div className="flex items-center justify-between">
            <h3>Code with us</h3>
            <GIcon width="8rem" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideModal;
