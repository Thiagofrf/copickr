

export default function ExampleCards (props: any) {
    return (
        <div className={`flex ${props.flexDirection} px-32 pt-24 mx-auto`}>
            <div className="flex flex-col gap-8 justify-center px-20 w-1/2">
                <h2 className="text-4xl font-black text-fireEngineRed">
                    {props.title}
                </h2>
                <p className="font-light text-spaceCadet">
                    {props.text}
                </p>
                <a href="#" className="flex">
                    {props.linkText} 
                    <span className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </a>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={props.image} alt={props.imageAlt}/>
            </div>
        </div>
    )
}