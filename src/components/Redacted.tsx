"use client";

export default function Redacted({ children }: { children: React.ReactNode }) {
  return (
    <span className="redacted" tabIndex={0} title="[DATA EXPUNGED] — hover to declassify">
      <span className="redacted-inner">{children}</span>
    </span>
  );
}
