import Board from "@/components/ui/dashboard/Board";
import { DashCardItem } from "@/components/ui/dashboard/DashCard";

interface PagePorps {
  params: Promise<{
    username: string;
  }>;
}
export default async function PersonalBoard({ params }: PagePorps) {
  const current_param = await params;
  const cards: DashCardItem[] = [
    {
      id: 1,
      title: "task one",
      description: "fix some bug",
    },
    {
      id: 2,
      title: "task one",
      description: "fix some bug",
    },
    {
      id: 3,
      title: "task one",
      description: "fix some bug",
    },
    {
      id: 4,
      title: "task one",
      description: "fix some bug",
    },
    {
      id: 5,
      title: "task one",
      description: "fix some bug",
    },
  ];

  return (
    <>
      <h1>{current_param.username}</h1> {/* clean h1 */}
      <main className="flex min-h-screen bg-custom-login gap-16 justify-center py-16 px-8">
        <Board user_id={1} cards={cards}></Board>
      </main>
    </>
  );
}
