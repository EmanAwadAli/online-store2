export type HrProps = {
  height: number,
  color: string,
  separatingSpaceTop: number,
  separatingSpaceBottom: number,
};
export default function Hr({ height, color, separatingSpaceTop, separatingSpaceBottom }: HrProps) {
  return (
    <span className={`block mt-${separatingSpaceTop} mb-${separatingSpaceBottom} ${ height === 1 ? "border-t" : `border-t-${height}` } border-[${color}]`}></span>
  );
}
