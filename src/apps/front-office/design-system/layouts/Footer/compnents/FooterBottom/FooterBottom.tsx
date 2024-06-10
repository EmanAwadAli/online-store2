import CopyRights from "../CopyRights";
import PaymentMethods from "../PaymentMethods";

export type FooterBottomProps = {
  // props go here
};
export default function FooterBottom(props: FooterBottomProps) {
  return (
    <div className="footer-bottom">
      <div className="container flex items-center justify-between gap-6 py-8">
        <CopyRights/>
        <PaymentMethods/>
      </div>
    </div>
  );
}
