import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex items-center justify-center mt-10 flex-col gap-2">
      <Image
        src={"/interior-design.png"}
        width={400}
        height={200}
        alt="room-design"
      />
      <h2 className="font-medium text-lg text-gray-500">
        Create New AI Interior Design
      </h2>
      <Link href={"dashboard/create-new"}>
        <Button variant="default">+Redesign Room</Button>
      </Link>{" "}
    </div>
  );
};

export default EmptyState;
