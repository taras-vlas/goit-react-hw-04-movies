import LoaderSpinner from 'react-loader-spinner';
  // import { styled } from 'react-jss';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
      <LoaderSpinner
        type="Watch"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
      <span className={styles.Loading}>Loading ...</span>
    </div>
  );
}

export default Spinner;
// type="TailSpin"
// type="Watch"
// type="ThreeDots"
