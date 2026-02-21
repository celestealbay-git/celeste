import CardList from "./components/cardlist";

export default function Page() {
    return(
        <main>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                Image Card Gallery
            </h1>

            <CardList />
        </main>
    )
}