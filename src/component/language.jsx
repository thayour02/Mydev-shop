




export default function Tech() {
    const data = [
        {
            title:"Language",
            contents:["Javascript", "Nodejs", "React", "Typescript"]
        },
        {
            title:"Software",
            contents:["Vscode"]
        },
        {
            title:"Database",
            contents:["MongoDb"]
        }
    ]
    return (
        <div className="grid lg:grid-cols-2 mx-4 sm:grid-cols-1 gap-20 relative mt-20" id="languages" data-aos="fade">
            {
                data?.map(item=>(
                    <div key={item.title} className="">
                        <h2 className="text-[1.3rem]">{item.title}</h2>
                        <ul className="flex flex-wrap:wrap p-[10px] gap-2 bg-[rgba(0,0,0,0.08)]">
                            {
                                item.contents.map(content =>(
                                    <li className="text-zinc-400 border-l-2 pl-1 border-l-gray-700 hover:underline cursor-pointer" key={content}> {content}</li>
                                ))

                            }
                        </ul>
                    </div>
                ))
            }
           
        </div>
    )
}