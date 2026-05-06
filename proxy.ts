import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/*
  Proxy ativo apenas quando subdomínios forem configurados.

  Quando o DNS estiver com:
    pousada.pitaua.com.br
    gastronomia.pitaua.com.br
    pesqueiro.pitaua.com.br
    eventos.pitaua.com.br

  Preencha o `subdomainMap` abaixo. Enquanto vazio, requests passam direto
  sem rewrite — e o `matcher` abaixo evita cobrar invocação em assets.
*/

const subdomainMap: Record<string, string> = {
  // "pousada.pitaua.com.br": "/pousada",
  // "gastronomia.pitaua.com.br": "/gastronomia",
  // "pesqueiro.pitaua.com.br": "/pesqueiro",
  // "eventos.pitaua.com.br": "/eventos",
};

export function proxy(request: NextRequest) {
  if (Object.keys(subdomainMap).length === 0) return NextResponse.next();

  const hostname = request.headers.get("host") ?? "";
  const rewritePath = subdomainMap[hostname];
  if (!rewritePath) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = rewritePath + (url.pathname === "/" ? "" : url.pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/).*)",
  ],
};
