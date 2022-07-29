import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);     // 미리 styles에서 클래스를 받아오도록 설정

const CSSModule = () => {
    return (
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        // <div className={[styles.wrapper, styles.inverted].join(' ')}>
        <div className={cx('wrapper', 'inverted')}>
            Hello, I am <span className="something">CSS Module</span>
        </div>
    );
};

export default CSSModule;