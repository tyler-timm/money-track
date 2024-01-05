import Button from './Button.js';

const Header = ({ title }) => {

    const onClick = () => {
        console.log('button was clicked!')
    }

    return (
        <div>
            <header>
                <h1 className='text-4xl'>{title}</h1>
                <br></br>
                <Button
                    bgColor='lightgreen'
                    text='Add Money'
                    onClick={onClick}
                />
                <Button
                    bgColor='indianred'
                    text="Remove Money"
                    onClick={onClick}
                />
            </header>
        </div>
    );
};

export default Header;