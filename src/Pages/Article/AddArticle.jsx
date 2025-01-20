import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const AddArticle = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

    const { data: publishers = [], refetch } = useQuery({
        queryKey: ['publishers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/publishers');
            return res.data;
        }
    })

    const handleChange = (selected) => {
        setSelectedOption(selected);
        setValue('tags', selected); 
    };


    const handleAddArticle = async (data) => {
        // console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const articleInfo = {
                title: data.title,
                publisher: data.publisher,
                tags: data.tags,
                description: data.description,
                image: res.data.data.display_url,
                status: "pending"
            }

            const articleRes = await axiosPublic.post('/articles', articleInfo);
            console.log(articleRes.data)

            if (articleRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the articles.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };


    return (
        <div className="card bg-base-100 w-1/2 mx-auto my-10 shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleAddArticle)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" {...register('title', { required: true })} placeholder="Title" className="input input-bordered" required />
                    {errors.title?.type === "required" && (
                            <p role="alert">Title is required</p>
                        )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register('image', { required: true })} className="file-input w-full input-bordered" />
                    {errors.image?.type === "required" && (
                            <p role="alert">Image is required</p>
                        )}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publisher</span>
                    </label>
                    <select defaultValue="default" {...register('publisher', { required: true })} name='publisher' className="select select-bordered w-full">
                        <option value="default" disabled>Select Option</option>
                        {
                            publishers.map(item => <option key={item._id} value={item._id}>{item.name}</option>)
                        }
                    </select>
                    {errors.category?.type === "required" && (
                            <p role="alert">Publisher is required</p>
                        )}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>
                    <Select
                        name='tags'
                        value={selectedOption}
                        onChange={handleChange}
                        isMulti
                        options={options}
                    />
                      {errors.tags && <p role="alert">Tags is required</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description', { required: true })} name="description" id=""></textarea>
                    {errors.description?.type === "required" && (
                            <p role="alert">Tags is required</p>
                        )}
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Article</button>
                </div>
            </form>
        </div>
    );
};

export default AddArticle;