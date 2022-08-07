import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
    return (
        <Textfit className="h-100 mb-2 max-w-340 text-4xl bg-blue-900 pt-2 pr-2 pb-2 border border-10 flex align-center justify-end text-white font-bold">
            {value}
        </Textfit>
    )
}

export default Screen;