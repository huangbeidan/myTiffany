import React, { useState } from 'react';
import $ from "jquery";

function LoginPage() {

    const [result, setResult] = useState("");
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

        console.log('666 checking form ', form);
        console.log('666 checking data ',data); // Debug what is being sent

        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: data,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success(data) {
                setResult(data);
            },
        });
    };

    const API_ENDPOINT = process.env.REACT_APP_API_URL || 'http://localhost:4000';

 
    return (
      <div className="login-container" style={{ maxWidth: '360px', margin: '50px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <form
                action={`${API_ENDPOINT}/login.php`}
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <div style={{ marginBottom: '20px' }}>
                <label htmlFor="username" style={{ display: 'block' }}>Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="password" style={{ display: 'block' }}>Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                    required
                   />
                </div>
                
                <br />
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
                  Log In
                </button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}

export default LoginPage;
