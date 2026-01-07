
import './App.css'
import formSchema from './types/schema'

function App() {

  return (
    <>
      {
        formSchema.fields.map(field => (
          <div key={field.name}>
            <label>{field.label}</label>
            <input 
              type={field.type} 
              name={field.name} 
              placeholder={field.placeholder} 
              defaultValue={field.defaultValue as string | number} 
              required={field.required}
            />
          </div>
        ))
      }
    </>
  )
}

export default App
