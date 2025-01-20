import { useParams } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const ArticleDetail = () => {
    let params = useParams();
    let id = params.id;
    

    const axiosPublic = useAxiosPublic();

    const { data: articles, refetch } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/articles/${id}`);
            return res.data;
        }
    })


    console.log(articles);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                           src={articles?.image}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl text-left">{ articles?.title }</h2>
                        <p>{ articles?.description }</p>
                    </div>
                </div>
            
        </div>
    );
};

export default ArticleDetail;