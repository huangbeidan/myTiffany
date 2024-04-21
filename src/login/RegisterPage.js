import React, { useState } from 'react';
import $ from "jquery";

function RegisterPage() {
    const [result, setResult] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct the data string manually as we are manually handling the input data
        const data = `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

        console.log('Register Form data: ', data); // Debug what is being sent

        $.ajax({
            type: "POST",
            url: "http://localhost:4000/register.php", // Change the URL to your registration handling URL
            data: data,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success(data) {
                setResult(data);
            },
            error(jqXHR, textStatus, errorThrown) {
                setResult(`Error: ${textStatus}, ${errorThrown}`);
            }
        });
    };

    return (
        <div className="register-container" style={{ maxWidth: '360px', margin: '50px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <form onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'center' }}>Register</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                        required
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Register
                </button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}

export default RegisterPage;
