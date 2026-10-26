import mark from "@/assets/mark.png";

export function Mark({ className }: { className?: string }) {
  return <img src={mark} alt="" className={`object-contain ${className ?? ""}`} />;
}
