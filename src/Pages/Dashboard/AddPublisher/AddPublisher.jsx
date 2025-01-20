import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPublisher = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const handleAddPublisher = async (data) => {

        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const publishersInfo = {
                name: data.name,
                image: res.data.data.display_url
            }
          
            const publishersRes = await axiosPublic.post('/publishers', publishersInfo);

            // console.log(publishersRes.data);

            if(publishersRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the publishers list.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        // console.log( 'with image url', res.data);
    }

    return (
        <div className="p-10">
            <div className="card bg-base-100 shrink-0 shadow-2xl">
            <h2>Add publishers</h2>
                <form onSubmit={handleSubmit(handleAddPublisher)} className="card-body">
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Publisher name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Publisher Name" className="input input-bordered" />
                        {errors.name?.type === "required" && (
                            <p role="alert">Publisher name is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Logo</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} name="image" placeholder="Logo" className="input input-bordered" />
                        {errors.image?.type === "required" && (
                            <p role="alert">Photo is required</p>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Add Publisher" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddPublisher;