export default function Layout({children}){
    return(
        <>
            <nav>
                Nav bar
            </nav>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </>
    )
}