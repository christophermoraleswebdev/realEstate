import { useForm } from "react-hook-form"

const HeroForm = () => {
      const { 
            register, 
            handleSubmit, 
            formState: { errors } } = useForm()

      const onSubmit = ( data ) => console.log(data)

  return (
      <>
            Hero Form
      </>
  )
}

export default HeroForm