import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleBlur = (field) => {
        if (field.trim() === '') {
            alert('Please enter a value for the field.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || ! email.trim() || !message.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        // Submit logic to add to database still needs to be set up
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => handleBlur(name)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleBlur(email)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => handleBlur(message)}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
