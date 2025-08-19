export default function Board (){

    const cards = [
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
        {
            "title": "task one",
            "description": "fix some bug"
        },
    ] 

    return(


    <main className="flex min-h-screen bg-custom-login gap-16 justify-center py-16 px-8">
        <div className="flex flex-1 flex-col max-w-2xl bg-yellow-50 rounded-lg p-4 gap-3">
            {/* <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 bg-sky-300 rounded-xl text-center">TODO</h2> */}
              {/* <h2 className="text-lg font-bold text-gray-700 mb-3 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-center">
                TODO
            </h2> */}
              <h2 className="text-xl font-bold text-gray-800">TODO</h2>
  <span className="w-8 h-1 bg-blue-400 rounded ml-2"></span>
            {/* <div className="flex flex-col justify-center items-center mb-2">
                <h2 className="text-xl font-bold text-gray-800">TODO</h2>
                <span className="w-16 h-1 bg-blue-400 rounded ml-2"></span>
            </div> */}
            <div className="space-y-3">
                {
                    cards.map((card, index)=>(
                    <div key={index} className="bg-white boder border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transform transition-all duration-200">
                        <h3 className="text-base font-semibold text-gray-900">{card["title"]}</h3>
                        <div className="text-sm text-gray-600 mt-1">
                            {card["description"]}
                        </div>
                    </div>
        
                    ))
                }


            </div>

        </div>
        <div className="flex flex-1 max-w-2xl bg-yellow-50 rounded-lg">
            doing 
        </div>
        <div className="flex flex-1 max-w-2xl bg-yellow-50 rounded-lg">
            done
        </div>
    </main>
    )

}