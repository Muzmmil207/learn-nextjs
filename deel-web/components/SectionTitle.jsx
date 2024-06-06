import { Pen } from "lucide-react";
import Link from "next/link";

function SectionTitle() {
  return (
    <section className="flex items-center justify-between">
      <div className="max-w-[1000px]">
        <h1 className="text-2xl font-bold">Accounting</h1>
        <p className="text-gray-600">
          Your reports are generated from all your Income and Expenses in Deel.
        </p>
      </div>
      <Link href="#" className="font-semibold flex items-center">
        <Pen className="mr-2" />
        <span>Edit Currency USD $</span>
      </Link>
    </section>
  );
}

export default SectionTitle;
