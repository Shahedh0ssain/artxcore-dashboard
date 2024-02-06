import { Controller, useForm } from "react-hook-form";

const ControllerDemo = ({ defaultValue, lable, name }) => {

    const {  control  } = useForm();

    // console.log(defaultValue)
    return (
        <>
            <div className='form-control w-full max-w-xs'>
                <label className="label ms-2"> 
                    <span className="label-text">{lable}</span>
                </label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    rules={{ required: 'This field is required' }}
                    render={({ field, fieldState }) => (
                        <>
                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...field} />
                            {fieldState.error && <span>{fieldState.error.message}</span>}
                        </>
                    )}
                />

            </div>
        </>
    )
}

export default ControllerDemo;