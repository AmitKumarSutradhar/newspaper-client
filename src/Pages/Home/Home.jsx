import { useEffect, useState } from "react";
import { Link } from "react-router";
import TrendingArticles from "./TrendingArticles/TrendingArticles";


const Home = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true); 
            document.getElementById('my_modal_3').showModal();
        }, 10000); 

        return () => clearTimeout(timer); 
    }, []);

    const closeModal = () => {
        setShow(false);
        document.getElementById('my_modal_3').close();
    };

    return (
        <div>
            <h2>This is Home page </h2>
            <TrendingArticles></TrendingArticles>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}


            <dialog id="my_modal_3" className="modal">
                <div className="modal-box text-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={ closeModal } type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-3xl">Subscribe to get premium news!</h3>
                    <p className="py-4">Purchase a plans and enjoy excitings updates.</p>
                    <Link to={'/subscription'} className="btn">Visit Plans</Link>
                </div>
            </dialog>

        </div>
    );
};

export default Home;