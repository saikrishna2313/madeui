'use client'

import parse from "html-react-parser";

const GeneratedComponent = ({code}) => {
    return (
        <section className="w-full">
            {parse(code)}
        </section>
    )
}

export default GeneratedComponent;