import FooterLogo from "../FooterLogo";

export type FooterBriefProps = {
  // props go here
};
export default function FooterBrief(props: FooterBriefProps) {
  return (
    <div className="footer-brief mb-5">
      <FooterLogo/>
      <p className="text-sm text-gray-400">Condimentum adipiscing vel neque dis nam parturient orci at scelerisque.</p>
    </div>
  );
}
