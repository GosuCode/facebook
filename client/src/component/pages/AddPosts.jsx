import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required.'),
    description: yup.string().required('Description is required.'),
    username: yup.string().required('Username is required.')
})
const AddPosts = () => {


    const formData = [
        {
            name: 'title',
        },
        {
            name: 'description',
        },
        {
            name: 'username',
        },
    ]

    const initialValues = {
        title: '',
        description: '',
        username: ''
    }

    const onSubmit = (data) => {
        axios.post("http://localhost:4000/posts", data)
            .then((res) => {
                console.log(res.data);
            })
    }


    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                <Form>
                    {
                        formData.map((val, i) => {
                            return (
                                <div key={i}>
                                    <label htmlFor={val.name}>{val.name}</label>
                                    <Field name={val.name} autoComplete='off' placeholder='enter your name' />
                                    <ErrorMessage
                                        name={val.name}
                                        className='text-red-600'
                                        component='div' />
                                </div>
                            )
                        })
                    }
                    <button type='submit'>Post</button>

                </Form>
            </Formik>
        </>
    )
}

export default AddPosts
