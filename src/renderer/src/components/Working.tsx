import { memo } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import { Trans } from 'react-i18next';

import loadingLottie from '../7077-magic-flow.json';
import Button from './Button';
import styles from './Working.module.css';


function Working({ text, progress, onAbortClick }: {
  text: string,
  progress?: number | undefined,
  onAbortClick: () => void
}) {
  return (
    <div className={styles['wrapper']} style={{ position: 'absolute', bottom: 0, top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        className={styles['loader-box']}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <div style={{ width: 150, height: 80 }}>
          <Lottie
            loop
            animationData={loadingLottie}
            play
            style={{ width: '170%', height: '210%', marginLeft: '-40%', marginTop: '-35%', pointerEvents: 'none' }}
          />
        </div>

        <div style={{ marginTop: '.7em', textAlign: 'center' }}>
          {text}...
        </div>

        {(progress != null) && (
          <div style={{ marginTop: '.5em' }}>
            {`${(progress * 100).toFixed(1)} %`}
          </div>
        )}

        <div style={{ marginTop: '1.5em' }}>
          <Button onClick={onAbortClick} style={{ fontSize: '1.1em', padding: '.2em 1em' }}><Trans>Abort</Trans></Button>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(Working);
