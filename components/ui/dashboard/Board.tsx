"use client";
import { FC } from "react";
import { DashCardItem } from "./DashCard";
import DashColumn from "./DashColumn";

interface BoardPorps {
  user_id: number;
  cards: DashCardItem[];
}
const Board = ({ user_id, cards }: BoardPorps) => {
  console.log(user_id);
  return (
    <>
      <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg p-4 gap-3">
        <DashColumn title="todo" cards={cards}></DashColumn>
      </div>

      <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg p-4 gap-3">
        <DashColumn title="doing" cards={cards}></DashColumn>
      </div>

      <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg p-4 gap-3">
        <DashColumn title="done" cards={cards}></DashColumn>
      </div>
    </>
  );
};

export default Board;
