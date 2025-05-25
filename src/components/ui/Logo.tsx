import Link from "next/link";


export default function Logo() {
    return(
        <Link href="/" className="inline-block">
            <div className="text-xl flex font-semibold items-center tracking-tight text-black dark:text-white hover:opacity-80 transition-opacity">
                <h6 className="text-2xl font-light tracking-tight text-black dark:text-white">
                    Lundin
                </h6>
                <h6 className="text-2xl font-black tracking-tight text-black dark:text-white">
                    Vision
                </h6>
            </div>
        </Link>
    )
}