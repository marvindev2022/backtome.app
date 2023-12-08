import { motion } from 'framer-motion';
import dog from '../../assets/background/gif-dog.gif';
import FormRecoverPassword from '../../components/forms/RecoverPassword';

export default function RecoverPassword({
  setLogin,
  setRecover,
  setBackgroundMenu,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-screen h-screen bg-[#8391DC]"
    >
      <div className="flex justify-center items-center h-full w-full  z-10">
        <FormRecoverPassword
          setLogin={setLogin}
          setRecover={setRecover}
          setBackgroundMenu={setBackgroundMenu}
        />
      </div>
      <img
        className="h-auto h-max-[40rem] w-auto fixed bottom-[-5rem] right-[-10rem]"
        src={dog}
        alt="Gif dog"
      />
    </motion.div>
  );
}
