import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



const EmailVerify = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    let navigate = useNavigate();
    let from = "/login";

    const onSubmit = async data => {
        console.log("email verify data", data)

        if (data?.email) {
            fetch(`http://95.111.233.59:5000/resend-verification-email/`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    if (res.status === 200) {
                        toast.success("send verify email sucssfully.")
                    }
                    return res.json();


                }
                )
                .then(data => {
                    console.log("email daaaa", data)
                })
            navigate(from, { replace: true });

            // setLoading(false)
        }
    }

    return (
        <div className="flex justify-center mt-5">
            <div class="  card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <h1 className='text-center text-xl'>Email Verify</h1>
                        <div className='form-control w-full max-w-xs pb-2'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("email", { required: "Email Address is required" })}
                                aria-invalid={errors.Email ? "true" : "false"}
                            />

                            {errors.Email?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>}
                        </div>

                        <div className="card-actions justify-center ">
                            <input className="btn btn-primary w-full" type="submit" value="Verify" />
                        </div>

                        <p className="py-2">Back to login <Link className='link link-error' to='/login'>now</Link></p>


                    </form>

                </div>
            </div>
        </div>
    )
}

export default EmailVerify;