import React, { useEffect, useState } from 'react';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center'
  }
};

const Loading = () => {
  const [loading, setLoading] = useState('Loading');

  useEffect(() => {
    const loadingInterval = window.setInterval(() => {
        // eslint-disable-next-line
        loading === 'Loading' + '...'
        ? setLoading('Loading')
        : setLoading(loading => loading + '.');
    }, 300);

    return () => {
      window.clearInterval(loadingInterval);
    };
  }, [loading]);

  return <p style={styles.content}>{loading}</p>;
};

export default Loading;
