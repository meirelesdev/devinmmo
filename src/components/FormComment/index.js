import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup'
import * as C from './Styles'

const initValues = {
    idGame: '',
    name: '',
    email: '',
    comment: '',
    votes: 0,
}

const FormComment = ({idGame, handleOnSubmit}) => {    
    return (
        <Formik
            validationSchema={Yup.object().shape({
                name: Yup
                    .string()
                    .required("Ei, Você esqueceu do nome."),
                email: Yup
                    .string()
                    .email("Ei, Esse formato de e-mail é invalido.")
                    .required("Ei, Você esqueceu do e-mail."),
                comment: Yup.string().required("Ei, Você esqueceu do comentário.")
            })}
            initialValues={{...initValues, idGame}}
            onSubmit={handleOnSubmit}
        >
            {(formProps) => {
                const { errors } = formProps
                return (
                    <Form autoComplete="off">
                        <C.ContainerForm>
                        <Field
                                component={C.TextInput}
                                id="idGame"
                                name="idGame"
                                type="hidden"
                                value={formProps.values.idGame}
                                {...formProps.field}
                            />
                            <Field
                                component={C.TextInput}
                                className={!!errors.name ? 'error' : ''}
                                id="name"
                                name="name"
                                type="text"
                                onChange={formProps.handleChange}
                                value={formProps.values.name}
                                placeholder="NOME"
                                {...formProps.field}
                            />
                            <C.Error>
                                <ErrorMessage name="name" />
                            </C.Error>
                        </C.ContainerForm>
                        <C.ContainerForm>
                            <Field
                                component={C.TextInput}
                                className={!!errors.email ? 'error' : ''}
                                id="email"
                                name="email"
                                type="email"
                                onChange={formProps.handleChange}
                                value={formProps.values.email}
                                placeholder="E-MAIL"
                                {...formProps.field}
                            />
                            <C.Error>
                                <ErrorMessage name="email" />
                            </C.Error>
                        </C.ContainerForm>
                        <C.ContainerForm>
                            <Field
                                component={C.TextArea}
                                className={!!errors.comment ? 'error' : ''}
                                id="comment"
                                name="comment"
                                onChange={formProps.handleChange}
                                placeholder="COMENTÁRIO"
                                value={formProps.values.comment}
                                {...formProps.field}
                            />
                            <C.Error>
                                <ErrorMessage name="comment" />
                            </C.Error>
                        </C.ContainerForm>
                        <C.ContainerForm>
                            <C.Button type="submit">Salvar Comentário</C.Button>
                        </C.ContainerForm>
                    </Form>
                )
            }
            }
        </Formik>
    );
};
export default FormComment