"use client";

/**
 * Hack to work around next.js hydration
 * @see https://github.com/uidotdev/usehooks/issues/218
 */
import React from "react";
import { useIsClient } from "@uidotdev/usehooks";

type ClientOnlyProps = {
  children: React.ReactNode;
};

export default function ClientOnly({
  children,
}: ClientOnlyProps): React.ReactElement {
  const isClient = useIsClient();

  // Render children if on client side, otherwise return empty fragment
  return isClient ? <>{children}</> : <></>;
}
