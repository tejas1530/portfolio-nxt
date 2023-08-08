import React from "react";
import { useForm, Resolver } from "react-hook-form";

type Props = {};

type FormValues = {
  name: string;
  subject: string;
  email: string;
  message: string;
};
const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.name ? values : {},
		errors: !values.name
			? {
					name: {
						type: "required",
						message: "This is required.",
					},
          email: {
						type: "required",
						message: "This is required.",
					},subject: {
						type: "required",
						message: "This is required.",
					},message: {
						type: "required",
						message: "This is required.",
					},
			  }
			: {},
	};
};
function Form({ }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({resolver});
  const onSubmit = handleSubmit((formData) => {
    window.location.href=`mailto:contacttotejas15@gmail.com?subject=${formData.subject}&body=Hi , my name is ${formData.name}. ${formData.message}, ${formData.email}`
  });
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col space-y-2 w-fit mx-auto ">
        <div className="flex  sm:space-x-2 flex-col sm:flex-row space-y-2 sm:space-y-0  ">
          <input
            className="contactinp"
            type="text"
            placeholder="Name"
            {...register('name')}
          />
          <input
            className="contactinp"
            type="email"
            placeholder="Email"
            {...register('email')}
          />
        </div>
        <input
          className="contactinp"
          type="text"
          placeholder="Subject"
          {...register('subject')}
        />
        <textarea {...register('email')} className="contactinp" placeholder="Message" />
        <button
          type="submit"
          className="py-5 px-10 rounded-md text-white font-semibold text-lg bg-[#ffe91f7d]"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
