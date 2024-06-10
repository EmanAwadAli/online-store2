import { Link } from "@mongez/react-router";

export type SmallBannerProps = {
  banner: string,
  link: string
};
export default function SmallBannerItem({banner, link}: SmallBannerProps) {
  return (
    <>
      <Link to={link} className="rounded-xl overflow-hidden h-[163px]">
        <img src={banner} alt="" className="w-full h-full object-cover" />
      </Link>
    </>
  );
}
