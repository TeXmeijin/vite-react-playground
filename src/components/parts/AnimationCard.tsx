import { motion } from 'framer-motion';
import { AnimationCardStyles } from '~/components/parts/AnimationCard.css';

export const AnimationCard = () => {
  return (
    <div className={AnimationCardStyles.root}>
      <motion.div
        className={AnimationCardStyles.card}
        animate={{
          x: 0,
          backgroundColor: '#777',
          boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        hoge
      </motion.div>
    </div>
  );
};
