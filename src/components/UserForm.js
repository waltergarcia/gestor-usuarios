import useFormulario from '../hooks/useFormulario'
import Input from './Input'
import Button from './Button'

const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastName: '',
        email: ''
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nombre" 
                name="name"
                placeholder="Nombre"
                value={formulario.name} 
                onChange={handleChange}
            />
            <Input 
                label="Apellido" 
                name="lastName"
                placeholder="Apellido"
                value={formulario.lastName} 
                onChange={handleChange}
            />
            <Input 
                label="Correo" 
                name="email"
                placeholder="Correo"
                value={formulario.email} 
                onChange={handleChange}
            />
            <Button>Enviar</Button>
        </form>
    )
}

export default UserForm