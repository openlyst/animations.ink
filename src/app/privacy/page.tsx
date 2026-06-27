import { type Metadata } from "next";
import PrivacyContent from "./privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
