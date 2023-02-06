type FormProps = {
  state: {
    title: string
  }
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Form({ state, onChange }: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(state.title)
  }

  return (
    <form className='flex justify-center' onSubmit={handleSubmit}>
      <div className=' bg-lime-100 rounded p-5'>
        <input className='block' onChange={onChange} value={state.title} type='text' />
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default Form
