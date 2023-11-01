import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import {redirect} from "next/navigation";

export default function Home() {
    redirect('/films');
}
