import { FC } from "react"
import DashCard, { DashCardItem } from "./DashCard"
interface DashColumnProps{
    title: string,
    cards: DashCardItem[]
}

const DashColumn: FC<DashColumnProps> = ({title, cards})=>{
    return (
        <>
            <h2 className="text-lg font-bold text-gray-700 mb-3 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">
                {title}
            </h2>

            <div className="space-y-3">
                {
                    cards.map((card)=>(
                        <DashCard key={card.id} card={card}/>
    
                    ))
                }
            </div>
        </>

    )

}

export default DashColumn