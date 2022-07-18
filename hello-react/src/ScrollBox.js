import { Component } from 'react';

class ScrollBox extends Component {

    // 컴포넌트에 스크롤바를 맨 아래쪽으로 내리는 메서드
    scrollToBottom = () => {
        // scrollHeight: 스크롤이 있는 박스 안의 div의 높이 (650)
        // clientHeight: 스크롤이 있는 박스의 높이 (300)
        const{ scrollHeight, clientHeight } = this.box;     // 비구조화 할당

        // scrollTop : 세로 스크롤바 위치(0~350) = 650 - 300 = 350 -> 즉 맨 아래로 내리겠다. 
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };
        
        const innnerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
                <div style={innnerStyle}/>
            </div>
        );
    }
}

export default ScrollBox;