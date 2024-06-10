export type CountDownTimerProps = {

};
export default function CountDownTimer(props: CountDownTimerProps) {
  const style = "flex flex-col items-center justify-center gap-1 w-20 h-20 text-3xl rounded-xl bg-white leading-6 border border-gray-200 shadow-md";
  return (
    <div className="countdown-timer flex items-center gap-3">
        <span className={`countdown-days ${style}`}>10<span className={`text-lg text-gray-400 capitalize leading-none`}>Days</span></span>
        <span className={`countdown-hours ${style}`}>3<span className={`text-lg text-gray-400 capitalize leading-none`}>Hr</span></span>
        <span className={`countdown-minutes ${style}`}>6<span className={`text-lg text-gray-400 capitalize leading-none`}>Min</span></span>
        <span className={`countdown-seconds ${style}`}>8<span className={`text-lg text-gray-400 capitalize leading-none`}>Sec</span></span>
    </div>
  );
}