type ButtonType = {
    display: 'block-full' | 'block-normal' | 'inline-left' | 'inline-right'
    type: 'filled' | 'outlined'
    text: string
    onClick: (e: Event) => void
}

export default ButtonType