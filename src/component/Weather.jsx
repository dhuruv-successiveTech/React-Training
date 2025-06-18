export const Weather = ({temperature}) => {
    return (
        temperature>25 ? (
            <div>
                <p>It's sunny today!</p>
            </div>
        ):
        (
            <div>
                <p>It's cold today!</p>
            </div>
        )
    )
}