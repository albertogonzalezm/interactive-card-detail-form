export default function CompleteState({ state }: any) {
  return (
    <>
      <div className="complete-state" hidden={state}>
        <div>
          <img src="/images/icon-complete.svg" alt="" />
          <h2 className="complete-state-h">THANK YOU!</h2>
          <p className="complete-state-p">{"We've added your card details"}</p>
        </div>
      </div>
    </>
  );
}
