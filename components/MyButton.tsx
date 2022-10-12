interface myButtonProps{
    children: React.ReactNode;
}

const MyButton = ({children}: myButtonProps) => {
    return (
        <>
            <button>{children}</button>
            <style jsx>{`
                button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px 6px;
                    border: 2px solid $main-color;
                    border-radius: 4px;
                    background-color: inherit;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 700;
                    color: $main-color;
                    transition: opacity 0.2s;
                }
                button:hover{
                    opacity: 0.7;
                }
            `}</style>
        </>
    );
};

export default MyButton;