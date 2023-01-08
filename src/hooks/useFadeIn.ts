import {useEffect, useRef} from 'react';

// delay 시간 뒤에 duration 시간에 걸쳐서 화면에 렌더링
export default function useFadeIn(duration = 1, delay = 0) {
  const element = useRef(null);

  useEffect(() => {
    if (element.current) {
      const $target: HTMLElement = element.current;

      $target.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      $target.style.opacity = '1';
    }
  }, []);

  return {ref: element, style: {opacity: 0}};
}

// export default function App() {
//   const fadeInH1 = useFadeIn(1, 2);
//   const fadeInP = useFadeIn(5, 10);

//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hello</h1>
//       <p {...fadeInP}>lalalalala</p>
//     </div>
//   );
// }
