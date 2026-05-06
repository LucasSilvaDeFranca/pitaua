import { AreaHeader } from "@/components/shared/AreaHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

export default function GastronomiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AreaHeader areaName="Gastronomia" />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <WhatsAppFloat area="gastronomia" />
    </>
  );
}
