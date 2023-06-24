import { useRouter } from "next/router";

export default function Detail() {
    const { query: { id, title } } = useRouter();
    return (
        <div>
            <h4>{title || "Loading..."}</h4>
        </div>
    );
}