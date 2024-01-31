import React from 'react';
import { useForm } from 'react-hook-form';

const Fromfiled = ({text}) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    // console.log(text);
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label">
                <span className="label-text">{text}</span>
            </label>

            <input
                className='input input-bordered w-full max-w-xs'
                {...register(`${text}`, { required: `${text} Address is required` })}
                aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.text && <p role="alert" className='text-red-500'>{errors.text?.message}</p>}
        </div>
    );
};

export default Fromfiled;