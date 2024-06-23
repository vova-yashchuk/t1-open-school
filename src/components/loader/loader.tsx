
import "./loader.scss"

type LoaderProps = {
    height: string;
}

function Loader({height}: LoaderProps): React.JSX.Element {
    return (
        <>
        <div className="container">
          <div className="wrapper" style={{height: `${height}`}}>
            <div className="loader"></div>
          </div>
        </div>

      </>
    )
}

export default Loader;
