# 🫧 스스로 꾸준히 해 보는 REACT STUDY! 🫧

## `더북_리액트를 다루는 기술`과 함께합니다 ✨

### WHAT I LEARNED SO FAR 👩🏻‍💻

#### 📌 FIRST DAY

- [Chapter 1]

  - REACT에 대한 개념 잡기 ✔️
  - 작업 환경 공부 및 설정 완료 ✔️

- [Chapter 2]
  - JSX 문법, ESLint & Prettier 적용 공부 완료 ✔️

#### 📌 SECOND DAY

- [Chapter 3]

  - 클래스형 컴포넌트 ✔️
  - 컴포넌트 생성 ✔️
  - props ✔️

    - 함수형 컴포넌트에서의 props ✔️
    - 클래스형 컴포넌트에서의 props ✔️

  - state ✔️
    - 클래스형 컴포넌트의 state : **_`this.setState`_** 사용 ✔️
    - 함수형 컴포넌트의 state : **_`useState`에서 선언한 `세터 함수(Setter function)`_** 사용 ✔️

#### 📌 THIRD DAY

- [Chapter 4]

  - 리액트의 이벤트 시스템 ✔️
  - 이벤트 핸들링 : **_`함수형 컴포넌트 & 클래스형 컴포넌트 구현`_** 모두! ✔️

    - 컴포넌트 생성 및 불러오기 ✔️
    - onChange 이벤트 핸들링하기 ✔️
      - 렌더링을 하는 동시에 함수를 만들어서 전달하는 방법 ✔️
      - 함수(메서드)를 미리 준비하여 전달하는 방법 ✔️
    - input 여러개 다루기 : `e.target.name` 이용 ✔️

      - 함수형 컴포넌트 : `useState`를 쓸 때 인풋 값들이 들어있는 **_`form 객체`_** 를 사용하면 된다. ✔️

    - onKeyPress 이벤트 핸들링하기 ✔️

#### 📌 FOURTH DAY

- [Chapter 5]

  - ref 사용 상황 : 먼저 ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 반드시 고려한 후에 활용해라! ✔️

    - 특정 input에 포커스 주기 ✔️
    - 스크롤 박스 조작하기 ✔️
    - Canvas 요소에 그림 그리기 등 ✔️

  - ref 사용 ✔️

    - 콜백 함수 사용 ✔️
    - CreateRef ✔️

    ☝🏻 **새롭게 알게 된 내용** : `input.focus()`

  - 컴포넌트에 ref 달기 ✔️

    ☝🏻 **새롭게 알게 된 내용** : react에서의 `style` 중 `overflow` & `position`

#### 📌 FIFTH DAY

- [Chapter 6]

  - 리액트에서 반복적인 내용을 효율적으로 보여주고 관리하는 방법 ✔️

    - 자바 스크립트의 map 함수 ✔️
    - 데이터 배열을 컴포넌트 배열로 변환하기 ✔️
    - KEY ✔️
    - 동적인 배열 렌더링하기 ✔️

      - 초기 상태 설정 ✔️
      - 데이터 추가 기능 구현하기 : 불변성 유지를 위해 concat 함수 사용 ✔️
      - 데이터 삭제 기능 구현하기 : 불변성 유지를 위해 filter 함수 사용 ✔️

      ☝🏻 **새롭게 알게 된 내용** : `ul & li 태그`, `conct` 함수, `filter` 함수

      🍧 **중요 포인트** : 상태 안에서 배열을 변형할 때는 배열에 직접 접근하여 수정하는 것이 아니라, **`concat`, `filter` 등의 배열 내장 함수를 이용하여 새로운 배열을 만든 후 이를 새로운 상태로 설정**해 주어야 한다! 즉, **기존 상태를 그대로 두면서 새로운 값을 상태로 설정**해야 한다.

- [Chapter 7]

  - 라이프 사이클 메서드의 이해 ✔️

    - 마운트 ✔️
    - 업데이트 ✔️
    - 언마운트 ✔️

  - 라이프 사이클 메서드 구체적으로 살펴보기 ✔️

    ![image](https://user-images.githubusercontent.com/63195670/179726496-0ea069bb-7b68-4713-9c1f-4921fe2d1986.png)

    - 마운트 ✔️

      - constructor ✔️
      - getDerivedStateFromProps ✔️
      - render ✔️
      - componentDidMount ✔️

    - 업데이트 ✔️

      - getDerivedStateFromProps ✔️
      - shouldComponentUpdate ✔️
      - render ✔️
      - getSnapshotBeforeUpdate ✔️
      - componentDidUpdate ✔️

    - 언마운트 ✔️

      - componentWillUnmount ✔️

    - 에러 잡아내기 ✔️
      - componentDidCatch ✔️

  ☝🏻 **새롭게 알게 된 내용** : 랜덤 색상 생성하기

#### 📌 SIXTH DAY

- [Chapter 8]

  - **HOOKS** : 기존의 함수 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해준다! ✔️

    - useState ✔️

      - 호출될 경우 상태 값과 상태를 설정하는 함수를 원소로 하는 배열을 반환한다.
      - 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링된다.

    - useEffect ✔️

      - 리액트 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
      - 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태라고 생각하면 됨

    - useReducer ✔️

      - 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 `reducer` 함수 구현해야 함
      - 이후 `useReducer` 함수의 첫번째 파라미터에는 `reducer` 함수를 넣고, 두번째 파라미터에는 해당 `reducer`의 기본값을 넣어줌으로써 `state` 값과 `dispatch` 함수를 받아온다.
        - `useState`와 비슷하게 `state`는 현재 가리키고 있는 상태고, `dispatch`는 액션을 발생시키는 함수이다.

      ☝🏻 **새롭게 알게 된 내용** : 여러 인풋 상태 관리 가능 like `e.target.name`

    - useMemo ✔️

      - 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식

    - useCallback ✔️

      - 만들어 놓았던 함수를 재사용 가능

    - useRef ✔️

      - 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다.
      - 컴포넌트 로컬 변수를 사용해야 할 때도 활용

    - 커스텀 HOOKS 만들기 ✔️

    - 다른 HOOKS 참고 링크 ✔️

      - https://nikgraf.github.io/react-hooks/
      - https://github.com/rehooks/awesome-react-hooks

  🍧 **중요 포인트** : **함수 컴포넌트와 HOOKS를 사용할 것을 권장**하고 있다. **함수 컴포넌트의 사용을 첫 번째 옵션**으로 두고, 꼭 필요한 상황에서만 클래스형 컴포넌트를 구현해라!
