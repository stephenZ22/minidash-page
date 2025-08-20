import DashCard,{DashCardItem} from "@/components/ui/dashboard/DashCard"
import DashColumn from "@/components/ui/dashboard/DashColumn"
export default function Board (){

    const cards: DashCardItem[] = [
        {
            "id":1,
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "id":2,
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "id":3,
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "id":4,
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "id":5,
            "title": "task one",
            "description": "fix some bug"
        }
    ] 

    return(


    <main className="flex min-h-screen bg-custom-login gap-16 justify-center py-16 px-8">
        <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg p-4 gap-3">
            <DashColumn title="todo" cards={cards}></DashColumn>
        </div>
  
        <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg p-4 gap-3">
            <DashColumn title="doing" cards={cards}></DashColumn>
        </div>
  
        <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg p-4 gap-3">
            <DashColumn title="done" cards={cards}></DashColumn>
        </div>
  
    </main>
    )

}