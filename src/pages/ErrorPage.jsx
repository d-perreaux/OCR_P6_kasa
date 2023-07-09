import ErrorComponent from "../components/ErrorComponent"

function ErrorPage() {
    document.title = 'Kasa - 404'
    return (
        <ErrorComponent title='404' message="Oups! La page que vous demandez n'existe pas." />
    )
}

export default ErrorPage