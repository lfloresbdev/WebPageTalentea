import { SiWhatsapp } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

function Widgets() {
    return (
        <main className="widgets-flotantes fixed bottom-12 left-4 flex gap-4 z-50">
            <div className="card-wsp w-50 bg-green-500 px-4 py-2 rounded-lg flex items-center gap-3">
                <SiWhatsapp className="size-8 text-white" />
                <div className="flex flex-col">
                    <p className="text-sm text-white font-bold -mb-2">ESCRIBENOS AL</p>
                    <p className="text-2xl text-white font-bold">WHATSAPP</p>
                </div>
            </div>
            <div className="card-llamada w-50 bg-sky-700 px-4 py-2 rounded-lg flex items-center gap-1">
                <div className="relative">
                    <HiOutlineDevicePhoneMobile className="size-8 text-pink-500" />
                    <BsTelephoneFill className="size-3 text-pink-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-white font-bold -mb-2">LLÁMANOS AL</p>
                    <p className="text-2xl text-pink-500 font-bold">987654321</p>
                </div>
            </div>
        </main>
    )
}

export default Widgets;