import React from "react"

// Components
import ThemeButton from "../base/Button"

import { useForm, useFormState } from "react-hook-form"

const Form = () => {
  const { register, handleSubmit, control } = useForm()

  const { errors } = useFormState()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <input
          id="name"
          {...register("name", { required: true, pattern: /[A-Za-z]/ })}
          type="text"
          className="peer h-5 p-1 w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent"
          placeholder="Naam"
        />
        <label
          htmlFor="name"
          className="absolute left-1 text-sm top-0 
          peer-placeholder-shown:text-base text-gray 
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Naam
        </label>
      </div>
      <div className="relative mt-1">
        <input
          id="firstname"
          {...register("firstname")}
          type="text"
          className="peer h-5 p-1 w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent"
          placeholder="Voornaam"
        />
        <label
          htmlFor="firstname"
          className="absolute left-1 text-sm top-0 text-gray  
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Voornaam
        </label>
      </div>
      <div className="relative mt-1">
        <input
          id="phone"
          {...register("phone")}
          type="text"
          className="peer h-5 p-1 w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent"
          placeholder="Telefoon Nummer"
        />
        <label
          htmlFor="phone"
          className="absolute left-1 text-sm top-0  text-gray 
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Telefoon Nummer
        </label>
      </div>
      <div className="relative mt-1">
        <input
          id="email"
          {...register("email")}
          type="email"
          className="peer  h-5 p-1 w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent"
          placeholder="Email address"
        />
        <label
          htmlFor="email"
          className="absolute text-gray  left-1 text-sm top-0 
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Email address
        </label>
      </div>
      <div className="relative mt-1">
        <textarea
          id="message"
          {...register("message")}
          className="peer h-10 p-1 pt-1.5 leading-none w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent"
          placeholder="Bericht"
        />
        <label
          htmlFor="message"
          className="absolute left-1 text-sm top-0 text-gray 
            peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Bericht
        </label>
      </div>
      <ThemeButton
        text="Verstuur"
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white mt-2"
      />
    </form>
  )
}

export default Form
