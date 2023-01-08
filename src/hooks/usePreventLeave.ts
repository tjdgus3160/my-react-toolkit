export default function usePreventLeave() {
  const listener = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = ''; // 이걸 넣어야 동작함
  };

  const enablePreve = () => window.addEventListener('beforeunload', listener);
  const disablePreve = () => window.removeEventListener('beforeunload', listener);

  return {enablePreve, disablePreve};
}

// export default function App() {
//   const {enablePreve, disablePreve} = usePreventLeave();

//   return (
//     <div className="App">
//       <button onClick={enablePreve}>Protect</button>
//       <button onClick={disablePreve}>Unprotect</button>
//     </div>
//   );
// }
