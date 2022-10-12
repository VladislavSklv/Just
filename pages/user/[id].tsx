import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const UserPage = () => {
    const router = useRouter();

    return (
        <>
            <Navbar/>
            <div className="container">
                Страница пользователя {router.query.id}
            </div>
        </>
    );
};

export default UserPage;