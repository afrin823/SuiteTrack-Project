'use client';
import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Image from 'next/image';


const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);

  const onSubmit = async () => {
    if (formRef.current) {
      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          {
            publicKey: publicKey,
          }
        );

        if (result.status === 200) {
          toast.success('Message sent successfully!');
          reset();
        } else {
          toast.error('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
   <div className='bg-gray-300'>
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-300 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold text-gray-800 leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="text-gray-800">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<Image src="https://i.ibb.co.com/QCSmJ8b/360-F-786500258-xh-Zjan-Nvl-Y2s2wxt-ZZ3g-Pwx-BKKUygqsm.jpg" width={300} height={300} alt="" className="p-6 h-52 md:h-64" />
	</div>
  <form
    ref={formRef}
    onSubmit={handleSubmit(onSubmit)}
    className='space-y-6 '
  >
          <h1 className="text-center text-3xl text-gray-800 font-bold">Contact!</h1>
    {/* Name Input */}
    <div className='flex flex-col'>
      {errors.from_name ? (
        <span className='text-red-500 text-start font-semibold ml-1'>
          {errors.from_name.message}
        </span>
      ) : (
        <label
          htmlFor='from_name'
          className='text-left text-lightPrimary font-semibold ml-1'
        >
          Name
        </label>
      )}
      <input
        id='name'
        type='text'
        {...register('from_name', { required: 'Name is required' })}
        className={`p-3 border ${
          errors.from_name ? 'border-red-500' : 'border-gray-500'
        } rounded-md focus:outline-none focus:bg-gray-300 focus:border-gray-400 bg-gray-300 border-gray-400 text-gray-800  mt-1 focus:shadow-glow2`}
        placeholder='Your Name'
      />
    </div>

    {/* Email Input */}
    <div className='flex flex-col'>
      {errors.reply_to ? (
        <span className='text-red-500 text-start font-semibold ml-1'>
          {errors.reply_to.message}
        </span>
      ) : (
        <label
          htmlFor='email'
          className='text-left font-semibold text-lightPrimary ml-1'
        >
          Email
        </label>
      )}
      <input
        id='email'
        type='email'
        {...register('reply_to', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Enter a valid email address',
          },
        })}
        className={`p-3 border ${
          errors.reply_to ? 'border-red-500' : 'border-gray-500'
        } rounded-md focus:outline-none focus:bg-gray-300 text-gray-800 focus:border-gray-300 bg-gray-300 border-gray-300 mt-1 focus:shadow-glow2`}
        placeholder='Your Email'
      />
    </div>

    {/* Message Input */}
    <div className='flex flex-col'>
      {errors.message ? (
        <span className='text-red-500 text-start font-semibold ml-1'>
          {errors.message.message}
        </span>
      ) : (
        <label
          htmlFor='message'
          className='text-left font-semibold text-lightPrimary ml-1'
        >
          Message
        </label>
      )}
      <textarea
        id='message'
        {...register('message', { required: 'Message is required' })}
        rows={4}
        className={`p-3 border ${
          errors.message ? 'border-red-500' : 'border-gray-500'
        } rounded-md focus:outline-none focus:bg-gray-300 focus:border-gray-400 bg-gray-300 border-gray-300 mt-1 text-gray-800  focus:shadow-glow2`}
        placeholder='Write your message here'
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type='submit'
      className='w-full py-3 px-6 bg-gray-900 text-darkPrimary font-semibold rounded-md hover:bg-slate-800 transition duration-300'
    >
      Send
    </button>
  </form>

</div>
   </div>
  );
};
export default ContactPage;

{/* <div className='min-h-screen text-center bg-lightBackground pt-28'>
<div className='max-w-3xl mx-auto text-darkPrimary border-2 border-b-4 border-r-4 border-slate-900 p-8 rounded-3xl shadow-2xl bg-amber-50'>
  <h1 className='text-3xl xl:text-4xl  font-bold text-lightPrimary mb-8'>
    Suit<span className='text-lightSecondary'>Track</span> ⇒ Contact with
    Us
  </h1>

  {/* form */}

  // <form
  //   ref={formRef}
  //   onSubmit={handleSubmit(onSubmit)}
  //   className='space-y-6 '
  // >
  //   {/* Name Input */}
  //   <div className='flex flex-col'>
  //     {errors.from_name ? (
  //       <span className='text-red-500 text-start font-semibold ml-1'>
  //         {errors.from_name.message}
  //       </span>
  //     ) : (
  //       <label
  //         htmlFor='from_name'
  //         className='text-left text-lightPrimary font-semibold ml-1'
  //       >
  //         Name
  //       </label>
  //     )}
  //     <input
  //       id='name'
  //       type='text'
  //       {...register('from_name', { required: 'Name is required' })}
  //       className={`p-3 border ${
  //         errors.from_name ? 'border-red-500' : 'border-gray-600'
  //       } rounded-md focus:outline-none focus:bg-gray-800 focus:border-gray-600 bg-gray-600 border-gray-600 mt-1 focus:shadow-glow2`}
  //       placeholder='Your Name'
  //     />
  //   </div>

  //   {/* Email Input */}
  //   <div className='flex flex-col'>
  //     {errors.reply_to ? (
  //       <span className='text-red-500 text-start font-semibold ml-1'>
  //         {errors.reply_to.message}
  //       </span>
  //     ) : (
  //       <label
  //         htmlFor='email'
  //         className='text-left font-semibold text-lightPrimary ml-1'
  //       >
  //         Email
  //       </label>
  //     )}
  //     <input
  //       id='email'
  //       type='email'
  //       {...register('reply_to', {
  //         required: 'Email is required',
  //         pattern: {
  //           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  //           message: 'Enter a valid email address',
  //         },
  //       })}
  //       className={`p-3 border ${
  //         errors.reply_to ? 'border-red-500' : 'border-gray-600'
  //       } rounded-md focus:outline-none focus:bg-gray-800 focus:border-gray-600 bg-gray-600 border-gray-600 mt-1 focus:shadow-glow2`}
  //       placeholder='Your Email'
  //     />
  //   </div>

  //   {/* Message Input */}
  //   <div className='flex flex-col'>
  //     {errors.message ? (
  //       <span className='text-red-500 text-start font-semibold ml-1'>
  //         {errors.message.message}
  //       </span>
  //     ) : (
  //       <label
  //         htmlFor='message'
  //         className='text-left font-semibold text-lightPrimary ml-1'
  //       >
  //         Message
  //       </label>
  //     )}
  //     <textarea
  //       id='message'
  //       {...register('message', { required: 'Message is required' })}
  //       rows={4}
  //       className={`p-3 border ${
  //         errors.message ? 'border-red-500' : 'border-gray-600'
  //       } rounded-md focus:outline-none focus:bg-gray-800 focus:border-gray-600 bg-gray-600 border-gray-600 mt-1 focus:shadow-glow2`}
  //       placeholder='Write your message here'
  //     ></textarea>
  //   </div>

  //   {/* Submit Button */}
  //   <button
  //     type='submit'
  //     className='w-full py-3 px-6 bg-gray-800 text-darkPrimary font-semibold rounded-md hover:bg-slate-900 transition duration-300'
  //   >
  //     Send
  //   </button>
  // </form>
// </div>
// </div> */}