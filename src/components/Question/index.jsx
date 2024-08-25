import './style.css'

export const Question = (props) => {
    return (
        <div class="card">
            <div class="card-header p-0" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link text-left w-100 p-3" data-toggle="collapse" data-target={'#' + props.idProps} aria-expanded="true" aria-controls={props.titleQuestion}>
                        {props.titleQuestion}
                    </button>
                </h5>
            </div>
            <div id={props.idProps} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    {props.conteudoQuestion}
                </div>
            </div>
        </div>
    )
}