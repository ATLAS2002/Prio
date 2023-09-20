import Shape from './circle'

const Background = () => {
    return (
        <div className="bg-black h-full relative blur overflow-hidden">
            <Shape color='purple' diameter='15vw' x='5%' brightness='50%' />
            <Shape color='indigo' diameter='15%' x='50%' y='50%' brightness='50%' />
            <Shape color='blue' diameter='10vw' x='97%' y='45%' brightness='20%' />
            <Shape color='magenta' diameter='2vw' x='15%' y='100%' brightness='15%' />
        </div>
    )
}

export default Background