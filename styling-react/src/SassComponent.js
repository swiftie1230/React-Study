// SassComponent Sass 스타일 시트를 사용하는 컴포넌트 파일
import './SassComponent.scss';

const SassComponent = () => {
    return (
        <div className="SassComponent">
            <div className="box red" />
            <div className="box orange" />
            <div className="box yellow" />
            <div className="box green" />
            <div className="box blue" />
            <div className="box indigo" />
            <div className="box violet" />
        </div>
    );
};

export default SassComponent;