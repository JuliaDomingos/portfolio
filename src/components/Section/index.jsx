import './style.css'

export const Section = (props) => {
    return (
        <section className={props.content}>
            {props.conteudo}
        </section>
    )
}

// function Section(props) {
//     return (
//         <section className={props.content}>
//             {props.conteudo}
//         </section>
//     )
// }

// export default Section