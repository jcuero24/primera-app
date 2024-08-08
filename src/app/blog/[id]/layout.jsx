import Image from "next/image";

export default function Layout({children}){
    return(
        <>
            <Image src="/img/imagen1.jpg" width={150} height={150}/>
            <main>
                {children}
            </main>
        </>
    )
}