import { PortableTextComponents } from "@portabletext/react";
export const components:PortableTextComponents = {
    block: {
        h2: ({children})=><h4 className="text-xl font-bold text-accentDarkPrimary">{children}</h4>
    },
    listItem:{
        bullet:({children})=><li className="list-disc marker:text-accentDarkSecondary list-inside ml-4">{children}</li>
    },
    marks:{
        strong:({children})=><strong className="text-bold text-accentDarkSecondary">{children}</strong>
    }
}