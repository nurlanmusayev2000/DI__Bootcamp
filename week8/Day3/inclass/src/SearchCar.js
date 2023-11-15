const SearchCar = (props) => {
    // see App.js below
    let { listCars, handleChange } = props
    return ( <
        select id = "mySelect"
        onChange = { handleChange } >
        <
        option value = "..." > ... < /option> {
            listCars.map(item => ( <
                option value = { item.brand } > { item.brand } < /option>
            ))
        } <
        /select>
    )
}

export default SearchCar;