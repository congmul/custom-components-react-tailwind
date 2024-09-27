import React from 'react';

interface cardInfo {
    title: string
    content: string
    img: {
        path: string,
        alt?: string
    }
    link?: {
        linkElement?: React.ReactNode,
        url?: string,
        name?: string
    }[]
}
interface FluidHoverCardType {
    data: cardInfo[]
    option?: {
        /**
         * Set the number as height px(pixel)
         * @Default_Value 250
         */
        height?: number
        /**
         * 
         * @Default_Value black
         */
        textBoxTheme?: 'black' | 'white'
    }
}
const FluidHoverCard:React.FC<FluidHoverCardType> = ({data, option}) => {
  return (
    <div className="h-auto place-items-center">
        <div className="flex w-full max-w-6xl gap-4">
            {
                data.map((cardInfo, index:number) => (
                    <div key={`${cardInfo.title}-${index}`}
                    style={{
                        height: option && (`${option.height}px` || "250px")
                    }}
                    className={`group rounded-2xl w-full relative overflow-hidden flex-1 hover:grow-[1.25] transition-all border`}>
                         <img className="absolute h-full w-full inset-0" src={cardInfo.img.path} alt={cardInfo.img.alt || "card image"}/>
                         <div className={`flex absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t ${option?.textBoxTheme ? `from-${option?.textBoxTheme}/70`: 'from-black/70' } from-30%`}>
                            <div className="w-[70%] pr-2">
                                <div className={`text-2xl leading-tight ${option?.textBoxTheme === "white" ? 'text-black' : "text-white"} font-medium`}>{cardInfo.title}</div>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                                    <div className={`mt-2 ${option?.textBoxTheme === "white" ? 'text-black/85' : "text-white/85"} overflow-hidden opacity-0 group-hover:opacity-100 transition duration-300`}>{cardInfo.content}</div>
                                </div>
                            </div>
                            {
                                cardInfo.link &&
                                    <div className="w-[30%] flex flex-col justify-end items-end px-2">
                                        {
                                            cardInfo.link.map((link, index:number) => {
                                                if(link.linkElement){
                                                    return <>{link.linkElement}</>
                                                }else{
                                                    return <div key={`${link.url}-${index}`} className={`font-medium mt-2 ${option?.textBoxTheme === "white" ? 'text-blue-600' : "text-blue-300"} overflow-hidden hover:underline`}>
                                                        <a href={link.url} target='__blank'>{link.name}</a>
                                                    </div>
                                                }
                                            })
                                        }
                                </div>
                            }
                         </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FluidHoverCard
