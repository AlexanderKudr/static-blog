import PreviewCard from "@/components/PreviewCard";
import "styles/globals.css";

export default function HomePage() {
  return (
    <div className="grid gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <PreviewCard />
    </div>
  );
}
