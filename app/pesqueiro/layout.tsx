import { AreaHeader } from "@/components/shared/AreaHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

export default function PesqueiroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AreaHeader areaName="Pesqueiro" />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <WhatsAppFloat area="pesqueiro" />
    </>
  );
}
