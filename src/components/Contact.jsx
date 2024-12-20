import React, { useState } from 'react'

function Contact() {
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(name , '  ', email , ' ', message)
  }
  return (
    <div className='fixed w-[100vw] h-[100vh] flex flex-col md:flex-row gap-0 p-1 md:pr-8 bg-black'>
      <div className='w-full md:w-[40%] h-[40%] md:h-[80%] my-auto  rounded-lg '> <img src='https://ik.imagekit.io/sheryians/three.js/three_8IbmQpggex.webp' alt='image' className='w-full h-full object-fit rounded-xl' /> </div>
      <div className=' bg-[#2C2C2C] w-full md:w-[60%] h-[72%] md:h-[80%] my-auto   rounded-lg '>
        <div className='w-full flex justify-between h-[10%]  rounded-xl items-center p-5'>
          <h1 className='text-xl font-bold text-white'>Get In Touch</h1>
          <h1 className='text-2xl font-bold text-white ml-5'>→</h1>
        </div>
        <h1 className='text-5xl font-bold text-white mt-5 ml-5'>Lets get to it together</h1>
        <div>
          <form className='p-6 ' onSubmit={(event)=> handleSubmit(event)} name="contact" netlify="true">
            <h1 className='text-white mt-1 text-xl font-semibold'>Your Good Name</h1>
            <input type='text' id='name' placeholder='You name' value={name} onChange={(event)=> setName(event.target.value)} className='w-full px-4 py-4 rounded-lg bg-black text-white  outline-none mt-2' />

            <h1 className='text-white mt-4 text-xl font-semibold'>Your email </h1>
            <input type='email' id='email' placeholder='example@gmail.com' value={email} onChange={(event)=> setEmail(event.target.value)} className='w-full px-4 py-4 rounded-lg bg-black text-white  outline-none mt-2' />

            <h1 className='text-white mt-4 text-xl font-semibold'>Message for me</h1>
            <textarea type='message' id='message' placeholder='Drop a message for me' value={message} onChange={(event)=> setMessage(event.target.value)} className='w-full px-4 py-4 rounded-lg bg-black text-white  outline-none mt-2' />

            <input type='submit' id='submit' value='Connect ➤' className='text-2xl cursor-pointer font-bold w-full text-center bg-[#24CFA6] py-2 rounded-xl' ></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
