import React from 'react';
import loading from '@/assets/loading.gif'
import styles from './index.module.less'

const Loading: React.FC = () => {
    return (
      <div className={styles.loadingWrap}>
          <img src={loading} alt='loading'  className={styles.loading} />
          <span>加载中...</span>
      </div>
    );
};

export default Loading;
