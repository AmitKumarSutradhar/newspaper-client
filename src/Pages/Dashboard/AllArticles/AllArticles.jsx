import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaUsers } from "react-icons/fa";


const AllArticles = () => {
    const axiosPublic = useAxiosPublic();

    const { data: articles = [], refetch } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosPublic.get('/articles');
            // console.log(res);
            return res.data;
        }
    })
    return (
        <div>
            <div className="">
                <h2 className='text-4xl text-left p-3'>All Articles</h2>

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Author Email</th>
                            <th>Author Photo</th>
                            <th>Status</th>
                            <th>Publisher</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            articles && articles.map(article =>
                                <tr key={article._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="font-bold">{article.title}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{article.email}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{article.email}</div>
                                    </td>
                                    <td>

                                        {
                                            article?.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(article)}
                                                className="btn btn-lg bg-orange-500">
                                                <FaUsers className="text-white text-2xl"></FaUsers>
                                            </button>
                                        }

                                    </td>
                                    <th>
                                        <button className="btn">Make Admin</button>
                                    </th>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArticles;