interface CircleProps {
    color: string,
    diameter: string,
    [key: string] : string
}

const Circle = ({ color, diameter, x, y, brightness, ...props } : CircleProps) => {
    return (
        <div style={{
            backgroundColor: color,
            height: diameter,
            width: diameter,
            borderRadius: '100%', 
            transform: `translate(-50%, -50%)`,
            position: 'absolute',
            top: y,
            left: x,
            boxShadow: `0 0 150px 130px ${color}`,
            opacity: brightness
        }} {...props} ></div>
    )
}

export default Circle