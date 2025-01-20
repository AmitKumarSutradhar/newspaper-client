import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const AddArticle = () => {

    const { register, handleSubmit, reset } = useForm();

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    // const state = {
    //     selectedOption: null,
    // };

    // handleChange = (selectedOption) => {
    //     setState({ selectedOption }, () =>
    //         console.log(`Option selected:`, this.state.selectedOption)
    //     );
    // };

    // const { selectedOption } = state;


    return (
        <div className="card bg-base-100 w-1/2 mx-auto my-10 shrink-0 shadow-2xl">
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" {...register('title', { required: true })} placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register('image', { required: true })} className="file-input w-full input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publisher</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>
                    <Select
                        // value={selectedOption}
                        // onChange={handleChange}
                        options={options}
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description', { required: true })} name="" id=""></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddArticle;